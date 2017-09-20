import * as d3 from 'd3';
var margin = {top: 20, left: 20, right: 20, bottom: 20};
var height = 1000;
var width = 1000;
var city = 'San Francisco';
var svg = d3.select('svg');
// var data = [
// {date: new Date(2007, 3, 24), value: 1},
// {date: new Date(2007, 3, 25), value: 2},
// {date: new Date(2007, 3, 26), value: 3},
// {date: new Date(2007, 3, 27), value: 5},
// {date: new Date(2007, 3, 28), value: 3},
// {date: new Date(2007, 3, 29), value: 3},
// {date: new Date(2007, 3, 30), value: 9},
// ]

// var xExtent = d3.extent(data, d => d.date)
// var xScale = d3.scaleTime()
//   .domain(xExtent)
//   .range([margin.left, width])

// var yExtent = d3.extent(data, d => d.value);
// var yScale = d3.scaleLinear()
//   .domain(yExtent)
//   .range([height, margin.top])


// var line = d3.line()
//   .x((d) => { return xScale(d.date)})
//   .y((d) => { return yScale(d.value)})

// svg.append('path')
//   .attr('d', line(data))



var pieData = [1, 1, 2, 3, 5, 8, 13, 21];

var pie = d3.pie();

var arc = d3.arc()
  .outerRadius(100)
  .innerRadius(0)

var arcData = pie(pieData);

svg.selectAll('path')
  .data(arcData)
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('transform', 'translate(200, 200)')
  .attr('stroke', '#fff')



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