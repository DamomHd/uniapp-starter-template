<!--
 * @Author: Damom
 * @Date: 2020-09-13 13:40:42
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-13 16:13:18
 * @Description: file content   
-->
<template>
    <view>
        <text>123</text>
        <button @click="submit">登录</button>
    </view>
</template>

<script>
import { mapState ,mapActions } from 'vuex'
export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapState({
            hasLogin:state => state.user.hasLogin
        })
    },
    methods:{
        ...mapActions("account",['login']),
        submit(){
            this.login({
                username:'ceshi',
                password:'123456'
            }).then(res =>{
                console.log(res)
            })
            
        }
    },
    onLoad(){
        console.log(this.login)
    }
}
</script>

<style>

</style>