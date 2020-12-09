import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import macbook from '../../assets/image/macbook.jpg'

const Product = (props) => {
    return (
        <View>
            <View style={styles.wrapper}>
                <Image source={macbook}style={styles.imageProduct} />
                <Text style={styles.productName}>New MacBook Pro 2020</Text>
                <Text style={styles.productPrice}> Rp. 25.000.000</Text>
                <Text style={styles.location}> Jakarta Barat</Text>

                <TouchableOpacity onPress={props.onButtonPress}>
                    <View style={styles.buttonWrapper}>
                        <Text style={styles.buttonText}>Beli</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    wrapper: {
        padding: 12,
        backgroundColor: '#F2F2F2',
        width: 212,
        borderRadius: 8
    },
    imageProduct: {
        width: 188,
        height: 107,
        borderRadius: 8
    },
    productName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 16
    },
    productPrice: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#F2994A',
        marginTop: 12
    },
    location: {
        fontSize: 12,
        fontWeight: '300',
        marginTop: 12
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    buttonWrapper:{
        backgroundColor: '#6FCF97',
        borderRadius: 25,
        paddingVertical: 6,
        marginTop: 20
    }
})
