import React from 'react'
import { Select } from '../ui/select';

const SortByPrice = () => {
  return (
    <div className="d-flex pr-3 pb-3">
    <span className="mr-3">Sort by Price: </span>
      <Select>
          <option value="1">Highest</option>
          <option value="0">Lowest</option>
      </Select>
    </div>
  )
}

export default SortByPrice
