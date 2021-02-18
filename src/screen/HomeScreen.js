import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions ,ScrollView,keyboardDismissMode} from 'react-native';
import TodoApp from '../TodoApp'
import store from '../store'
import { Provider } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

const HomeScreen = props =>{ 
    return(
        <View style={{flex:1}}>
            <ScrollView style={{flex:1}} keyboardDismissMode="on-drag">
                <Provider store={store}>
                    <TodoApp />
                 </Provider>
            </ScrollView>
            < View style={styles.addContainer}>
           <TouchableOpacity onPress={()=> {props.navigation.navigate({routeName:'New Task'})}}   style={styles.touchableContainer}>
                <Ionicons name="md-add" size={40} style={styles.iconContainer} />
            </TouchableOpacity>
            </View>
        </View>

);}

const styles = StyleSheet.create({
    addContainer :{
        borderRadius:50,
        flexDirection: 'column-reverse',
        flex: 1,
        alignSelf: 'flex-end',
        position: 'absolute',
        marginTop: Dimensions.get('window').width*1.46,
        paddingRight :10
     },
     
     touchableContainer :{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        height:70,
        backgroundColor:'dodgerblue',
        borderRadius:50,
        elevation: 9
     },
     iconContainer :{
         color: 'white',
         padding: 10 
     }      

});


export default HomeScreen;