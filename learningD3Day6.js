
var day6Data = [
    { name: "A", value: 30 },
    { name: "B", value: 25 },
    { name: "C", value: 20 },
    { name: "D", value: 25 }
];

// Select the SVG and create a centered group
var day6Group = d3.select(".Day6 #svgDay6")
    .append("g")
    .attr("transform", "translate(220,180)");

// Assign a color to each category
var day6Color = d3.scaleOrdinal()
    .domain(day6Data.map(d => d.name))
    .range(["#4e79a7", "#f28e2b", "#59a14f", "#e15759"]);

// Calculate the angles for each slice
var day6Pie = d3.pie()
    .sort(null)
    .value(d => d.value);

// Define the shape of each slice
var day6Arc = d3.arc()
    .innerRadius(70)
    .outerRadius(150);

var day6Slices = day6Pie(day6Data);

// Draw the slices
day6Group.selectAll("path")
    .data(day6Slices)
    .join("path")
    .attr("d", day6Arc)
    .attr("fill", d => day6Color(d.data.name))
    .attr("stroke", "white")
    .attr("stroke-width", 2);

// Add labels inside the slices
day6Group.selectAll("text")
    .data(day6Slices)
    .join("text")
    .attr("transform", d => "translate(" + day6Arc.centroid(d) + ")")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .style("fill", "white")
    .style("font-family", "sans-serif")
    .text(d => d.data.name + ": " + d.data.value);