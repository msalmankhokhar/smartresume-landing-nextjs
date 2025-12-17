import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return (
        <Image
            alt='smart resume logo'
            src={'/images/logos/text-only-logo.png'}
            width={180}
            height={100}
            className="h-auto mt-2.5"
        />
    )
}
