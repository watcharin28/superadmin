import React from 'react'
import Link from 'next/link'


function Navbar() {
  return (
    <nav className='w-full h-12 flex items-center'>
      <div className="container h-full mx-auto flex w-full justify-between items-center">
        <div>
          <Link href="/">EzPay</Link>
        </div>
        <ul className='flex'>
          {/* <li><Link href="/Register">Register</Link></li> */}
          <li className='ml-6'><Link href="/chooseregis">Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar