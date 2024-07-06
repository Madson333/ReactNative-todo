import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";

interface SearchProps{
  setTaskText: React.Dispatch<React.SetStateAction<string>>,
  taskText: string,
  addTask: (title: string) => void
}

export function Search({ setTaskText,taskText,addTask}: SearchProps){
  
  function handleTitleTask(taskText: string){
    setTaskText(taskText)
  }

  return (
    <View style={styles.container} >
      <TextInput 
        placeholder="Adicione uma nova tarefa" 
        style={styles.inputContainer} 
        placeholderTextColor="#808080"
       onChangeText={setTaskText}
       value={taskText}
      />
      <TouchableOpacity onPress={() => addTask(taskText)}  style={styles.buttonContainer}>
        <Text  style={styles.buttonText} >+</Text>
      </TouchableOpacity>
    </View>
  )
}