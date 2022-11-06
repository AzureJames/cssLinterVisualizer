import React, { Component } from 'react'
import Chart from 'react-google-charts'
const sankeyData = [
  ['From', 'To', 'Weight'],
  ['Header', 'Line-height', .2],
  ['Nav', 'Font-family', .2],
  ['H1', 'Font-size', .2],
  ['H2', 'Text-align', .2],
  ['H3', 'Color', .2],
  ['P', 'Background-color', .2],
  ['Div', 'Background', .2],
  ['Article', 'Height', .2],
  ['Img', 'Width', .2],
  ['Picture', 'Margin', .2],
  ['Ol', 'Padding', .2],
  ['Ul', 'Gap', .2],
  ['Li', 'Border', .2],
  ['A', 'Display-flex', .2],
  ['Footer', 'Border-radius', .2],
  ['P', 'Overflow', .2],
  ['P', 'Display-inline-block', .2],
  ['P', 'Display-block', .2],
  ['Display-block', 'Display', .2],
  ['Display-flex', 'Display', .2]
];
class SankeyChart extends Component {
  render() {
    return (
      <div className="chart-container">
        <h2>CSS Sankey Chart Visualizer</h2>
        <Chart
          chartType="Sankey"
          width="100%"
          height="900px"
          loader={<div>Loading Chart</div>}
          data={sankeyData}
          options={ {} }
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}
export default SankeyChart