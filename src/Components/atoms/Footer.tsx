import React from 'react'
import whitelogo from "@/Images/whitelogo.png"
import Image from 'next/image'
import IconComponent from './Container/IconComponent'

const Footer = () => {
  return (
    <div style={{backgroundColor:"#051C34"}} className='p-20 mt-3 flex'>
      
      <div className='w-1/3'>
        <Image src={whitelogo} alt="whitelogo" height={150} width={150}/>
        <div className='flex flex-col py-8 gap-5 '>
        <div className='flex items-center gap-2'>
        <IconComponent
          icon="carbon:location"
          className="text-primary h-8 w-8 text-gray-500"
        />
        <div className='text-xs text-gray-400'>
        <p>25566 Hc 1, Glenallen, </p>
        <p>Alaska, 99588, USA</p>
        </div>
        </div>
        <div className='flex items-center gap-2'>
        <IconComponent
          icon="ion:call"
          className="text-primary h-7 w-7 text-gray-500"
        />
        <p className='text-xs text-gray-400'>+603 4784 273 12</p>
        </div>
        <div className='flex items-center gap-2'>
        <IconComponent
          icon="ic:outline-mail"
          className="text-primary h-8 w-8 text-gray-500"
        />
        <p className='text-xs text-gray-400'>Washcars@gmail.com</p>
        </div>
        </div>
      </div>
      <div className='text-gray-400 w-1/5'>
        <h2 className='text-xl font-semibold text-white pb-8'>Our Product</h2>
        <div className='flex flex-col gap-2 text-sm'>
        <p>Career</p>
        <p>Car</p>
        <p>Packages</p>
        <p>Features</p>
        <p>Priceline</p>
        </div>
      </div>
      <div className='text-gray-400 w-1/5'>
        <h2 className='text-xl font-semibold text-white pb-8'>Resources</h2>
        <div className='flex flex-col gap-2'>
        <p>Download</p>
        <p>Help Centre</p>
        <p>Guides</p>
        <p>Partner Network</p>
        <p>Cruises</p>
        <p>Developer</p>
        </div>
      </div>
      <div className='text-gray-400 w-1/5'>
        <h2 className='text-xl font-semibold text-white pb-8'>About Washcars</h2>
        <div className='flex flex-col gap-2'>
        <p>Why choose us</p>
        <p>Our Story</p>
        <p>Investor Relations</p>
        <p>Press Center</p>
        <p>Advertise</p>
        </div>
      </div>
      <div className='text-gray-400'>
        <h2 className='text-xl font-semibold text-white pb-8'>Follow Us</h2>
        <div className='flex gap-2 items-center'>
        <IconComponent
          icon="ic:baseline-facebook"
          className="text-primary h-8 w-8 text-gray-500"
        />
        <IconComponent
          icon="mdi:instagram"
          className="text-primary h-8 w-8 text-gray-500"
        />
        <IconComponent
          icon="mdi:youtube"
          className="text-primary h-8 w-8 text-gray-500"
        />
        </div>
      </div>
      
    </div>
  )
}

export default Footer
