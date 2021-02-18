import { StatusBar } from "expo-status-bar"; 
import React, { useState } from "react"; 
import { Button, SafeAreaView, StyleSheet, Modal, 
		View, TextInput, Dimensions,Text ,TouchableOpacity, Touchable} from "react-native"; 

const { width } = Dimensions.get("window"); 

export default function App() { 

	const [inputValue, setInputValue] = useState(""); 
	return ( 
		<SafeAreaView style={styles.screen}> 
			<StatusBar style="auto" /> 

				<View style={styles.viewWrapper}> 
					<View style={styles.modalView}>
                    <Text style={{fontWeight: "bold",paddingBottom:10,paddingTop:10,fontSize:19,color:'dodgerblue'}}> Add New Task </Text>
						<TextInput placeholder="Enter List..."
								value={inputValue} style={styles.textInput} 
								onChangeText={(value) => setInputValue(value)} /> 

                        <TouchableOpacity style={{width:100,height:100,paddingTop:20}}>
						<Button title="ADD"  style={{width:40}} />
                        </TouchableOpacity> 
					</View> 
				</View> 
		</SafeAreaView> 
	); 
} 

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
		backgroundColor: "rgba(0, 0, 0, 0.2)", 
	}, 
	modalView: { 
		alignItems: "center",
        paddingTop:30, 
		justifyContent: "center", 
		position: "absolute", 
		top: "50%", 
		left: "50%", 
		elevation: 5, 
		transform: [{ translateX: -(width * 0.9) }, 
					{ translateY: -200 }], 
		height: 220, 
		width: width * 0.8, 
		backgroundColor: "#fff", 
		borderRadius: 7, 
	}, 
	textInput: { 
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
