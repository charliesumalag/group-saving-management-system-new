import React from 'react'


const Login = () => {
  return (
    <>
    <div className='w-full px-6 flex flex-col gap-4 absolute top-4'>
        <div className='flex gap-2'>
            <img src="wallet-solid.svg" alt=""  className='w-[16px]' />
            <h1 className='text-xl italic'>Group Saving</h1>
        </div>
        <hr className=' border-gray-200' />
    </div>
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 font-sans">
      <div className="w-full max-w-md ">
        <div className='mb-6'>
            <p className='text-4xl'>Login</p>
            <p className='text-base text-slate-700'>Hi, welcome back 👏 </p>
        </div> 
        <form className="space-y-5">
            <div>
                <label htmlFor="username" className="mb-2 block text-base font-medium text-slate-700">Username</label>
                <input id="username" name="username" type="text" placeholder="Enter your username" className="w-full rounded-sm border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
            </div>
            <div>
                <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="password" className="block text-base font-medium text-slate-700"> Password</label>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700"> Forgot password?</a>
                </div>
                <input id="password" name="password" type="password" placeholder="Enter your password" className="w-full rounded-sm border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"/>
            </div>

            <div className="flex items-center gap-2">
                <input id="remember" name="remember" type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"/>
                <label htmlFor="remember" className="text-base text-slate-600">Remember me</label>
            </div>
            <button type="submit" className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Sign In</button>
        </form>
        <p className="mt-8 text-center text-xs text-slate-400">Group Saving Management System</p>
      </div>
    </div>
    </>
  )
}

export default Login