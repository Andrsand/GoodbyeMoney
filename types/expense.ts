import { Recurrence } from '../types/recurrence';
import { Category } from "./category";


export type Expense = {
    id: string;
    amount: number;
    recurrence: Recurrence;
    date: Date;
    note: string;
    category: Category;
}