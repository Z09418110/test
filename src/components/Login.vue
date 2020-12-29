<template>
  <div class="firstdemo">
      <el-form ref="user" :model="form" label-width="100px">
          <el-row type="flex" justify="center">
              <el-col :span="5">
                  <el-form-item label-width="70px">
                    <span><font color="pink" size="3">登录页面</font></span>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row type="flex" justify="center">
              <el-col :span="5">
                  <el-form-item label="账户：" prop="username">
                      <el-input v-model="user.username" size="small"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row type="flex" justify="center">
              <el-col :span="5">
                  <el-form-item label="密码：" prop="pwd">
                      <el-input v-model="user.pwd" size="small"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-row type="flex" justify="center">
              <el-col :span="5">
                  <el-form-item>
                      <el-button type="primary" @click="submitBtn()">登录</el-button>
                      <el-button type="primary" >注册</el-button>
                  </el-form-item>
              </el-col>
          </el-row>
      </el-form>
         
  </div>
</template>
 
 
<!--数据存贮交互，事件控制地区-->
<script>
export default {
  name: 'firstdemo',
  data () {
      user:[
        {
            username:'张三',
            pwd:'123456'
        }
    ]  
    return {
        user:{
            username:'',
            pwd:'',
        },
    
    }
  },
  methods:{
      /*提交进行判断的函数 */
        submitBtn(){
            let me=this;
            if(!me.user.username||!me.user.pwd){
            alert("用户名或密码不能为空");
            }
            else {
            this.$store.commit('login',this.user);
            this.$router.push('./');
            }
        }
    }
}
</script>
 
<style scoped>
 
</style>