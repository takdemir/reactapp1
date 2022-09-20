import React, {useEffect} from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import Viewer, { Worker } from '@phuocng/react-pdf-viewer';

import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

const Pdf = () => {

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });


  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.2.228/build/pdf.worker.min.js">
      <div style={{ height: '750px' }}>
        <Viewer fileUrl="https://www.acarindex.com/dosyalar/makale/acarindex-1423937274.pdf" />
      </div>
    </Worker>
  )
}

export default Pdf
