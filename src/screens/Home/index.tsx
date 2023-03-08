import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image } from "react-native";
import { styles } from './styles';

import { Task } from "../../components/Task";
import { EmptyTask } from "../../components/EmptyTask";

import { useState } from "react";

type NewTask = {
    key: number,
    taskDescription: string,
    isChecked: boolean
}

export function Home() {

    const [tasks, setTasks] = useState<NewTask[]>([]);
    const [taskText, setTaskText] = useState('');
    const [createdTasks, setCreatedTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);

    function handleTaskAdd() {
        if (tasks.filter((obj) => obj.taskDescription === taskText).length > 0) {
            setTaskText('');
            return Alert.alert("ATIVIDADE DUPLICADA", `Atividade já existe na lista de atividades.`)
        }

        const newTask: NewTask = {
            key: tasks.length + 1,
            taskDescription: taskText,
            isChecked: false
        }

        setTasks([...tasks, newTask]);
        setTaskText('');

    }

    function changeCounterStatus() {
        setCreatedTasks(tasks.filter((obj) => obj.isChecked === false).length)
        setCompletedTasks(tasks.filter((obj) => obj.isChecked === true).length)
    }

    function handleTaskRemove(text: string) {
        Alert.alert("Remover", `Remover a atividade?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevState => prevState.filter(tasks => tasks.taskDescription !== text)),
                    setCreatedTasks((tasks.filter((obj) => obj.isChecked === false).length) -1),
                    setCompletedTasks((tasks.filter((obj) => obj.isChecked === true).length) - 1)
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleEmptyTask() {
        return (
            <EmptyTask />
        );
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
                        <TouchableOpacity style={styles.buttonAdd} onPressIn={handleTaskAdd} onPress={changeCounterStatus}>
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
                                {createdTasks}
                            </Text>
                        </View>
                        <View style={styles.completedContainer}>
                            <Text style={styles.completedText}>
                                Concluídas
                            </Text>
                            <Text style={styles.completedCounter}>
                                {completedTasks}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.tasksView}>
                        <FlatList
                            data={tasks}
                            keyExtractor={item => item.taskDescription}
                            renderItem={({ item }) => (

                                <Task
                                    key={item.key}
                                    text={item.taskDescription}
                                    onRemove={() => { handleTaskRemove(item.taskDescription) }}
                                    onPress={(isCheck) => { item.isChecked = isCheck, changeCounterStatus() }}
                                />
                            )}
                            ListEmptyComponent={
                                handleEmptyTask
                            }
                        />
                    </View>
                </View>
            </View>
        </>
    )
}
