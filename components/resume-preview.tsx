"use client"

import { Button } from "@/components/ui/button"

export default function ResumePreview({ data, onEdit }: { data: any; onEdit: () => void }) {
const generateHTML = () => {
  const edu = data.education
  const personalInfo = data.personalInfo

  // safe inline SVG fallback for photo (keeps it printable)
  const svgFallback =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#e6eefc"/><text x="50%" y="52%" font-size="34" font-family="Arial" fill="#0b1724" dominant-baseline="middle" text-anchor="middle">Photo</text></svg>`,
    )

  const photoSrc = personalInfo.photo ? personalInfo.photo : svgFallback

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
    -webkit-print-color-adjust:exact;
    print-color-adjust:exact;

    /* Page size for printing: explicit A4 */
    body { -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; padding:0; }

    .paper {
      width:210mm;
      height:297mm;
      margin:0 auto;
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
      padding:22px 28px;
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

    /* Photo - use <img> so it prints reliably */
    .photo-wrap { flex-shrink:0; }
    .photo-img {
      width:110px;
      height:110px;
      border-radius:10px;
      background:#e6eefc;
      border:2px solid #dbeafe;
      object-fit:cover;
      display:block;
      box-shadow:0 6px 18px rgba(11,108,240,0.06);
    }

    /* Content area split */
    .body {
      display:flex;
      gap:24px;
      padding:20px 28px;
      flex:1;
      align-items:flex-start;
    }
    .main {
      flex: 2.1;
      min-width:0;
      max-width: calc(100% - 220px); /* ensure main + side fit */
    }
    .side {
      flex: 1;
      min-width:180px; /* reduced from 220 to avoid forced wrap */
      max-width:220px;
      border-left:1px dashed #eef2f6;
      padding-left:16px;
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

    .section { margin-bottom:14px; }

    /* Job / Projects / Leadership */
    .item {
      margin-bottom:10px;
      padding-bottom:6px;
      border-bottom:1px solid rgba(14,20,30,0.03);
      break-inside:avoid;
      page-break-inside:avoid;
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
    ul { margin-left:18px; color:#374151; font-size:12px; line-height:1.45; }
    li { margin-bottom:6px; }

    /* Education & Co-curricular (sidebar) */
    .edu-block { margin-bottom:10px; }
    .edu-school { font-weight:700; color:#0b1724; font-size:13px; margin-bottom:4px; }
    .edu-detail { font-size:12px; color:#6b7280; }

    .co { margin-bottom:8px; }
    .co .name { font-weight:600; font-size:12px; color:#0b1724; margin-bottom:3px; }
    .co .desc { font-size:12px; color:#6b7280; }

    .divider { height:1px; background:linear-gradient(90deg, transparent, rgba(14,20,30,0.03), transparent); margin:12px 0; }

    /* Keep sections from breaking awkwardly across pages */
    .paper, .header, .body, .main, .side, .section, .item {
      -webkit-print-color-adjust: exact;
      color-adjust: exact;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    /* Responsive small screens (preview only) */
    @media (max-width:900px) {
      .paper { width:100%; margin:12px; border-radius:6px; height:auto }
      .body { flex-direction:column; padding:14px; }
      .side { border-left:none; padding-left:0; border-top:1px dashed #eef2f6; padding-top:14px; margin-top:14px; min-width:0; max-width:100% }
      .photo-img { margin-left:auto; }
      .header { padding:20px; }
    }

    /* Print adjustments: force the same single-page A4 look and ensure background/colors print */
    @media print {
      html,body { background: white; margin:0; padding:0; height:297mm; }
      .paper { box-shadow:none; border-radius:0; margin:0; width:210mm; height:297mm; overflow:visible; }
      .header { padding:18px 22px; }
      .body { padding:16px 22px; gap:18px; }
      .photo-img { display:block; }
      /* small scale fallback if something is marginally overflowing */
      .paper.fit-scale { transform-origin: top left; transform: scale(0.98); }
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

      <div class="photo-wrap">
        <img src="${photoSrc}" alt="Photo of ${personalInfo.fullName}" class="photo-img" />
      </div>
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

  <script>
    // If content is slightly overfull, mark paper for tiny scale at print time.
    // This runs in the iframe when printed.
    (function(){
      try {
        const paper = document.querySelector('.paper');
        if (!paper) return;
        // Allow tiny room: if content scroll height > container height, scale down slightly
        const overflow = paper.scrollHeight > paper.clientHeight;
        if (overflow) paper.classList.add('fit-scale');
        // Ensure images are loaded before print
        const imgs = Array.from(document.images || []);
        if (imgs.length) {
          let loaded = 0;
          imgs.forEach(img => {
            if (img.complete) loaded++;
            else img.addEventListener('load', () => {
              loaded++;
              if (loaded === imgs.length) {}
            });
            img.addEventListener('error', () => { loaded++; });
          });
        }
      } catch(e){}
    })();
  </script>
</body>
</html>`
}
const downloadResume = () => {
  const htmlContent = generateHTML() // must return a complete HTML document string (<!doctype html>...<body>...</body>)
  // Open a new window/tab
  const printWindow = window.open("", "_blank", "width=1100,height=900")

  if (!printWindow) {
    alert("Please allow popups for printing.")
    return
  }

  // A robust print-ready wrapper: inject print-specific CSS to force A4 and prevent page breaks
  const printCss = `
    <style>
      @page { size: A4; margin: 10mm; }
      html, body {
        width: 210mm; /* A4 width */
        height: 297mm; /* A4 height */
      }
      body {
        margin: 0;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
        background: white;
        box-sizing: border-box;
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      }

      /* Ensure content doesn't split across pages */
      .resume-root, /* if your root container has a class */
      body > * {
        page-break-inside: avoid;
        break-inside: avoid;
        -webkit-region-break-inside: avoid;
      }

      /* Make layout deterministic: use mm or px mapped to mm-ish */
      .page {
        width: 210mm;
        height: 297mm;
        box-sizing: border-box;
        overflow: hidden;
      }

      /* Images and photos: contain and fixed size so printing matches preview */
      img {
        max-width: 100%;
        height: auto;
        display: block;
      }

      /* Hide any interactive UI meant only for screen */
      .no-print { display:none !important; }

      /* Force consistent line heights and avoid font swaps */
      * { -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
    </style>
  `

  // If generateHTML returns a full document, inject the printCss into its head.
  // Otherwise wrap the body inside a full HTML document.
  let finalHtml = htmlContent
  if (!/<!doctype html>/i.test(htmlContent)) {
    finalHtml = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${printCss}</head><body>${htmlContent}</body></html>`
  } else {
    // Insert printCss into <head> of returned HTML
    finalHtml = htmlContent.replace(/<head([^>]*)>/i, `<head$1>${printCss}`)
  }

  // Write the HTML into the new window's document
  printWindow.document.open()
  printWindow.document.write(finalHtml)
  printWindow.document.close()

  // Helper: wait for fonts and images to load in the new window before printing
  const waitForResources = () => {
    const w = printWindow
    return new Promise((resolve) => {
      // Wait for window load event first
      w.addEventListener("load", () => {
        // Wait for document.fonts if available
        const fontReady = (w.document.fonts && w.document.fonts.ready) ? w.document.fonts.ready : Promise.resolve()
        // Gather image load promises
        const imgs = Array.from(w.document.images || [])
        const imgPromises = imgs.map(img => {
          return new Promise((res) => {
            if (img.complete) return res()
            img.addEventListener("load", res)
            img.addEventListener("error", res) // resolve anyway on error
          })
        })
        Promise.all([fontReady, ...imgPromises]).then(() => {
          // give the browser a quick beat to apply layout (100ms)
          setTimeout(resolve, 100)
        })
      }, { once: true })

      // As a fallback in case load never fires, timeout after 2s
      setTimeout(resolve, 2000)
    })
  }

  waitForResources().then(() => {
    try {
      // Focus and print. Bind cleanup to afterprint/beforeunload.
      printWindow.focus()
      // Use printWindow.print() which opens dialog matching the layout
      printWindow.print()
    } catch (err) {
      console.error("Print failed:", err)
    } finally {
      // cleanup object URLs if you created any
      // Optionally close the window after a short delay:
      const closeAfter = 900 // ms; set to null to keep window open
      if (closeAfter) {
        const cleanup = () => { try { printWindow.close() } catch(e){} }
        setTimeout(cleanup, closeAfter)
      }
    }
  })
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
