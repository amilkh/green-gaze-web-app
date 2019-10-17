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
            Edit <code>src/App.js</code> and save to reload.
            <br />
            Upload an image to begin
            <br />
            Add image uploading capability here
          </p>
          <ImageUploader />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
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
