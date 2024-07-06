import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import clipboard from "../../../assets/Clipboard.png"
import trash from "../../../assets/trash.png"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { ITask } from "../../home";

interface CardProps{
  task: ITask[],
  removeTask: ( id: number) => void,
  completedTask: (id: number) => void
}
export function Card({task, removeTask, completedTask}: CardProps){
 
          
  
  return(
    <View>
      <View style={styles.counterContainer} >

          <View style={styles.counterContent}>
            <Text style={styles.counterText, {color:"#4EA8DE"}}>Criadas</Text>
            <View style={styles.counterContainerNumber} >
              <Text style={styles.counterNumberText} >{task.length}</Text>
            </View>
          </View>
  
          <View style={styles.counterContent}>
            <Text style={styles.counterText, {color:"#8284FA"}}>Concluidas</Text>
            <View style={styles.counterContainerNumber} >
              <Text style={styles.counterNumberText}>{task.filter(task => task.completed).length}</Text>
            </View>
          </View>
      
      </View>
      <FlatList
        data={task}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={(
          <View style={styles.empityListContainer} >
            <Image 
              style={{marginTop: 48}}
              source={clipboard}
            />
            <Text style={{color: "#808080",fontWeight:"bold", fontSize: 14, marginTop: 16}} >
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={{color: "#808080", fontSize: 14, marginTop: 4}}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
        renderItem={({item: task}) => {
            
          return(
            <View style={styles.taskContainer} >
              <BouncyCheckbox fillColor="#5E60CE" isChecked={task.completed} onPress={() => {completedTask(task.id)}} />
              
              <View style={{flex:1, alignItems: "center",justifyContent: "center"}} >
                  <Text 
                    style={{
                      color: task.completed === true ? "#808080" : "#F2F2F2", 
                      lineHeight: 14, 
                      textDecorationLine: task.completed === true ? "line-through" : "none"
                      }} >
                    {task.title}
                  </Text>
              </View>

              <TouchableOpacity onPress={() => removeTask(task.id)} style={{alignContent: "center", justifyContent: "center", }} >
                <Image source={trash} width={12} height={12} />
              </TouchableOpacity>

            </View>
          )
        }}
      />
    </View>
  )
}