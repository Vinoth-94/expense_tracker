import React from 'react'
import {SelectProps} from "../module"

const SelectField = ({label,regst,error,msg}:SelectProps) => {
  return (
      <div className="mb-3">   
          <label htmlFor={label} className="form-label">       
           {label}
          </label>
          <select {...regst(label,{required:msg})} id={label} className="form-select form-control" >
                    <option hidden value=""> select one</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Entertainment">Entertainment</option>
      </select>
      
      {error[label] && (<p className='text-red-5'>{`${error[label]?.message}`}</p>)}
        </div>
  )
}

export default SelectField