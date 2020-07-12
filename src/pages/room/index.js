import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { Block, View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'

import CBlock from '../../components/cblock/index'
import Comment from '../../components/comment/index'
import MainButton from '../../components/mainButton/index'

import { getRandomPlayData, getRandomPlayCommentData } from '../../comm/play.js'


import './index.less'


export default class RoomPage extends Component {

  config = {
    navigationBarTitleText: '剧本详情'
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

        {/* 剧本信息 */}
        <View className='segment-info'>

          {/* name */}
          <View className='name-con fsbs'>
            <View className='room-name'>
              <Text>{play.room.name}
                  <Text className='author'>作者：旺财</Text>
              </Text>
            </View>
            <Text className='stars-con'>
              热度：
              {
                Array.apply(null, { length: play.stars || 0 }).map((x, idx) => {
                  return <Text className={`iconfont fs24 star star-${play.stars.length}`} key={x + idx}>&#xe6ac;</Text>
                })
              }
            </Text>
          </View>
          {/* intro */}
          <View class='detail-intro'>
            <View className='block block-intro'>
              <View className='intro'>
                <Text className='fs22 ls1'>{play.intro}</Text>
              </View>
            </View>
          </View>
        </View>
          {/* 角色 */}
          <View className='block roles-con'>
              {
                play.roles.map((r, i) => {
                  console.error(r);
                  return (
                    <View className='info-item' key={r}>
                      <View className='left'>
                        <Image src={'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@2.0/src/res/user/' + (i + 1) + '.png'} />
                      </View>
                      <View class='right'>
                        <Text className='info-title'>{r.name}: </Text>
                        <Text className='info-content'>{r.brief}</Text>
                      </View>
                    </View>)
                })
              }
          </View>

        </View>
        <View className='detail-star'>
          <View className='title'>
            <Text>综合评分</Text>
            <Text>更新时间：2020年4月30日</Text>
          </View>
          <View className='content'>
            <View className='number'>
              8.5 
              <View className='star-content'>
                <Text className='iconfont fs20 star'>&#xe6ac;</Text>
                <Text className='iconfont fs20 star'>&#xe6ac;</Text>
                <Text className='iconfont fs20 star'>&#xe6ac;</Text>
                <Text className='iconfont fs20 star'>&#xe6ac;</Text>
              </View>
            </View>
            <View className='people-number'>
              <Text>1000人评论</Text>
              <View class='filter'>
                <Text className={filterActive && 'active'} onClick={this.clickFilter}>按热度</Text> | <Text className={!filterActive && 'active'} onClick={this.clickFilter}>按时间</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 评论信息 */}
        <View className='segment-comments mt20 pt20'>
          <View className='block-header m0'>
            <Text>精彩评论</Text>
          </View>
          <View className='comments-con fsc-c'>
            {
              comments.map(c => {
                return (
                  <View className='mt20 w100' key={c._id}>
                    <Comment comment={c} />
                  </View>
                )
              })
            }
          </View>
        </View>

        {/* 创建房间按钮 */}
        {/* <MainButton label='创建房间' onClick={this.tryCreateAnRoom.bind(this)} /> */}
        <View className='button'>
          <View className='left' onClick={this.tryCreateAnRoom}>创建房间</View>
          <View className='right' onClick={this.quickStart}>快速加入</View>
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

  tryCreateAnRoom () {
    Promise.resolve().then(() => {
      Taro.navigateTo({
        url: '../packages/play/pages/setting/index'
      })
    })
  }
  quickStart () {
    Promise.resolve().then(() => {
      Taro.navigateTo({
        url: '../packages/play/pages/game_room/index'
      })
    })
  }

}
