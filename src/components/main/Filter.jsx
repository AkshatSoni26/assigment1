import React from 'react'
import { filter_down, info } from '../constants/constant'

function Filter() {
    
  return (
    <div className='Filter' style={{background:`var(--Black-95, #F2F2F2)`}}>
        <div className='filter-hor'>
            <div>Order ID</div>
        </div>
        <div className='filter-hor'>
            <div>Order date</div>
            <div dangerouslySetInnerHTML={{__html:filter_down}} /> 
        </div>
        <div className='filter-hor'>
            <div>Order amount</div>
        </div>
        <div className='filter-hor'>
            <div>Transaction fees</div>
            <div dangerouslySetInnerHTML={{__html:info}}/>
        </div>
    </div>
  )
}

export default Filter