var data = [100, 250, 175, 200, 120, 10];

var extent = d3.extent(data, d => d);

var svg = d3.select('svg');

var yScale = d3.scaleLinear()
  .domain(extent)
  .range([300, 0] );

console.log(yScale);


d3.select('svg')
  .selectAll('rect')  
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * 100)
  .attr('y', d => 300 - d)
  .attr('width', 100)
  .attr('height', d => d)
  .attr('fill', 'blue')
  .attr('stroke', '#fff');