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
var colors = d3.scaleOrdinal(d3.schemeCategory20)

var pie = d3.pie();

var arc = d3.arc()
  .outerRadius(100)
  .innerRadius(20)
  .startAngle((d) => d.startAngle)
  .endAngle((d) => d.endAngle)


var newSvg = svg.append('g')
  .attr('transform', 'translate(200, 200)')


newSvg.selectAll('path')
  .data(pie(pieData))
  .enter()
  .append('path')
  .attr('d', (d) => { return arc(d)})
  .attr('stroke', '#fff')
  .attr('fill', (d, i) => { return colors(d.value)})



// newSvg.selectAll('path')
//   .data(pie(pieData))
//   .enter().append('path')
//   .attr('d', (d) => { return arc(d)})
//   .attr('stroke', '#fff')

// var pie = d3.pie();

// var arc = d3.arc()
//   .outerRadius(100)
//   .innerRadius(30)

// var arcLabel = d3.arc()
//   .outerRadius(200)
//   .innerRadius(10)

// var arcData = pie(pieData);

// console.log(arcLabel.centroid(arcData[0]))

// var arcDom = svg.selectAll('path')
//   .data(arcData)
//   .enter()
//   .append('g')
//   .attr('transform', 'translate(200, 200)')

// arcDom.append('path')
//   .attr('d', arc)
//   .attr('stroke', '#fff')

// arcDom.append('text')
//   .attr('transform', (d) => { return `translate(${arcLabel.centroid(d)})`})
//   .attr("dy", "0.35em")
//   .attr('fill', 'orange')
//   .text((d) => { return d.data })


d3.csv('Most-Recent-Cohorts-Scorecard-Elements.csv', (err, data) => {
  data = data.slice(0, 100)
  data.forEach(d => {
    d.institution = d.INSTNM;
    d['GRAD_DEBT_MDN10YR_SUPP'] = isNaN(d['GRAD_DEBT_MDN10YR_SUPP']) ? 0 : +d['GRAD_DEBT_MDN10YR_SUPP'];
  })
  var yMax = d3.max(data, d => d['GRAD_DEBT_MDN10YR_SUPP'])
  console.log(yMax);
  var yScale = d3.scaleLinear()
    .domain([0.0, yMax])
    .range([height + 20, margin.top]);
  var xScale = d3.scaleLinear()
    .domain([0, data.length])
    .range([margin.left + 20, width + margin.right])

  var yAxis = d3.axisLeft()
    .scale(yScale);

  var xAxis = d3.axisBottom()
    .scale(xScale);

  var svg = d3.select('svg')

  var line = d3.line()
    .y((d) => { return yScale(d['GRAD_DEBT_MDN10YR_SUPP'])})
    .x((d, i) => { return xScale(i)})

  svg.append('g')
    .attr('transform', `translate(${margin.left + 20}, 0)`)
    .call(yAxis);
  svg.append('g')
    .attr('transform', `translate(0, ${width + margin.top})`)
    .call(xAxis);

  svg.append('path')
    .attr('d', line(data))
    .attr('fill', '#fff')
    .attr('stroke', 'black')  
});