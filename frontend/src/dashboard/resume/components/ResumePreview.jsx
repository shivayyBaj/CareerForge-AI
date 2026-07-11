import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummeryPreview from './preview/SummeryPreview'
import ExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'
import AchievementsPreview from './preview/AchievementsPreview'

function ResumePreview() {
  const { resumeInfo } = useContext(ResumeInfoContext)

  return (
    <div
      className="resume-preview-container border-t-[20px] p-8 md:p-12"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <PersonalDetailPreview resumeInfo={resumeInfo} />
      {resumeInfo?.summery && <SummeryPreview resumeInfo={resumeInfo} />}
      {resumeInfo?.Experience?.length > 0 && <ExperiencePreview resumeInfo={resumeInfo} />}
      {resumeInfo?.education?.length > 0 && <EducationalPreview resumeInfo={resumeInfo} />}
      <AchievementsPreview resumeInfo={resumeInfo} />
      {resumeInfo?.skills?.length > 0 && <SkillsPreview resumeInfo={resumeInfo} />}
    </div>
  )
}

export default ResumePreview
