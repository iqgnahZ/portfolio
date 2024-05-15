import React from 'react'
import './card.css'
import { v4 as uuid } from 'uuid'
import PropTypes from 'prop-types'

const Card = ({icon, title, features}) => {
  return (
    <div className='card'>
      <div className="card__icon">{React.createElement(icon)}</div>
      <div className="card__title">{title}</div>
      <div className="card__feature">
        {features?.map(feature=>(
          <p key={uuid()}>{feature}</p>
        ))}
      </div>
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
}

export default Card