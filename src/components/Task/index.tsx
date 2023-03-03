import { View, CheckBox } from 'react-native';

import { styles } from './styles';

type Props = {
    text: string;
    onRemove: () => string;
}

export function Task({ text, onRemove }: Props) {

    return (
        <View style={styles.container}>
            <CheckBox
                value={false}
                onValueChange={true}
                style={styles.checkButton}
            />
        </View>
    )
}

