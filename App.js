import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button, TextInput} from 'react-native';
var input

class app extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "Digite o máximo de letras que voce puder no tempo determinado!!",
      time: 10,
      start: false,
      text: '',
    }
  }

  componentDidMount(){
    if(this.state.start === true){
      this.id = setInterval(() => {
        if(this.state.time > 0){
          this.setState({time: this.state.time - 1})
      }},1000)
    }    
  }

  componentDidUpdate(){
    if (this.state.time === 0) {
      this.setState({start: false})
      //Falta finalizar
    }
  }

  render(){
      return (
          <SafeAreaView>
              <View>
                  <Text>
                    Jogo da Digitação
                  </Text>
                  <Text>
                    {this.state.title}
                  </Text>
                  <Text>
                    {this.state.time}
                  </Text>
                  <TextInput
                  value= {input}
                  onChange={()=>{
                    this.setState((input)=>{this.state.text= input})
                  }}/>
                  <Button OnPress={()=>{
                    this.setState({start: true, time: 10})
                  }} title="Começar"/>
              </View>
          </SafeAreaView>
  )}
}

export default app
/*
class Jogo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        texto: '', 
        tempo: 10, 
        play: false
      }
      this.contador;
    }
    componentDidMount(){
      this.contador = setInterval(() => {
        this.incrementaContadador()},1000
      );
      this.setState({play: true});
    }
  
    incrementaContadador(){
        this.setState((()=>({tempo: state.tempo - 1})))
      if(this.state.tempo === 0 ){
        this.setState({play: false})
        this.componentWillUnmount()
      }
    }
   
    componentWillUnmount(){
      clearInterval(this.contador);
      Alert.alert(`                   ------Parabéns------\n               A sua pontuação é ${this.state.texto.length}`)
    }
  
    render(){
        return (
          <View>
            <Text style={styles.sectionTitle} > </Text>
            <Text style={styles.sectionDescription}>Tempo: {this.state.tempo}</Text>
            <Contador
            style={{
              height: 100, 
              borderColor: 'black', 
              borderWidth: 2, 
              margin: 5}}
            numberOfLines = {4}
            editable={this.state.play}
            multiline = {true}
            placeholder='Digite aqui'
            onChangeText={(text) => this.setState({texto: text})}
            value={this.state.texto}
          />
          <View style={{
              height: 50, 
              borderColor: '#bad1f7',
              backgroundColor: '#2672ed', 
              borderWidth: 2, 
              margin: 10,
              width:350,
              }}>
           <TouchableOpacity onPress={() => {
                this.setState({
                  texto: '', 
                  tempo: 10, 
                  play: false
                })
                this.contador
            }}>
              <Text style = {styles.sectionDescription}>
                Clique aqui para recomeçar
              </Text>
           </TouchableOpacity>
        </View> 
          
            
          </View>
        )
    }
    }
  
  const App = () => {
    return (
      <>
        <SafeAreaView>
          <Text />
          <Text style={styles.sectionTitle}>Jogo da Digitação</Text>
          <Text />
          <Text style={styles.sectionDescription}>Digite o maior numero de caracteres em 10 segundos!</Text>
          <Jogo />
          <Text />
        </SafeAreaView>
      </>
    );
  };*/