import React, {useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router';

export default function NotFound(){
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h2>Oops!  This page cannot be found :(</h2>
            <p>Redirecting to <Link href='/'>Homepage</Link></p>
        </div>
    )
}


