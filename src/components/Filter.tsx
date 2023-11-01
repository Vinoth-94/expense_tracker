import React from 'react'
import SelectField from './SelectField'
import { useForm } from 'react-hook-form'
import { Expense } from '../module'

interface FilterProps {
  filtering: React.Dispatch<React.SetStateAction<string>>
  filtervalue: Expense[]

}

const Filter = ({ filtering, filtervalue }: FilterProps) => {

  const listFilter = (data: React.ChangeEvent<HTMLSelectElement>) => {
    if (data.target.value == "All") {
      filtering("All")
    }
    else {
      let filterd_value = filtervalue.filter((value) => {
        return value.catg === data.target.value
      })    
      filtering(data.target.value)      
    }      
  }
 
  
  return (  
    <div className='filter-section '>
      <div className="mb-3">       
        <label htmlFor="filter" className="form-label">       
          Filter    
        </label>   
        <select className="form-select form-control" onChange={(e) => listFilter(e)} >
          <option value="All"> All</option>    
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>    
          <option value="Entertainment">Entertainment</option>
        </select>   
      </div>
    </div>
  )
}

export default Filter