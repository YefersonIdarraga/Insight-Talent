import React, { useState } from 'react'
import Card from './Card'
import AddCard from './AddCard'

const ProductsModule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
      setIsModalOpen(true)
  }

  const handleCloseModal = () => {
      setIsModalOpen(false)
  }
  return (
    <section className='container'>
        <Card />
        <button className='add-product-btn' onClick={handleOpenModal}><i className="fa-solid fa-plus"></i>Add Product</button>
        {isModalOpen && <AddCard onClose={handleCloseModal}/>}
    </section>
  )
}

export default ProductsModule