<footer class="bg-gray-900 p-10 mt-auto">
  <div
    class="container mx-auto flex flex-col space-y-7 md:space-y-0 md:flex-row-reverse md:justify-between md:px-8 "
  >
    <nav class=" text-gray-300 flex justify-around md:space-x-7">
      <a
        sveltekit:prefetch
        href="/about"
        class="hover:text-yellow-500 transition-colors">About</a
      >
      <a
        sveltekit:prefetch
        href="/contact"
        class="hover:text-yellow-500 transition-colors">Contact</a
      >
    </nav>
    <p class="text-gray-500 text-center">
      Copyright © 2021 Divisorry Price All Rights Reserved
    </p>
  </div>
</footer>
