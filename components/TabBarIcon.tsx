import React from 'react';
import MCI from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import ADI from '@expo/vector-icons/AntDesign';

// import { AddIcon } from './tab-bar-icons/Add';
// import { ExpensesIcon } from './tab-bar-icons/Expenses';
// import { ReportsIcon } from './tab-bar-icons/Reports';
// import { SettingsIcon } from './tab-bar-icons/Settings';

type TabBarIconProps = {
  color: string;
  size: number;
  type: 'expenses' | 'reports' | 'add' | 'settings';
};

export const TabBarIcon = ({ type, color, size }: TabBarIconProps) => {
  switch (type) {
    case 'expenses':
      return <MCI name='tray-arrow-up' size={size} color={color} />;
    case 'reports':
      return <Ionicons  name="bar-chart" size={size} color={color} />;
    case 'add':
      return <ADI name="plus" size={size} color={color} />;
    case 'settings':
      return <MCI  name="cog" size={size} color={color} />;
    default:
      return null;
  }
};