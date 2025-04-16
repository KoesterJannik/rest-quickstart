import React from 'react'
import SiteHeader from '../navigation/public/siteHeader'
type Props = {
    children: React.ReactNode
}

function PublicLayout({ children }: Props) {
  return (
    <div className='container mx-auto'>
        <SiteHeader />
        {children}
    </div>
  )
}

export default PublicLayout