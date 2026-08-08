#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Generates a clean, single-page PDF resume for the Download Resume button.
 * Run: node scripts/generate-resume.js
 * Output: public/resume/Himanshu_Singh_Kothariya_Resume.pdf
 */
const fs = require("fs");
const path = require("path");

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

// ---------------- Layout data ----------------
const W = 612; // Letter width
const M = 56; // margin
const contentWidth = W - M * 2;

// Content lines: [font, size, x, y, text, color]
const lines = [];
let y = 764; // top of text area

const put = (font, size, text, opts = {}) => {
  const { x = M, color = "0 0 0", weight = "" } = opts;
  // If text is an array, render each segment with its own font at same y
  if (Array.isArray(text)) {
    let cx = x;
    for (const seg of text) {
      lines.push([seg[0], size, cx, y, seg[1], color, weight]);
      cx += measure(seg[1], size) + (seg[2] || 0);
    }
  } else {
    lines.push([font, size, x, y, text, color, weight]);
  }
};

// Very rough width estimator for Helvetica (avg ~0.52em per char)
function measure(text, size) {
  return text.length * size * 0.52;
}

// Wrap long text into lines
function wrap(text, size, maxWidth) {
  const words = text.split(" ");
  const out = [];
  let cur = "";
  for (const w of words) {
    const test = cur ? cur + " " + w : w;
    if (measure(test, size) <= maxWidth) {
      cur = test;
    } else {
      if (cur) out.push(cur);
      cur = w;
    }
  }
  if (cur) out.push(cur);
  return out;
}

// ---------------- Build content ----------------
put("F2", 22, "HIMANSHU SINGH KOTHARIYA", { color: "0.04 0.05 0.10" });
y -= 18;
put("F1", 10.5, "Data Analyst  |  Business Analyst  |  Aspiring Product Analyst");
y -= 14;
put("F1", 9.5, "himanshukothariya@gmail.com  |  github.com/himanshukothariya  |  linkedin.com/in/himanshu-singh-kothariya");
y -= 12;
put("F1", 9.5, "Raipur, India  |  Open to remote & on-site roles");
y -= 18;

// Divider
lines.push(["DIVIDER", 1, M, y + 5, "", "0.35 0.40 0.95", ""]);
y -= 14;

// Summary
put("F2", 11, "PROFESSIONAL SUMMARY");
y -= 15;
for (const l of wrap(
  "Turning raw data into business decisions. I specialize in transforming raw data into meaningful business insights using SQL, Python, Excel, and Power BI — from customer segmentation and churn analysis to executive dashboards and data-driven recommendations. B.Tech (ECE) from IIIT Naya Raipur with a proven record of shipping analytics that changes decisions.",
  9.5,
  contentWidth
)) {
  put("F1", 9.5, l);
  y -= 12.5;
}
y -= 7;

// Skills
put("F2", 11, "CORE SKILLS");
y -= 15;
const skills = [
  ["Programming:", "Python, SQL, C++"],
  ["Analytics:", "Excel, Power BI, Statistics, Data Cleaning, Visualization"],
  ["Libraries:", "Pandas, NumPy, Matplotlib, Seaborn"],
  ["Database:", "MySQL"],
  ["Tools:", "Git, GitHub, VS Code, Jupyter"],
];
for (const [label, value] of skills) {
  put("F1", 9.5, [
    ["F4", label],
    ["F1", " " + value],
  ]);
  y -= 13;
}
y -= 7;

