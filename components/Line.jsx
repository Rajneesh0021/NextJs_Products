import React from 'react'
import Image from 'next/image'
const Line = () => {
  return (
    <section className="flex justify-between p-3">
    <div>Bags . Bagpacks</div>
    <div className="flex">
      <div className="px-3">
      13 products 
      </div>
     

    <Image src='/icons/share.png'
    height={16}
    width={16}/>

   </div>
  </section>
  )
}

export default Line