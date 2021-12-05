<script>
  import { scale } from "svelte/transition";
  export let category;
  let showLink = false;
</script>

<section
  on:mouseenter={() => (showLink = true)}
  on:mouseleave={() => (showLink = false)}
  style="aspect-ratio: 2/3; background-image:url({category.image});"
  class="w-64 lg:w-80 mt-5 mb-14 rounded-3xl bg-white shadow-md -rotate-6 hover:rotate-0 hover:shadow-2xl transition-all duration-400 ease-in-out bg-contain bg-center bg-no-repeat bg-origin-content p-3 flex justify-center items-end"
>
  {#if showLink}
    <a
      href="/"
      transition:scale
      class="bg-gray-900 text-gray-200 text-lg lg:text-xl py-3 px-4 mb-10 rounded hover:bg-gray-700
			active:translate-y-1 transition-colors duration-300 ease-in-out tracking-wider capitalize"
      >{category.name}</a
    >
  {/if}
</section>
