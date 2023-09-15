import React, { useEffect, useMemo, useRef } from 'react';
// import { Picker } from '@react-native-picker/picker';
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  View,
  TouchableHighlight,
  InputAccessoryView,
  Keyboard,
    Platform,
} from "react-native";
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { ListItem } from "../components/ListItem";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../theme';
import { Category } from '../models/category';
import { Recurrence } from '../types/recurrence';

//import DateTimePicker from '@react-native-community/datetimepicker';


export const Add = () => {
    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

    const [amount, setAmount] = React.useState('');
    const [recurrence, setRecurrence] = React.useState(Recurrence.None);
    const [category, setCategory] = React.useState('');
    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={112}
            style={{ margin: 16, flex: 1 }}
        >
        <View style={{
            borderRadius: 11,
            overflow: 'hidden',
            }}
        >
            <ListItem
                    label='Amount'
                    detail={
                 <TextInput
                        placeholder='Amount'
                        placeholderTextColor={'white'}
                        onChange={(event) => setAmount(event.nativeEvent.text)}
                        value={amount}
                        textAlign='right'
                        style={{
                        height: 40,
                        color: 'white',
                        flex: 1,
                        borderRadius: 8,
                        paddingLeft: 8,
                    }}
                />
            }
            />

                <ListItem
                    label='Recurrence' detail={
                        <TouchableOpacity onPress={() => { }}>
                            <Text>{recurrence}</Text>
                        </TouchableOpacity>
                        }
                />
                <BottomSheet ref={sheetRef} snapPoints={snapPoints}>
                    <BottomSheetFlatList
                        data={Object.keys(Recurrence)}
                        keyExtractor={(i) => i}
                        renderItem={(item) => <Text>{item.item}</Text>}
                    /> 
                </BottomSheet>
            </View>

        </KeyboardAvoidingView>
    );
};
    
