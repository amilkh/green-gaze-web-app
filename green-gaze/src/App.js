import React, {useCallback} from 'react';
import logo from './logo-gg.png';
import './App.css';
// Our imports
import ImageUploader from 'react-images-upload';
import {useDropzone} from 'react-dropzone'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Content">
          <p>
            Upload an image to begin
            <br />
            Add callback to Juypter / Greenplum for Keras importing here
          </p>
          <ImageUploader withPreview={true}/>
          <a
            className="App-link"
            href="#pleasechangemetosomethinguseful"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about deforestation in the Amazon
          </a>
        </div>
        <div className="Footer">
          <a className="Footer-link"
             href="https://pivotal.io">pivotal.io</a>
        </div>
      </header>
    </div>
  );
}

export default App;
