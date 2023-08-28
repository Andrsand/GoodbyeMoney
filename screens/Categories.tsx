import React, { useState } from 'react';
import {
    Button,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ColorPicker, {
    Panel1,
    Swatches,
    Preview,
    OpacitySlider,
    HueSlider,
} from 'reanimated-color-picker';


import { ListItem } from '../components/ListItem';
import { theme } from "../theme";

export const Categories = () => {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState(theme.colors.primary);

    
    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={112}
            style={{ margin: 16, flex: 1 }}
        >
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
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingVertical: 8,
                }}
            >
                <TouchableOpacity onPress={() => setShowColorPicker(!showColorPicker)}>
                    <View
                        style={{
                            backgroundColor: selectedColor,
                            width: 24,
                            height: 24,
                            borderRadius: 12,
                        }}
                    />
                </TouchableOpacity>
                <TextInput
                    placeholder='Category name'
                    style={{
                        color: 'white',
                        height: 40,
                        borderColor: theme.colors.border,
                        borderWidth: 1,
                        flex: 1,
                        borderRadius: 8,
                        paddingLeft: 8,
                    }}
                />
                <TouchableOpacity
                    style={{
                        padding: 12,
                    }}
                >
                    <FontAwesome name='send' size={24} color={theme.colors.primary}/>
                </TouchableOpacity>
                
            </View>
            </KeyboardAvoidingView>
    );
};
