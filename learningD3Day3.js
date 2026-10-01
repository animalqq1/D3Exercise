// Day 3
/////////////////////////////////////////////////////

// Because the array contains objects rather than numbers, we'll need an accessor to let our functions know where to find the numbers. If we don't use an accessor, we won't get the result we're expecting.
var data = [
  { name: 'a', value: 1 },
  { name: 'b', value: 2 },
  { name: 'c', value: 3 },
  { name: 'd', value: 5 },
  { name: 'e', value: 6 }
]

var svg = d3.select(".Day3 #svgHTML1")

const circles = svg.selectAll('circle').data(data)

circles.enter().append('circle')
  // set the circles' radius
  .attr('r', (d) => d.value * 10)
  // set the circles' x position
  .attr('cx', (d) => d.value * 10)
  // set the circles' y position
  .attr('cy', 80)
  .attr('fill', 'transparent')
  .attr('stroke', 'steelblue')

const text = svg.selectAll('text').data(data)

text.enter().append('text')
  .attr('x', (d) => d.value * 10 * 2)
  .attr('y', 80)
  // This is a "magic number" in svg. It makes sure the text is vertically centered
  .attr('dy', '0.35em')
  // set from which direction the text expands
  .attr('text-anchor', 'end')
  // set the actual text
  .text(d => d.name)
