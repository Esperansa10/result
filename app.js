async function getJson()  {
    let response = await fetch('http://localhost:63342/ResultProject/test.json');

    if(response.ok) {
    let json = await response.json();
     json.map( (user) => obrab(user) );

} else {
        console.log(response); }

}

getJson();
let ul = document.querySelector("#list");
let li = document.createElement("li");
let input = document.querySelector("input");
function obrab(user)  {
    let newDiv = document.createElement('div');
    newDiv.innerHTML =  `
<li class="list-group-item"> ${user.name}</li>
`;
    newli = newDiv.cloneNode(true);
    // newli.classList.add('list-group-item');
    ul.appendChild(newli);
console.log(newli);




    // li = li.cloneNode();
    // li.textContent = user.name;
    //  ul.appendChild(li);
    // console.log(user.name);

}

input.addEventListener("keydown", function (event) {
    content = event.target.value;
    if (content === "Leanne" ) {
// как менять список?
    }
})



// каждого юзера оформляет в html
function toHTML(user) {
return `
<li class="list-group-item"> ${user.name}</li>
`

}


