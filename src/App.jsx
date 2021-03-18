import './App.css';
import Invoice from "./components/invoice";
import React, {useState, useEffect} from "react";
import {mockData,data} from './mock/data.js'
import {PDFViewer,PDFDownloadLink,BlobProvider} from '@react-pdf/renderer'


function App() {
    const [data1, setData1]= useState()
    const [show,setShow] = useState(false)

    useEffect(()=>{
        setData1(mockData())
        //api
    },[])
  return (
    <div className="App">
            <button onClick={()=>setShow(!show)}>test</button>
        {show &&
            <PDFViewer width="50%" height="500" className="app">
                <Invoice data={data1}/>
            </PDFViewer>
        }
        {data1&&<BlobProvider document={<Invoice data={data1}/>}>
            {({blob, url, loading,error}) => {
                // console.log(blob)
                if (error) {
                    console.error(error);
                    return <p>An error occurred</p>;
                }
               return( <a href={url} target="_blank">{loading ? 'Loading document...' : 'Check PDF'}</a>)
            }}
        </BlobProvider>}
        <br/>
        {data1&&<PDFDownloadLink document={<Invoice data={data1}/>} fileName="somename.pdf">
            {({blob, url, loading, error}) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>}
    </div>
  );
}
// ReactPDF.render(<Invoice/>)
export default App;
