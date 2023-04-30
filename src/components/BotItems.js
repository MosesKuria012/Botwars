import React, { useEffect, useState } from 'react'
import { bots } from '../data'
import '../index.css'

const BotItems = () => {
  const [botData, setBotData] = useState([])
  const [showDetailsIndex, setShowDetailsIndex] = useState(-1)
  const [selectedCard, setSelectedCard] = useState([])

  useEffect(() => {
    setBotData(bots)
  }, [])

  const handleClick = (index) => {
    setShowDetailsIndex(index === showDetailsIndex ? -1 : index)
  }

  const handleCardClick = (bot) => {
    if (selectedCard.includes(bot)) {
      alert('This card is already selected!')
    } else {
      setSelectedCard([...selectedCard, bot])
    }
  }

  const handleDeleteCard = (card) => {
    const newSelectedCards = selectedCard.filter((c) => c.id !== card.id)
    setSelectedCard(newSelectedCards)
  }

  return (
    <div>
      <div className="container">
        <h1 className="header">NFT BOTWARS</h1>
        <hr />
        <br />
        {selectedCard.length > 0 && (
          <div className="selected-card">
            <h2 className="selected-cards">Selected Cards</h2>
            <br />
            {selectedCard.map((card) => (
              <div className="cards" key={card.id}>
                <img src={card.avatar_url} alt={card.name} />
                <h2>Name: {card.name}</h2>
                <p>Health: {card.health}</p>
                <p>Damage: {card.damage}</p>
                <p>Armor: {card.armor}</p>
                <p>Class: {card.bot_class}</p>
                <p>Catchphrase: {card.catchphrase}</p>
                <p>Creation: {card.created_at}</p>
                <p>Update: {card.updated_at}</p>
                <button className="btn" onClick={() => handleDeleteCard(card)}>
                  De-Enlist
                </button>
              </div>
            ))}
          </div>
        )}

        <hr />
        <br />

        <div className="bots">
          {botData.map((bot, index) => (
            <div
              key={index}
              className={`card ${selectedCard.includes(bot) ? 'selected' : ''}`}
            >
              <img src={bot.avatar_url} alt={bot.name} />
              <h1 className="name">Name: {bot.name}</h1>
              {showDetailsIndex === index && (
                <>
                  <p>Health: {bot.health}</p>
                  <p>Damage: {bot.damage}</p>
                  <p>Armor: {bot.armor}</p>
                  <p>Class: {bot.bot_class}</p>
                  <p>Catchphrase: {bot.catchphrase}</p>
                  <p>Creation: {bot.created_at}</p>
                  <p>Update: {bot.updated_at}</p>
                </>
              )}
              <button className="btn" onClick={() => handleClick(index)}>
                {showDetailsIndex === index ? 'Hide Details' : 'Show Details'}
              </button>
              <button className="btn" onClick={() => handleCardClick(bot)}>
                Enlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default BotItems
