import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Story = (props) => {
    return (
        <View style={{alignItems: 'center', marginRight: 20}}>
            <Image
                source={{uri: props.image}}
                style={{width: 50, height: 50, borderRadius: 50/2}}
            />
            <Text style={{maxWidth: 50, textAlign: "center"}}>{props.title}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View>
            <Text>Component Dinamis with Props</Text>
            <ScrollView horizontal> 
                <View style={{flexDirection: 'row'}}>
                    <Story title="Youtube Channel" image="http://placeimg.com/100/100/nature" />
                    <Story title="Youtube Channel" image="http://placeimg.com/100/100/nature" />
                    <Story title="Class Online" image="http://placeimg.com/100/100/nature/grayscale" />
                    <Story title="Kabayan Online" image="http://placeimg.com/100/100/people" />
                    <Story title="Kabayan Online" image="http://placeimg.com/100/100/people" />
                    <Story title="Kabayan Online" image="http://placeimg.com/100/100/people" />
                </View>

            </ScrollView>
        </View>
    )
}

export default PropsDinamis;

const styles = StyleSheet.create({})
