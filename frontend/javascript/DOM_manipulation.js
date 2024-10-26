// The Document Object Model (DOM) represents the structure of a web page. JavaScript can be used 
// to manipulate the DOM, changing the content and style of HTML elements.
<div>
 <p id="demo">This is a paragraph.</p>
<button onclick="changeText()">Change Text</button>

<script>
    function changeText() {
        document.getElementById("demo").innerHTML = "Text changed!"
    }
</script>



<div id="container">
  <h1 class="title">Hello World!</h1>
</div>
</div>

const title = document.querySelector(".title");
title.textContent = "New Title!";
title.style.color = "blue";


const newElement = document.createElement("p");
newElement.textContent = "I’m a new paragraph!";
document.body.appendChild(newElement);



// todo list project
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="main.css">
//     <title>Todo List App</title>
// </head>
// <body>
//     <header>
//         <h1> Todo List App</h1>
//         <form id="new-task-form">
//             <input 
//             type="text"
//             id="new-task-input"
//             placeholder="what are your plans">

//             <input 
//             type="submit"
//             id="new-task-submit"
//             value="Add">
//         </form>
//     </header>
//     <main>

//         <section class="task-list">
//             <h1>Tasks</h1>

//             <div id="tasks">
                
//                 </div>
//             </div>
            
//         </section>

//     </main>
    
//     <script src="main.js"></script>
// </body>
// </html>



// body{
//     background-color: rgb(120, 120, 149);
//     padding: 50px;
// }
// #new-task-input{
//     height: 50px;
//     width: 25%;
//     padding: 5px;
//     border: inset;
//     border-color: black;
//     border-radius: 15px;
//     font-size: 20px;
// }
// #new-task-submit{
//     height: 50px;
//     width: 5%;
//     cursor: pointer;
//     border-radius: 10px;
//     background-color: darkslateblue;
//     margin-left: 20px;
//     transition: 0.4s;
//     font-size: 20px;
// }
// #new-task-submit:hover {
//     color: white;
//     background-color: #0f0f0f
// }
// .task-list{
//     background-color: white;
//     height: 400px;
//     width: 40%;
//     padding: 10px;
//     margin-top: 10px;
//     border:inset;
//     border-color: black;
//     border-radius: 10px;
// }
// .task{
//     display: flex;
//     justify-content: space-between;   
    
// }
// .text{
//     height: 27px;
//     width: 150%;
//     border-radius: 10px;
//     font-size: 15px;
//     padding: 5px;
//     margin: 5px;
// }
// .actions{
//     display: flex; 
// }
// .edit{
//     margin: 5px;
//     border-radius: 5px;
// }
// .delete{
//     margin: 5px;
//     border-radius: 5px;
// }

// .edit:hover {
//     color: white;
//     background-color: #062f42
// }

// .delete:hover {
//     color: white;
//     background-color: #570202
// }



// window.localStorage.setItem('inputs', JSON.stringify(task_el))
// const task_el = JSON.parse(localStorage.getItem(inputs))


window.addEventListener('load', function(){

    // select the elements
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const task = input.value;
            if(task === ''){
            alert('Please Enter Tasks')
            return;
        }

        // tasks
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        list_el.appendChild(task_el);


        // the input 
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = ('text');
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);


        // tasks button(edit and delete button) 
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');
        
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = 'Edit';

        const task_delete_el = document.createElement('button');
           task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = 'Delete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

         input.value = "";

         //edit and delete button in action
        task_edit_el.addEventListener('click', function(){
            if(task_edit_el.innerText.toLowerCase() == 'edit'){
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.innerText = 'Save';
            }else{
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerText = 'Edit';
            }
            
        });

        task_delete_el.addEventListener('click', function(){
            list_el.removeChild(task_el);
        });
    });

    window.addEventListener('beforeunload', function(event){
        event.preventDefault()
        return (event.returnValue = "");
    })
});