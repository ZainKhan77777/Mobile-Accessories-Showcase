import Products from '@/components/Products'
import Title from '@/components/Title'
import React from 'react'

const getdata = async()=>{

    const res = await fetch('https://jsonserver.reactbd.com/phonecase')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()

}

const PhoneCase = async () => {
  
  const products = await getdata();
  return (
    <div>
      <Title title={'Get Your Favourite PhoneCase'}/>
      <Products products={products}/>
    </div>
  )
}

export default PhoneCase
