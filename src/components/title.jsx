import React, {Fragment} from 'react'
import {View, StyleSheet,Text, Image} from "@react-pdf/renderer";
import logo from '../image/new1.jpg'

const styles = StyleSheet.create({
    titleContainer:{
        marginTop:10,
        // display: 'flex',
        flexDirection: "row",
        borderBottom: '2 solid black'
    },
    logo:{marginRight:10},
    image:{width: 100,height:50},
    company:{
        fontSize:10,
    },
    dateLayout:{
        margin:'auto',
    },
    date: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
        fontSize: 10,
        fontStyle: 'bold',
    },
    label: {
        fontSize: 10,
        width: 100
    }
})
const Title = () =>{
    return(
        <Fragment>
            <View style={styles.titleContainer} fixed>
                <View style={styles.logo}>
                    <Image style={styles.image} src={logo}/>
                </View>
                <View style={styles.layout}>
                    <Text>JADCUP LTD</Text>
                    <Text style={styles.company}>4 Pukekiwiriki Pl, East Tamaki, Auckland 2013,</Text>
                    <Text style={styles.company}>Info@jadcup.co.nz</Text>
                    <Text style={styles.company}>09 282 3988</Text>
                </View>
                <View style={styles.dateLayout}>
                    <View style={styles.date}>
                        <Text style={styles.label}>ORDER DATE:</Text>
                        <Text style={styles.invoiceDate}>2020, 01, 02</Text>
                    </View >
                    <View style={styles.date}>
                        <Text style={styles.label}>DELIVERY DATE: </Text>
                        <Text style={styles.invoiceDate}>2020, 02, 01</Text>
                    </View >
                </View>
            </View>
        </Fragment>
    )
}

export default Title
