import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { Block, View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'

import CBlock from '../../../../../components/cblock/index';

import { getRandomPlayData, getRandomPlayCommentData } from '../../../../../comm/play.js';


import './index.less';


export default class settingPage extends Component {
  config = {
    navigationBarTitleText: '设置房间'
  }
  state = {
    filterActive: true,
    // 剧本
    play: {
      roles: []
    },
  }
  store = {
    comments: [
      getRandomPlayCommentData(),
      getRandomPlayCommentData(),
      getRandomPlayCommentData(),
      getRandomPlayCommentData(),
      getRandomPlayCommentData(),
      getRandomPlayCommentData(),
      getRandomPlayCommentData(),
      getRandomPlayCommentData(),
      getRandomPlayCommentData(),
      getRandomPlayCommentData(),
      getRandomPlayCommentData(),
      getRandomPlayCommentData(),
      getRandomPlayCommentData(),
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
    const { play } = this.state

    return (
      <View className='page'>

        <View class='detail'>
          {/* 顶部轮播图 */}
          <CBlock delay={100}>
            <Swiper className='header-swiper' autoplay>
              {
                play.room.images.map(s => {
                  return (
                    <SwiperItem key={s}>
                      <Image
                        className='header-image'
                        src={s}
                        mode='aspectFill'
                        onClick={this.previewImage.bind(this, s)}
                      />
                    </SwiperItem>
                  )
                })
              }
            </Swiper>
          </CBlock>
          <View className='setting'>
              <View className='setting-item'>
                <Text>角色选择</Text><Text className='right'>人脸识别  {'>'}</Text>
              </View>
                <View className='setting-item'>
              <Text>反串</Text><Text className='right'>允许反串  {'>'}</Text> 
              </View>
              <View className='setting-item'>
                <Text>加入方式</Text><Text className='right'>密码加入  {'>'}</Text>
              </View>
              <View className='setting-item'>
                <Text>房间密码</Text><Input className='input' type='password' password placeholder='四位数字密码' />
              </View>
          </View>
          {/* 创建房间按钮 */}
          {/* <MainButton label='创建房间' onClick={this.tryCreateAnRoom.bind(this)} /> */}
          <View className='button'>
            <View className='left' onClick={this.tryCreateAnRoom}>创建房间</View>
            {/* <View className='right'>快速加入</View> */}
          </View>
        </View>
      </View>
    )
  }
  clickFilter () {
    this.setState({
      filterActive: !this.state.filterActive
    })
  }

  /** 业务函数 */

  initData () {
    const play = getRandomPlayData()

    this.setState({
      play
    })
  }

  tryCreateAnRoom () {
    Promise.resolve().then(() => {
      Taro.navigateTo({
        url: '../game_room/index'
      })
    })
  }

}
