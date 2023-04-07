import React from 'react'

export default function DataCounter({customClassName}) {
  return (
    <div className={`data_counter ${customClassName}` }>
        <div className='data_item'>
            <p>100<span>M</span></p>
            <p>Client Satisfaction</p>
        </div>
        <div className='data_item'>
            <p>24<span>H</span></p>
            <p>Expert Support Team</p>
        </div>
        <div className='data_item'>
            <p>98<span>k+</span></p>
            <p>Sales Count</p>
        </div>
        <div className='data_item'>
            <p>208<span>+</span></p>
            <p>Client Worldwide</p>
        </div>
    </div>
  )
}
