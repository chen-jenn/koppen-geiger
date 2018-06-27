document.addEventListener('DOMContentLoaded', () => {
  const ET = document.getElementById('layer5').querySelectorAll("path[inkscape\\:label='ET']")

  ET.forEach(element => {
    element.addEventListener('mouseenter', event => {
      const {currentTarget} = event;
      currentTarget.classList.add('highlight')
    })

    element.addEventListener('mouseleave', event => {
      const {currentTarget} = event;
      currentTarget.classList.remove('highlight')
    })
  })
});
