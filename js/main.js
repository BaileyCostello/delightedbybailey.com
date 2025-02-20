/*javascript*/

const stickySections = [...document.querySelectorAll('.sticky')]
console.log(stickySections);

/*
let images = [
  'assets/CDG Preview Image.png',
  'assets/CDG Preview Image.png',
  'assets/CDG Preview Image.png',
  'assets/CDG Preview Image.png'
]

images.forEach(img => {
  stickySections.forEach(section => {
    let image = document.createElement('img');
    image.src = img;
    section.querySelector('.scroll_section').appendChild(image)
  })
})
*/

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i])
  }
})

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  console.log(offsetTop);
  const scrollSection = section.querySelector('.scroll_section')
  console.log(scrollSection);
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  console.log(percentage);
  /*percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;*/
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;

}


function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}