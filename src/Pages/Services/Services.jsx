import React from 'react'
import ServicesGrowWithUs from './ServicesGrowWithUs'
import ServicesOurServices from './ServicesOurServices'
import ServicesServiceList from './ServicesServiceList'

export default function Services() {
  return (
    <div className='services container'>
        <ServicesOurServices />
        <ServicesServiceList />
        <ServicesGrowWithUs />
    </div>
  )
}
