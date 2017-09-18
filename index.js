var data = [100, 250, 175, 200, 120];


d3.selectAll('rect')
  .data(data)
  .attr('x', (d, i) => i * 100)
  .attr('y', d => 300 - d)
  .attr('width', 100)
  .attr('height', d => d)
  .attr('fill', 'blue')
  .attr('stroke', '#fff');