import React from 'react'
import MenuProduct from '../components/Menu/MenuProduct'
import ProductCategories from '../components/Menu/ProductCategories'

const MenuPage = () => {
  return (
    <>
      <div className='w-[25%]'>
        <ProductCategories />
      </div>
      <div className='w-[75%]'>
        <MenuProduct />
      </div>
    </>
  )
}

export default MenuPage