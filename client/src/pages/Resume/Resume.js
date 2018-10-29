import React, { Component } from 'react';
import {Document, Page} from 'react-pdf/dist/entry.noworker';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import "./Resume.css";


const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

class Resume extends Component {
  state = {
    file: '/techResume.pdf',
    numPages: null,
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { file, numPages } = this.state;

    return (
      <div className="Example">
        <div className="Example__container">
          
          <div className="Example__container__document">
            <Document
              file={file}
              onLoadSuccess={this.onDocumentLoadSuccess}
              options={options}
            >
              {
                Array.from(
                  new Array(numPages),
                  (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                    />
                  ),
                )
              }
            </Document>
          </div>
        </div>
        <object data="techResume.pdf" type="application/x-pdf" title="SamplePdf" width="500" height="720">
    <a href="techResume.pdf">Print Resume</a> 
</object>
      </div>
    );
  }
}

export default Resume;