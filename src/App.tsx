import { ExoticComponent, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Style.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Filter from './components/Filter'
import { Expense } from './module'
import { FieldValues } from 'react-hook-form'


function App() {
  const [expense, setExpense] = useState<Expense[]>( 
    [{
        des: "milk",
        amt: 20,
        catg: "Groceries",
        id: 1
      },{
        des: "Movies",
        amt: 210,
        catg: "Entertainment",
        id: 2
      },{
        des: "Electricbill",
        amt: 110,
        catg: "Utilities",
        id: 3
      },{
        des: "Movies",
        amt: 310,
        catg: "Entertainment",
        id: 4
      }
      
    
    ]
  )
  const [expenselist, setExpenselist] = useState<string>("All")
  
  // console.log(expenselist)
  
  const addExpense = (data: FieldValues) => {
    let id1 :number
    if(expense.length==0){
      id1= 1
    }
    else {
      id1 = expense[expense.length-1].id +1
      // console.log(todos[todos.length-1].id  )  
    }
    setExpense([...expense, { des: data.Description, amt: data.Amount, catg: data.Category, id: id1 }])
  }
  
  // useEffect(() => {
  //   setExpenselist([...expense])    
  // }, [expense])

  function deletelist(id: number) {
    let removelist= expense.filter((list)=> list.id !==id )
    setExpense(removelist) 
  } 
  const filter_val= expenselist=="All" ? expense : expense.filter((value) => {
        return value.catg === expenselist
      })    
  const total_expense = filter_val.reduce((aclr, crt) => aclr + Number(crt.amt), 0)
// let sum = 0
//   for (let i = 0; i < expenselist.length; i++){
    
//     sum +=Number( expenselist[i].amt)
//     console.log(sum)
//   }
  return (
   
    <>
      <div className="App">
        <h1> Expense Tracker</h1>
        <ExpenseForm addexpense={addExpense} />
        {expense.length == 0 ? <p className='bld-txt'> Please enter the data's on above form  </p> :
          (<> <Filter filtering={setExpenselist} filtervalue={expense} />
            <ExpenseList lists={filter_val} deletefn={deletelist} total={total_expense} /> </>)
        }
        
      </div> 
      
      
    
   
    </>
    
  )
}

export default App
