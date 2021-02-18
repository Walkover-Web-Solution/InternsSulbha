import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'
class TodoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddTodo/>
                <View style={{flex:1}} >
                    <VisibleTodos/>
                </View>
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    }
});