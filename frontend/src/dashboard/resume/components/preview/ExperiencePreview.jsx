import React from 'react'

function ExperiencePreview({resumeInfo}) {
  const isBlackFont = resumeInfo?.themeFontColor === 'black'
  const titleColor = isBlackFont ? '#000000' : resumeInfo?.themeColor

  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'
        style={{
            color:titleColor
        }}
        >Professional Experience</h2>
        <hr style={{
            borderColor:resumeInfo?.themeColor
        }} />

        {resumeInfo?.Experience?.map((experience,index)=>(
            <div key={index} className='my-5'>
                <h2 className='text-sm font-bold'
                 style={{
                    color:titleColor
                }}>{experience?.title}</h2>
                <h2 className={`text-xs flex justify-between ${isBlackFont ? 'text-black font-semibold' : ''}`}>{experience?.companyName}, 
                {experience?.city}, 
                {experience?.state}
                <span>{experience?.startDate} To {experience?.currentlyWorking?'Present':experience.endDate} </span>
                </h2>
                <div className={`text-xs my-2 ${isBlackFont ? 'text-black' : ''}`} dangerouslySetInnerHTML={{__html:experience?.workSummery}} />
            </div>
        ))}
    </div>
  )
}

export default ExperiencePreview