// Projects
put("F2", 11, "FEATURED PROJECTS");
y -= 15;
const projects = [
  [
    "Customer Lifetime Value & Retention Strategy",
    "SQL | Python | Power BI | Excel",
    "RFM segmentation (18.4% of customers = 61% of revenue), BG/NBD + Gamma-Gamma CLV prediction, churn-risk model (AUC 0.84) surfacing 1,240 at-risk customers, 4-page executive dashboard and retention strategy.",
  ],
  [
    "Customer Behavior Analysis Dashboard",
    "SQL | Python | Excel | Power BI",
    "Analyzed purchasing behavior, built K-Means behavioral segmentation (5 clusters explaining 74% of revenue variance), hourly/weekly demand curves, and KPI dashboards with actionable insights.",
  ],
  [
    "Amazon Sales Dashboard",
    "Power BI | SQL | Excel",
    "Executive sales intelligence tracking revenue, order trends, customer segments, and product Pareto tiers (A-tier = 71% of revenue); Holt-Winters forecast with 8.9% MAPE.",
  ],
  [
    "Scan N Shop — QR Based Shopping System",
    "Startup Project",
    "Designed a QR-based scan-and-pay retail flow cutting checkout time ~80% with zero hardware; built impact and unit-economics models. 2nd Runner-up, 23 Ventures Startup Competition.",
  ],
];
for (const [title, tags, desc] of projects) {
  put("F1", 10, [
    ["F4", "\u2022 " + title],
  ]);
  put("F3", 9, tags, { x: M + 10 });
  y -= 12.5;
  for (const l of wrap(desc, 9.5, contentWidth - 10)) {
    put("F1", 9.5, l, { x: M + 10 });
    y -= 12.5;
  }
  y -= 4;
}
y -= 7;

// Experience
put("F2", 11, "EXPERIENCE");
y -= 15;
put("F1", 10, [
  ["F4", "Business Development Intern"],
  ["F1", "   |   Startup Ecosystem (Technovate / Campus Ventures)   |   2024 - Present"],
]);
y -= 12.5;
for (const l of wrap(
  "Analyzed market data and customer segments to identify leads and growth opportunities; built Excel/Power BI dashboards tracking pipeline, conversion, and revenue; translated business requirements into weekly insight reports for leadership.",
  9.5,
  contentWidth
)) {
  put("F1", 9.5, l);
  y -= 12.5;
}
y -= 7;

// Achievements
put("F2", 11, "ACHIEVEMENTS & LEADERSHIP");
y -= 15;
const achievements = [
  "23 Ventures Startup Competition — 2nd Runner-up",
  "Chhattisgarh Shark Tank — Finalist",
  "Technovate — Core Team Member",
  "Sports Fest — Event Lead",
];
for (const a of achievements) {
  put("F1", 9.5, [
    ["F4", "\u2022 "],
    ["F1", a],
  ]);
  y -= 13;
}
y -= 7;

// Education
put("F2", 11, "EDUCATION");
y -= 15;
put("F1", 10, [
  ["F4", "B.Tech, Electronics & Communication Engineering"],
  ["F1", "   |   IIIT Naya Raipur"],
]);
y -= 13;
put("F1", 9, "Relevant foundation: statistics, signals & systems, structured problem-solving, engineering mathematics.", {
  color: "0.35 0.35 0.40",
});

// ---------------- Assemble PDF ----------------
const objects = [];
objects.push("<< /Type /Catalog /Pages 2 0 R >>");
objects.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
objects.push(
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R /F2 6 0 R /F3 7 0 R /F4 8 0 R >> >> /Contents 4 0 R >>"
);

let content = "0.96 0.97 1 rg\n";
content += "0 792 612 -792 re f\n";
content += "0.94 0.95 1 rg\n";
content += `56 140 ${contentWidth} 32 re f\n`; // small accent footer bar

for (const [font, size, x, yy, text, color] of lines) {
  if (font === "DIVIDER") {
    content += `${color} rg\n${x} ${yy} ${contentWidth} 1.2 re f\n`;
    continue;
  }
  content += `BT\n/${font} ${size} Tf\n${color} rg\n${x} ${yy} Td\n(${esc(text)}) Tj\nET\n`;
}
objects.push(`<< /Length ${content.length} >>\nstream\n${content}endstream`);

// Fonts
objects.push(
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-BoldOblique >>"
);

let pdf = "%PDF-1.4\n";
const offsets = [];
for (let i = 0; i < objects.length; i++) {
  offsets.push(pdf.length);
  pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
}
const xrefStart = pdf.length;
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const off of offsets) {
  pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

const outDir = path.join(__dirname, "..", "public", "resume");
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "Himanshu_Singh_Kothariya_Resume.pdf");
fs.writeFileSync(outPath, pdf, "binary");
console.log("Wrote", outPath, "-", pdf.length, "bytes");
