const stripHtml = (html) =>
  (html || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export function serializeResumeToText(resume) {
  if (!resume) return '';

  const lines = [];

  const name = [resume.firstName, resume.lastName].filter(Boolean).join(' ');
  if (name) lines.push(name);
  if (resume.jobTitle) lines.push(`Target Role: ${resume.jobTitle}`);
  if (resume.email) lines.push(`Email: ${resume.email}`);
  if (resume.phone) lines.push(`Phone: ${resume.phone}`);
  if (resume.address) lines.push(`Location: ${resume.address}`);
  if (resume.linkedinUrl) lines.push(`LinkedIn: ${resume.linkedinUrl}`);
  if (resume.githubUrl) lines.push(`GitHub: ${resume.githubUrl}`);
  if (resume.portfolioUrl) lines.push(`Portfolio: ${resume.portfolioUrl}`);

  if (resume.summery) {
    lines.push('', 'PROFESSIONAL SUMMARY', resume.summery);
  }

  if (resume.achievements) {
    lines.push('', 'ACHIEVEMENTS', resume.achievements);
  }

  if (resume.Experience?.length) {
    lines.push('', 'WORK EXPERIENCE');
    resume.Experience.forEach((exp) => {
      lines.push(
        `- ${exp.title || 'Role'} at ${exp.companyName || 'Company'} (${exp.startDate || '?'} – ${exp.endDate || 'Present'})`
      );
      const summary = stripHtml(exp.workSummery);
      if (summary) lines.push(`  ${summary}`);
    });
  }

  if (resume.education?.length) {
    lines.push('', 'EDUCATION');
    resume.education.forEach((edu) => {
      lines.push(
        `- ${edu.degree || ''} in ${edu.major || ''}, ${edu.universityName || ''} (${edu.startDate || '?'} – ${edu.endDate || '?'})`
      );
      if (edu.description) lines.push(`  ${edu.description}`);
    });
  }

  if (resume.skills?.length) {
    lines.push('', 'SKILLS', resume.skills.map((s) => s.name).filter(Boolean).join(', '));
  }

  return lines.join('\n');
}
