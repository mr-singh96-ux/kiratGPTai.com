import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
        <Search />
        <input type='text' placeholder='search'
        className='outline-none'/>
      </div>
      <div className='flex gap-5 items-center'>
      <h2 className='bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-700 p-2 rounded-full text-xs text-white px-4 shadow-lg'>
  🎉 Unlock the Future of AI Content – Always Free! 🚀
</h2>

        <UserButton />
      </div>
    </div>
  )
}

export default Header