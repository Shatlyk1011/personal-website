import { useState } from "react"
import axios from "axios"

import { toast } from "sonner"

import { IContactForm } from "@/shared/types"

const formInitialState: IContactForm = {
  name: "",
  email: "",
  organization: "",
  currentWebsite: "",
  description: "",
}

function getCurrentTime() {
  const now = new Date()

  const day = String(now.getDate()).padStart(2, "0")
  const month = String(now.getMonth() + 1).padStart(2, "0") // Months are 0-indexed
  const year = now.getFullYear()

  const hours = now.getHours().toString().padStart(2, "0")
  const minutes = now.getMinutes().toString().padStart(2, "0")
  const seconds = now.getSeconds().toString().padStart(2, "0")

  const formattedDate = `${day}-${month}-${year}, ${hours}:${minutes}:${seconds}`
  return formattedDate
}

const useFormSubmit = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState(formInitialState)

  const submit = async () => {
    setIsLoading(true)
    toast.loading("Sending request...", { id: "loading-toast-id" })

    const time = getCurrentTime()

    const data = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      template_params: { ...form, time },
    }
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)

      if (res.status === 200) {
        setForm(formInitialState)
        toast.success("Success. I will contact you shortly", {
          style: { background: "#0c0c0c" },
          id: "loading-toast-id",
          duration: 7000,
        })
      }
    } catch {
      toast.error("Что то пошло не так... Попробуйте еще раз", { id: "loading-toast-id" })
    } finally {
      setIsLoading(false)
    }
  }

  return { submit, setForm, form, isLoading }
}

export default useFormSubmit
