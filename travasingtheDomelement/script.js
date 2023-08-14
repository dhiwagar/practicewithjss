let output;
// HTMLCollection
const parent=document.querySelector('.parent')
// output=parent.children[2].innerHTML
// output=parent.children[2].className
// parent.firstElementChild.innerText="child one"

output=parent.childNodes[3].textContent;


console.log(output);