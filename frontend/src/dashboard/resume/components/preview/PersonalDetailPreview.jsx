import React from 'react'

function formatLinkLabel(url) {
  if (!url) return ''
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`)
    if (parsed.hostname.includes('linkedin')) return 'LinkedIn'
    if (parsed.hostname.includes('github')) return 'GitHub'
    return parsed.hostname.replace('www.', '')
  } catch {
    return url
  }
}

function ContactItem({ value, label, isBlackFont }) {
  if (!value) return null
  const isUrl = value.startsWith('http') || value.includes('.com') || value.includes('.io')

  return (
    <span className={`inline-flex items-center gap-1 text-[10px] ${isBlackFont ? 'text-black' : 'text-gray-700'}`}>
      {isUrl ? (
        <a href={value.startsWith('http') ? value : `https://${value}`} className="hover:underline">
          {label || formatLinkLabel(value)}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </span>
  )
}

function PersonalDetailPreview({ resumeInfo }) {
  const isBlackFont = resumeInfo?.themeFontColor === 'black'
  const titleColor = isBlackFont ? '#000000' : resumeInfo?.themeColor

  const contactItems = [
    { value: resumeInfo?.address },
    { value: resumeInfo?.phone },
    { value: resumeInfo?.email },
    { value: resumeInfo?.linkedinUrl, label: 'LinkedIn' },
    { value: resumeInfo?.githubUrl, label: 'GitHub' },
    { value: resumeInfo?.portfolioUrl, label: 'Portfolio' },
  ].filter((item) => item.value)

  return (
    <div>
      <h2
        className="text-center text-xl font-bold uppercase tracking-wide"
        style={{ color: titleColor }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>

      {resumeInfo?.jobTitle && (
        <p className={`mt-1 text-center text-sm font-medium ${isBlackFont ? 'text-black' : 'text-gray-700'}`}>
          {resumeInfo?.jobTitle}
        </p>
      )}

      {contactItems.length > 0 && (
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          {contactItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-[10px] text-gray-400">|</span>}
              <ContactItem value={item.value} label={item.label} isBlackFont={isBlackFont} />
            </React.Fragment>
          ))}
        </div>
      )}

      <hr
        className="my-3 border-[1.5px]"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
    </div>
  )
}

export default PersonalDetailPreview
