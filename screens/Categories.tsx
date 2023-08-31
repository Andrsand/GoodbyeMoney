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
                
                
        {/* <ListItem
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
            <View style={{ flex: 1 }} /> */}
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
                            width: 32,
                            height: 32,
                            borderRadius: 16,
                            borderWidth: 3,
                            borderColor: 'white',
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
                        marginLeft: 16,
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
        
        <Modal visible={showColorPicker} animationType='fade' ></Modal>
        </>
    );
};
