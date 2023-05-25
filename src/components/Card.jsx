import React, { useState, useEffect } from 'react'
import card_img from '../assets/img-card.jpg'
import { collection, doc, getDocs, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/db'

const Card = () => {
    const [expandedCards, setExpandedCards] = useState([])
    const handleExpanded = (index) => {
        const newExpandedCards = [...expandedCards]
        newExpandedCards[index] = !newExpandedCards[index]
        setExpandedCards(newExpandedCards)
    }

    const [cards, setCards] = useState([])
    const tableCards = collection(db, "cards")

    const listCards = async () => {
        const dataCards = await getDocs(tableCards)
        console.log(dataCards)
        setCards(dataCards.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        console.log(cards)
    }

    useEffect(() => {
        listCards()
    }, [])
  return (
    <section className='container-cards'>
        {cards.map((card, index) => (
        <section className='card' key={index}>
            <section className='container-img'>
                <img className='card-img' src={`${card.imageURL}`} alt="product-image" />
            </section>
            <section id='expand' className={`container-title ${expandedCards[index] ? 'expanded' : ''}`}>
                <h1 className='product-title'>
                    {card.title}
                </h1>
                <div className='container-description'>
                    <p className='description'>
                        {card.description}
                    </p>
                    <button className='subscribe'>
                        <a href="#">Subscribe</a>
                    </button>
                </div>
            <i className="fa-solid fa-arrow-down" onClick={() => handleExpanded(index)} title={`${expandedCards[index] ? 'Contract' : 'Expand'}`}></i>
            </section>
        </section>
        ))}
    </section>
  )
}

export default Card