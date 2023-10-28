import React from 'react'
import { InputProps } from '../module'

const InputField = ({ label, regst, len, error,msg }: InputProps) => {
  
  return (
    
    <div className="mb-3">   
          <label htmlFor={label} className="form-label">       
           {label}
          </label>
      <input {...regst(label, { required: msg, minLength:{ value:len ,message:msg }, })} type="text" className="form-control" id={label} />
      {/* {error[label]?.type === "minLength" && (<p className='text-red-5'>{`${error[label]?.message}`}</p>)
        
      } */}
      {error[label] && (<p className='text-red-5'>{`${error[label]?.message}`}</p>)
        
      }
        </div>
  )
}

export default InputField