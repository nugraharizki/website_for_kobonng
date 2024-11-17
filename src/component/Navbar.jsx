import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react'


const Navbar = () => {
  const [hamburger, setHamburger] = useState('w-10 h-[3px] bg-hijauGelap my-2')
  const [hamburger2, setHamburger2] = useState('w-8 h-[3px] bg-hijauGelap my-2')
  const [IsActive, setIsActive] = useState(false)
  const [navActive, setNavActive] = useState('-translate-x-full')

  const hamburgerActive = () =>{
    setIsActive((previousState) => {
      const newState = !previousState
      if(newState){
        setHamburger('w-10 h-[3px] bg-hijauGelap my-3 rotate-[23deg] origin-top-left transition-all duration-200 ease-in')
        setHamburger2('w-10 h-[3px] bg-hijauGelap my-3 -rotate-[23deg] origin-bottom-left transition-all duration-200 ease-in')
        setNavActive('translate-x-0 transition-all duration-200 ease-in')
      } else{
        setHamburger('w-10 h-[3px] bg-hijauGelap my-2 transition-all duration-200 ease-in')
        setHamburger2('w-8 h-[3px] bg-hijauGelap my-2 transition-all duration-200 ease-in')
        setNavActive('-translate-x-full transition-all duration-200 ease-in')
      }
      return newState
    })
  }
  return (
    <>
    <header className='w-screen border-b relative bg-krem'>
        <nav className='px-6 py-12 flex justify-between items-center lg:px-16'>
            <div id='logo' className='flex gap-4 justify-center items-center'>
                <img src={logo} alt="" className='w-16 h-16'/>
                <div>
                  <p className='-mb-1 uppercase text-hijauGelap'>Pondok Pesantren</p>
                  <p className='uppercase font-bold text-hijauGelap'>Nurul Hikmah Assalafy</p>
                </div>
            </div>
            <div className='cursor-pointer z-10 lg:hidden' onClick={hamburgerActive}>
              <div className={hamburger}></div>
              <div className={hamburger2}></div>
            </div>
            <div className={`absolute top-0 left-0 border w-screen h-screen bg-[#f5d44fda] py-28 ${navActive} lg:hidden`}>
                <ul className='flex flex-col justify-center text-center'>
                  <li className='text-hijauGelap border-y pt-1 border-hijauGelap uppercase py-2 transition-all ease-in cursor-pointer duration-200 hover:bg-hijauGelap hover:text-krem'><a href="">Beranda</a></li>
                  <li className='text-hijauGelap border-b border-hijauGelap uppercase py-2 transition-all ease-in cursor-pointer duration-200 hover:bg-hijauGelap hover:text-krem'><a href="">Profil</a></li>
                  <li className='text-hijauGelap border-b border-hijauGelap uppercase py-2 transition-all ease-in cursor-pointer duration-200 hover:bg-hijauGelap hover:text-krem'><a href="">Program</a></li>
                  <li className='text-hijauGelap border-b border-hijauGelap uppercase py-2 transition-all ease-in cursor-pointer duration-200 hover:bg-hijauGelap hover:text-krem'><a href="">Pendaftaran</a></li>
                </ul>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex gap-4 justify-center text-center'>
                  <li className='text-hijauGelap border-hijauGelap uppercase hover:text-green-900'><a href="">Beranda</a></li>
                  <li className='text-hijauGelap border-hijauGelap uppercase hover:text-green-900'><a href="">Profil</a></li>
                  <li className='text-hijauGelap border-hijauGelap uppercase hover:text-green-900'><a href="">Program</a></li>
                  <li className='text-hijauGelap border-hijauGelap uppercase hover:text-green-900'><a href="">Pendaftaran</a></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar