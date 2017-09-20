import * as d3 from 'd3';
var data = [100, 250, 175, 200, 120, 10];
var margin = {top: 20, left: 20, right: 20, bottom: 20};
var height = 1000;
var width = 1000;
var city = 'San Francisco';

// d3.csv('Most-Recent-Cohorts-Scorecard-Elements.csv', (err, data) => {
//   data.forEach(d => {
//     d.institution = d.INSTNM;
//     d['GRAD_DEBT_MDN10YR_SUPP'] = isNaN(d['GRAD_DEBT_MDN10YR_SUPP']) ? 0 : +d['GRAD_DEBT_MDN10YR_SUPP'];
//   })
//   var yMax = d3.max(data, d => d['GRAD_DEBT_MDN10YR_SUPP'])
//   var yScale = d3.scaleLinear()
//     .domain([0, yMax])
//     .range([height - margin.bottom, margin.top]);

//   var yAxis = d3.axisLeft()
//     .scale(yScale);

//   var svg = d3.select('svg')

//   svg.append('g')
//     .attr('transform', `translate(${margin.left}, ${margin.top})`)
//     .call(yAxis);

//   svg.selectAll('rect')
//     .data(data)
//     .enter()
//     .append('rect')
//     .attr('width', 2)
//     .attr('height', (d) => { return height - yScale(d['GRAD_DEBT_MDN10YR_SUPP']) })
//     .attr('y', (d) => { return yScale(d['GRAD_DEBT_MDN10YR_SUPP']) })
//     .attr('x', (d,i) => { return i + margin.left })
//   });