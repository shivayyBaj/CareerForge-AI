import React from 'react'

function AchievementsPreview({ resumeInfo }) {
  if (!resumeInfo?.achievements?.trim()) return null
  const isBlackFont = resumeInfo?.themeFontColor === 'black'
  const titleColor = isBlackFont ? '#000000' : resumeInfo?.themeColor

  const items = resumeInfo.achievements
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

  return (
    <div className="my-4">
      <h2
        className="text-center text-sm font-bold uppercase tracking-wide"
        style={{ color: titleColor }}
      >
        Achievements
      </h2>
      <hr
        className="my-2 border-[1.5px]"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
      <ul className="ml-4 list-disc space-y-1">
        {items.map((item, index) => (
          <li key={index} className={`text-xs ${isBlackFont ? 'text-black' : 'text-gray-700'}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AchievementsPreview
