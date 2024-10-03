<script>
import Modal from './Modal.svelte';

  export let dragStart;
  export let handleTodoChange;
  export let todo;

  let extended = false;
</script>

<li 
  class={`rounded-md shadow-md hover:shadow-sm hover:bg-slate transition-all duration-200 p-2 border-charcoal cursor-pointer`}
  draggable={true}
  on:dragstart={event => dragStart(event, status, todo)}
   >
    <input 
      type="text" 
      placeholder="New Todo"
      class={`placeholder:text-charcoal w-full`}
      value={todo.title} 
      on:change={event => handleTodoChange(todo, event, 'title')}
      on:click={() => extended = !extended}
      />

  </li>