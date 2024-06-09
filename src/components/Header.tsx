import React from 'react'

const Header = () => {
  return (
    <div className="w-full h-20 bg-gray-950 text-gray-200 sticky top-0 z-50">
    <div className="max-w-screen-xl mx-auto h-full flex items-center justify-center gap-5">
      <a className="uppercase text-sm hover:text-white duration-200" href="/">Phone</a>
      <a className="uppercase text-sm hover:text-white duration-200" href="/phonecase">Phone Case</a>
      <a className="uppercase text-sm hover:text-white duration-200" href="/watches">Watches</a>
      <a className="uppercase text-sm hover:text-white duration-200" href="/accessories">Accessories</a>
    </div>
  </div>
  )
}

export default Header
