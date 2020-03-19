<template>
  <div class="background">
    <!--    <div class="main" v-title data-title="登录页面">-->
    <!--    </div>-->
    <el-form
      style="width: 430px;height: 400px;background:Transparent;padding:50px 100px 0 0;"
      :model="ruleForm" :rules="rules" status-icon  ref="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item  prop="username">
        <el-input type="text" placeholder="用户名" v-model="ruleForm.username" autocomplete="off"prefix-icon="el-icon-user">
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd" >
        <el-input type="password"placeholder="密码" v-model="ruleForm.pwd" autocomplete="off" prefix-icon="el-icon-key"></el-input>
      </el-form-item>
      <el-form-item >
        <el-row :gutter="10">
          <el-col :span="15">
            <el-input type="text" placeholder="图形验证码" v-model="ruleForm.number" autocomplete="off"prefix-icon="el-icon-folder-checked">
            </el-input></el-col>
          <el-col :span="5">
            <img src="../../assets/2.jpg" >
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item >
        <el-checkbox v-model="checked"  size="small">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 330px;" @click="dologin">登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        checked: false,
        rules:{
          username:[{
            required:true , message:"必填项",trigger:"blur"
          }],
          pwd:[{
            required:true , message:"必填项",trigger:"blur"
          }]
        },
        ruleForm: {
          username: '',
          pwd: '',
          number:''
        }
      };
    },
    methods: {
      dologin() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.$message({
              message: '登录成功',
              type: 'success'
            });
          } else {
            this.$message({
              message: '必填项不能为空',
              type: 'warning'
            });
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .background {
    position: relative;
    height: 100vh;
    background-image: url("../../assets/123.jpg");
    background-size: 100% 120%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .el-row {
    margin-bottom: -20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 2px;
  }
  /*.word {*/
  /*  font-size: 40px;*/
  /*  color: white;*/
  /*  font-weight: bolder;*/
  /*  position: absolute;*/
  /*  top: 50%;*/
  /*  left: 50%;*/
  /*  transform: translate(-50%, -50%);*/
  /*}*/

</style>
