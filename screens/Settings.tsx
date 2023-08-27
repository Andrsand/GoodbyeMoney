import React from "react";
import { View } from "react-native";
import Entypo  from '@expo/vector-icons/Entypo';

import { ListItem } from "../components/ListItem";
//import { theme } from "../theme";

export const Settings = () => (
    <View style={{
        flexDirection: 'row',
        margin: 16,
        borderRadius: 11,
        overflow: 'hidden',
    }}>
        <ListItem
            label='Categories'
            detail={<Entypo name="chevron-thin-right" color='white' size={20} />}
            onClick={() => {}}
        />

    
    </View>);
