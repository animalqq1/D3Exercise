// Day 5
/////////////////////////////////////////////////////

data = [
    { year: 2005, value: 734.69 },
    { year: 2006, value: 750.70 },
    { year: 2007, value: 755.13 },
    { year: 2008, value: 694.19 },
    { year: 2009, value: 681.83 },
    { year: 2010, value: 718.98 },
    { year: 2011, value: 740.57 },
    { year: 2012, value: 752.24 },
    { year: 2013, value: 767.24 },
    { year: 2014, value: 802.45 },
    { year: 2015, value: 805.65 },
    { year: 2016, value: 935.58 },
    { year: 2017, value: 967.13 },
    { year: 2018, value: 1007.24 },
]

var height = 500
var width = 900

var margin = {
    top: 10,
    right: 10,
    bottom: 20,
    left: 35,
}

var yMax = d3.max(data, d => d.value)

var xDomain = data.map(d => d.year)

var xScale = d3.scaleBand()
    .domain(xDomain)
    .range([margin.left, width - margin.right - margin.left])
    .padding(0.5)

var yScale = d3.scaleLinear()
    .domain([0, yMax])
    .range([height - margin.bottom, margin.top])

var xAxis = d3.axisBottom(xScale)
    .tickSizeOuter(0)

var yAxis = d3.axisLeft(yScale)
    .tickSizeOuter(0)

var svg = d3.select(".Day7 #svgDay7")

var day7Line = d3.line()
    .x(d => xScale(d.year) + xScale.bandwidth() / 2)
    .y(d => yScale(d.value));

// Draw one path connecting all the data points
svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 3)
    .attr("d", day7Line);

// Here we render the x axis
svg.append('g')
    .attr('class', 'x-axis')
    // First set its container's (g) position to the
    // bottom of the chart
    .attr('transform', `translate(0,${height - margin.bottom})`)
    // then just call this to render it
    .call(xAxis)

// it works the same for the y axis
svg.append('g')
    .attr('class', 'y-axis')
    .attr('transform', `translate(${margin.left},0)`)
    .call(yAxis)
