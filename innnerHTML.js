let div = document.querySelector('#one');
console.log(div);

newdiv = div.cloneNode();
newdiv.innerHTML = "another text";
body.appendChild(newdiv);
console.log(div.innerHTML);

