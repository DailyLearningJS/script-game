import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { Block, View, Text, Image, Swiper, SwiperItem, Button, ScrollView } from '@tarojs/components';


import './index.less'

export default class AccountPage extends Component {

  config = {
    navigationBarTitleText: '会员页'
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
        <View className='filter'>
          <View>
            会员等级<Image src="https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@4.0/src/res/wxfeature/sort.svg"></Image>
          </View>
          <View>
            注册时间<Image src="https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@4.0/src/res/wxfeature/sort.svg"></Image>
          </View>
          <View>
            活跃度<Image src="https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@4.0/src/res/wxfeature/sort.svg"></Image>
          </View>
        </View> 
        <View className="userlist">
          {
            this.state.playerList.map((item, index) => {
              return (
                <View className="userlist-item" key={index}>
                  <Image src={'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@4.0/src/res/user/'+ (index + 1) +'.png'} mode='aspectFill' />
                  <View className="userInfo">
                    <Text className="name">桃子🍑</Text>
                    <Text className="time">2020-05-01 12:00:00</Text>
                  </View>
                  <View className="buttonArea">
                    <View className={`normal ${item.isVip ? 'vip' : ''}`} >
                      {item.isVip ? '皇冠会员' : '普通用户'}
                    </View>
                    <Text className="button-number">消费6次</Text>
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

  initData () {
   
  }
}
