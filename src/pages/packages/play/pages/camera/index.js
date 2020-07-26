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
    src: ""
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
    const ctx = Taro.createCameraContext()
    ctx.takePhoto({
     quality: 'high',
     success: (res) => {
      console.error('tempImagePath success')
      this.setState({
       src: res.tempImagePath
      })
     },
     fail: (err) => {
      console.error('tempImagePath', err)
     },
     complete: ()=>{
      setTimeout(function(){
        Taro.navigateTo({
          url: '/pages/packages/play/pages/role/index'
        })
      }, 3000)
     }
    })
  }
  /** 渲染相关函数 */

  render () {
    return (
      <View className='page'>
        { !this.state.src  ? <Camera mode="normal" device-position="front" flash="off" binderror="error" className="camera"></Camera>
        : <Image src={this.state.src} className="camera"></Image> }
        <View className="wxfeature-footer">
          <Image src="https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@6.0/src/res/wxfeature/picture.png"></Image>
          <Button className='camera-button' plain onClick={this.takePhoto}>拍照</Button>
          <Image src="https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@6.0/src/res/wxfeature/rotate.png"></Image>
        </View>
      </View>
    )
  }
  /** 业务函数 */
  initData () {
    this.setState({
      src: ''
    })
  }
}
