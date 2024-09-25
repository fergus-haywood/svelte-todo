<script lang="ts">
  import '../styles/reset.css';
  import '../styles/app.css';

</script>

<header class="sticky t-0 w-10">
  <nav>
    <ul class="navigation">
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

<slot></slot>

<style lang="scss">

  .header { 
    display: flex;
    width: 100%;
    justify-content: center;
    padding-block: 20px;
    position: sticky;
    top: 0px;
  }
  .navigation { 
    display: flex;
    column-gap: 12px;
    padding: 8px 12px;  
    backdrop-filter: blur(8px);
    border: 1px solid black;
    border-radius: 8px;

  }
</style>