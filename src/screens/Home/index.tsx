import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image } from "react-native";
import { styles } from './styles';

import { Task } from "../../components/Task";

import { useState } from "react";

export function Home() {

    const [tasks, setTasks] = useState<string[]>([]);
    const [taskText, setTaskText] = useState('');

    function handleTaskAdd() {
        setTasks(prevState => [...prevState, taskText]);
        setTaskText('');
    }

    function handleTaskRemove(text: string) {
        Alert.alert("Remover", `Remover a atividade?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(tasks => tasks !== text))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

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
                            onChangeText={setTaskText}
                            value={taskText}
                        />
                        <TouchableOpacity style={styles.buttonAdd} onPress={handleTaskAdd}>
                            <Text style={styles.buttonPlus}>
                                <Image
                                    style={styles.plusImage}
                                    source={require('../../../assets/plus.png')}
                                />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.containerTasks}>
                    <View style={styles.taskStatus}>
                        <View style={styles.createdContainer}>
                            <Text style={styles.createdText}>
                                Criadas
                            </Text>
                            <Text style={styles.createdCounter}>
                                0
                            </Text>
                        </View>
                        <View style={styles.completedContainer}>
                            <Text style={styles.completedText}>
                                Concluídas
                            </Text>
                            <Text style={styles.completedCounter}>
                                0
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tasksView}>
                        <FlatList
                            data={tasks}
                            keyExtractor={item => item}
                            renderItem={({ item }) => (

                                <Task
                                    key={item}
                                    text={item}
                                    // onRemove={() => handleParticipantRemove(item)}
                                />
                            )}
                            ListEmptyComponent={() => (

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
                            )}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}
