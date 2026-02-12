import Link from "next/link"
import { resumeFilePath } from "@/data"

const ResumePage = () => {
  const resumePreviewSrc = `${resumeFilePath}#view=FitH&navpanes=0&scrollbar=0`

  return (
    <main className="main-screen">
      <div className="screen">
        <section className="section-stack flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h1 className="display-font text-[1.45rem] font-semibold text-[var(--gb-fg0)]">
              Resume
            </h1>
            <div className="flex flex-wrap items-center gap-2.5">
              <Link href="/" className="btn">
                Back Home
              </Link>
              <a className="btn" href={resumeFilePath} target="_blank" rel="noreferrer">
                Open PDF
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-[var(--gb-border)] bg-[rgba(26,15,8,0.9)]">
            <iframe
              title="Resume preview"
              src={resumePreviewSrc}
              className="h-[78vh] w-full"
            />
          </div>
        </section>
      </div>
    </main>
  )
}

export default ResumePage
