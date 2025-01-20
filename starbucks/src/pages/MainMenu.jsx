import React from 'react'
import ProductCategories from '../components/Menu/ProductCategories'
import DetailCategories from '../components/Menu/DetailCategories'

const MainMenu = () => {
  return (
    <>
      <div className='w-[25%]'>
        <ProductCategories />
      </div>
      <div className='w-[75%]'>
        <DetailCategories />
      </div>
    </>
  )
}

export default MainMenu