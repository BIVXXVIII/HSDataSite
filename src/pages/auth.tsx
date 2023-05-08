import Layaout from '@/components/Layaout'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'


export default function auth() {
    const { data: session } = useSession()
    if (session) {
        return (
            <Layaout>logined</Layaout>
        )
    }
    return <Layaout>
        <div className='w-full h-full flex justify-center items-center flex-grow'>
            <div className='bg-slate-950/50 pt-10 pb-20 px-20  rounded-lg flex flex-col text-center justify-center items-center gap-3'>
                <span className='text-blue-100/80 text-2xl'>Login with battle net account</span>
                <button
                    onClick={() => { signIn() }}
                    className='bg-gradient-to-b from-blue-500 to-blue-900 px-4 py-2 rounded-lg hover:scale-110 hover:shadow-md duration-100 mt-4 mb-3'>Login with b-net</button>
                <span className='text-blue-300/50 max-w-[300px]'><i>Логін поки не працює, через проблеми з провайдером battle.net</i></span>
            </div>
        </div>
    </Layaout>
}
