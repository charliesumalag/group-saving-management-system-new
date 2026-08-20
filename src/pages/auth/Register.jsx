import React, { useState } from 'react'
import AuthLogo from '../../components/auth/AuthLogo'
import EmailInput from '../../components/auth/EmailInput';
import InputField from '../../components/auth/InputField';
import PasswordInput from '../../components/auth/PasswordInput';
import RememberMe from '../../components/auth/RememberMe';
import Button from '../../components/ui/Button';

const Register = () => {
  const [fullNameFocused, setFullNameFocused] = useState(false);
  const [emailFocused,setEmailFocused] = useState(false);
  const [coopFocused, setCoopFocused] = useState(false);
  const [phoneNumberFocused,setPhoneNumberFocused] = useState(false)
  const [selectedRole, setSelectedRole] = useState('admin');
  return (
    <div className='min-h-screen bg-[linear-gradient(-40deg,#090D1A,#1E293B)] w-full flex flex-col justify-center items-center font-sans'>
      <div className='w-[500px] h-[719px] rounded-[24px] bg-white p-[40px] '>
        <AuthLogo />
        <div className='mt-[16px]'>
          <h2 className='text-[#0F172A] font-bold font-outfit text-[24px] '>Create your cooperative account</h2>
          <p className='text-gray-500 font-inter text-[14px] font-thin'>Join or build a verified savings circle for transparent group finance</p>
        </div>
        <div className='grid grid-cols-2 grid-rows-2  w-full mt-[24px] gap-y-[16px] gap-x-[20px]'>
          <InputField type='text' placeholder='Sarah Jenkins' label='FULL NAME' focused={fullNameFocused} setFocused={setFullNameFocused} icon='fa-regular fa-user' />
          <InputField type='text' placeholder='Grab Nankga' label='COOPERTIVE/GROUP' focused={coopFocused} setFocused={setCoopFocused} icon='fa-solid fa-lines-leaning' />
          {/* <EmailInput setEmailFocused={setEmailFocused} emailFocused={emailFocused} /> */}
          <InputField type='email' placeholder='name@yahoo.com' label='EMAIL ADDRESS' focused={emailFocused} setFocused={setEmailFocused} icon='fa-regular fa-envelope' />
          <InputField type='tel' placeholder='+639-623-229-295' label='PHONE NUMBER' focused={phoneNumberFocused} setFocused={setPhoneNumberFocused} icon='fa-solid fa-phone' />
        </div>
        <div className='mt-[20px]'>
          <p className='font-inter font-semibold text-[11px] tracking-[0.5] uppercase text-[#475569]'>Your Role in Cooperative</p>
          <div className='grid grid-cols-2 gap-[12px] mt-[8px]'>
            <div onClick={() => setSelectedRole('admin')} className={`p-[12px] border-[2px] rounded-[12px] cursor-pointer ${selectedRole === 'admin' ? 'border-[#FF6B57]' : '#E2E8F0'} `}>
              <div className='flex justify-between '>
                <h3 className='font-inter text-[13px] font-bold text-[#0F172A]'>Co-op Admin</h3>
                <span className={`h-[14px] w-[14px] rounded-full ${selectedRole === 'admin' ? 'bg-[#FF6B57]' : '#E2E8F0'}`}></span>
              </div>
              <p className='font-inter text-[11px] text-[#475569] '>Can create groups and manage savings cycles</p>
            </div>
            <div onClick={() => setSelectedRole('member')} className={`p-[12px] border-[2px] rounded-[12px] cursor-pointer ${selectedRole === 'member' ? 'border-[#FF6B57]' : '#E2E8F0'}`}>
              <div className='flex justify-between '>
                <h3 className='font-inter text-[13px] font-bold text-[#0F172A]'>Group Member</h3>
                <span className={`h-[14px] w-[14px] rounded-full ${selectedRole === 'member' ? 'bg-[#FF6B57]' : '#E2E8F0'}`}></span>
              </div>
              <p className='font-inter text-[11px] text-[#475569] '>Can join active saving circles and make deposits</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-[12px] mt-[20px]'>
          <PasswordInput placeholder='Min. 8 characters' />
          <PasswordInput unlockPass={true} label='CONFIRM PASSWORD' placeholder='Repeat password'  />
        </div>
        <div className='mt-[20px]'>
          <RememberMe label='I Agree to the Terms of Service and Privaty Policy'/>
        </div>
        <div className='mt-[20px]'>
          <Button label='Create Account' />
        </div>
        <a href="" className='font-inter text-[14px] text-[#475569] text-center inline-block mt-[20px] w-full '>Already have an account? <span className='font-semibold text-[#FF6B57] '>Sign in</span></a>
      </div>
    </div>
  )
}

export default Register