import Link from 'next/link'
import React from 'react'

export default function PageDotnFound() {
    return (
        <div className='flex flex-col w-screen h-screen justify-center items-center bg-gradient-to-b  from-blue-950 to-slate-800 text-white'>
            <span className='text-3xl font-extrabold'>404</span>
            <span className='uppercase mb-4'>page dont found</span>
            <Link href={'/'} className='text-2xl font-extrabold hover:text-yellow-200 uppercase'>Go back home</Link>
        </div>
    )
}
