const ul = document.querySelector('#task-list ul');

// to delete task
// var deletebtns = document.querySelectorAll('#task-list .delete');
// Array.from(deletebtns).forEach((btn) => {
//   btn.addEventListener('click',(e)=>{
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//
//   })
// });

ul.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
  if(e.target.className == 'name'){
    const liName = e.target.parentElement;
    liName.classList.toggle('done');
  }
});

//to add task
const addTask = document.forms['add-task'];
addTask.addEventListener('submit',(e)=>{
  e.preventDefault();
  let value = addTask.querySelector('input[type="text"]').value;
  console.log(value);

  const li = document.createElement('li');
  const taskName = document.createElement('span');
  const delbtn = document.createElement('span');

  li.appendChild(taskName);
  li.appendChild(delbtn);
  ul.appendChild(li);

  delbtn.textContent = 'Delete';
  taskName.textContent = value;

  delbtn.classList.add('delete');
  taskName.classList.add('name');

  addTask.querySelector('input[type="text"]').value = '';

})

//to hide all tasks
const hidebox = document.querySelector('#hide');
hidebox.addEventListener('change',()=>{
  if(hidebox.checked){
    ul.style.display='none';
  }else {
    ul.style.display='block';
  }
})

//search filter
const searchBar = document.forms['search-tasks'].querySelector('input');
searchBar.addEventListener('keyup',(e)=>{
    const term = e.target.value.toLowerCase();
    const tasks = ul.getElementsByTagName('li');
    Array.from(tasks).forEach((task) => {
      const title = task.firstElementChild.textContent.toLowerCase();
      if (title.indexOf(term) != -1) {
        task.style.display='block';
      }else {
        task.style.display='none';
      }
    });

})
