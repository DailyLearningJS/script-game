import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { Block, View, Text, Image, Swiper, SwiperItem, Button, ScrollView } from '@tarojs/components';

import { getRandomPlayData, getRandomPlayCommentData } from '../../../../../comm/play.js';


import './index.less'


export default class GamePage extends Component {

  config = {
    navigationBarTitleText: '剧本杀'
  }
  state = {
    filterActive: true,
    // 剧本
    play: {
      roles: []
    },
    // 剧本介绍所绑定的角色
    activeRole: {},
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

  swiperToActiveRole (e) {
    const val = e && e.detail && e.detail.current
    this.activeRole(this.state.play.roles[val].name)
  }
  activeRole (name) {
    const activeRole = this.state.play.roles.find(x => x.name === name)
    this.setState({
      activeRole
    })
  }

  previewImage (url) {
    Taro.$previewOndImage(url)
  }

  /** 页面跳转函数 */

  /** 渲染相关函数 */

  render () {
    const { play, filterActive } = this.state
    const { comments } = this.store

    return (
      <View className='page'>
        <View className='room-name'>
          <View className='room-name-item name'>紫藤夫人</View>
          <View className='room-name-item'>房间号：666666</View>
          <View className='room-name-item'>角色：5</View>
          <Button size='mini' className='room-name-item button'>邀请好友</Button>
        </View>
        <View className='way'>
          <Text className='way-detail'>分配方式：人脸检测</Text>
        </View>
            {/* 角色 */}
        <View className='block roles-con'>
          {
            play.roles.map((r, i) => {
              console.error(r);
              return (
                <View className='info-item' key={r}>
                  <View className='left'>
                    <Image src={'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@4.0/src/res/user/' + (i + 1) + '.png'} />
                  </View>
                  <View class='right'>
                    <Text className='info-title'>{r.name}: </Text>
                    <Text className='info-content'>{r.brief}</Text>
                  </View>
                </View>)
            })
          }
      </View>
      <View className='main'>
          <View className='main-title'>
            <View className='left'>
              <Image className='img' src='https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@4.0/src/res/user/7.png'></Image>
              <View className='role'>房主</View>
              <View className='name'>我是房主</View>
            </View>
            <View className='right'>
              <View>角色分配： <Text className='feature'>允许反串</Text></View>
              <Button size='mini' className='button' onClick={this.goCamera}>开始检测</Button>
            </View>
          </View>
          <ScrollView scrollY className='scrollview'>
            <View className='message-item'>
              <View className='orange'>系统：</View>
              <View>
                <Text className='white'>我是房主</Text>通过 <Text className='orange'>人脸检测</Text>， 匹配<Text className='orange'>【婉儿】</Text>角色。
              </View>
            </View>
            <View className='message-item'>
              <View className='orange'>系统：</View>
              <View>
                <Text className='white'>我是玩家1</Text>通过 <Text className='orange'>人脸检测</Text>， 匹配<Text className='orange'>【张三】</Text>角色。
              </View>
            </View>
            <View className='message-item'>
              <View className='orange'>系统：</View>
              <View>
                <Text className='white'>我是玩家2</Text>通过 <Text className='orange'>人脸检测</Text>， 匹配<Text className='orange'>【王五】</Text>角色。
              </View>
            </View>
          </ScrollView>
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
      play,
      activeRole: play.roles[0]
    })
  }
  goCamera () {
    Promise.resolve().then(() => {
      Taro.navigateTo({
        url: '/pages/packages/play/pages/camera/index'
      })
    })
  }
  tryCreateAnRoom () {
    Promise.resolve().then(() => {
      Taro.navigateTo({
        url: '../packages/play/pages/setting/index'
      })
    })
  }

}
