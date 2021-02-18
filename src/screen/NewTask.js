import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import NewTaskTodo from './NewTaskTodo'
import store from '../store'
import { Provider } from 'react-redux'


const NewTask = props =>{ 
    return(
    <Provider store={store}>
      <NewTaskTodo/>
    </Provider>
);}

const styles = StyleSheet.create({
    container :{
        flex :1 ,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center'
    }
});
export default NewTask;