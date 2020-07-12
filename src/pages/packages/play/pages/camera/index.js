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
  state = {
    src: "",
    cameraContext: null
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
  takePhoto() {
    console.error('tempImagePath', 123)
    const ctx = Taro.createCameraContext()
    ctx.takePhoto({
     quality: 'high',
     success: (res) => {
      this.setState({
       src: res.tempImagePath
      })
     },
     fail: (err) => {
      console.error('tempImagePath', err)
     },
     complete: ()=>{
      Promise.resolve().then(() => {
        Taro.navigateTo({
          url: '../packages/play/pages/game_room/index'
        })
      })
     }
    })
  }
  /** 渲染相关函数 */

  render () {
    return (
      <View className='page'>
        <Camera mode="normal" device-position="front" flash="off" binderror="error" className="camera"></Camera>
        <View className="wxfeature-footer">
          <Image src="https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@1.0/src/res/wxfeature/picture.png"></Image>
          <Button className='camera-button' plain onClick={this.takePhoto}>拍照</Button>
          <Image src="https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@1.0/src/res/wxfeature/rotate.png"></Image>
        </View>
      </View>
    )
  }
  /** 业务函数 */
  initData () {
  }
}
