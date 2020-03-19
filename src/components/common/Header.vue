<template>
  <div class="header-background">
    <header class="content">
      <nav>
        <div class="logo">
          <svg t="1583725559681" class="icon zh-icon" viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="42670" width="200" height="200"><path d="M1084.032516 896.303379L947.323971 1023.978319l-99.369647-93.949484A608.86493 608.86493 0 0 1 180.672086 918.586269l-13.249286 12.044806a60.224029 60.224029 0 0 1 0 14.453767A83.10916 83.10916 0 0 1 83.10916 1023.978319 81.302439 81.302439 0 0 1 0 945.687082a82.506919 82.506919 0 0 1 82.506919-80.700198h15.056007a76.484516 76.484516 0 0 0 9.635845-8.431364 717.268182 717.268182 0 0 1-74.075555-87.927082L120.448057 687.928239a513.108724 513.108724 0 0 0 591.399962 112.016694L355.92401 463.894853 254.145401 559.651058 101.778608 416.31787l269.201409-254.747641A177.058644 177.058644 0 0 0 542.016258 127.844773l84.31364 79.495717-134.901824 128.879422 354.719529 336.05008C991.889752 416.31787 822.057992 99.539479 542.016258 0.169832c345.083684-9.635845 727.506266 392.058427 440.83989 800.377341L1084.032516 896.303379z" fill="#D32617" p-id="42671"></path></svg>
          <div class="logo-word" @click="gotoHomePage">
            <span>智慧党建</span>
          </div>

        </div>
        <div class="navbar">
          <ul>
            <li @click="gotoNewPage"><span>新闻资讯</span></li>
            <li><span>政策文件</span></li>
            <li><span>工作动态</span></li>
            <li><span>党建事务</span></li>
            <li><span>在线学习</span></li>
            <li><span>大数据平台</span></li>
            <li @click="gotoLogin"><span>后台登录</span></li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
    export default {
      name: "Header",
      methods: {
        gotoHomePage() {
          this.$router.push('/')
        },
        gotoNewPage() {
          this.$router.push('/NewPage')
        },
        gotoLogin () {
          this.$router.push('/Login')
        }
      }
    }
</script>

<style scoped>
  .header-background {
    height: 60px;
    background-color: black;
  }
  .content {
    width: 1100px;
    margin: 0 auto;
    height: 60px;
  }
  .navbar {
    float: left;
    height: 60px;
    line-height: 60px;
  }
  .navbar li {
    float: left;
    list-style-type: none;
    margin-left: 70px;
    height: 60px;
    cursor: pointer;
    color: #B4B4BB;
    font-size: 14px;
  }
  .navbar li:hover {
    color: white;
  }
  .logo {
    height: 60px;float: left;margin-right: 40px
  }
  .zh-icon {
    width: 40px;height: 60px;float: left
  }
  .logo-word {
    line-height: 60px;height: 60px;float: left;margin-left: 20px;color: white;font-size: 24px;
    cursor: pointer;
  }
</style>
