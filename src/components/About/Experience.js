import React from "react";
import { motion } from "motion/react";
import { reveal } from "../Reveal";

// Each section is [heading, paragraph] or [heading, [bullet, ...]].
const jobs = [
  {
    role: "Full-Stack AI Engineer",
    org: "Stealth Startup",
    when: "Apr 2026 – Present",
    where: "Remote",
    sections: [
      ["Overview", "Building a multi-tenant, production voice AI platform: a single agent core that serves multiple business verticals through a shared real-time speech pipeline, tool-integration layer, and generative media backend. My work spans the full stack of that system: the latency-critical voice path, the tooling that lets agents act on external systems, the data and infra underneath it all, and the internal dashboards the team uses to configure and monitor agents."],
      ["Voice AI & Real-time Pipeline", "Reduced time-to-first-audio on the production voice platform by implementing a pre-warmed greeting cache and session state cache, and built a direct-to-Live path that bypasses the general bridge layer for latency-critical sessions, using Pipecat with Google Gemini Live API's bidirectional streaming. Improved multilingual reliability by integrating Cartesia TTS and Google Cloud STT with automatic language detection and end-of-call message translation, so a single agent core operates across languages without per-language forking. Extended telephony capabilities by implementing WebRTC transport via LiveKit and warm transfer-to-number with explicit failure reasons surfaced to the caller, rather than a silent drop."],
      ["Agent Tooling & Integrations", "Built an MCP client that lets agents call external tools through a single protocol, replacing bespoke per-vendor adapters and cutting integration complexity as new tools are added. Shipped CRM and commerce integrations (Salesforce, Shopify via OAuth) behind a shared validation layer that fails malformed configs at setup time instead of mid-call, eliminating a class of live-call failures. Designed a Python-based industry-vertical agent system with a direct tool runtime, so one agent core can be reconfigured to serve multiple business domains instead of forking per-industry."],
      ["Data, Infrastructure & Delivery", "Own Prisma/PostgreSQL schema migrations across auth, agents, conversations, and studio assets in a multi-service monorepo deployed on Cloudflare and Kubernetes, keeping production data integrity intact through active development. Improved CI security posture by running CodeQL and Semgrep scanning, remediating findings including removing committed GCP service-account keys and hardening containers. Wrote an ffmpeg layer for the generative media pipeline that prefers stream copy over re-encode while keeping output bit-identical, cutting clip assembly time from ~60s to ~1s."],
      ["Frontend & Mentorship", "Built and maintain React 19 + TypeScript dashboards on Vite and Tailwind v4 (agent editor, conversations, integrations, widget configuration), plus an embeddable JavaScript widget for customer sites. Onboard and mentor interns by scoping their work into independently shippable slices, running code reviews focused on type safety and error handling, and writing architecture documentation that measurably cut new-contributor setup time."],
    ],
    stack: ["AWS", "Python", "TypeScript", "React 19", "PostgreSQL", "Kubernetes", "Cloudflare", "Tailscale", "OAuth 2.0", "Prisma", "CodeQL", "Semgrep", "MCP (Model Context Protocol)", "Pipecat", "Google Gemini Live API", "LiveKit (WebRTC)", "Cartesia TTS", "Google Cloud STT", "Salesforce API", "Shopify API", "ffmpeg", "Vite", "Tailwind CSS"],
  },
  {
    role: "Graphic Designer & Video Editor",
    org: "Self-employed · Freelance",
    when: "Mar 2019 – Oct 2023",
    where: "Remote",
    sections: [
      ["Overview", "A freelance practice spanning print collateral, advertising, and social content, starting with campus design work during university and growing into ongoing client relationships across health, education, and personal branding. The throughline across all of it was translating a client's message into visual content that actually got engagement, not just looked polished."],
      ["Campus & Event Design", "Designed photography and video content for the college magazine Texplore, along with certificates for project expos, college symposiums, and the Microsoft Azure FDP, plus event materials for Ideate and Videate, technical newsletters for inter-college project expos, and billboards."],
      ["Client Work", [
        "Redesigned and produced an advertising campaign for a psychiatrist promoting mental wellbeing, reaching a large audience",
        "Designed Instagram posters and video/reel content for 3 ongoing clients, alongside content for a personal page",
        "Edited and produced YouTube videos for a client",
        "Designed posts and video content for an economics teacher's public-awareness campaign on the importance of economics",
      ]],
    ],
    stack: ["Adobe Photoshop", "Adobe Premiere Pro", "Blender", "Team Leadership", "Team Management", "Teamwork", "Social Media", "YouTube"],
  },
  {
    role: "AR Development Intern",
    org: "XRbit",
    when: "Apr 2021 – Apr 2022",
    where: "Chennai, India (Hybrid)",
    sections: [
      ["Overview", "An AR development internship split between public-facing cultural heritage work and accessibility-focused education technology, both using AR to make content tangible in a way a flat screen or textbook can't."],
      ["Highlights", [
        "Built AR-based web applications depicting India's historical and cultural heritage using Three.js, reaching an average of 2,000 visitors",
        "Developed a Unity-based AR application, integrated with Android Studio and built in C#, supporting the education of special needs individuals across three autistic schools",
      ]],
    ],
    stack: ["Augmented Reality (AR)", "Unity", "Three.js", "Team Management", "Research Skills"],
  },
  {
    role: "Frontend Developer Intern",
    org: "TCR Innovation",
    when: "Jan 2022 – Mar 2022",
    where: "Mumbai, India (Remote)",
    sections: [
      ["Overview", "A front-end internship focused on turning UI redesigns into measurable engagement gains, working across the full front-end build rather than just static pages."],
      ["Highlights", [
        "Designed and developed responsive websites with user-centric UI, boosting user clicks by 30%",
        "Enhanced user experience through intuitive interface design",
        "Collaborated with cross-functional teams to drive innovation and improve usability",
        "Developed control and monitoring platforms with a focus on user engagement and satisfaction",
      ]],
    ],
    stack: ["JavaScript", "Front-End Development", "CSS", "HTML", "Communication", "React.js"],
  },
];

function Experience() {
  return (
    <div className="exp-timeline">
      {jobs.map((j, i) => (
        <motion.details className="exp-item" key={j.org + j.role} {...reveal(i * 0.1)}>
          <summary className="exp-head">
            <h3>
              {j.role} <span className="purple">@ {j.org}</span>
            </h3>
            <span className="exp-when">{j.when} · {j.where}</span>
          </summary>

          <div className="exp-body">
            {j.sections.map(([heading, content]) => (
              <div key={heading}>
                <h4>{heading}</h4>
                {Array.isArray(content) ? (
                  <ul>{content.map((c) => <li key={c}>{c}</li>)}</ul>
                ) : (
                  <p>{content}</p>
                )}
              </div>
            ))}
            <div className="exp-stack">
              {j.stack.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        </motion.details>
      ))}
    </div>
  );
}

export default Experience;
