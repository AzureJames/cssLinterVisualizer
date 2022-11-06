import React, { Component } from 'react'
import Chart from 'react-google-charts'

let colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
'#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

var options = {
height: 900,
sankey: {
node: {
colors: colors
},
link: {
colorMode: 'gradient',
colors: colors
}
}
};

const sankeyData = [
  ['From', 'To', 'Weight'],

  ['Header', 'Margin', 2],
  ['Nav', 'Margin', 2],
  ['Footer', 'Margin', 2],

  ['Header', 'Padding', 2],
  ['Nav', 'Padding', 1],
  ['Footer', 'Padding', 2],

  ['H1', 'Font-size', 3],
  ['H2', 'Font-size', 3],
  ['H3', 'Font-size', 3],
  ['P', 'Font-size', 2],
  ['A', 'Font-size', 1],


  ['H1', 'Font-family', 2],
  ['H2', 'Font-family', 2],
  ['H3', 'Font-family', 2],
  ['P', 'Font-family', 2],
  ['A', 'Font-family', 2],

  ['H1', 'Text-align', 2],
  ['H2', 'Text-align', 2],
  ['H3', 'Text-align', 2],
  ['P', 'Text-align', 2],
  ['A', 'Text-align', 2],

  ['H1', 'Color', 2],
  ['H2', 'Color', 2],
  ['H3', 'Color', 2],
  ['P', 'Color', 2],
  ['A', 'Color', 2],

  ['Div', 'Background', 1],
  

  ['H1', 'Background-color', 2],
  ['H2', 'Background-color', 2],
  ['H3', 'Background-color', 2],
  ['P', 'Background-color', 2],
  ['A', 'Background-color', 2],

  ['Header', 'Line-height', 2],
  ['H1', 'Line-height', 2],
  ['H2', 'Line-height', 2],
  ['H3', 'Line-height', 2],
  ['P', 'Line-height', 2],

  ['Header', 'Display-flex', 2],
  ['Div', 'Display-flex', 1],
  ['Img', 'Display-flex', 2],
  ['Nav', 'Display-flex', 3],

  ['Div', 'Height', 1],
  ['Div', 'Width', 1],
  ['Img', 'Height', 2],
  ['Img', 'Width', 2],
  ['Picture', 'Height', 2],
  ['Picture', 'Width', 2],

  ['Picture', 'Margin', 2],
  ['Ol', 'Padding', 2],
  ['Ul', 'Gap', 2],
  ['Li', 'Border', 2],
  ['Header', 'Overflow', 1],

  ['Nav', 'Gap', 2],
  ['Img', 'Gap', 2],
  ['Picture', 'Gap', 2],
  ['Div', 'Gap', 2],

  ['A', 'Border', 1],
  ['Header', 'Border', 1],

  ['Line-height', 'Typography', 10],
  ['Font-family', 'Typography', 10],
  ['Font-size', 'Typography', 12],
  ['Text-align', 'Typography', 10],
  ['Background-color', 'Backgrounds', 5],
  ['Background-color', 'Color', 5],
  ['Background', 'Backgrounds', 1],
  ['Height', 'Sizing', 5],
  ['Width', 'Sizing', 5],
  ['Margin', 'Margin & Padding', 8],
  ['Padding', 'Margin & Padding', 8],
  ['Gap', 'Margin & Padding', 10],
  ['Border', 'Borders', 4],
  ['Border-radius', 'Borders', 2],
  ['Display-block', 'Display', 2],
  ['Display-flex', 'Display', 8],
  ['Overflow', 'Display', 1]
];
class SankeyChart extends Component {
  render() {
    return (
      <div className="chart-container">
        <h2>CSS Sankey Chart Visualizer</h2>
        <Chart
          chartType="Sankey"
          width="100%"
        //   height="900px"
          color="black"
          loader={<div>Loading Chart</div>}
          data={sankeyData}
          options={options}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}
export default SankeyChart