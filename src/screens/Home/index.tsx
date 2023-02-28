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
                        source={require('../../../assets/logo.png')}
                        resizeMode="cover"
                    />
                    <View style={styles.textAndButton}>
                        < TextInput
                            style={styles.buttonText}
                            placeholder="Adicione uma nova tarefa"
                            placeholderTextColor={"#808080"}
                        />
                        <TouchableOpacity style={styles.buttonAdd} >
                            <Text style={styles.buttonPlus}>
                                <Image
                                    style={styles.plusImage}
                                    source={require('../../../assets/plus.png')}
                                />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}
