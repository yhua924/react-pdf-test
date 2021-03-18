import React, {Fragment} from 'react'
import {Text,View, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        height:'30px',
        textAlign: 'center',
        fontSize:10,
        fontStyle:'bold',
        backgroundColor: '#A0A0A0'
    },
    product:{
        width: '20%',
        borderRightColor: 'black',
        borderRightWidth: 1,
    },
    description:{
        width: '40%',
        borderRightColor: 'black',
        borderRightWidth: 1,
    },
    summary: {
        width: '25%',
        borderRightColor: 'black',
        borderRightWidth: 1,
    },
    quantity: {
        width: '15%',
    },
})
const BoxTable = () =>{
    return(
        <Fragment>
            <View style={styles.container}>
                <Text style={styles.product}>Box Number</Text>
                <Text style={styles.description}>Description</Text>
                <Text style={styles.summary}>summary</Text>
                <Text style={styles.quantity}>Quantity</Text>
            </View>
        </Fragment>
    )
}


export default BoxTable