// let width = 300,
//     height = 300;
//
// // Creating the rectangle
// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);
//
// svg.append("g")
//     .append("rect")
//     .attr("width", 140)
//     .attr("height", 140)
//     .on("mouseover", mouseover)
//     .on("mousemove", mousemove)
//     .on("mouseout", mouseout);

let tooltip = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("display", "none");

document.addEventListener('DOMContentLoaded', () => {
  // Don't really know what these random groups are, remove them later
  const climateZones = document.querySelectorAll("g:not(#g2065):not(#layer2):not(#viewport-20180630013332566):not(#g1755)");

  function mouseover() {
    tooltip.style("display", "inline");
  }

  function mousemove() {
    tooltip
        .text("Tooltip text")
        .style("left", (d3.event.pageX - 34) + "px")
        .style("top", (d3.event.pageY - 12) + "px");
  }

  function mouseout() {
    tooltip.style("display", "none");
  }

  // const ET = document.getElementById('layer5').querySelectorAll("path[inkscape\\:label='ET']")
  climateZones.forEach(element => {
    element.addEventListener("mouseenter", event => {
      const {currentTarget} = event;
      currentTarget.classList.add("highlight");
    })

    element.addEventListener("mouseleave", event => {
      const {currentTarget} = event;
      currentTarget.classList.remove("highlight");
    });

    // For showing/removing tooltip
    element.addEventListener('mouseover', mouseover)
    element.addEventListener('mouseout', mouseout)
    element.addEventListener('mousemove', mousemove)
  })

  svgPanZoom(document.getElementById('svg2'));

});
