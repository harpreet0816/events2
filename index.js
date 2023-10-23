function addLanguage(langName) {
  const li = document.createElement('li');
  li.innerHTML = `${langName}`;
  document.querySelector('.language').appendChild(li);
}
addLanguage('python');
addLanguage('typescript');

//optimised way
function addOptiLanguage(langName) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(langName));
  document.querySelector('.language').appendChild(li);
}
addOptiLanguage('golang');

//Edit

const secondLang = document.querySelector('li:nth-child(2)');
console.log('secondLang20line', secondLang);
const yellow = (secondLang.outerHTML = '<li>Mojo</li>');
console.log('secondLang22line', yellow);

const newli = document.createElement('li');
newli.textContent = 'java';
const green = secondLang.replaceWith(newli);
console.log('secondLang27line', green);

//edit
const firstLang = document.querySelector('li:first-child');

//firstLang.outerHTML = '<li>TypeScript</li>';

//remove
const lastLang = document.querySelector('li:last-child');
// to remove last lang
//lastLang.remove();

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    //color += hex[Math.floor(Math.random() * 16)];
    console.log('rhia', (color += hex[Math.floor(Math.random() * 16)]));
    console.log(i);
  }
  return color;
};
console.log(randomColor());

//*** TWO.HTML */
console.log('HERE START FROM 52 LINE ');
const parent = document.querySelector('.parent');
console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//      console.log(parent.children[i].innerHTML);

// }
parent.children[1].style.color = 'orange';
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day');
console.log('dayOne', dayOne);
console.log('dayOne.parentElement', dayOne.parentElement);
console.log('dayOne.nextElementSibling', dayOne.nextElementSibling);

console.log('NODES: ', parent.childNodes);
