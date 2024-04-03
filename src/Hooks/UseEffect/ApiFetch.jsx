import React, { useEffect, useState } from 'react'

const ApiFetch = () => {
    const [product,setProduct]=useState([])
    const [error,setError]=useState(null)
    const getProduct=async()=>{
        try{
            const raw=await fetch("https://dummyjson.com/products")
        const response=await raw.json()
        setProduct(response.products)
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

    product.map((item)=>{
        return(
            <>
            <h1>{item.brand}</h1>
            </>

        )
        
    })
   }
        
   </>
  )
}

export default ApiFetch
