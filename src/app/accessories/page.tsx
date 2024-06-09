import React from 'react'
import Products from '@/components/Products'
import Title from '@/components/Title'
const getdata = async()=>{

    const res = await fetch('https://jsonserver.reactbd.com/accessories')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()

}

const Accessories = async () => {
    const products = await getdata();
    return (
      <div>
        <Title title={'Get Your Favourite Accessories'}/>
        <Products products={products}/>
      </div>
    )
}

export default Accessories
