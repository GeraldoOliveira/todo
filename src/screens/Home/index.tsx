import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image } from "react-native";
import { styles } from './styles';

import { Task } from "../../components/Task";
import { EmptyTask } from "../../components/EmptyTask";
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
                            // data={} //participants}
                            keyExtractor={item => item}
                            // renderItem={({ item }) => (

                            //     <Participant
                            //         key={item}
                            //         name={item}
                            //         onRemove={() => handleParticipantRemove(item)}
                            //     />
                            //)}
                            ListEmptyComponent={() => (

                                <EmptyTask({ item })

                                />
                                
                            )}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}
