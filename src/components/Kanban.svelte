
<script lang="ts">
import { supabase } from "$lib/supabase";
import Todo from './Todo.svelte';
export let todos;


const status_list = [
  "Not Started", 
  "In Process",
  "In Review",
  "Completed"
]

let tests = todos



const statusBg = (status) => { 
  switch (status) {
    case 'Not Started':
      return 'bg-lightCharcoal';
    case 'In Process':
      return 'bg-aqua';
    case 'In Review':
      return'bg-lightPink';
    case 'Completed':
      return 'bg-lightGreen';
    default:
    return 'bg-lightCharcoal';
  }
}

function dragStart(event, status, todo) { 
  const data = { status, todo };
   	event.dataTransfer.setData('text/plain', JSON.stringify(data));
}

function drop(event, status) {
		event.preventDefault();
    const json = event.dataTransfer.getData("text/plain");
		const data = JSON.parse(json);
    const { todo } = data

    //update local state
    tests.find((x) => x.id == todo.id).status = status
		tests = tests;

  
    //update db
    updateTodoDb(todo.id, status)
	}


  const updateTodoDb = async(id, status) => { 
    const res = await supabase.from('todos').update({ status }).eq('id', id)
  }

  const createTodoDb = async (status) => { 
    const res = await supabase.from('todos').insert({ title: null, description: null, status: status })
    console.log('this is the new todo res', res)
  }


  function createTodo(status) { 
    const newTodo = { 
      id: tests.length + 1,
      title: null,
      description: null,
      assignee: null,
      status
    }
    //create locally
    tests.push(newTodo);
    tests = tests;

    //create in db
    createTodoDb(status)

    


  }

  function handleTodoChange(todo, event, key) { 

    todo[key] = event.target.value
    tests = tests
  }


</script>



<div class="w-full flex flex-col gap-y-12">
  <h3 class="text-3xl">
    Development Workload
  </h3>
  <div class="w-full flex gap-x-3 min-h-">

    {#each status_list as status}
    <div class="flex-1 ">
    <p class={`w-fit text-xs rounded-md px-2 py-1 ${statusBg(status)}`}>
      {status}
      <p>
        <ul 
        class="flex flex-col gap-y-1 mt-4 h-full"
        on:drop={event => drop(event, status)}
        ondragover="return false">
          {#each tests.filter(x => x.status == status) as todo (todo.id)}
              <Todo {todo} {dragStart} {handleTodoChange}/>
          {/each}
          <button
          on:click={() => createTodo(status)}
          class="hover:bg-slate mt-1 rounded-md text-charcoal px-1 py-2 rounde-duration-200 transition-all cursor-pointer">
          + New
            </button>
        </ul> 
    </div>
    {/each}


  </div>
</div>