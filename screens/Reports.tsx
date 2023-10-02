import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { MutableRefObject} from "react";
import { View, Text } from "react-native";
import { ExpensesList } from "../components/ExpensesList";
import { Recurrence } from "../types/recurrence";
import { theme } from "../theme";
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';


type Props = {
    sheetRef: MutableRefObject<BottomSheetMethods>;
};

export const Reports = ({ sheetRef }: Props) => {
    return (
    <>
    <View
        style={{
            display: "flex",
            flexDirection: "column",
            paddingHorizontal: 16,
            paddingTop: 16,
    }}
    >
        {/* periods with average expenses */}
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}
        >
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Text style={{ color: theme.colors.textPrimary, fontSize: 20 }}>
                    12 Sep - 18 Sep
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 8 }}>
                    <Text style={{ color: theme.colors.textSecondary, fontSize: 16 }}>
                        USD
                    </Text>
                    <Text
                        style={{
                            color: theme.colors.textPrimary,
                            fontSize: 17,
                            fontWeight: '600',
                            marginLeft: 4,
                        }}
                    >
                        85
                    </Text>
                </View>
            </View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                }}
            >
                <Text style={{ color: theme.colors.textPrimary, fontSize: 20 }}>
                    Avg/Day
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 8 }}>
                    <Text style={{ color: theme.colors.textSecondary, fontSize: 16 }}>
                        USD
                    </Text>
                    <Text
                        style={{
                            color: theme.colors.textPrimary,
                            fontSize: 17,
                            fontWeight: '600',
                            marginLeft: 4,
                        }}
                    >
                        85
                    </Text>
                </View>
            </View>
        </View>
        <View style={{ marginTop: 16 }}>
            <ExpensesList
        groups={[{
            day: 'Today',
            expenses: [{
                id: '1',
                amount: 100,
                category: {
                    id: '1',
                    name: 'Food',
                    color: '#FFD600',
                },
                date: new Date(),
                note: 'Bought some food',
                recurrence: Recurrence.None,
            }, {
                id: '2',
                amount: 100,
                category: {
                    id: '2',
                    name: 'Transport',
                    color: '#FFD600',
                },
                date: new Date(),
                note: 'Bought some transport',
                recurrence: Recurrence.None,
            },
            ],
            total: 300,
        },
            {
                day: 'Yesterday',
                expenses: [
                    {
                        id: '3',
                        amount: 300,
                        category: {
                            id: '3',
                            name: 'Entertainment',
                            color: '#00C853',
                        },
                        date: new Date(),
                        note: 'Bought some entertainment',
                        recurrence: Recurrence.None,
                    }
                ],
                total: 300,
            },
        ]}
    />
        </View>
    </View>
     <BottomSheet
                ref={sheetRef}
                index={-1}
                handleStyle={{
                    backgroundColor: theme.colors.card,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                }}
                handleIndicatorStyle={{ backgroundColor: '#FFFFFF55' }}
                enablePanDownToClose
                snapPoints={['25%', '50%', '90%']}
            >
                <Text>Hello There</Text>
        </BottomSheet>
    </>
    );
};
