import { StatusBar } from "expo-status-bar"; 
import React, { Component } from "react"; 
import { Button, SafeAreaView, StyleSheet, Modal, 
		View, TextInput, Dimensions,Text ,TouchableOpacity, Touchable} from "react-native"; 
import { connect } from 'react-redux'
import { addTodo } from '../actions'
		
const { width } = Dimensions.get("window"); 

class NewTaskTodo extends Component {	
    state = {
        text: ''
    }

    addTodo = (text) => {
        //redux store 
        if(!text){
            return
        }
        this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }

     render(){
	return ( 
				<View style={styles.viewWrapper}> 
					<View style={styles.modalView}>
                    <Text style={{fontWeight: "bold",paddingBottom:10,paddingTop:15,fontSize:19,color:'dodgerblue'}}> Add New Task </Text>
						<TextInput placeholder="Enter New Task..."
						         multiline={true} 
								 style={styles.textInput} 
								 onChangeText={(text) => this.setState({ text })}
								 value={this.state.text} /> 

                        <TouchableOpacity onPress={() => this.addTodo(this.state.text)} style={{width:100,height:100,paddingTop:10}}>
						<Button title="ADD"  style={{width:40}} />
                        </TouchableOpacity> 
					</View> 
				</View> 
	); 
} 
}
export default connect()(NewTaskTodo);

const styles = StyleSheet.create({ 
	screen: { 
		flex: 1, 
		alignItems: "center", 
		justifyContent: "center", 
		backgroundColor: "#fff", 

	}, 
	viewWrapper: { 
        flex:1,
		alignItems: "center", 
		justifyContent: "center", 
		backgroundColor: "rgba(0, 0, 0, 0.006)", 
	}, 
	modalView: { 
		alignItems: "center",
        paddingTop:30, 
		justifyContent: "center", 
		position: "absolute", 
		top: "50%", 
		left: "50%", 
		elevation: 5, 
		transform: [{ translateX: -(width * 0.392) }, 
					{ translateY: -170 }], 
		height: 220, 
		width: width * 0.8, 
		backgroundColor: "#fff", 
		borderRadius: 7, 
	}, 
	textInput: { 
		textAlignVertical: 'top',
		width: "80%", 
        height:"60%",
		borderRadius: 5, 
		paddingVertical: 8, 
		paddingHorizontal: 16, 
		borderColor: "rgba(0, 0, 0, 0.2)",
		borderWidth: 1, 
		marginBottom: 8, 
	}, 
});
