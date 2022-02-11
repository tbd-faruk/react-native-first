import React, { Component } from 'react';
import {View, StyleSheet,ImageBackground, Text, TextInput} from 'react-native';
import { Button, Radio } from "native-base";
import Header from './layouts/Header';
import CustomRadioButton from './partial/CustomRadioButton'
class CreatePassword extends Component {
state = {
  name: "",
  keyboardStatus: undefined,
}

    render() {
      const val = [
        {
          key: 'characters',
          text: 'At least be 6 characters',
        },
        {
          key: 'number',
          text: 'One Number',
        }
      ];
        return (
            <View>
                <Header title="Basic Details" status={0.4}/>
                <View style={styles.container}>
                    <Text style={styles.title}>Create New Password</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter Password"
                      onChangeText={newText => this.setState({name:newText})}
                      defaultValue={this.state.name}
                    />
                    <View style={styles.radioContainer}>
                      <Text style={styles.warningTitle}>The password should have: </Text>
                      <CustomRadioButton style={styles.radio} PROP={val} />
                    </View>
                   
                    <Button
                      style={styles.btn}
                    >
                      Next
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
    height: 50,
    borderWidth:2,
    borderColor:"#2196F3",
    padding: 10,

  },
  radioContainer:{
    justifyContent:"flex-start",
    width:"80%",
    margin: 20,
  },
  radio:{
    marginTop:10,
  },
  warningTitle:{
    fontSize:16,
    color:"#30383b"
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
export default CreatePassword;
