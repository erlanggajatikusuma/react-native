import React, { Component } from 'react';
import {Image, Text, TextInput, View, StyleSheet, ScrollView} from 'react-native';
import macbook from './macbook.jpg';


const StylingReacNativeComponent = () => {
    return (
      <View>
        <Text style={styles.text}>Styling Component</Text>
        <View style={{
          width: 100,
          height: 100,
          backgroundColor: 'skyblue',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20,
        }} />
        <View style={{
            padding: 12,
            backgroundColor: '#F2F2F2',
            width: 212,
            borderRadius: 8
        }}>
          <Image 
            source={macbook}
            style={{
              width: 188,
              height: 107,
              borderRadius: 8
            }}
           />
           <Text style={{
             fontSize: 14,
             fontWeight: 'bold',
             marginTop: 16
           }}>
             New MacBook Pro 2020
           </Text>
           <Text style={{
             fontSize: 12,
             fontWeight: 'bold',
             color: '#F2994A',
             marginTop: 12
           }}>
             Rp. 25.000.000
          </Text>
          <Text style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 12
          }}>
            Jakarta Barat
          </Text>
  
          <View style={{
            backgroundColor: '#6FCF97',
            borderRadius: 25,
            paddingVertical: 6,
            marginTop: 20
          }}>
            <Text style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center'
            }}>Beli</Text>
          </View>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'green',
      marginLeft: 20,
      marginTop: 40
    }
  })

  export default StylingReacNativeComponent;