import { ExpensesIcon } from './tab-bar-icons/Expenses';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
  type: 'expenses' | 'reports' | 'add' | 'settings'; 
}

export const TabBarIcon = ({ type, color, size, focused }: TabBarIconProps) => {
  return <ExpensesIcon width={size} height={size} color={color} />;
};