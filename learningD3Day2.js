// Day 2
/////////////////////////////////////////////////////

var svg = d3.select(".Day2 #svgHTML1");
svg.append('rect')
    .attr('width', 20)
    .attr('height', 20)

// A scale to set y values
ySliderScale = d3.scaleLinear()
    .domain([0, 140])
    .range([10, 130])

xSliderScale = d3.scaleOrdinal()
    .domain([0, 1, 2, 3, 4])
    .range([10, 40, 70, 100, 130])

// A scale to set colors
colorSliderScale = d3.scaleLinear()
    .domain([0, 100])
    .range(['#eee', 'red'])

var xSlider = document.getElementById("xSlider");
var xSliderValue = 0
var ySlider = document.getElementById("ySlider");
var ySliderValue = 0
var colorSlider = document.getElementById("colorSlider");
var colorSliderValue = 0

xSlider.oninput = function () {
    xSliderValue = this.value;
    var rect = d3.select(".Day2 #svgHTML1").select('rect');
    rect// Set the x value based on the slider value (passed into the x scale)
        .attr('x', xSliderScale(xSliderValue))
        // Same for y/y ccale!
        .attr('y', ySliderScale(ySliderValue))
        // Same for color/color scale!
        .style('fill', colorSliderScale(colorSliderValue))
}

ySlider.oninput = function () {
    ySliderValue = this.value;
    var rect = d3.select(".Day2 #svgHTML1").select('rect');
    rect// Set the x value based on the slider value (passed into the x scale)
        .attr('x', xSliderScale(xSliderValue))
        // Same for y/y ccale!
        .attr('y', ySliderScale(ySliderValue))
        // Same for color/color scale!
        .style('fill', colorSliderScale(colorSliderValue))
}

colorSlider.oninput = function () {
    colorSliderValue = this.value;
    var rect = d3.select(".Day2 #svgHTML1").select('rect');
    rect// Set the x value based on the slider value (passed into the x scale)
        .attr('x', xSliderScale(xSliderValue))
        // Same for y/y ccale!
        .attr('y', ySliderScale(ySliderValue))
        // Same for color/color scale!
        .style('fill', colorSliderScale(colorSliderValue))
}



// Define our data
var data = [0, 1, 2, 3, 4]

// The max height of the rects for convenience
var maxHeight = 140

// Set the x positions of our rects (ordinal)
// The domain is our data because the data values
// will be passed to the scale when we draw
var xScale = d3.scaleOrdinal()
    .domain(data)
    .range([10, 40, 70, 100, 130])

// The domain is the minimum value of our data
// to the maximum value of our data (continuous)
var yScale = d3.scaleLinear()
    .domain([0, 4])
    .range([10, maxHeight])

// Color will be set based on the value of our data
// It's convenient to use a linear scale so we don't
// have to define all of the colors in between by hand
var colorScale = d3.scaleLinear()
    .domain([0, 4])
    .range(['#eee', 'steelblue'])

var svg = d3.select(".Day2 #svgHTML2")

svg.selectAll('rect')
    // data bind
    .data(data)
    // append all 5 rects
    .join('rect')
    .attr('width', 20)
    .attr('y', 10)
    // pass in the bound data value to the scales
    // with an accessor function
    // so that we can set the value based on the scale
    .attr('x', (d) => xScale(d))
    .attr('height', (d) => yScale(d))
    .style('fill', (d) => colorScale(d))
