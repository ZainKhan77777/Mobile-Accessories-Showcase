import React from 'react'
import Products from '@/components/Products'
import Title from '@/components/Title'

const getdata = async()=>{

    const res = await fetch('https://jsonserver.reactbd.com/watch')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()

}

const Watches =  async() => {
    const products = await getdata();
    return (
      <div>
        <Title title={'Get Your Favourite PhoneCase'}/>
        <Products products={products}/>
      </div>
    )
}

export default Watches
