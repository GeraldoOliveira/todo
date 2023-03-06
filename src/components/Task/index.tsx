import { View, TouchableOpacity, Image, Text } from 'react-native';

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
                    <Image
                        source={require('../../../assets/check.png')}
                    />
                </Text>
            </TouchableOpacity>
            <Text style={styles.textButton}>
                { text }
            </Text>
            <TouchableOpacity style={styles.deleteButton} >
                <Text>
                    <Image
                        source={require('../../../assets/delete.png')}
                    />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

