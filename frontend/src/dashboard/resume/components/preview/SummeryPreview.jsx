import React from 'react'

function SummeryPreview({ resumeInfo }) {
  if (!resumeInfo?.summery) return null
  const isBlackFont = resumeInfo?.themeFontColor === 'black'
  const titleColor = isBlackFont ? '#000000' : resumeInfo?.themeColor

  return (
    <div className="my-4">
      <h2
        className="text-center text-sm font-bold uppercase tracking-wide"
        style={{ color: titleColor }}
      >
        Professional Summary
      </h2>
      <hr
        className="my-2 border-[1.5px]"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
      <p className={`text-xs leading-relaxed ${isBlackFont ? 'text-white' : 'text-gray-700'}`}>{resumeInfo?.summery}</p>
    </div>
  )
}

export default SummeryPreview
