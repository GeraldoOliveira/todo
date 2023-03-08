import { View, TouchableOpacity, Image, Text } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";

import { styles } from './styles';

type Props = {
    text: string;
    onRemove: () => void;
    onPress: (isChecked: boolean) => void;
}

export function Task({ text, onPress, onRemove }: Props) {

    const [checkboxState, setCheckboxState] = useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkButton} >
                <BouncyCheckbox
                    style={styles.checkButton}
                    size={25}
                    fillColor="#5E60CE"
                    iconStyle={{ borderColor: "#FFF" }}
                    innerIconStyle={{
                        borderWidth: 2,
                    }}
                    onPress={() => {
                        setCheckboxState(!checkboxState),
                        onPress(!checkboxState)
                    }}
                />
            </TouchableOpacity>
            <Text style={checkboxState == true ? styles.textButtonChecked : styles.textButtonUnchecked}>
                {text}
            </Text>
            <TouchableOpacity style={styles.deleteContainer} onPress={onRemove}> 
                <Image style={styles.deleteButton}
                    source={require('../../../assets/delete.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

