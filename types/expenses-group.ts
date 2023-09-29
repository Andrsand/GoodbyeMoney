import { Expense }  from '../types/expense';

export type ExpensesGroup = {
    day: string;
    expenses: Expense[];
    total: number;
};