import React, { useState } from 'react';
import {
    Button,
    KeyboardAvoidingView,
    Modal,
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
import { CategoryRow } from '../components/CategoryRow';

export const Categories = () => {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState(theme.colors.primary);
    const [newName, setNewName] = useState('');
    const [categories, setCategories] = useState<Category[]>([
        {
        id: '1',
        color: theme.colors.primary,
        name: 'Groceries',
        },
        {
        id: '2',
        color: theme.colors.card,
        name: 'Clothes',
        },
    ]);

    const onSelectedColor = ({ hex }) => {
        setSelectedColor(hex);
    };

    const createCategory = () => {
        if (newName === 0) {
            return;
        }

        setCategories([
            ...categories,
            {
                id: Math.random().toString(),
                color: selectedColor,
                name: newName,
            },
        ]);
        setNewName('');
        setSelectedColor(theme.colors.primary);
    };

    
    return (
    <>
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
            {categories.map(({ id, color, name }) => (
                <CategoryRow key={id} color={color}name={name} />
            ))}
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
                            borderRadius: 16,
                            borderWidth: 3,
                            borderColor: 'white',
                        }}
                    />
                </TouchableOpacity>
                <TextInput
                        placeholder='Category name'
                        placeholderTextColor={'white'}
                        onChange={(event) => setNewName(event.nativeEvent.text)}
                        value={newName}
                        style={{
                        color: 'white',
                        height: 40,
                        borderColor: theme.colors.border,
                        borderWidth: 1,
                        flex: 1,
                        borderRadius: 8,
                        paddingLeft: 8,
                        marginLeft: 16,
                    }}
                />
                    <TouchableOpacity
                        onPress={createCategory}
                    style={{
                        padding: 12,
                    }}
                >
                    <FontAwesome name='send' size={24} color={theme.colors.primary}/>
                </TouchableOpacity>
                
            </View>
        </KeyboardAvoidingView>
        
        <Modal visible={showColorPicker} animationType='fade' ></Modal>
        </>
    );
};
