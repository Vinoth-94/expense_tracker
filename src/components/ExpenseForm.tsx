import React from 'react'
import InputField from './InputField'
import SelectField from './SelectField'
import { FieldValues, useForm } from "react-hook-form";
import { Expense } from '../module';

interface ExpenseFormProps  {
  addexpense:(data:FieldValues) => void

}
const ExpenseForm = ({addexpense}:ExpenseFormProps) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  // console.log(errors)
  
  return (
    
    <>

    
    
      <form className='from-field' onSubmit={handleSubmit((data) => { addexpense(data)} ) }>
        <InputField label={"Description"} regst={register} len={3} error={errors} msg="Description should be atleast 3 character" />
        <InputField label={"Amount"}  regst={register} len={0} error={errors} msg="Amount required"/>
        <SelectField label={"Category"} regst={register}  error={errors} msg="Category required" />
        <div className="mb-3">
           <input type="submit" className='form-submit' value="Submit" />
        
        </div>
    </form>



    
    </>
  )
}

export default ExpenseForm