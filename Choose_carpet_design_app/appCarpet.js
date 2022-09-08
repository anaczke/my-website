let elements = document.getElementsByName('selector');
let divv = document.getElementById('modify');

function setting() {
    for (let i=0; i<elements.length; i++){
       let cssProperty = elements[i].getAttribute('id'); 
       let cssValue = elements[i].value;
           
       divv.style[cssProperty]= cssValue;

       console.log(cssProperty, cssValue);
              
    }
   
    }
const set = document.getElementById('button')
.addEventListener('click', setting);

