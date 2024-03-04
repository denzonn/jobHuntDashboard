'use client'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {
  const route = useRouter()
  const {data: session} = useSession()

  return (
    <div className='pb-3 mb-8 border-b border-border flex flex-row items-center justify-between'>
        <div>
            <div>Company</div>
            <div className='font-semibold'>{session?.user?.name}</div>
        </div>
        <div>
            <Button className='py-3 px-6' onClick={() => route.push('/post-a-job')}>
                <PlusIcon className='mr-2 w-4 h-4'/>
                Post a Job
            </Button>
        </div>
    </div>
  )
}

export default Header