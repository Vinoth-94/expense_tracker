import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

export interface InputProps{
    label: string,
    regst: UseFormRegister<FieldValues>,
    len: number
    error: FieldErrors<FieldValues>,
    msg: string,
    type:string
}
export interface SelectProps{
    label: string,
    regst: UseFormRegister<FieldValues>,
    error: FieldErrors<FieldValues>|any,
    msg:string,
}
export type Expense = {
    des: string,
    amt: number,
    catg: string,
    id:number
}
export type ExpenseListProps = {
    lists: Expense[],
    deletefn: (id: number) => void,
    total:number
}

