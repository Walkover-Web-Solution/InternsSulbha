import React ,{useState,useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    FlatList

} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

let width = Dimensions.get('window').width

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    const [data,setData] = useState(todos);
    
    useEffect(() => {
        setData(todos)
      }, [todos]); //
   //alert(JSON.stringify(data))
    return(
    <View style={{ padding:4 , flex:1}}>


<FlatList
  data={data}
  renderItem={(item) => (
    <View style={{ flex:1,paddingLeft:7, paddingTop:4,margin:5,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
    <TouchableOpacity
    style={{maxWidth:85+"%"}}
    key={item.item.id+" "} onPress={() => toggleTodo(item.item.id)}>
        <Text style={{
            fontSize: 24,
            textDecorationLine: item.item.completed ? 'line-through' : 'none',
        }}>{item.item.text}</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={{alignItems:"center",justifyContent:"center"}}
    key={item.item.id} onPress={()=> deleteTodo(item.item.id)}
     >
   <AntDesign name="delete" size={24} color="black" />
    </TouchableOpacity>  
    </View>
  )}
/>
{/* { data.map((todo) =><View style={{ flex:1, padding:20,backgroundColor:"red", margin:5}}>
    <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
        <Text style={{
            fontSize: 24,
            textDecorationLine: todo.completed ? 'line-through' : 'none',
        }}>{todo.text}</Text>
    </TouchableOpacity>
    <TouchableOpacity key={todo.id} onPress={()=> deleteTodo(todo.id)} style={{right:-width*0.000000000001,paddingRight:100}}>
    <AntDesign name="delete" size={24} color="black" />
    </TouchableOpacity>  
    </View>
)} */}
    </View>
);
}
 
export default TodoList;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});