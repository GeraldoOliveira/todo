import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image } from "react-native";
import { styles } from './styles';

import { Task } from "../../components/Task";
import { useState } from "react";

export function Home() {
    
    return (
        <>
            <View style={styles.containerGray}>
                <View style={styles.containerBlack}>
                    <Image
                        style={styles.logoImage}
                        source={require('../../../assets/Logo.svg')}
                        resizeMode="cover"
                    />
                </View>
            </View>
        </>
    )
}
