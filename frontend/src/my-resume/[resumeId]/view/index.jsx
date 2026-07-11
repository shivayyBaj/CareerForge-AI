import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import ResumePreview from '@/dashboard/resume/components/ResumePreview'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../service/GlobalApi'
import { RWebShare } from 'react-web-share'

function ViewResume() {
  const [resumeInfo, setResumeInfo] = useState()
  const { resumeId } = useParams()

  useEffect(() => {
    GetResumeInfo()
  }, [])

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then((resp) => {
      setResumeInfo(resp.data.data)
    })
  }

  const HandleDownload = () => {
    window.print()
  }

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print" className="min-h-screen">
        <Header />

        <div className="mx-auto max-w-4xl px-6 py-10 md:px-12">
          <h2 className="text-center text-2xl font-semibold">
            Your Resume is Ready
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            Download as PDF or share your unique resume link with recruiters
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button onClick={HandleDownload}>Download PDF</Button>
            <RWebShare
              data={{
                text: 'Hello, please view my resume at the link below.',
                url: import.meta.env.VITE_BASE_URL + '/my-resume/' + resumeId + '/view',
                title: resumeInfo?.firstName + ' ' + resumeInfo?.lastName + ' — Resume',
              }}
              onClick={() => console.log('shared successfully!')}
            >
              <Button variant="outline">Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-16 md:px-12">
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  )
}

export default ViewResume
