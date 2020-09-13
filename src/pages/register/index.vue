<!--
 * @Author: Damom
 * @Date: 2020-09-13 15:27:31
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-13 16:06:38
 * @Description: file content
-->
<template>
    <view>
        <button @click="getCode">获取验证码</button>
        <button @click="submit">注册</button>
        <input type="text" placeholder="验证码" v-model="form.accountNumberVerificationCode" />
    </view>
</template>

<script>
import { register, getRegisterCode } from "@/api/account";
import {mapState} from 'vuex'
export default {
  data() {
    return {
        
        form:{
            accountNumber:'17625580369',
            username:'ceshi',
            accountNumberVerificationCode:'',
            password:'123456',
            repeatPassword:'123456',
            roles:["Customer"]
        }
    };
  },
  computed: {
      ...mapState({
          roles:state =>state.user.roles
      })
  },
  methods: {
    async getCode() {
        let {form} = this
        let res = await getRegisterCode({accountNumber:form.accountNumber})
        this.form.accountNumberVerificationCode = res.username
    },
    async submit(){
        let {form} = this
        form.password = this.$md5(form.password)
        form.repeatPassword = this.$md5(form.repeatPassword)
        let res = await register(form)
    }
  },
  onLoad() {
  },
};
</script>

<style>
</style>