"use client"

import { Button } from "@/components/ui/button"

export default function ResumePreview({ data, onEdit }: { data: any; onEdit: () => void }) {
  const generateHTML = () => {
    const edu = data.education
    const personalInfo = data.personalInfo

    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${personalInfo.fullName} — Resume</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html, body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #111827;
      background: white;
      height: 100%;
    }
    
    @page {
      size: A4;
      margin: 0;
    }
    
    .resume {
      width: 210mm;
      height: 297mm;
      background: white;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    
    .header {
      display: flex;
      gap: 28px;
      padding: 24px 28px;
      align-items: flex-start;
      border-bottom: 1px solid #e5e7eb;
      flex-shrink: 0;
    }
    
    .header-content {
      flex: 1;
    }
    
    .name {
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
      color: #000;
    }
    
    .education-line {
      color: #666;
      font-size: 12px;
      margin-bottom: 8px;
    }
    
    .contact-info {
      font-size: 11px;
      color: #666;
      line-height: 1.5;
    }
    
    .contact-info a {
      color: #0b6cf0;
      text-decoration: none;
    }
    
    .photo {
      width: 100px;
      height: 100px;
      border-radius: 8px;
      background: #e5e7eb;
      background-size: cover;
      background-position: center;
      border: 2px solid #d1d5db;
      flex-shrink: 0;
    }
    
    .content {
      flex: 1;
      padding: 20px 28px;
      overflow-y: auto;
    }
    
    section {
      margin-bottom: 18px;
    }
    
    h2 {
      font-size: 11px;
      font-weight: 800;
      margin: 0 0 12px 0;
      color: #0b6cf0;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .job {
      margin-bottom: 14px;
    }
    
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      margin-bottom: 2px;
    }
    
    .job-title {
      font-size: 14px;
      font-weight: 600;
      color: #000;
    }
    
    .job-duration {
      font-size: 11px;
      color: #666;
      white-space: nowrap;
      text-align: right;
    }
    
    .job-meta {
      font-size: 11px;
      color: #666;
      margin-bottom: 4px;
    }
    
    .job-description {
      font-size: 11px;
      color: #666;
      margin-bottom: 6px;
      line-height: 1.4;
    }
    
    ul {
      margin: 6px 0 0 18px;
      font-size: 11px;
      line-height: 1.5;
      color: #333;
    }
    
    li {
      margin-bottom: 4px;
    }
    
    .project {
      margin-bottom: 14px;
    }
    
    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      margin-bottom: 2px;
    }
    
    .project-name {
      font-weight: 600;
      font-size: 13px;
      color: #000;
    }
    
    .project-duration {
      font-size: 11px;
      color: #666;
      white-space: nowrap;
      text-align: right;
    }
    
    .project-meta {
      font-size: 11px;
      color: #666;
      margin-bottom: 4px;
    }
    
    .project-objective {
      font-size: 11px;
      color: #666;
      margin-bottom: 6px;
      line-height: 1.4;
    }
    
    .leadership-item {
      margin-bottom: 14px;
    }
    
    .leadership-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      margin-bottom: 2px;
    }
    
    .leadership-title {
      font-weight: 600;
      font-size: 13px;
      color: #000;
    }
    
    .leadership-duration {
      font-size: 11px;
      color: #666;
      white-space: nowrap;
      text-align: right;
    }
    
    .muted {
      color: #666;
      font-size: 11px;
      line-height: 1.4;
    }
    
    .edu-item {
      margin-bottom: 10px;
    }
    
    .edu-school {
      font-weight: 600;
      font-size: 12px;
      color: #000;
      margin-bottom: 2px;
    }
    
    .edu-details {
      font-size: 11px;
      color: #666;
    }
    
    .co-activity {
      margin-bottom: 10px;
    }
    
    .co-activity-name {
      font-weight: 600;
      font-size: 12px;
      color: #000;
      margin-bottom: 2px;
    }
    
    .co-activity-details {
      font-size: 11px;
      color: #666;
    }
    
    @media print {
      body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      .resume {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        box-shadow: none;
      }
      @page {
        margin: 0;
      }
    }
  </style>
