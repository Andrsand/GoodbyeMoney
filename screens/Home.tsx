import { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Expenses, Reports, Add, Settings } from '../screens';
import { TabBarIcon } from '../components/TabBarIcon';
import { theme } from '../theme';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';


const Tab = createBottomTabNavigator();

export const Home = () => {
    const sheetRef = useRef<BottomSheet>(null);
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.colors.card,
                },
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: (props) => <TabBarIcon {...props} type='expenses' />,
                }}
                name='Expenses'
                component={Expenses}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: (props) => <TabBarIcon {...props} type='reports' />,
                    headerRight: () => (
                        <TouchableOpacity
                        onPress={() => sheetRef.current.expand()}
                            style={{ marginRight: 16 }}
                        >
                            <MaterialCommunityIcons
                                name='calendar-month-outline'
                                size={24}
                                color={theme.colors.textPrimary}
                            />
                        </TouchableOpacity>
                    ),
                }}
                name='Reports'
                >
                {() => <Reports sheetRef={sheetRef} />}
            </Tab.Screen>
            <Tab.Screen
                options={{
                    tabBarIcon: (props) => <TabBarIcon {...props} type='add' />,
                }}
                name='Add'
                component={Add}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: (props) => <TabBarIcon {...props} type='settings' />,
                }}
                name='Settings'
                component={Settings}
            />
        </Tab.Navigator>
    );
   
};