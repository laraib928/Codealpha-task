const input = document.getElementById(input-box);
const list = document.getElementById(list);

function addtask(){
    if (input ===""){
        alert('you must write something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
    }
}