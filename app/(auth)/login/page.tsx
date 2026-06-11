'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <Image 
      src={'https://chaicode.com/assets/white-2-pi8ziUjj.webp'}
      alt='JWT image here'
      height={200}
      width={200}
      />
      <h1>Login Page</h1>
      <Link href={'register'}>Go to register page</Link>
    </div>
  )
}

export default page
