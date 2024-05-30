import React from 'react';
import Image from 'next/image';


const BagCategory = () => {
 

  return (
    <section className="p-3 w-full pt-[109px] bottom-0 ">
 
      <div className='flex justify-between'>
          
        <div>
          <Image src='/icons/allbag.png' height={124} width={90} alt="All Bags" />
        </div>
        <div>
          <Image src='/icons/vanitybag.png' height={124} width={90} alt="Vanity Bag" />
        </div>
        <div>
          <Image src='/icons/tote.png' height={124} width={90} alt="Tote" />
        </div>
        <div>
          <Image src='/icons/duffle.png' height={124} width={90} alt="Duffle" />
        </div>
        <div>
          <Image src='/icons/laptopsleeve.png' height={124} width={90} alt="Laptop Sleeve" />
        </div>
        <div>
          <Image src='/icons/messengerbag.png' height={124} width={90} alt="Messenger Bag" />
        </div>
        <div>
          <Image src='/icons/slingsbags.png' height={124} width={90} alt="Sling Bags" />
        </div>
        <div>
          <Image src='/icons/handbags.png' height={124} width={90} alt="Hand Bags" />
        </div>
        <div>
          <Image src='/icons/tote.png' height={124} width={90} alt="Tote" />
        </div>
       
        </div>
    </section>
  );
};

export default BagCategory;
