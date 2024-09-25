<script lang="ts">
  import '../styles/reset.css'; 
  import '../styles/app.css';
  import '../styles/globals.css';

</script>

<header class="sticky t-0 w-full py-5 justify-center flex">
  <nav>
    <ul class="flex w-fit gap-x-3 px-2 py-3 bg-blur-md border-solid rounded-md">
      <li>
        <a href="/" class="link">
          Home
        </a>
      </li>
      <li>
        <a href="/todos" class="">
          Todos
        </a>
      </li>
    </ul>
  </nav>

</header>
<main class="px-3">
<slot></slot>
</main>

<style lang="scss">

</style>