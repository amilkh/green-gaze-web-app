import React, {useCallback} from 'react';
import logo from './logo-gg.png';
import './App.css';
// Our imports
import ImageUploader from 'react-images-upload';
import { CsvToHtmlTable } from 'react-csv-to-table';

const sampleData = `
id,prob_agriculture,prob_artisinal_mine,prob_bare_ground,prob_blooming,prob_blow_down,prob_clear,prob_cloudy,prob_conventional_mine,prob_cultivation,prob_habitation,prob_haze,prob_partly_clowdy,prob_prime,prob_road,prob_selective_logging,prob_slash_burn,prob_water
179,0.027891463,1.7747841e-05,0.00012189891,9.149982e-06,0.0010311729,0.002847714,0.48804152,0.0007453955,0.0035745762,0.0034219332,0.72801477,0.07345713,0.6307906,0.022215622,4.9138045e-05,2.4782694e-06,0.09292081
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Content">
          <p>
            Upload an image to begin
            <br />
          </p>
          <ImageUploader withPreview={true}/>
          <a
            className="App-link"
            href="#pleasechangemetosomethinguseful"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <CsvToHtmlTable data={sampleData} csvDelimiter="," tableClassName="table table-striped table-hover" hasHeader={true}/>
            Learn more about deforestation in the Amazon
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
