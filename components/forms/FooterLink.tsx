import Link from 'next/link'
import React from 'react'

const FooterLink = ({ text, href, linkText }:FooterLinkProps) => {
  return (
    <div className='text-center pt-4'>
        <p className='text-sm text-gray-500'>
            {text}{` `}
            <Link href={href} className='text-gray-400 font-medium hover:text-yellow-400 hover:underline transition-colors'>
            {linkText}
            </Link>
        </p>
    </div>
  )
}

export default FooterLink