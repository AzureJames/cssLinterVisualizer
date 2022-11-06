// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState, reactDOM} from 'react';
import SankeyChart from './components/SankeyChart';

function App() {

  const [inputCss, setInputCss] = useState(" ");
  const [outputCss, setOutputCss] = useState(" ");
  const [outputCssMini, setOutputCssMini] = useState(" ");

  let processCss = () => {
    console.log(inputCss, outputCss, outputCssMini);
    setOutputCss(inputCss);
    setOutputCssMini(inputCss);

  }

  return (
    <div className="App">
        <div className="main-container">
            <h1>CSS Linter and Visualizer</h1>
            <form action="" method="POST">
                <label htmlFor="input_css">Input CSS</label>
                <textarea name="input_css" id="input_css" cols="160" rows="15" onChange={(input) => {setInputCss(input.target.value); console.log(input.target.value)} } value={inputCss}></textarea>
                <button type="button" id="submitCSS" onClick={() => processCss()}>Process CSS</button>
                <label htmlFor="output_css">Output CSS</label>
                <textarea name="output_css" id="output_css" cols="160" rows="15"  onChange={(input) => setOutputCss(input.value)} value={outputCss}></textarea>
                <label htmlFor="output_css_mini">Output CSS Minified</label>
                <textarea name="output_css_mini" id="output_css_mini" cols="160" rows="15"  onChange={(input) => setOutputCssMini(input.value)} value={outputCssMini}></textarea>
            </form>
        </div>
        <div className="css-chart">
          <SankeyChart />
        </div>
        <footer>2022 Azure James</footer>
    </div>
  );
}

export default App;
