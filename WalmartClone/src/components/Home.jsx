import React from 'react'
import { Main } from '../pages/Main'
import Heading1 from '../pages/Heading1'
import Products1 from '../pages/Products1'
import { LineHorizontal } from './LineHorizontal'
import Product2 from './Product2'
import Product3 from './Product3'
import Heading3 from '../pages/Heading3'
import Product4 from './Product4'
import Product5 from './Product5'
import { Product6 } from './Product6'
import Heading4 from '../pages/Heading4'
import Product7 from '../pages/Product7'


const Home = () => {
  return (
    <>
    
    <Main />
      <Heading1 />
      <Products1 />
      <LineHorizontal/>
      <Product2/>
      <Product3/>
      <Heading3 />
      <Product4/>
      <LineHorizontal/>
      <Product5/>
      <Heading3/>
      <Product6/>
      <Heading4/>
      <Product7/>
    </>
  )
}

export default Home