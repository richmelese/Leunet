import React from 'react'
import GrowWithUs from '../../Components/GrowWithUs'

import ServicesOurServices from './ServicesOurServices'
import ServicesServiceList from './ServicesServiceList'

export default function Services() {
  return (
    <div className='services_page container'>
        <ServicesOurServices />
        <ServicesServiceList />
        <GrowWithUs />
    </div>
  )
}
