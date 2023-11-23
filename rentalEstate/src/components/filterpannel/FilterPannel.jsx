import React from 'react'
import { dataList } from '../common/data'
import { Accordion } from '../common/Accordion'
export default function FilterPannel() {
  return (
    <div>
      <div>
        <h3 className="font-bold text-xl">Filters</h3>
        <div className=""></div>
        {dataList.map((section, index) => (
          <Accordion key={index} section={section} />
        ))}
      </div>
    </div>
  )
}
