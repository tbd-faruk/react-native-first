import React, { Component } from 'react';
import {View, StyleSheet,ImageBackground, Text, TextInput} from 'react-native';
import { Button } from "native-base";
import Header from './layouts/Header';
class EnterSmsPin extends Component {
state = {
  name: "",
  keyboardStatus: undefined,
}

    render() {
        return (
            <View>
                <Header title="Basic Details" status={0.6}/>
                <View style={styles.container}>
                    <Text style={styles.slug}>An authentication code was sent your phone *** *** -1234  </Text>
                    <Text style={styles.title}>Please enter it below</Text>
                    <View style={{flexDirection:"row",justifyContent: "space-between"}}> 
                      <TextInput
                        style={styles.input}
                        onChangeText={newText => this.setState({name:newText})}
                        defaultValue={this.state.name}
                        placeholder="0"
                      />
                      <TextInput
                        style={styles.input}
                        onChangeText={newText => this.setState({name:newText})}
                        defaultValue={this.state.name}
                        placeholder="0"
                      />
                      <TextInput
                        style={styles.input}
                        onChangeText={newText => this.setState({name:newText})}
                        defaultValue={this.state.name}
                        placeholder="0"
                      />
                      <TextInput
                        style={styles.input}
                        onChangeText={newText => this.setState({name:newText})}
                        defaultValue={this.state.name}
                        placeholder="0"
                      />
                       <TextInput
                        style={styles.input}
                        onChangeText={newText => this.setState({name:newText})}
                        defaultValue={this.state.name}
                        placeholder="0"
                      />
                    </View>
                    <Text style={styles.resend}>Resend the verification code</Text>
                  
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
    width: 50,
    height: 50,
    borderWidth:1,
    marginRight: 10,
    borderColor:"#2196F3",
    padding: 1,
    lineHeight:50,
    paddingLeft:15,
    fontSize:27,

  },
  slug:{
    width: "80%",
    color: "#30383b",
    fontSize: 17,
    textAlign: "center",
    marginTop:50,
  },
  resend:{
    color:"#2196F3",
    fontWeight:"bold",
    fontSize: 18,
    margin: 20
  },
  title:{

    color: "#30383b",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:30,
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
export default EnterSmsPin;
