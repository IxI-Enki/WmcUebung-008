console.log('New App');

const btn = document.querySelector('.btn')
 
btn.addEventListener('click', sayHello)

function sayHello() {
  console.log('the button works!')
}
