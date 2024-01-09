import React from 'react'
import { sort_arrows, download } from '../constants/constant'

function OrderSearch() {
  return (
    <div className='OrderSearch'>
        <div>
            <input className='order-input' placeholder='Search by order ID...'/>
        </div>
        <div className='filter'>
            <div className='sort-layout'>
                <div className='sort'>Sort</div>
                <div dangerouslySetInnerHTML={{__html:sort_arrows}} style={{width: "16px", height: "16px"}}/>
            </div>
            <div className='download'>
            <div dangerouslySetInnerHTML={{__html:download}} style={{width: "20px", height: "20px"}}/>
            </div>
        </div>
    </div>
  )
}

export default OrderSearch