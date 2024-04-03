import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosApiFetch = () => {
    const [product,setProduct]=useState([])
    const [error,setError]=useState(null)
    const getProduct=async()=>{
        try{
            const raw=await axios.get("https://dummyjson.com/products")
        
        setProduct(raw.data.products)
        setError(null)
        }catch(error){
            setError(error)
            
        }
    }

    useEffect(() => {
        getProduct()
    }, [])
    console.log(product);
  return (
   <>
   {error && <h1>{error.message}</h1>}
   {

    product?.map((item,index)=>{
        return(
            <>
            <h1 key={index}>{item.brand}</h1>
            </>

        )
        
    })
   }
        
   </>
  )
}

export default AxiosApiFetch
