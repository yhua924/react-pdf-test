import React, {Fragment} from 'react'
import {Text,View, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container:{
        // marginTop:10,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        // alignItems: 'center',
        // borderTop: '1px solid black',
        minHeight:'30px',
        lineHeight: 'normal',
        textAlign: 'center',
        fontSize:10,
        fontStyle:'bold',
    },
    product:{
        width: '20%',
        borderRightColor: 'black',
        borderRightWidth: 1,
        paddingTop: 2
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
const TableContent = ({tableData}) =>{
    // console.log(tableData.length)
    return(
        <Fragment>
            {
                tableData.map((res,index)=>{
                    return(
                        <View style={styles.container} key={index} wrap={false}>
                            <View style={styles.product}>
                                <Text >{res.table.id}.{res.table.product}</Text>
                            </View>
                            <View style={styles.description}>
                                <Text >{res.table.description}</Text>

                            </View>
                            <View style={styles.summary}>
                                <Text>{res.table.summary}</Text>
                            </View>
                            <View style={styles.quantity}>
                                <Text >{res.table.quantity}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </Fragment>
    )
}

export default TableContent