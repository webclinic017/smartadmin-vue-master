<template>
    <div>
      <Header></Header>
      <div class="word">
        <span>张宁</span>
      </div>
    </div>
</template>

<script>
  import Header from '@/components/common/Header'
  export default {
    name: "NewPage",
    components: {
      Header
    }
  }
</script>

<style scoped>
  .word {
    font-size: 40px;
    font-weight: bolder;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
