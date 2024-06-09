
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Title from "@/components/Title";

const getdata = async()=>{

    const res = await fetch('https://jsonserver.reactbd.com/phone')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()

}


export default async function Home() {
  const products = await getdata();
  // console.log(products);
  return (
    <div>
      <Header />
      <Title title={"Get Your Favourite Phone"} />
      <Products products={products} />
      <Footer />
    </div>

  );
}
