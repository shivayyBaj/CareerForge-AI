import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { LoaderCircle } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from 'sonner'

function PersonalDetail({ enabledNext }) {
  const params = useParams()
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)

  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (resumeInfo && !isLoaded) {
      setFormData({
        firstName: resumeInfo?.firstName || '',
        lastName: resumeInfo?.lastName || '',
        jobTitle: resumeInfo?.jobTitle || '',
        address: resumeInfo?.address || '',
        phone: resumeInfo?.phone || '',
        email: resumeInfo?.email || '',
        linkedinUrl: resumeInfo?.linkedinUrl || '',
        githubUrl: resumeInfo?.githubUrl || '',
        portfolioUrl: resumeInfo?.portfolioUrl || '',
        achievements: resumeInfo?.achievements || '',
      })
      setIsLoaded(true)
    }
  }, [resumeInfo, isLoaded])

  const handleInputChange = (e) => {
    enabledNext(false)

    const { name, value } = e.target

    const updatedData = {
      ...formData,
      [name]: value,
    }

    setFormData(updatedData)

    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    })
  }

  const onSave = (e) => {
    e.preventDefault()
    setLoading(true)

    const data = {
      data: formData,
    }

    GlobalApi.UpdateResumeDetail(params?.resumeId, data)
      .then((result) => {
        console.log('[PersonalDetail] Save result:', result);
        if (result?.data?.data) {
          enabledNext(true)
          setLoading(false)
          toast('Details updated')
        } else {
          setLoading(false)
          toast.error('Save failed — Supabase returned no data. Check console for errors.')
        }
      })
      .catch((error) => {
        console.error('[PersonalDetail] Save error:', error)
        setLoading(false)
        toast.error('Failed to save details: ' + (error.message || error))
      })
  }

  return (
    <div className="premium-card mt-10 border-t-2 border-t-primary p-5">
      <h2 className="text-lg font-semibold">Personal Details</h2>
      <p className="text-sm text-muted-foreground">
        ATS-friendly contact info — include LinkedIn, GitHub, and portfolio links
      </p>

      <form onSubmit={onSave}>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              value={formData.firstName || ''}
              required
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              value={formData.lastName || ''}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              value={formData.jobTitle || ''}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm">Location / Address</label>
            <Input
              name="address"
              value={formData.address || ''}
              required
              placeholder="City, State, Country"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              value={formData.phone || ''}
              required
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              type="email"
              value={formData.email || ''}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm">LinkedIn Profile URL</label>
            <Input
              name="linkedinUrl"
              value={formData.linkedinUrl || ''}
              placeholder="https://linkedin.com/in/yourprofile"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm">GitHub Profile URL</label>
            <Input
              name="githubUrl"
              value={formData.githubUrl || ''}
              placeholder="https://github.com/yourusername"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm">Portfolio / Website URL</label>
            <Input
              name="portfolioUrl"
              value={formData.portfolioUrl || ''}
              placeholder="https://yourportfolio.com"
              onChange={handleInputChange}
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm">Personal Achievements</label>
            <Textarea
              name="achievements"
              value={formData.achievements || ''}
              placeholder="Awards, certifications, hackathon wins, publications — one per line"
              rows={4}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default PersonalDetail
