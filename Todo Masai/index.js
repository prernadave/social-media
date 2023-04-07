document.querySelector('form').addEventListener('submit', myTodo)


function myTodo(event){
    event.preventDefault()
    let task = document.querySelector('#task').value;
    let prior = document.querySelector('#priority').value;
    let obj={
       task
        ,prior
    }
    displayTable(obj)

    
}

function displayTable(obj){
 let tr = document.createElement('tr')
 document.querySelector('tbody').append(tr)

 let td1 = document.createElement('td')
 td1.innerText= obj.task
 let td2 = document.createElement('td')
 td2.innerText= obj.prior
 if (obj.prior=='High') {
    td2.style.backgroundColor="red" 
 }else if(obj.prior=='Low'){
    td2.style.backgroundColor="green"
 }
 
 let td3 = document.createElement('td')
 td3.innerText= "Add as Favourite"

 tr.append(td1,td2,td3)
 
 


 
}