import React, { useState } from 'react';
import AuthLogo from '../../components/auth/AuthLogo';
import EmailInput from '../../components/auth/EmailInput';
import PasswordInput from '../../components/auth/PasswordInput';
import RememberMe from '../../components/auth/RememberMe';
import AuthDivider from '../../components/auth/AuthDivider';



const Login = () => {
    const [email, setEmail] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    function togglePassword() {
        setShowPassword(prev => !prev);
    }

    function rememberMeToggle(){
        setRememberMe((prev) => !prev)
    }

  return (
    <div className='min-h-screen bg-[linear-gradient(-40deg,#090D1A,#1E293B)] w-full flex flex-col justify-center items-center font-sans'>
        <div className='w-[440px] h-[592px] rounded-[24px] bg-white p-[40px] ' >
            <AuthLogo />
            <div className='mt-[16px]'>
                <h2 className='text-[#0F172A] font-bold font-outfit text-[24px] '>Welcome back</h2>
                <p className='text-gray-500 font-inter text-[14px]'>Sign in to manage and track savings</p>
            </div>
            <form action="" className='mt-[24px] flex flex-col gap-[20px]'>
                <EmailInput emailFocused={emailFocused} setEmailFocused={setEmailFocused}  />
                <PasswordInput passwordFocused={passwordFocused} setPasswordFocused={setPasswordFocused} togglePassword={togglePassword} showPassword={showPassword} setShowPassword={setShowPassword}  />
                <div className='flex justify-between items-center'>
                    <RememberMe rememberMe={rememberMe} rememberMeToggle={rememberMeToggle} />
                    <a href="#" className='font-inter text-[13px] text-[#FF6B57] font-semibold'>Forgot password?</a>
                </div>
                <button type='submit' className='h-[50px] w-full bg-[#FF6B57] rounded-[12px] text-white text-[15px] font-inter font-bold cursor-pointer'>Sign In</button>
            </form>
            <AuthDivider />
            <button className='h-[50px] rounded-[12px] mt-[14px] border-1 border-[#E2E8F0] w-full font-inter font-semibold text-[15px] text-[#475569] cursor-pointer '>Create cooperative account</button>
        </div>
    </div>
  )
}

export default Login