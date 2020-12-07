import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import hachiman from './hachiman.jpg';

class FlexBox extends Component {
    render() {
        return (
            <View>
                <View style={{
                    flexDirection: 'row', 
                    backgroundColor: 'gray',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{backgroundColor: '#ee5253', width: 50, height: 50}}></View>
                    <View style={{backgroundColor: '#feca57', width: 50, height: 50}}></View>
                    <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}}></View>
                    <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}}></View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                    <Text>Beranda</Text>
                    <Text>Video</Text>
                    <Text>Playslist</Text>
                    <Text>Komunitas</Text>
                    <Text>Channel</Text>
                    <Text>Tentang</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <Image 
                        style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
                        source={hachiman} 
                    />
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold' }}>Hachiman Hikigaya</Text>
                        <Text>100 ribu subscriber</Text>

                    </View>

                </View>
            </View>
        )
    }
} 

export default FlexBox;