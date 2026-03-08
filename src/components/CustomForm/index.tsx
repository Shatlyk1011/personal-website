"use client"
import { ChangeEvent, useEffect } from "react"

import CustomInput from "../ui/CustomInput"
import useFormSubmit from "@/composables/useFormSubmit"
import { IContactForm } from "@/shared/types"
import { useZodForm } from "@/shared/zod"

const CustomForm = () => {
  const { form, setForm, submit, isLoading } = useFormSubmit()

  const { errors, handleSubmit } = useZodForm(form, submit)

  const handleInput = (type: keyof IContactForm, value?: string | string[][]) => {
    setForm((prev) => ({ ...prev, [type]: value }))
  }

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    handleInput(name as keyof IContactForm, value)
  }

  useEffect(() => {
    document.body.style.overflowY = "auto"
  }, [])

  return (
    <form className="rounded-[2rem] bg-[#121212] px-[4rem] pt-[4rem] pb-[4rem]" onSubmit={handleSubmit}>
      <div className="mb-[2.4rem] flex flex-col gap-[2.4rem]">
        <CustomInput
          errorMsg={errors?.name}
          name="name"
          placeholder="Your name *"
          autoFocus={true}
          onChange={onInputChange}
          value={form.name}
        />
        <CustomInput
          errorMsg={errors?.email}
          name="email"
          placeholder="Email address *"
          onChange={onInputChange}
          value={form.email}
        />
        <CustomInput
          name="organization"
          placeholder="Organization name"
          onChange={onInputChange}
          value={form.organization}
        />
        <CustomInput
          name="currentWebsite"
          placeholder="Current website (if applicable)"
          onChange={onInputChange}
          value={form.currentWebsite}
        />
        <CustomInput
          name="description"
          as="textarea"
          placeholder="What is the main purpose of your project"
          onChange={onInputChange}
          value={form.description}
        />
      </div>

      <button
        disabled={isLoading}
        className="mb-[1.6rem] flex h-[4.8rem] w-full items-center justify-center rounded-[1.6rem] bg-text-2 text-[1.8rem] text-white transition-colors duration-200 ease-linear hover:bg-primary hover:shadow-[0_10px_20px_rgba(5,_38,_85,_0.1)] focus-visible:bg-primary disabled:bg-text-2 disabled:text-white/40"
        type="submit"
      >
        Submit
      </button>
      <p className="text-center text-[1.4rem] tracking-[-0.04em] text-gray-3/80">
        This site is protected by{" "}
        <a className="text-gray-2" rel="noopener" target="_blank" href="https://policies.google.com/privacy">
          Google Privacy Policy
        </a>{" "}
        and{" "}
        <a className="text-gray-2" rel="noopener" target="_blank" href="https://policies.google.com/terms">
          Terms
        </a>
        .
      </p>
    </form>
  )
}
export default CustomForm
