import { View, TouchableOpacity, Image, Text } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from './styles';

type Props = {
    text: string;
    onRemove: () => void;
    onPress: (isChecked: boolean) => boolean;
}

export function Task({ text, onPress, onRemove }: Props) {

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
                    onPress={(isChecked: boolean) => { onPress(isChecked) }}
                />
            </TouchableOpacity>
            <Text style={isChecked == true ? styles.textButtonChecked : styles.textButtonUnchecked}>
                { text }
            </Text>
            <TouchableOpacity style={styles.deleteContainer} onPress={ onRemove }>
                <Image style={styles.deleteButton}
                    source={require('../../../assets/delete.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

