import React from 'react'
import {View, StyleSheet,ImageBackground, Text, TextInput,Button} from 'react-native';
export default function Input() {
  return (
                    <TextInput
                    style={this.props.styled}
                    placeholder={this.props.placeholder}
                    onChangeText={newText => this.setState({name:newText})}
                    defaultValue={this.state.name}
                  />
  )
}
