/*
 * @Author: Damom
 * @Date: 2020-09-12 21:50:19
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-12 21:59:12
 * @Description: file content
 */
export default {
    namespaced:true,
    state:{
        /**
         * @param {message} 日志信息
         * @param {type} 类型 success|warning|info(默认)|danger
         * @param {time} 日志记录事件
         * @param {meta} 其他携带信息
         */
        log:[]
    },
    getters:{
        /**
         * @description 返回现存log条数
         * @param {*} state 
         */
        length(state){
            return state.log.length
        },
        /**
         * @description 返回现存 log(error)条数
         * @param {*} state 
         */
        lengthError(state){
            return state.log.filter(log=>log.type === 'danger').length
        }
    },
    action:{
        
    }
}