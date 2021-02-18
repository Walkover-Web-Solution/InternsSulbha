import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import NewTask from './src/screen/NewTask';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator({
  Home: {
    screen :HomeScreen,
    navigationOptions: {
      title: "Home",
      headerStyle: {
      backgroundColor :'dodgerblue'
      },
      headerTintColor :'white'
    }
  },
  'New Task' :{
    screen :NewTask,
    navigationOptions: {
      title: "New Task",
      headerStyle: {
      backgroundColor :'dodgerblue'
      },
      headerTintColor :'white'
    }
  },
},
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() { return ( 
       <AppContainer/>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue'
  },
});
