<template>
    <!-- Content for the component's template goes here -->
<header class="header">

</header>
</template>
  
  <script>
  
  export default {
    name: 'Header', // The name of the Vue component
  };
  
  </script>
  
  <style>
  
  .header {
    grid-area: header; /* Defines the grid area for elements with the 'header' class */
    background-color: linear-gradient(to right, #1e468a, #49a7c1); /* Applies a linear gradient background */
    display: flex; /* Displays the element as a flex container */
    justify-content: center; /* Centers the content horizontally within the flex container */
    align-items: center; /* Centers the content vertically within the flex container */
  }

  </style>