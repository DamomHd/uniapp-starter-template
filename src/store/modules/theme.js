/*
 * @Author: Damom
 * @Date: 2020-09-13 11:11:30
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-13 11:14:43
 * @Description: file content
 */
export default{
   namespaced:true,
   state:{
       list:['#FF0000','#00FF00','#0000FF'],
       activeIndex:0
   },
   mutations:{
        /**
         * @description 设置主题
         * @param {*} state 
         * @param {*} index 
         */
        setColorIndex(state,index){
            state.activeIndex = index
        }   
   },
   getters:{
       /**
         * @description 当前主题颜色
         * @param {*} state 
         * @param {*} index 
         */
       currentColor(state){
           return state.list[state.activeIndex]
       }
   }
}