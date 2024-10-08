
<script lang="ts">
  export let data;
  import Kanban from '../../components/Kanban.svelte'

</script>



<!-- <h1>
  This is the Todos
</h1> -->
<Kanban todos={data?.todos} />
