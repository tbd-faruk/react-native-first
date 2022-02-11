import React, { Component } from 'react';
import {View, StyleSheet,ImageBackground, Text, TextInput} from 'react-native';
import { Button } from "native-base";
import Header from './layouts/Header';
class BasicDetail extends Component {
state = {
  name: "",
  keyboardStatus: undefined,
}

    render() {
        return (
            <View>
                <Header title="Basic Details" status={0.1}/>
                <View style={styles.container}>
                    <Text style={styles.title}>What's Your Phone Number</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter Phone Number"
                      onChangeText={newText => this.setState({name:newText})}
                      defaultValue={this.state.name}
                    />
                    <Text style={styles.example}>Example: (xxx) xxx-xxx</Text>
                    <Button
                      style={styles.btn}
                    >
                      Save
                    </Button>
                  </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#eaeff1",
    textAlign: "center",
    alignItems: "center",
    height:600,
    
  },
  input:{
    width: 320,
    height: 40,
    borderWidth:1,
    borderColor:"#2196F3",
    padding: 10,

  },
  example:{
    width: 200,
    alignSelf:"flex-start",
    marginLeft:50,
  },
  title:{

    color: "#30383b",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:50,
    marginBottom:20,
  },
  btn:{
    width: 320,
    height: 40,
    fontSize:35,
    borderRadius:50,
    fontWeight: "bold",
    padding:10,
    backgroundColor:"#2196F3",
    margin: 30,

  },
});
export default BasicDetail;
