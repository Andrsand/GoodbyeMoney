import React from 'react';
import { View, Text, Button } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';


import { ListItem } from '../components/ListItem';
import {
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import { theme } from "../theme";

export const Categories = () => {
    return (
        <KeyboardAvoidingView  behavior='height' keyboardVerticalOffset={112} style={{ margin: 16, flex: 1}}>
            <View
                style={{
                    borderRadius: 11,
                    overflow: 'hidden',
        
        }}
        >
        <ListItem
            label='Categories'
            detail={
                <Entypo
                    name="chevron-thin-right"
                    color='white'
                    style={{ opacity: 0.3 }}
                    size={20}
                />
            }
            
                
        />

            <ListItem label='Erase all data' isDestructive onClick={() => { }} />
           
            </View>
            <View style={{ flex: 1 }} />
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingVertical: 8,
                }}
            >
                <Button onPress={() => { }} title='COLOR' accessibilityLabel='' />
                <TextInput
                    placeholder='Category name'
                    style={{
                        color: 'white',
                        borderColor: theme.colors.border,
                        borderWidth: 1,
                        flex: 1,
                        borderRadius: 8,
                        paddingLeft: 8,
                    }}
                />
                
            </View>
            </KeyboardAvoidingView>
    );
};
