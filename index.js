function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');
let ul = document.querySelector('ul.employee-list');

function retrieveEmployeeInformation(){
  return input.value;
}

function addNewElementAsLi(){
  
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  ul.appendChild(li);
}

function addNewLiOnClick(){
  let addEmployee = document.querySelector("input[type=submit]");
  addEmployee.addEventListener('click',function(e){
    addNewElementAsLi();
    input.value = '';
  })
}

function clearEmployeeListOnLinkClick(){
  let clear = document.querySelector('a');
  clear.addEventListener('click',function(e){
    ul.innerHTML = '';
  })
}