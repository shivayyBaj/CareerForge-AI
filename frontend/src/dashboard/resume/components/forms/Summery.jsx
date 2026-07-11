import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi'
import { Brain, LoaderCircle } from 'lucide-react'
import { toast } from 'sonner'
import { AIChatSession } from './../../../../../service/AIModal'

const prompt = `
Job Title: {jobTitle}

Generate exactly 3 professional resume summaries.

Return ONLY valid JSON.

Format:
[
  {
    "experience_level":"Fresher",
    "summary":"..."
  },
  {
    "experience_level":"Mid Level",
    "summary":"..."
  },
  {
    "experience_level":"Experienced",
    "summary":"..."
  }
]
`;
function Summery({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)

  const [summery, setSummery] = useState('')
  const [loading, setLoading] = useState(false)
  const params = useParams()

  const [aiGeneratedSummeryList, setAiGenerateSummeryList] = useState([])

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (resumeInfo && !isLoaded) {
      setSummery(resumeInfo?.summery || '')
      setIsLoaded(true)
    }
  }, [resumeInfo, isLoaded])

  const updateSummery = (val) => {
    setSummery(val)
    setResumeInfo(prev => ({
      ...prev,
      summery: val,
    }))
  }

  const GenerateSummeryFromAI = async () => {
    try {
      setLoading(true)

      const PROMPT = prompt.replace(
        '{jobTitle}',
        resumeInfo?.jobTitle || 'Software Engineer'
      )

     const result = await AIChatSession.sendMessage(PROMPT);

let responseText = result?.response?.text();

try {
  const cleanedText = responseText
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  console.log("AI Response:", cleanedText);

  const parsed = JSON.parse(cleanedText);

  setAiGenerateSummeryList(parsed || []);
} catch (err) {
  console.log("AI JSON Parse Error:", err);
  console.log("Raw Response:", responseText);

  setAiGenerateSummeryList([]);
}
    } catch (err) {
      console.log(err)
      toast('Failed to generate summary')
    } finally {
      setLoading(false)
    }
  }

  const onSave = (e) => {
    e.preventDefault()

    setLoading(true)

    const data = {
      data: {
        summery: summery,
      },
    }

    GlobalApi.UpdateResumeDetail(params?.resumeId, data)
      .then((resp) => {
        console.log(resp)
        enabledNext(true)
        setLoading(false)
        toast('Details updated')
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  return (
    <div>
      <div className='premium-card mt-10 border-t-2 border-t-primary p-5'>
        <h2 className='font-bold text-lg'>Summary</h2>
        <p>Add Summary for your job title</p>

        <form className='mt-7' onSubmit={onSave}>
          <div className='flex justify-between items-end'>
            <label>Add Summary</label>

            <Button
              variant='outline'
              type='button'
              size='sm'
              className='border-primary text-primary flex gap-2'
              onClick={GenerateSummeryFromAI}
            >
              <Brain className='h-4 w-4' />
              Generate from AI
            </Button>
          </div>

          <Textarea
            className='mt-5'
            required
            value={summery}
            onChange={(e) => updateSummery(e.target.value)}
          />

          <div className='mt-2 flex justify-end'>
            <Button type='submit' disabled={loading}>
              {loading ? (
                <LoaderCircle className='animate-spin' />
              ) : (
                'Save'
              )}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedSummeryList?.length > 0 && (
        <div className='my-5'>
          <h2 className='font-bold text-lg'>Suggestions</h2>

          {aiGeneratedSummeryList.map((item, index) => (
            <div
              key={index}
              className='p-5 shadow-lg my-4 rounded-lg cursor-pointer'
              onClick={() => updateSummery(item?.summary || '')}
            >
              <h2 className='font-bold my-1 text-primary'>
                Level: {item?.experience_level}
              </h2>

              <p>{item?.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Summery