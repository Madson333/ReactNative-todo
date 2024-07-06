import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../components/header";
import { Search } from "../components/search";
import { Card } from "../components/Card";
import { useState } from "react";

export interface ITask{
  id: number;
  title: string,
  completed: boolean,
}[]

export function Home(){

  const [task, setTask] = useState<ITask[]>([])
  const [taskText, setTaskText] = useState("")



  function handleAddTask(title: string){
   const titleText = title

    if(title.trim() === ""){
      return
    }

    const newTask = {
      id: Math.random(),
      title,
      completed: false,
    }
   
    setTask(state => [...state, newTask])
    setTaskText("")
  }

  function handleDeleteTask(id: number){
    const updatedTasks = task.filter(task => id !== task.id)
    setTask(updatedTasks)
  }

  function toggleTaskComppleted(id: number){
   const updateedTask = task.map(task => {
    if(task.id === id){
      return {...task, completed: !task.completed}
    }
    return task
   })
   setTask(updateedTask)
  }


  return(
    <>
      <StatusBar style="light" /> 
      <View style={styles.header} >
         <Header />
      </View>
      <SafeAreaView style={styles.safeAreaContainer} >
                     
           <View style={styles.mainContainer} >
             <View style={styles.searchContainer}>
               <Search taskText={taskText} setTaskText={setTaskText} addTask={handleAddTask}  />
            </View>
            
            <View style={styles.container} >
               <Card task={task} removeTask={handleDeleteTask} completedTask={toggleTaskComppleted} />
            </View>

           </View>
      </SafeAreaView>
    </>
    

  )
}