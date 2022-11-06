// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';
import SankeyChart from './components/SankeyChart';

function App() {


  let selectorsArray = [
"header",
"nav",
"h1",
"h2",
"h3",
"p",
"div",
"article",
"img",
"picture",
"ol",
"ul",
"li",
"a" ]


let rulesArray = [
"line-height",
"font-family",
"font-size",
"text-align",
"color",
"background-color",
"background",
"height",
"width",
"margin",
"padding",
"gap",
"border",
"display-flex" ]

  let rulesetsArray = [
    "Display",
    "Typography"
  ]


  const [inputCss, setInputCss] = useState(" ");
  const [outputCss, setOutputCss] = useState(" ");
  const [outputCssMini, setOutputCssMini] = useState(" ");
  let inputProcessed = "";
  let inputProcessedMini = "";

  let processCss = () => {
    console.log(inputCss, outputCss, outputCssMini);

    inputProcessed = inputCss;

    setOutputCss(inputProcessed);

    inputProcessedMini = inputCss.replace(/\s/g,'');
    
    setOutputCssMini(inputProcessedMini);

    //every time it counts

  }

  return (
    <div className="App">
        <div className="main-container">
            <h1>CSS Linter and Visualizer</h1>
            <div className="container">
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
        </div>
        <div className="css-chart">
          <SankeyChart />
        </div>
        <footer>2022 Azure James</footer>
    </div>
  );
}

export default App;
