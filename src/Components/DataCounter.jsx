import React from 'react'

export default function DataCounter({customClassName}) {
  return (
    <div className={`data_counter ${customClassName}` }>
        <div className='data_item'>
            <p className='num'>100<span>M</span></p>
            <p className='desc'>Client Satisfaction</p>
        </div>
        <div className='data_item'>
            <p className='num'>24<span>H</span></p>
            <p className='desc'>Expert Support Team</p>
        </div>
        <div className='data_item'>
            <p className='num'>98<span>k+</span></p>
            <p className='desc'>Sales Count</p>
        </div>
        <div className='data_item'>
            <p className='num'>208<span>+</span></p>
            <p className='desc'>Client Worldwide</p>
        </div>
    </div>
  )
}
