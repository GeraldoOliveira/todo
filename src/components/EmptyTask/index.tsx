
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export function EmptyTask() {

    return (
        <View style={styles.listEmptyContainer}>
            <Image
                style={styles.logoClipboardImage}
                source={require('../../../assets/Clipboard.png')}
            />
            <Text style={styles.emptyTextTitle}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyText}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>

    )

}