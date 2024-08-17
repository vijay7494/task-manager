import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/nextjs'
import React from 'react'

export const page = () => {
  return (
    <div>
        
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <SignedOut>
          <SignIn/>
        </SignedOut>

    </div>
  )
}
