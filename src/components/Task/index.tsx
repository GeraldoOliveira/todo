import { View, TouchableOpacity, Image, Text } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from './styles';

type Props = {
    text: string;
    // onRemove: () => string;
}

export function Task({ text }: Props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkButton} >
                <Text>
                    <BouncyCheckbox
                        style={styles.checkButton}
                        size={25}
                        fillColor="#5E60CE"
                        text="Custom Checkbox"
                        iconStyle={{ borderColor: "#FFF" }}
                        innerIconStyle={{
                            borderWidth: 2,
                        }}
                        onPress={(isChecked: boolean) => { }}
                    />
                </Text>
            </TouchableOpacity>
            <Text style={styles.textButton}>
                {text}
            </Text>
            <TouchableOpacity >
                <Image style={styles.deleteButton}
                    source={require('../../../assets/delete.png')}
                />
            </TouchableOpacity>
        </View>
    )
}

