import React from 'react'

function EducationalPreview({resumeInfo}) {
  const isBlackFont = resumeInfo?.themeFontColor === 'black'
  const titleColor = isBlackFont ? '#000000' : resumeInfo?.themeColor

  return (
    <div className='my-6'>
    <h2 className='text-center font-bold text-sm mb-2'
    style={{
        color:titleColor
    }}
    >Education</h2>
    <hr style={{
        borderColor:resumeInfo?.themeColor
    }} />

    {resumeInfo?.education.map((education,index)=>(
        <div key={index} className='my-5'>
            <h2 className='text-sm font-bold'
                style={{
                    color:titleColor
                }}
            >{education.universityName}</h2>
            <h2 className={`text-xs flex justify-between ${isBlackFont ? 'text-white font-semibold' : ''}`}>{education?.degree} in {education?.major}
            <span>{education?.startDate} - {education?.endDate}</span>
            </h2>
            <p className={`text-xs my-2 ${isBlackFont ? 'text-white' : 'text-gray-700'}`}>
                {education?.description}
            </p>
        </div>
    ))}

    </div>
  )
}

export default EducationalPreview