import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { Block, View, Text, Image, Swiper, SwiperItem, Button, ScrollView } from '@tarojs/components';


import './index.less'

export default class AccountPage extends Component {

  config = {
    navigationBarTitleText: '剧本杀桌游'
  }
  state = {
    playerList: [
      { isVip: true },
      { isVip: true },
      { isVip: true },
      { isVip: false },
      { isVip: false },
      { isVip: false },
      { isVip: false },
      { isVip: false }
    ]
  }
  store = {
    tools: [
      {
        name: '游戏预约',
        icon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@6.0/src/res/me/4.png',
        url: ''
      },
      {
        name: '已上剧本',
        icon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@6.0/src/res/me/3.png',
        url: ''
      },
      {
        name: '店铺主持',
        icon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@6.0/src/res/me/2.png',
        url: ''
      },{
        name: '本店会员',
        icon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@6.0/src/res/me/6.png',
        url: ''
      },{
        name: '管理后台',
        icon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@6.0/src/res/me/5.png',
        url: ''
      }
    ]
  }
  /** 页面生命周期 & 生命周期相关函数 */

  componentWillMount () {
    this.initData()
  }
  componentDidShow () {}

  /** 页面交互逻辑函数 */


  previewImage (url) {
    Taro.$previewOndImage(url)
  }

  /** 页面跳转函数 */

  /** 渲染相关函数 */

  render () {

    return (
      <View className='page'>
        <View className="userlist">
          <View className="userlist-item">
            <Image className="user-icon" src='https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@6.0/src/res/user/1.png' mode='aspectFill' />
            <View className="userInfo">
              <View className="name">
                <Text>桃子🍑</Text>
                <View className="role">我是店家</View>
              </View>
              <Text className="id">ID: 88888888</Text>
            </View>
            <Image className="user-pic" src='https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@6.0/src/res/me/1.png' mode='aspectFill' />
          </View>
        </View>
        <View className="tools">
          {
            this.store.tools.map((item, index) => {
              return (
                <View className="tool-item" onClick={this.goUrl}>
                  <View>
                    <Image src={item.icon} mode='aspectFill' />
                    <Text>{item.name}</Text>
                  </View>
                  <View>
                    <Text>&gt;</Text>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
  /** 业务函数 */
  goUrl(){
    Taro.navigateTo({
      url: '../features/index'
    })
  }
  initData () {
   
  }
}
