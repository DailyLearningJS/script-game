import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { View, Text, Block, Image, Swiper, SwiperItem } from '@tarojs/components'

import Tabbar from '../../components/tabbar/index'
import Play from '../../components/play/index'
import CBlock from '../../components/cblock/index'

import { getRandomBasicPlayData, getRandomBasicShopData } from '../../comm/play.js'

import './index.less'


export default class standardPage extends Component {

  config = {
    navigationBarTitleText: '剧本杀预约'
  }
  store = {
    swipers: [
      {
        name: '谋杀之谜',
        src: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@5.0/src/res/banner/banner.jpg'
      },
      {
        name: '恶人之森',
        src: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@5.0/src/res/banner/banner1.jpg'
      },
    ],
    tips: [
      '《诡秘玩具城》房间号 1234 等待一名玩家...',
      '《恶人之森》房间号 2345 等待两名玩家...',
      '《黑色星期五》房间号 2335 等待一名名玩家...',
    ],
    plays: [
      getRandomBasicPlayData(1),
      getRandomBasicPlayData(2),
      getRandomBasicPlayData(3),
      getRandomBasicPlayData(4),
      getRandomBasicPlayData(5),
      getRandomBasicPlayData(6),
      getRandomBasicPlayData(7)
    ],
    shops: [
      getRandomBasicShopData(1),
      getRandomBasicShopData(2),
      getRandomBasicShopData(3)
    ]
  }
  state= {
    activeIndex: 1
  }

  /** 页面生命周期 & 生命周期相关函数 */

  componentWillMount () {}
  componentDidShow () {}

  /** 页面跳转函数 */

  goRoom (id) {
    Taro.navigateTo({
      url: `../room/index?playid=${id}`
    })
  }

  /** 渲染相关函数 */
  clickFirst () {
    this.setState({
      activeIndex: 1
    })
  }
  clickSecond () {
    this.setState({
      activeIndex: 2
    })
  }
  render () {
    const { swipers, tips, plays, shops } = this.store

    return (
      <View className='page with-tabbar'>
        <View className="personNumber">
          <Text>4人</Text>
          <Text>5人</Text>
          <Text>6人</Text>
          <Text>7人</Text>
          <Text>8人</Text>
          <Text>9人</Text>
          <Text>10人</Text>
          <Text>10+人</Text>
        </View>
        <View className="buttonGroup">
          <View className={this.state.activeIndex == 1 ? 'active' : ''} onClick={this.clickFirst}>门店</View>
          <View className={this.state.activeIndex != 1 ? 'active' : ''} onClick={this.clickSecond}>剧本</View>
        </View>
        { this.state.activeIndex !== 1 ? <View className='segment plays-con-flex p030'>
          {
            plays.map((p, idx) => {
              return (
                <View
                  className='mt20'
                  style={{width: '45vw'}}
                  onClick={this.goRoom.bind(this, p.id)}
                  key={p._id + idx}
                >
                  <Play play={p} showBtn2 />
                </View>
              )
            })
          }
        </View> :<View className='segment plays-con p030'>
          {
            shops.map((p, idx) => {
              return (
                <View
                  className='mt20'
                  onClick={this.goRoom.bind(this, p.id)}
                  key={p._id + idx}
                >
                  <Play play={p} showBtn1 showStarForce />
                </View>
              )
            })
          }
        </View>
      }

        <Tabbar />

      </View>
    )
  }
  goBook () {
    Taro.navigateTo({
      url: '/pages/packages/play/pages/book/index'
    })
  }

  /** 业务函数 */

}
