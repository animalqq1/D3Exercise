// Day 1
/////////////////////////////////////////////////////

var svg = d3.select(".Day1 #svgHTML1")

// now, we append a rect (rectangle) element to the SVG
var rect = svg.append('rect')

// finally, we style and position the rect
rect
  .style('fill', 'orange') // rect's fill color
  .attr('height', 20) // rect's height (in pixels)
  .attr('width', 20) // rect's width (in pixels)
  .attr('x', 10) // x position of the top-left corner
  .attr('y', 10) // y position of the top-left corner



// Select our svg element just like before
var svg = d3.select(".Day1 #svgHTML2")

// Now, select all rects that are contained by the svg
var rects = svg.selectAll('rect')

// Define the data that we will bind to our rectangles
// each element in the array will become a new rect
var data = [0, 1, 2, 3, 4]

rects
  // The data join - the big moment!
  // When we do this, we tell D3 to include
  // 5 additional rects in our selection, one for each element in our data array
  .data(data)
  // Now we append the rects just like before.
  // Unlike before, when we append, we're actually
  // appending all 5 rects at once
  .join('rect')
  // ...and when we set style and attributes, we're setting them
  // for all 5 rects at once, too
  .style('fill', 'black')
  .attr('height', 20)
  .attr('width', 20)
  .attr('y', 10)
  // This positions each new rect 10 pixels to the right
  // of the last rect. We'll explain what's going on here on day 3
  .attr('x', (d, i) => { return 10 + (i * 30) })
