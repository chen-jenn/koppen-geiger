document.addEventListener('DOMContentLoaded', () => {
  const climateZones = document.querySelectorAll("g:not(#g2065):not(#layer2):not(#viewport-20180630013332566):not(#g1755)");

  // Don't really know what these random groups are, remove them later
  // const ET = document.getElementById('layer5').querySelectorAll("path[inkscape\\:label='ET']")
  climateZones.forEach(element => {
    element.addEventListener('mouseenter', event => {
      const {currentTarget} = event;
      currentTarget.classList.add('highlight');
    })

    element.addEventListener('mouseleave', event => {
      const {currentTarget} = event;
      currentTarget.classList.remove('highlight');
    });

  })

  svgPanZoom(document.getElementById('svg2'));
});
