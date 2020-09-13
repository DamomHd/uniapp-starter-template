/*
 * @Author: Damom
 * @Date: 2020-09-13 11:17:42
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-13 21:28:48
 * @Description: file content
 */
import {login,logout} from '@/api/account'

import md5 from 'js-md5';
export default {
    namespaced:true,
    actions:{
        /**
         * @description 用户登录操作
         * @param {*} param0 
         * @param {*} param1 
         */
        login({dispatch },{
            username = '',
            password = '',
        } = {}){
            password = md5(password)
            return new Promise((resolve,reject)=>{
                login({
                    username,
                    password
                }).then(async res =>{
                    console.log(res)
                    await dispatch('user/set',{
                        // userInfo:res.data
                    },{ root:true })
                    // 加载用户登录的相关数据
                    await dispatch('load')
    
                    resolve()
                })
                .catch(err =>{
                    reject(err)
                })
            })
        },
        /**
         * @description 用户注销操作
         * @param {*} param0 
         * @param {*} param1 
         */
        logout({commit,dispatch},{confirm = false} = {}){

            async function logoutFn (){
                
                logout().then(async res =>{
                    await dispatch('user/set',{},{root:true})
                    //跳转
                    //...
                })
                


            } 

            if(confirm){
                //提示是否注销

            }
            else{
                logoutFn()
            }
        },
        /**
         * @description 用户登录后加载相关登录初始化数据
         * @param {*} param0 
         */
        load({dispatch}){
            return new Promise(async resolve =>{
                await dispatch('user/load',null,{root:true})

                //...


                resolve()
            })
        }
    }
}