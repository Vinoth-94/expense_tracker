import React from 'react'
import { ExpenseListProps } from '../module'

const ExpenseList = ({lists,deletefn,total}:ExpenseListProps) => {
  return (
    <>
      <div className='expense-list-card' >
        <table >
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th> Action</th>
          </tr>

        </thead>
        <tbody>
            
            {
              lists.map(list => ( 
                <tr key={list.id}>
                  <td>{list.des }</td>
            <td>${list.amt }</td>
            <td>{list.catg }</td>
            <td><a className='btn' onClick={()=>deletefn(list.id)} >Delete</a></td>
            </tr>
                
              )

              )
            }

        </tbody>
        <tfoot>
          <tr>
            <td> Total</td>
              <td>{ total}</td>
          </tr>

        </tfoot>
      </table>

      </div>
      
      

    </>
  )
}

export default ExpenseList