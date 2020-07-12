import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { Camera, Block, View, Text, Image, Swiper, SwiperItem, Button, ScrollView } from '@tarojs/components'

import CBlock from '../../components/cblock/index'
import Comment from '../../components/comment/index'
import MainButton from '../../components/mainButton/index'

import { getRandomPlayData, getRandomPlayCommentData } from '../../comm/play.js'


import './index.less'


export default class RoomPage extends Component {

  config = {
    navigationBarTitleText: '剧本杀桌游'
  }

  /** 页面生命周期 & 生命周期相关函数 */

  componentWillMount () {
    this.initData()
  }
  componentDidShow () {}

  /** 页面交互逻辑函数 */

 
  /** 渲染相关函数 */

  render () {
    return (
      <View className='page'>
        <View className="role-pic">
          <Text className="orange">乐婉</Text>
          <Image src="https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@2.0/src/res/roles/1.jpg"></Image>
          <Text>相似度: <Text className="orange">75%</Text></Text>
        </View>
        <View className="role-tip">
        女，瘦弱内秀，做事勤快，待人温柔。穿传统服饰，平底鞋。
        </View>
        <View className="role-footer">
          <Button className="first" onClick={this.restart}>重新匹配</Button>
          <Button className="second" onClick={this.start}>马上开始</Button>
        </View>
      </View>
    )
  }
  restart () {
    Promise.resolve().then(() => {
        Taro.navigateTo({
          url: '/pages/packages/play/pages/game_room/index'
        })
      })
  }
  start () {
    Promise.resolve().then(() => {
        Taro.navigateTo({
          url: '/pages/packages/play/pages/game/index'
        })
      })
  }
  /** 业务函数 */
  initData () {
  }
}
