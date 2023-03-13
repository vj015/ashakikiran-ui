<template>
  <div id="navigation">
    <ul>
      <li>Home</li>
      <li>Articles</li>
      <li>Magazines</li>
      <li>Editors</li>
      <li>Readers</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
};
</script>

<style scoped>
#navigation {
  display: flex;
  width: 100%;
  margin-bottom: 50px;
}
#navigation ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 20px 0 0;
}
#navigation ul li {
  font-size: 2rem;
  padding: 2px 10px;
  cursor: pointer;
}
#navigation ul li:hover {
  color: #7ca971;
}
</style>
