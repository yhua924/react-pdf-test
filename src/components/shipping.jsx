import React from 'react'
import {View, Text, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    layout: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    label: {
        fontSize: 10,
        width: 40
    },
    text:{
        fontSize: 10,
        width: 150
    }

})
const Shipping = () =>{
    return(
        <View style={styles.container} fixed>
            <View style={styles.layout} >
                <Text style={styles.label}>Ship To:</Text>
                <Text style={styles.text}>The Coffee Club</Text>
            </View>
            <View style={styles.layout}>
                <Text style={styles.text}>2/30 Union Rd</Text>
            </View>
            <View style={styles.layout}>
                <Text style={styles.text}>Auckland 2012</Text>
            </View>
            <View style={styles.layout}>
                <Text style={styles.text}>Info@CoffeeClub.co,nzInfo</Text>
            </View>
        </View>
    )
}

export default Shipping