
/*
 * @Author: Damom
 * @Date: 2020-09-12 21:26:40
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-13 16:05:36
 * @Description: file content
 */
export default {
	state: {
		forcedLogin: false, //是否需要强制登陆
		hasLogin: false,
		userName: '默认用户',
		userInfo: {},
		//用户角色
		roles:[
			{
				name:'',
				value:'Customer'
			},
			{
				name:'',
				value:'CityPartner'
			},
			{
				name:'',
				value:'LoanPlanner'
			},
			{
				name:'',
				value:'BankLoanManager'
			}
		]
	},
	mutations: {
		login(state, userInfo) {
			state.hasLogin = true
			state.userInfo = userInfo
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setTestTrue(state) {
			state.testvuex = true
		},
		setTestFalse(state) {
			state.testvuex = false
		},
		setColorIndex(state, index) {
			state.colorIndex = index
		}
	},
	getters: {
		currentColor(state) {
			return state.colorList[state.colorIndex]
		}
	},
	actions: {
		/**
		 * @description 设置用户数据
		 * @param {Object} state vuex state
		 * @param {*} info 
		 */
		set({ state, dispatch }, info) {
			return new Promise(async resolve => {
				state.userInfo = info
				//持久化
				// await dispatch('DamomHd/db/set', {
				// 	dbName: 'sys',
				// 	path: 'userInfo',
				// 	value: info,
				// 	user: true
				// }, { root: true })
				resolve()
			})
		},
		/**
		 * @description 从持久化数据中获取用户数据
		 * @param {Object} state vuex state
		 */
		load({state,dispatch}){
			return new Promise(async resolve=>{
				// state.userInfo = await dispatch('DamomHd/db/get', {
				// 	dbName: 'sys',
				// 	path: 'userInfo',
				// 	value: info,
				// 	user: true
				// }, { root: true })
				resolve()
			})
		},
		getUserOpenId: async function ({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function () { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		}
	}
}