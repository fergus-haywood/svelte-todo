<script lang="ts">

const status_list = [
  "Not Started", 
  "In Process",
  "In Review",
  "Completed"
]


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
</script>




<style>
  

</style>


<div class="w-full flex flex-col gap-y-12">
  <h3 class="text-3xl">
    Development Workload
  </h3>
  <div class="w-full flex gap-x-3">

    {#each status_list as status}

    <div class="flex-col flex-1">
      <p class={`w-fit text-xs rounded-md px-2 py-1 ${statusBg(status)}`}>
      {status}
      <p>
    </div>
      
    {/each}


  </div>
</div>