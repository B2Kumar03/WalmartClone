import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export const ProductDetails = () => {
    const [isLoading,setLoading]=useState(true)
    useEffect(()=>{
      setTimeout(()=>{
           setLoading((prev)=>!prev)
      },2000)
    },[])
  
  if(isLoading){
    return <Box padding='6' boxShadow='lg' bg='white'>
    <SkeletonCircle size='10' />
    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
  </Box>
  }
  return (
    <div>ProductDetails</div>
  )
}
