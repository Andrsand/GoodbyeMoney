import React, { useEffect, useMemo, useRef } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  Text,
  View,
  TouchableHighlight,
  InputAccessoryView,
  Keyboard,
  Platform, } from "react-native";
import { ListItem } from "../components/ListItem";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../theme';
import { Category } from '../models/category';

export const Add = () => {
    const [amount, setAmount] = React.useState('');
    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={112}
            style={{ margin: 16, flex: 1 }}
        >
        <View style={{
            margin: 16,
            borderRadius: 11,
            overflow: 'hidden',
            }}
        >
            <ListItem
                    label='Amount'
                    detail={
                 <TextInput
                        placeholder='Category name'
                        placeholderTextColor={'white'}
                        onChange={(event) => setAmount(event.nativeEvent.text)}
                        value={amount}
                        style={{
                        color: 'white',
                        height: 40,
                        borderWidth: 1,
                        flex: 1,
                        borderRadius: 8,
                        paddingLeft: 8,
                        marginLeft: 16,
                    }}
                />
            }
            />
                    
           
        </View>

        </KeyboardAvoidingView>
    );
};
    
