<template>
  <div class="background">
    <div class="word">
      <span>赵俊贺</span>
    </div>
  </div>
</template>

<script>
  export default {
      name: "login"
  }
</script>

<style scoped>
  .background {
    position: relative;
    height: 100%;
    width: 100%;
    background-image: url("../../assets/123.jpg");
    background-size: 100% 100%;
  }
  .word {
    font-size: 40px;
    color: white;
    font-weight: bolder;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
