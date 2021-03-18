import React, {Fragment, useState} from 'react'
import {Document, Page, StyleSheet, Text, View, pdf, Canvas, Image} from '@react-pdf/renderer'
import Title from "./title";
import Shipping from "./shipping";
import ProductTable from "./productTable";
import {PDFViewer} from '@react-pdf/renderer'
import TableContent from "./tableContent";
import BoxTable from "./BoxTable";
import Barcode from "react-barcode";
import logo from "../image/new1.jpg";

// const styles = StyleSheet.create({
//     page:{
//         padding: '40px 30px'
//     }
// })
const styles = StyleSheet.create({
    page: { padding: 30 },
    pageNumbers: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize:7
    },
});
const Invoice = ({data}) =>{
    return(
        <Document>
            <Page size={"A4"} style={styles.page} wrap>
                <Title />
                <Shipping/>
                <ProductTable/>
                <TableContent tableData={data}/>
                <BoxTable />
                <TableContent tableData={data}/>
                <Text style={styles.pageNumbers} render={({ pageNumber, totalPages }) => (
                    `${pageNumber} / ${totalPages}`
                )} fixed />
                {/*<View>*/}
                    {/*<Image style={styles.image} src={<Barcode value={"231232312321312312312"}/>}/>*/}
                    {/*<Barcode value={"231232312321312312312"}/>*/}
                {/*</View>*/}

            </Page>
        </Document>
    )
}
export default Invoice