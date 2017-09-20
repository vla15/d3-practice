// var data = [100, 250, 175, 200, 120, 10];
// console.log(d3.tsvParse(weatherData));
var margin = {top: 20, left: 20, right: 20, bottom: 20};
var height = 1000;
var width = 1000;
var city = 'San Francisco';

d3.tsv('data.tsv', (err, data) => {
  data.forEach(d => {
    d.date = d3.timeParse('%Y%m%d')(d.date);
    d.date = new Date(d.date);
    d[city] = +d[city]
  })
  var yMax = d3.max(data, d => d[city])
  var yScale = d3.scaleLinear()
    .domain([0, yMax])
    .range([height - margin.bottom, margin.top]);

  var xExtent = d3.extent(data, d => d.date);
  var xScale = d3.scaleTime()
    .domain(extent)
    .range([margin.left, width - margin.right]);

  var svg = d3.select('svg');

  svg.append('rect')
    .attr('width', 2)
    .attr('height', d => yScale(d[city]))
    .attr('x', d => xScale(d.date))
    .attr('y', d => yScale(d[city]))
    .attr('fill', 'blue')
})

// var svg = d3.select('svg');

// var yScale = d3.scaleLinear()
//   .domain(extent)
//   .range([300, 0] );

// console.log(yScale);


// d3.select('svg')
//   .selectAll('rect')  
//   .data(data)
//   .enter()
//   .append('rect')
//   .attr('x', (d, i) => i * 100)
//   .attr('y', d => 300 - d)
//   .attr('width', 100)
//   .attr('height', d => d)
//   .attr('fill', 'blue')
//   .attr('stroke', '#fff');