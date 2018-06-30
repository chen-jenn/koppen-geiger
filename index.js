document.addEventListener('DOMContentLoaded', () => {
  const ET = document.getElementById('ET')
  // const ET = document.getElementById('layer5').querySelectorAll("path[inkscape\\:label='ET']")

  ET.addEventListener('mouseenter', event => {
    const {currentTarget} = event;
    currentTarget.classList.add('highlight');
  });

  ET.addEventListener('mouseleave', event => {
    const {currentTarget} = event;
    currentTarget.classList.remove('highlight');
  });

});
