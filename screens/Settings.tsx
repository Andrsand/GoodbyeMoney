import React from "react";
import { View } from "react-native";
import Entypo  from '@expo/vector-icons/Entypo';

import { ListItem } from "../components/ListItem";
//import { theme } from "../theme";

export const Settings = () => (
    <View style={{ width: '100%', backgroundColor: 'red', flexDirection: 'row' }}>
        <ListItem
            label='Categories'
            detail={<Entypo name="chevron-thin-right" color='white' size={20} />}
            onClick={() => {}}
        />

    
    </View>);
