<script lang="ts">
import Modal from './Modal.svelte';
import { supabase } from "$lib/supabase";

  export let dragStart;
  export let handleTodoChange;
  export let handleTodoDelete;
  export let todo;


  let updated = false;
  let extended = false;
  let saved = false
  ;
  const handleSave = async() => {
    const res = await supabase.from('todos')
    .update({ title: todo.title, description: todo.description })
    .eq('id', todo.id)
    .then(() => { 
        saved = true
        updated = false
        setTimeout(() => { 
          saved = false
          extended = false
        }, 3000)
    })

  } 

  const handleChange = (todo, event, key) => { 
    updated = true;
    handleTodoChange(todo, event, key)
  }


  const handleDelete = async(todo) => { 
    //update local state
    handleTodoDelete(todo)

    //update db
    const res = await supabase.from('todos').delete().eq('id', todo.id)
    console.log('this is the res', res)

  }


</script>

<li 
  class={`rounded-md shadow-md hover:shadow-sm hover:bg-slate transition-all duration-200 p-2 border-charcoal cursor-pointer`}
  draggable={true}
  on:dragstart={event => dragStart(event, status, todo)}
   >
   <div 
   class={`flex flex-col h-full ${extended ? 'h-60' : 'h-[24px]'} transition-all duration-200 relative`}
   on:click={() => extended = true}
   >
    <input 
      type="text" 
      placeholder="New Todo"
      class='placeholder:text-charcoal w-full'
      value={todo.title} 
      on:change={event => handleChange(todo, event, 'title')}
      />

      {#if extended}
      <div class="mt-3">
        
        <textarea
        type="text"
        placeholder="Description"
        class='placeholder:text-charcoal w-full'
        rows=3
        value={todo.description}
        on:change={event => handleChange(todo, event, 'description')}
        />
        <div class="absolute bottom-1 w-full flex justify-between items-center px-1">
        <button
          class="text-charcoal rounded-md border-lightCharcoal border-1 border-solid px-2 duration-200 transition-all hover:bg-lightCharcoal"
          on:click={event => handleSave(todo)}>
          {#if saved }
          Saved!
          {:else}
          Save
          {/if}
      </button>
      {#if updated }
      <p class="text-xs text-red-500">
        Not saved
      </p>
      {:else}
      <button 
      on:click={event => handleDelete(todo)} 
      class="text-red-500 rounded-md border-red-400 border-1 border-solid px-2 py-1 text-xs duration-200 transition-all hover:bg-red-400"
      >
      Delete
    </button>
      {/if}
      </div>
    </div>
    {/if}



  </li>