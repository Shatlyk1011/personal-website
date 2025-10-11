'use client'
import { ChangeEvent } from 'react';

import CustomInput from '../ui/CustomInput';
import useFormSubmit from '@/composables/useFormSubmit';
import { IContactForm } from '@/shared/types';
import { useZodForm } from '@/shared/zod';

const CustomForm = () => {

  const { form, setForm, submit, isLoading } = useFormSubmit()

  const { errors, handleSubmit } = useZodForm(form, submit)

  const handleInput = (type: keyof IContactForm, value?: string | string[][]) => {
    setForm((prev) => ({ ...prev, [type]: value }))
  }

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    handleInput(name as keyof IContactForm, value)
  }

  // useEffect(() => {
  //   document?.addEventListener('wheel', (e) => {
  //     if (e.ctrlKey) {
  //       e.preventDefault();
  //     }
  //   }, { passive: false });
  // }, [])
  return (
  <form className="bg-[#121212] pt-[4rem] pb-[4rem] px-[4rem] rounded-[2rem]" onSubmit={handleSubmit}>
    <div className='mb-[3.2rem] flex flex-col gap-[2.4rem]'>
      <CustomInput errorMsg={errors?.name} name="name" placeholder='Your name *' autoFocus={true} onChange={onInputChange} value={form.name}  />
      <CustomInput errorMsg={errors?.email} name="email" placeholder='Email address *' onChange={onInputChange} value={form.email} />
      <CustomInput name="organization" placeholder='Organization name' onChange={onInputChange} value={form.organization} />
      <CustomInput name="currentWebsite" placeholder='Current website (if applicable)' onChange={onInputChange} value={form.currentWebsite} />
      <CustomInput name="description" as='textarea' placeholder='What is the main purpose of your project' onChange={onInputChange} value={form.description} />
    </div>

    <button disabled={isLoading} className='text-[1.8rem] w-full rounded-[1.6rem] bg-text-2 text-white duration-200 ease-linear hover:bg-primary disabled:bg-text-2 disabled:text-white/40 focus-visible:bg-primary hover:shadow-[0_10px_20px_rgba(5,_38,_85,_0.1)] mb-[1.6rem] transition-colors flex items-center justify-center h-[4.8rem]' type="submit">Submit</button>
    <p className='text-center text-gray-3/80 text-[1.4rem] tracking-[-0.04em]'>
      This site is protected by <a className='text-gray-2' rel="noopener" target='_blank' href="https://policies.google.com/privacy">Google Privacy Policy</a> and <a className='text-gray-2' rel="noopener" target='_blank' href="https://policies.google.com/terms">Terms</a>.
    </p>

  </form>
  )
};
export default CustomForm