</head>
<body>
  <article class="resume">
    <header class="header">
      <div class="header-content">
        <div class="name">${personalInfo.fullName.toUpperCase()}</div>
        <div class="education-line">${personalInfo.education}</div>
        <div class="contact-info">
          <a href="mailto:${personalInfo.email}">${personalInfo.email}</a> | <a href="${personalInfo.linkedinUrl}" target="_blank">LinkedIn Profile</a><br>
          ${personalInfo.phone}
        </div>
      </div>
      <div class="photo" style="background-image:url('${personalInfo.photo}')"></div>
    </header>
    
    <div class="content">
      <section>
        <h2>Internships & Work Experience</h2>
        ${data.workExperience
          .map(
            (exp: any) => `
          <div class="job">
            <div class="job-header">
              <div class="job-title">${exp.role} — ${exp.company}</div>
              <div class="job-duration">${exp.startDate} — ${exp.endDate}</div>
            </div>
            <ul>
              ${exp.highlights.map((h: string) => `<li>${h}</li>`).join("")}
            </ul>
          </div>
        `,
          )
          .join("")}
      </section>

      <section>
        <h2>Projects</h2>
        ${data.projects
          .map(
            (p: any) => `
          <div class="project">
            <div class="project-header">
              <div class="project-name">${p.name}</div>
              <div class="project-duration">${p.duration}</div>
            </div>
            <div class="project-meta">${p.objective}</div>
            <ul>
              ${p.highlights.map((h: string) => `<li>${h}</li>`).join("")}
            </ul>
          </div>
        `,
          )
          .join("")}
      </section>

      <section>
        <h2>Leadership</h2>
        ${data.leadership
          .map(
            (l: any) => `
          <div class="leadership-item">
            <div class="leadership-header">
              <div class="leadership-title">${l.position} — ${l.organization}</div>
              <div class="leadership-duration">${l.duration}</div>
            </div>
            <div class="muted">${l.description}</div>
          </div>
        `,
          )
          .join("")}
      </section>

      <section>
        <h2>Education</h2>
        <div class="edu-item">
          <div class="edu-school">${edu.university}</div>
          <div class="edu-details">${edu.degree} — ${edu.startYear} — ${edu.endYear}</div>
        </div>
        <div class="edu-item">
          <div class="edu-school">${edu.highSchool}</div>
          <div class="edu-details">Class 12 (${edu.class12Marks}) — Class 10 (${edu.class10Marks})</div>
        </div>
      </section>

      <section>
        <h2>Co-curricular</h2>
        ${data.coActivities
          .map(
            (a: any) => `
          <div class="co-activity">
            <div class="co-activity-name">${a.name}</div>
            <div class="co-activity-details">${a.level} • ${a.achievement}</div>
          </div>
        `,
          )
          .join("")}
      </section>
    </div>
  </article>
</body>
</html>`
  }

  const downloadResume = () => {
    const htmlContent = generateHTML()
    const blob = new Blob([htmlContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)

    const printWindow = window.open(url, "print", "height=800,width=1000")
    if (!printWindow) {
      alert("Please disable popup blocker and try again")
      return
    }

    // Wait a moment for the window to load, then trigger print
    setTimeout(() => {
      printWindow.focus()
      printWindow.print()

      // Clean up the object URL after print
      setTimeout(() => {
        URL.revokeObjectURL(url)
      }, 1000)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Resume Preview</h2>
          <div className="space-x-4 flex">
            <Button onClick={onEdit} variant="outline" className="px-6 bg-transparent">
              Edit Resume
            </Button>
            <Button onClick={downloadResume} className="bg-blue-600 hover:bg-blue-700 px-6">
              Download as PDF
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div
            id="resume-content"
            dangerouslySetInnerHTML={{ __html: generateHTML() }}
            style={{
              display: "flex",
              justifyContent: "center",
              background: "#fafafa",
              padding: "16px",
            }}
          />
        </div>
      </div>
    </div>
  )
}
