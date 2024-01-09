import React from 'react'

function Card({head, num}) {
  return (
    <div className='card-contanier'>
            <div className='card-heading'>{head}</div>
            <div className='card-number'>{num}</div>
        </div>
  )
}

export default Card