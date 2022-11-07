// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';
import SankeyChart from './components/SankeyChart';

function App() {

  // let sankeyData =  [
  //   ['From', 'To', 'Weight'],
  //   ['Header', 'Line-height', .2],
  //   ['Nav', 'Font-family', .2],
  //   ['H1', 'Font-size', .2],
  //   ['H2', 'Text-align', .2],
  //   ['H3', 'Color', .2],
  //   ['P', 'Background-color', .2],
  //   ['Div', 'Background', .2],
  //   ['Article', 'Height', .2],
  //   ['Img', 'Width', .2],
  //   ['Picture', 'Margin', .2],
  //   ['Ol', 'Padding', .2],
  //   ['Ul', 'Gap', .2],
  //   ['Li', 'Border', .2],
  //   ['A', 'Display-flex', .2],
  //   ['Footer', 'Border-radius', .2],
  //   ['P', 'Overflow', .2],
  
  
  //   ['Line-height', 'Typography', .2],
  //   ['Font-family', 'Typography', .2],
  //   ['Font-size', 'Typography', .2],
  //   ['Text-align', 'Typography', .2],
  //   ['Background-color', 'Backgrounds', .2],
  //   ['Background', 'Backgrounds   ', .2],
  //   ['Height', 'Sizing', .2],
  //   ['Width', 'Sizing', .2],
  //   ['Margin', 'Margin & Padding', .2],
  //   ['Padding', 'Margin & Padding', .2],
  //   ['Gap', 'Margin & Padding', .2],
  //   ['Border', 'Borders', .2],
  //   ['Border-radius', 'Borders', .2],
  //   ['Display-block', 'Display', .2],
  //   ['Display-flex', 'Display', .2],
  //   ['Overflow', 'Display', .2]
  // ];





//   let selectorsArray = [
// "header",
// "nav",
// "h1",
// "h2",
// "h3",
// "p",
// "div",
// "article",
// "img",
// "picture",
// "ol",
// "ul",
// "li",
// "a" ]


// let rulesArray = [
// "line-height",
// "font-family",
// "font-size",
// "text-align",
// "color",
// "background-color",
// "background",
// "height",
// "width",
// "margin",
// "padding",
// "gap",
// "border",
// "display-flex" ]

//   let rulesetsArray = [
//     "Display",
//     "Typography"
//   ]


  const [inputCss, setInputCss] = useState(" ");
  // const [outputCss, setOutputCss] = useState(" ");
  const [outputCssMini, setOutputCssMini] = useState(" ");
  // let inputProcessed = "";
  let inputProcessedMini = "";








  let processCss = () => {
    console.log(inputCss, outputCssMini);

    // inputProcessed = inputCss;

    // setOutputCss(inputProcessed);

    inputProcessedMini = inputCss.replace(/\s/g,'');
    
    setOutputCssMini(inputProcessedMini);

    //every time it counts

  }

  return (
    <div className="App">
        <div className="main-container">
            <h1>CSS Linter and Visualizer</h1>
            <h2>Lint and Minimize</h2>
            <div className="container">
              <form action="" method="POST">
                  <label htmlFor="input_css">Input CSS</label>
                  <textarea name="input_css" id="input_css" cols="160" rows="15" onChange={(input) => {setInputCss(input.target.value); console.log(input.target.value)} } value={inputCss}></textarea>
                  <button type="button" id="submitCSS" onClick={() => processCss()}>Process CSS</button>
                  {/* <label htmlFor="output_css">Output CSS</label>
                  <textarea name="output_css" id="output_css" cols="160" rows="15"  onChange={(input) => setOutputCss(input.value)} value={outputCss}></textarea> */}
                  <label htmlFor="output_css_mini">Output CSS Minified</label>
                  <textarea name="output_css_mini" id="output_css_mini" cols="160" rows="9"  onChange={(input) => setOutputCssMini(input.value)} value={outputCssMini}></textarea>
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
