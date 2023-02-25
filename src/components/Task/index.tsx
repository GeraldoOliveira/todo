import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
    text: string;
    onRemove: () => string;
}

export function Task({ text, onRemove }: Props ) {

    return (
        <View style={styles.container}>

        </View>
    )
}