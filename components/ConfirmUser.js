import React, { Component } from 'react';
import {View, StyleSheet,ImageBackground, Text, TextInput} from 'react-native';
import { Button } from "native-base";
import Header from './layouts/Header';
class ConfirmUser extends Component {
state = {
  name: "Faruk Haider",
  keyboardStatus: undefined,
}

    render() {
        return (
            <View>
                <Header title="Basic Details" status={0.2}/>
                <View style={styles.container}>
                    <Text style={styles.title}>Is this You?</Text>
                    <View style={styles.listContainer}>
                      <Text style={styles.label}>Name</Text>
                      <Text style={styles.value}>Rocky Balboa</Text>
                    </View>
                    <View style={styles.listContainer}>
                      <Text style={styles.label}>Email</Text>
                      <Text style={styles.value}>yoadrian****@gmail.com</Text>
                    </View>
                    <Text style={styles.example}>If this isn't you, get in touch with your salesperson to confirm the information we have on file.</Text>
                    <Button
                      style={styles.btn}
                    >
                      Yes
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
  listContainer:{
    width:330,
    flexDirection:"row",
    justifyContent: "space-between",
    marginTop:10,
  },
  label:{
    backgroundColor:"#dae3e5",
    padding: 15,
    fontSize:17,
    fontWeight:"500",
  },
  value:{
    backgroundColor:"#dae3e5",
    padding: 10,
    fontSize:15,
    lineHeight:35,
    width: 240,
    textAlign:"left",
  },
  example:{
    width:310,
    fontSize: 14,
    color: "#30383b",
    marginTop:15,
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
export default ConfirmUser;
