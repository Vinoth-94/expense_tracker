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
    [
      {
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
  const [expenselist, setExpenselist] = useState<Expense[]>(expense || [])
  
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
  
  useEffect(() => {
    setExpenselist([...expense])    
  }, [expense])

  function deletelist(id: number) {

    let removelist= expense.filter((list)=> list.id !==id )
    setExpense(removelist)
    
  }
 

  return (
   
    <>
      <div className="App">
        <h1> Expense Tracker</h1>
        <ExpenseForm addexpense={addExpense} />
        <Filter filtering={setExpenselist} filtervalue={expense}  />
        <ExpenseList lists={expenselist} deletefn={deletelist} />
      </div>
    
   
    </>
    
  )
}

export default App
