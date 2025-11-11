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
    /* Reset + base */
    *{box-sizing:border-box;margin:0;padding:0}
    html,body{height:100%;background:#f7f8fb;font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; color:#111827}
    a{color:inherit}
    /* Page size for printing */
    @page { size: A4; margin: 0; }
    body { -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }

    .paper {
      width:210mm;
      min-height:297mm;
      margin:18px auto;
      background:#ffffff;
      border-radius:8px;
      box-shadow:0 8px 30px rgba(8,30,63,0.08);
      overflow:hidden;
      display:flex;
      flex-direction:column;
    }

    /* Header */
    .header {
      display:flex;
      gap:20px;
      padding:28px 32px;
      align-items:flex-start;
      background:linear-gradient(90deg, #ffffff 0%, #fbfdff 100%);
      border-bottom:1px solid #eef2f6;
      position:relative;
    }
    .header-left { flex:1; min-width:0; }
    .name {
      font-size:26px;
      font-weight:700;
      color:#0b1724;
      letter-spacing:0.4px;
      margin-bottom:4px;
    }
    .role {
      color:#6b7280;
      font-size:13px;
      margin-bottom:10px;
    }
    .contact {
      font-size:12px;
      color:#475569;
      line-height:1.6;
    }
    .contact a { color:#0b6cf0; text-decoration:none; }

    /* Photo card */
    .photo {
      width:110px;
      height:110px;
      border-radius:10px;
      background:#e6eefc;
      border:2px solid #dbeafe;
      background-size:cover;
      background-position:center;
      flex-shrink:0;
      box-shadow:0 6px 18px rgba(11,108,240,0.06);
    }

    /* Content area split */
    .body {
      display:flex;
      gap:28px;
      padding:26px 32px;
      flex:1;
      align-items:flex-start;
    }
    .main {
      flex: 2.1;
      min-width:0;
    }
    .side {
      flex: 1;
      min-width:220px;
      border-left:1px dashed #eef2f6;
      padding-left:20px;
    }

    /* Section headings */
    h2 {
      font-size:12px;
      font-weight:800;
      color:#0b6cf0;
      text-transform:uppercase;
      letter-spacing:1px;
      margin-bottom:10px;
    }

    .section {
      margin-bottom:18px;
    }

    /* Job / Projects / Leadership */
    .item {
      margin-bottom:12px;
      padding-bottom:8px;
      border-bottom:1px solid rgba(14,20,30,0.03);
    }
    .item:last-child { border-bottom: none; padding-bottom:0; margin-bottom:0; }

    .item-header {
      display:flex;
      justify-content:space-between;
      gap:12px;
      align-items:flex-start;
      margin-bottom:6px;
    }
    .item-title {
      font-size:15px;
      font-weight:600;
      color:#0b1724;
    }
    .item-meta {
      font-size:11px;
      color:#6b7280;
      white-space:nowrap;
    }
    .item-sub {
      font-size:12px;
      color:#475569;
      margin-bottom:6px;
    }
    ul { margin-left:18px; color:#374151; font-size:12px; line-height:1.5; }
    li { margin-bottom:6px; }

    /* Education & Co-curricular (sidebar) */
    .edu-block { margin-bottom:14px; }
    .edu-school { font-weight:700; color:#0b1724; font-size:13px; margin-bottom:4px; }
    .edu-detail { font-size:12px; color:#6b7280; }

    .co { margin-bottom:10px; }
    .co .name { font-weight:600; font-size:12px; color:#0b1724; margin-bottom:3px; }
    .co .desc { font-size:12px; color:#6b7280; }

    /* subtle divider */
    .divider { height:1px; background:linear-gradient(90deg, transparent, rgba(14,20,30,0.03), transparent); margin:14px 0; }

    /* Responsive small screens (preview only) */
    @media (max-width:900px) {
      .paper { width:100%; margin:12px; border-radius:6px; }
      .body { flex-direction:column; padding:18px; }
      .side { border-left:none; padding-left:0; border-top:1px dashed #eef2f6; padding-top:14px; margin-top:14px; }
      .photo { margin-left:auto; }
      .header { padding:20px; }
    }

    /* Print adjustments */
    @media print {
      body, html { background: white; }
      .paper { box-shadow:none; border-radius:0; margin:0; }
      .side { border-left:1px dashed #eee; }
    }
  </style>
</head>
<body>
  <article class="paper" role="article" aria-label="Resume of ${personalInfo.fullName}">
    <header class="header">
      <div class="header-left">
        <div class="name">${personalInfo.fullName.toUpperCase()}</div>
        <div class="role">${personalInfo.education}</div>
        <div class="contact">
          <a href="mailto:${personalInfo.email}">${personalInfo.email}</a> | <a href="${personalInfo.linkedinUrl}" target="_blank">LinkedIn</a><br>
          ${personalInfo.phone}
        </div>
      </div>

      <div class="photo" style="background-image:url('${personalInfo.photo || "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23e6eefc%22/><text x=%2250%25%22 y=%2252%25%22 font-size=%2216%22 font-family=%22Arial%22 fill=%22%230b1724%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22>Photo</text></svg>"}')"></div>
    </header>

    <div class="body">
      <main class="main">
        <section class="section">
          <h2>Internships & Work Experience</h2>
          ${data.workExperience
            .map(
              (exp: any) => `
            <div class="item">
              <div class="item-header">
                <div class="item-title">${exp.role} — ${exp.company}</div>
                <div class="item-meta">${exp.startDate} — ${exp.endDate}</div>
              </div>
              ${exp.title ? `<div class="item-sub">${exp.title}</div>` : ""}
              <ul>
                ${exp.highlights.map((h: string) => `<li>${h}</li>`).join("")}
              </ul>
            </div>
          `,
            )
            .join("")}
        </section>

        <section class="section">
          <h2>Projects</h2>
          ${data.projects
            .map(
              (p: any) => `
            <div class="item">
              <div class="item-header">
                <div class="item-title">${p.name}</div>
                <div class="item-meta">${p.duration}</div>
              </div>
              ${p.objective ? `<div class="item-sub">${p.objective}</div>` : ""}
              <ul>
                ${p.highlights.map((h: string) => `<li>${h}</li>`).join("")}
              </ul>
            </div>
          `,
            )
            .join("")}
        </section>

        <section class="section">
          <h2>Leadership</h2>
          ${data.leadership
            .map(
              (l: any) => `
            <div class="item">
              <div class="item-header">
                <div class="item-title">${l.position} — ${l.organization}</div>
                <div class="item-meta">${l.duration}</div>
              </div>
              <div class="item-sub">${l.description}</div>
            </div>
          `,
            )
            .join("")}
        </section>
      </main>

      <aside class="side" aria-label="Sidebar: Education and activities">
        <section class="section">
          <h2>Education</h2>
          <div class="edu-block">
            <div class="edu-school">${edu.university}</div>
            <div class="edu-detail">${edu.degree} — ${edu.startYear} — ${edu.endYear}</div>
            <div class="divider"></div>
            <div class="edu-school">${edu.highSchool}</div>
            <div class="edu-detail">Class 12 (${edu.class12Marks}) — Class 10 (${edu.class10Marks})</div>
          </div>
        </section>

        <section class="section">
          <h2>Co-curricular</h2>
          ${data.coActivities
            .map(
              (a: any) => `
            <div class="co">
              <div class="name">${a.name}</div>
              <div class="desc">${a.level} • ${a.achievement}</div>
            </div>
          `,
            )
            .join("")}
        </section>
      </aside>
    </div>
  </article>
</body>
</html>`
  }

  const downloadResume = () => {
    const htmlContent = generateHTML()
    const blob = new Blob([htmlContent], { type: "text/html" })
    const url = URL.createObjectURL(blob)

    const printWindow = window.open(url, "print", "height=900,width=1100")
    if (!printWindow) {
      alert("Please disable popup blocker and try again")
      return
    }

    // Give the new window a moment to load resources then trigger print
    setTimeout(() => {
      printWindow.focus()
      printWindow.print()

      setTimeout(() => {
        URL.revokeObjectURL(url)
      }, 1000)
    }, 600)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Resume Preview</h2>
          <div className="space-x-3 flex">
            <Button onClick={onEdit} variant="outline" className="px-6 bg-transparent">
              Edit Resume
            </Button>
            <Button onClick={downloadResume} className="bg-blue-600 hover:bg-blue-700 px-6">
              Download / Print
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 p-6">
          {/* Place the HTML inside an inline frame for a faithful preview and isolation */}
          <iframe
            title="Resume Preview Frame"
            srcDoc={generateHTML()}
            style={{ width: "100%", height: "820px", border: "1px solid #e6edf6", borderRadius: 8 }}
          />
        </div>
      </div>
    </div>
  )
}
