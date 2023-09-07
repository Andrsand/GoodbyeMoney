import React, { useState } from 'react';
import {
    Button,
    KeyboardAvoidingView,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Animated,
    } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ColorPicker, fromHsv } from 'react-native-color-picker';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { ListItem } from '../components/ListItem';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from "../theme";
import { Category } from '../types/category';
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

    const onSelectColor = (hex: string) => {
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
                        <Swipeable key={id} renderRightActions={(progress, dragX) => {
                            const trans = dragX.interpolate({
                                inputRange: [0, 50, 100, 101],
                                outputRange: [-20, 0, 0, 1],
                            });

                            return (
                                <RectButton onPress={() => {}}>
                                    <Animated.Text
                                        style={[
                                        
                                        {
                                            transform: [{ translateX: trans }],
                                        },
                                    ]}>
                                    Archive
                                    </Animated.Text>
                                </RectButton>
                            );
                        }}>
                    <CategoryRow  color={color}name={name} />        
                </Swipeable>
                
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
        
            <Modal
                transparent
                visible={showColorPicker}
                animationType='fade'
                onRequestClose={() => setShowColorPicker(false)}
            >
            <View
            style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
                >
            <View
            style={{
            padding: 24,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.card,
            overflow: 'hidden',
            borderRadius: 12,
            }}
                >
            <ColorPicker
            hideSliders
            color={selectedColor}
            onColorChange={(color) => onSelectColor(fromHsv(color))}
            style={{ width: '100%', height: 300 }}
            />
                        
            <Button onPress={() => setShowColorPicker(false)} title='Select' />
        
            </View>        
        </View>
        
        </Modal>
        </>
    );
};
