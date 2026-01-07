"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function ResumePreview({
  data,
  onEdit,
}: {
  data: any;
  onEdit: () => void;
}) {
  const generateHTML = () => {
    const edu = data.education;
    const personalInfo = data.personalInfo;

    const svgFallback =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="#fce8ed"/><text x="50%" y="52%" font-size="34" font-family="Poppins" fill="#0b1724" dominant-baseline="middle" text-anchor="middle">Photo</text></svg>`
      );

    const photoSrc = personalInfo.photo ? personalInfo.photo : svgFallback;

    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${personalInfo.fullName} — Resume</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    html,body{
      height:100%;
      background:#f7f8fb;
      font-family:"Poppins", sans-serif;
      color:#111827;
    }
    a{color:inherit}
    -webkit-print-color-adjust:exact;
    print-color-adjust:exact;

    body {
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      padding:0;
    }

    .paper {
      width:210mm;
      min-width:210mm;
      height:297mm;
      margin:0 auto;
      background:#ffffff;
      border-radius:8px;
      box-shadow:0 8px 30px rgba(8,30,63,0.08);
      overflow:hidden;
      display:flex;
      flex-direction:column;
    }

    .header {
      display:flex;
      gap:20px;
      padding:40px 28px 28px 28px;
      align-items:flex-center ;
      justify-content:space-between;
      background:linear-gradient(90deg, #ffffff 0%, #fbfdff 100%);
      border-bottom:4px solid #eef2f6;
      position:relative;
    }
    .header-left { 
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      justify-content:center;
    }
    .name {
      font-size:26px;
      font-weight:700;
      color:#0b1724;
      letter-spacing:0.4px;
      margin-bottom:2px;
      font-family:"Poppins", sans-serif;
    }
    .role {
      color:#6b7280;
      font-size:13px;
      margin-bottom:4px;
    }
    .contact {
      font-size:12px;
      color:#475569;
      line-height:1.6;
    }
    .contact a { color:#ec3a5d; text-decoration:none; }

    .photo-wrap { flex-shrink:0; }
    .photo-img {
      width:110px;
      height:110px;
      border-radius:10px;
      background:#fce8ed;
      border:2px solid #f8d4dc;
      object-fit:cover;
      display:block;
      box-shadow:0 6px 18px rgba(236,58,93,0.06);
    }

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
      max-width: calc(100% - 220px);
    }
    .side {
      flex: 1;
      min-width:180px;
      max-width:220px;
      border-left:1px dashed #eef2f6;
      padding-left:16px;
    }

    h2 {
      font-size:13px;
      font-weight:900;
      color:#ec3a5d;
      text-transform:uppercase;
      letter-spacing:1px;
      margin-bottom:10px;
    }

    .section {
      margin-bottom:14px;
      position:relative;
    }

    /* Divider between sections */
    .section:not(:last-child)::after {
      content:"";
      display:block;
      height:4px;
      background:linear-gradient(90deg, rgba(14,20,30,0) 0%, rgba(14,20,30,0.10) 15%, rgba(14,20,30,0.22) 50%, rgba(14,20,30,0.10) 85%, rgba(14,20,30,0) 100%);
      border-radius:2px;
      margin-top:14px;
    }

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
      font-weight:600;
      align-items:flex-start;
      margin-bottom:6px;
    }
      .item-company {
        font-size:11px;
        color:#6b7280;
        white-space:nowrap;
        display:block;
      }
    .item-title-company {
      display:flex;
      flex-direction:column;
      gap:2px;
      align-items:flex-start;
    }
    .item-title-company .item-title {
      font-size:15px;
      
      font-weight:800;
      color:#0b1724;
    }
    .item-title-company .item-company {
      font-size:11px;
      color:#6b7280;
      white-space:nowrap;
    }

    .item-header-with-icon {
      display:flex;
      gap:10px;
      align-items:flex-start;
      flex:1;
      min-width:0;
    }
    .item-icon {
      width:30px;
      height:30px;
      flex-shrink:0;
      object-fit:contain;
      border-radius:4px;
      margin-top:2px;
    }
    .item-title {
      font-size:15px;
      font-weight:800;
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

    .edu-block { margin-bottom:10px; }
    .edu-item {
      display:flex;
      gap:10px;
      flex-direction:column;
      align-items:flex-start;
      margin-bottom:10px;
    }
    .edu-item:last-child { margin-bottom:0; }
    .edu-icon {
      width:50px;
      height:50px;
      flex-shrink:0;
      object-fit:contain;
      border-radius:4px;
      margin-top:2px;
    }
    .edu-content {
      flex:1;
      min-width:0;
    }
    .edu-school { font-weight:700; color:#0b1724; font-size:13px; margin-bottom:4px; }
    .edu-detail { font-size:12px; color:#6b7280; }

    .co { margin-bottom:8px; }
    .co .name { font-weight:600; font-size:12px; color:#0b1724; margin-bottom:3px; }
    .co .desc { font-size:12px; color:#6b7280; }

    .divider {
      height:2px;
      background:linear-gradient(90deg, rgba(14,20,30,0) 0%, rgba(14,20,30,0.08) 15%, rgba(14,20,30,0.18) 50%, rgba(14,20,30,0.08) 85%, rgba(14,20,30,0) 100%);
      border-radius:2px;
      margin:12px 0;
    }

    .paper, .header, .body, .main, .side, .section, .item {
      -webkit-print-color-adjust: exact;
      color-adjust: exact;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    @media (max-width:900px) {
      .paper { width:100%; margin:12px; border-radius:6px; height:auto }
      .body { padding:14px; }
      .side { border-left:none; padding-left:0; border-top:1px dashed #eef2f6; padding-top:14px; margin-top:14px; min-width:0; max-width:100% }
      .photo-img { margin-left:auto; }
      .header { padding:20px; }
    }

    @media print {
      html,body { background: white; margin:0; padding:0; height:297mm; }
      .paper { box-shadow:none; border-radius:0; margin:0; width:210mm; height:297mm; overflow:visible; }
      .header { padding:18px 22px; }
      .body { padding:16px 22px; gap:18px; }
      .photo-img { display:block; }
      .paper.fit-scale { transform-origin: top left; transform: scale(0.98); }
    }
  </style>
</head>
<body>
  <article class="paper" role="article" aria-label="Resume of ${
    personalInfo.fullName
  }">
    <header class="header">
      <div class="header-left">
        <div class="name">${personalInfo.fullName.toUpperCase()}</div>
        <div class="role">${personalInfo.education}</div>
        <div class="contact">
          <a href="mailto:${personalInfo.email}">${
      personalInfo.email
    }</a> | <a href="${personalInfo.linkedinUrl}" target="_blank">${
      personalInfo.linkedinUrl
    }</a><br>
          ${personalInfo.phone}
        </div>
      </div>

      <div class="photo-wrap">
        <img src="${photoSrc}" alt="Photo of ${
      personalInfo.fullName
    }" class="photo-img" />
      </div>
    </header>

    <div class="body">
      <main class="main">
        <section class="section">
          <h2>Internships & Work Experience</h2>
          ${data.workExperience
            .map(
              (exp) => `
            <div class="item">
              <div class="item-header">
                <div class="item-header-with-icon"> 
                  ${
                    exp.icon
                      ? `<img src="${exp.icon}" alt="${exp.company} icon" class="item-icon" />`
                      : ""
                  }
                  <div class="item-title-company">
                  <div class="item-title">${exp.role}</div>
                  <div class="item-company">${exp.company}</div>  
                  </div>
                </div>
                <div class="item-meta">${exp.startDate} — ${exp.endDate}</div>
              </div>
              ${exp.title ? `<div class="item-sub">${exp.title}</div>` : ""}
              <ul>
                ${exp.highlights.map((h) => `<li>${h}</li>`).join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        </section>

        <section class="section">
          <h2>Projects</h2>
          ${data.projects
            .map(
              (p) => `
            <div class="item">
              <div class="item-header">
                <div class="item-title">${p.name}</div>
                <div class="item-meta">${p.duration}</div>
              </div>
              ${p.objective ? `<div class="item-sub">${p.objective}</div>` : ""}
              <ul>
                ${p.highlights.map((h) => `<li>${h}</li>`).join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        </section>

        <section class="section">
          <h2>Leadership</h2>
          ${data.leadership
            .map(
              (l) => `
            <div class="item">
              <div class="item-header">
                <div class="item-title">${l.position} — ${l.organization}</div>
                <div class="item-meta">${l.duration}</div>
              </div>
              <div class="item-sub">${l.description}</div>
            </div>
          `
            )
            .join("")}
        </section>
      </main>

      <aside class="side" aria-label="Sidebar: Education and activities">
        <section class="section">
          <h2>Education</h2>
          <div class="edu-block">
            <div class="edu-item">
              ${
                edu.universityIcon
                  ? `<img src="${edu.universityIcon}" alt="University icon" class="edu-icon" />`
                  : ""
              }
              <div class="edu-content">
                <div class="edu-school">${edu.university}</div>
                <div class="edu-detail">${edu.degree} — ${edu.startYear} — ${
      edu.endYear
    }</div>
              </div>
            </div>
            <div class="divider"></div>
            <div class="edu-item">
              <div class="edu-content">
                <div class="edu-school">${edu.class12School}</div>
                <div class="edu-detail">Class 12 — ${edu.class12Board} (${
      edu.class12Marks
    })</div>
              </div>
            </div>
            <div class="divider"></div>
            <div class="edu-item">
              <div class="edu-content">
                <div class="edu-school">${edu.class10School}</div>
                <div class="edu-detail">Class 10 — ${edu.class10Board} (${
      edu.class10Marks
    })</div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <h2>Co-curricular</h2>
          ${data.coActivities
            .map(
              (a) => `
            <div class="co">
              <div class="name">${a.name}</div>
              <div class="desc">${a.level} • ${a.achievement}</div>
            </div>
          `
            )
            .join("")}
        </section>
      </aside>
    </div>
  </article>

  <script>
    (function(){
      try {
        const paper = document.querySelector('.paper');
        if (!paper) return;
        const overflow = paper.scrollHeight > paper.clientHeight;
        if (overflow) paper.classList.add('fit-scale');
      } catch(e){}
    })();
  </script>
</body>
</html>`;
  };

  useEffect(() => {
    const res = generateHTML();
    console.log(res);
  }, []);

  const downloadResume = () => {
    const htmlContent = generateHTML(); // must return a complete HTML document string (<!doctype html>...<body>...</body>)
    // Open a new window/tab
    const printWindow = window.open("", "_blank", "width=1100,height=900");

    if (!printWindow) {
      alert("Please allow popups for printing.");
      return;
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
        font-family: "Poppins", sans-serif;
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
  `;

    // If generateHTML returns a full document, inject the printCss into its head.
    // Otherwise wrap the body inside a full HTML document.
    let finalHtml = htmlContent;
    if (!/<!doctype html>/i.test(htmlContent)) {
      finalHtml = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${printCss}</head><body>${htmlContent}</body></html>`;
    } else {
      // Insert printCss into <head> of returned HTML
      finalHtml = htmlContent.replace(/<head([^>]*)>/i, `<head$1>${printCss}`);
    }

    // Write the HTML into the new window's document
    printWindow.document.open();
    printWindow.document.write(finalHtml);
    printWindow.document.close();

    // Helper: wait for fonts and images to load in the new window before printing
    const waitForResources = () => {
      const w = printWindow;
      return new Promise((resolve) => {
        // Wait for window load event first
        w.addEventListener(
          "load",
          () => {
            // Wait for document.fonts if available
            const fontReady =
              w.document.fonts && w.document.fonts.ready
                ? w.document.fonts.ready
                : Promise.resolve();
            // Gather image load promises
            const imgs = Array.from(w.document.images || []);
            const imgPromises = imgs.map((img) => {
              return new Promise((res) => {
                if (img.complete) return res();
                img.addEventListener("load", res);
                img.addEventListener("error", res); // resolve anyway on error
              });
            });
            Promise.all([fontReady, ...imgPromises]).then(() => {
              // give the browser a quick beat to apply layout (100ms)
              setTimeout(resolve, 100);
            });
          },
          { once: true }
        );

        // As a fallback in case load never fires, timeout after 2s
        setTimeout(resolve, 2000);
      });
    };

    waitForResources().then(() => {
      try {
        // Focus and print. Bind cleanup to afterprint/beforeunload.
        printWindow.focus();
        // Use printWindow.print() which opens dialog matching the layout
        printWindow.print();
      } catch (err) {
        console.error("Print failed:", err);
      } finally {
        // cleanup object URLs if you created any
        // Optionally close the window after a short delay:
        const closeAfter = 900; // ms; set to null to keep window open
        if (closeAfter) {
          const cleanup = () => {
            try {
              printWindow.close();
            } catch (e) {}
          };
          setTimeout(cleanup, closeAfter);
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Resume Preview</h2>
          <div className="space-x-3 flex mt-4 md:mt-0">
            <Button
              onClick={onEdit}
              variant="outline"
              className="px-6 bg-transparent"
            >
              Edit Resume
            </Button>
            <Button
              onClick={downloadResume}
              className="px-6"
              style={{ backgroundColor: "#ec3a5d" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#d12e4f")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#ec3a5d")
              }
            >
              Download / Print
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 md:p-6">
          {/* Place the HTML inside an inline frame for a faithful preview and isolation */}
          <iframe
            title="Resume Preview Frame"
            srcDoc={generateHTML()}
            style={{
              width: "100%",
              height: "820px",
              border: "1px solid #e6edf6",
              borderRadius: 8,
            }}
          />
        </div>
      </div>
    </div>
  );
}
