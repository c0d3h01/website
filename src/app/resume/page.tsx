import { redirect } from "next/navigation"
import { resumeFilePath } from "@/data"

const ResumePage = () => {
  redirect(resumeFilePath)
}

export default ResumePage
