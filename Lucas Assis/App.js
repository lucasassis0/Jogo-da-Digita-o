import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, TouchableHighlight, TextInput, Alert} from 'react-native';
let input

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "Digite o máximo de letras que voce puder no tempo determinado!!",
      time: 10,
      start: false,
      text: '',
    }
  }

  startGame = () => {
    this.setState({start: true, time: 10})
    this.id = setInterval(() => {
      if(this.state.time > 0){
        this.setState({time: this.state.time - 1})
    }},1000)
  }

  componentDidUpdate() {
    if (this.state.time === 0 && this.state.start === true) {
      clearInterval(this.id)
      Alert.alert(`A quantidade de caracteres digitados foi: ${this.state.text.length}`)
      this.setState({start: false, text: ""})
    }
  }

  render(){
      return (
        <View style={styles.container}>
            <Text style={styles.title}>
              {"\nJogo da Digitação\n"}
            </Text>
            <Text style={styles.text}>
              {this.state.title + "\n"}
            </Text>
            <Text style={styles.time}>
              Tempo: {this.state.time}
              {"\n"}
            </Text>
            <TextInput style={styles.input}
              editable={this.state.start}                  
              placeholder= "Digite aqui"
              value= {input}
              onChangeText={ input =>{this.setState({text: input})}}
            />
            <TouchableHighlight style={styles.button} onPress={this.startGame}>
              <Text> Começar </Text>
            </TouchableHighlight>
        </View>
  )}
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: 'rgb(0, 0, 0)',
    borderWidth: 10,
    borderColor: 'rgb(25, 25, 25)'
  },
  title: {
    flex: 2,
    textAlign: "center",
    fontFamily: "Blippo, fantasy",
    fontWeight: "bold",
    fontSize: 26,
    color: 'rgb(0, 255, 0)'
  },
  text: {
    flex: 2,
    textAlign: "center",
    fontFamily: "Blippo, fantasy",
    fontWeight: "normal",
    fontSize: 18,
    color: 'rgb(0, 255, 0)'
  },
  time: {
    flex: 2,
    textAlign: "center",
    fontFamily: "Blippo, fantasy",
    fontWeight: "bold",
    fontSize: 18,
    color: 'rgb(0, 255, 0)'
  },
  input: {
    flex: 1,
    backgroundColor: 'rgb(100, 254, 100)'
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgb(0,255,0)",
    padding: 10,
    borderWidth: 10
  }
});