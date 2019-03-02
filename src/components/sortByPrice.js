import React from 'react'
import { Select } from '../ui/select';

const SortByPrice = ({ changePriceOrder }) => {
  return (
    <div className="d-flex pb-3">
    <span className="mr-3">Sort by Price: </span>
      <Select onChange={ (e)=> changePriceOrder(e) }>
          <option value="0">Lowest</option>
          <option value="1">Highest</option>
      </Select>
    </div>
  )
}

export default SortByPrice
