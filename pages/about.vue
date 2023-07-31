<script setup>
const route = useRoute()

</script>

<template>
  <div>
    <EmailModal />
    <h1>archived</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
      numquam repellat odio quam, suscipit veritatis modi voluptate
      necessitatibus voluptatum aliquam deleniti non nulla ratione quia
      laudantium molestias, rerum dolore praesentium?
    </p>
    <p>Current route: {{ route.path }}</p>
  </div>
</template>
