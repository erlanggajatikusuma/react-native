import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
    return (
      <View>
        <View style={{width: 80, height: 80, backgroundColor: 'blue'}} />
        <Text>Kusuma</Text>
        <Erlangga />
        <Text>Jati</Text>
        <Photo />
        <TextInput style={{borderWidth: 1}} />
        <BoxGreen />
        <Profile />
      </View>
    )
  }
  
  const Erlangga = () => {
    return <Text>Erlangga Jatikusuma</Text>
  }
  
  const Photo = () => {
    return <Image style={{width: 100, height:100}} source={{uri: 'http://placeimg.com/100/100/tech'}} />
  }
  
  class BoxGreen extends Component {
    render(){
      return <Text>Component dari class</Text>
    }
  }
  
  class Profile extends Component {
    render() {
      return (
        <View>
          <Image 
            source={{uri: 'http://placeimg.com/100/100/nature'}} 
            style={{width: 100, height: 100}}
          />
          <Text style={{color: 'blue'}}>Ini hewan</Text>
        </View>
      ) 
    }
  }

export default SampleComponent;