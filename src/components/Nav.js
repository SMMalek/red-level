import React from 'react'
import Logo from './Logo.js'

const Nav = () => {
  return (
    <div className="flex flex-row justify-between w-full h-[40%] bg-redmenta">
      <Logo />
      <h1 className="text-3xl my-auto mr-8 text-[#fffdfb] font-bold tracking-widest">Ask</h1>
    </div>
  );
}

export default Nav
