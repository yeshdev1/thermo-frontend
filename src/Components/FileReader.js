import React from 'react';
import '../PageContent/pageContentStyles.css';
import { fileToBase64 } from '../utils/common';

class FileReader extends React.Component {
    constructor() {
      super();
      this.state = {
        pdfFile: undefined,
        title: "",
        description: ""
      };
    }
  
    handleChange = event => {
        if (event.target.files < 1 || !event.target.validity.valid) {
            return
        }
        fileToBase64(event.target.files[0], (err, result) => {
            if (result) {
                this.setState({
                    pdfFile: result
                });
            }
        })
    };
  
    importCSV = () => {
      const { 
          pdfFile,
          title,
          description
    } = this.state;
      const { 
          setUploadedArticle,
          setTitle,
          setDescription
      } = this.props;
      if (pdfFile !== undefined) {
        setUploadedArticle(pdfFile)
        setTitle(title)
        setDescription(description)
      } else {
          console.log('Error: No file uploaded')
      }
    };
    
    handleChangeDescription = (event) => {
        this.setState({description: event.target.value})
    }

    handleChangeTitle = (event) => {
        this.setState({title: event.target.value})
    }

    render() {
      return (
        <div className={this.props.className}>
            <div className="pull-apart space-up-down">
                <span className="field-name">Title</span>
                <span><input type="text" value={this.state.title} onChange={this.handleChangeTitle} /></span>
            </div>
            <div className="alignment-choose-file space-up-down">
                <input
                    className="csv-input"
                    type="file"
                    ref={input => {
                        this.filesInput = input;
                    }}
                    placeholder={null}
                    onChange={this.handleChange}
                    name="Upload File"
                    accept="application/pdf,application/vnd.ms-excel"
                />
            </div>
            <div className="pull-apart space-up-down">
                <span className="field-name">Description</span>
                <span>
                    <textarea 
                        onChange={this.handleChangeDescription}
                        value={this.state.description}
                    ></textarea>
                </span>
            </div>
            <button
                className="default-button"
                onClick={this.importCSV}
            >
                Add
            </button>
        </div>
      );
    }
  }
  
  export default FileReader;