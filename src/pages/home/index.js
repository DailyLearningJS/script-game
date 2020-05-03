import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { View, Text, Block, Image, Swiper, SwiperItem } from '@tarojs/components'

import Tabbar from '../../components/tabbar/index'
import Play from '../../components/play/index'
import CBlock from '../../components/cblock/index'

import { getRandomBasicPlayData } from '../../comm/play.js'

import './index.less'

import entryIcon1 from '../../res/homepage/entrys/1.png'
import entryIcon2 from '../../res/homepage/entrys/2.png'
import entryIcon3 from '../../res/homepage/entrys/3.png'
import entryIcon4 from '../../res/homepage/entrys/4.png'
import entryIcon5 from '../../res/homepage/entrys/5.png'

// banner
import banner1 from '../../res/banner/banner.jpg'
import banner2 from '../../res/banner/banner1.jpg'
// sounds
import sounds from '../../res/sound-filling-fill.png'
// rooms
import feature1 from '../../res/feature/feature1.png'
import feature2 from '../../res/feature/feature2.png'
import feature3 from '../../res/feature/feature3.png'
export default class standardPage extends Component {

  config = {
  }
  state = {
    activedSwiper: 0,
  }
  store = {
    swipers: [
      {
        name: '谋杀之谜',
        src: banner1
      },
      {
        name: '恶人之森',
        src: banner2
      },
    ],
    tips: [
      '《诡秘玩具城》房间号 1234 等待一名玩家...',
      '《恶人之森》房间号 2345 等待两名玩家...',
      '《黑色星期五》房间号 2335 等待一名名玩家...',
    ],
    plays: [
      getRandomBasicPlayData(1),
      getRandomBasicPlayData(2)
    ]
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

  render () {
    const { activedSwiper } = this.state
    const { swipers, tips, plays } = this.store

    return (
      <View className='page with-tabbar'>

        {/* 顶部轮播图 */}
        <CBlock delay={100}>
          <Swiper className='header-swiper'
            autoplay
            indicatorColor='#d2d8e3'
            indicatorActiveColor='rgb(208,18,50)'
            circular
            indicatorDots
            onChange={this.setIndicators.bind(this)}
          >
            {
              swipers.map((s, i) => {
                return (
                  <SwiperItem key={i}>
                    <Image
                      className='header-image'
                      src={s.src}
                      mode='scaleToFill'
                    />
                    <View className='max fcc'>
                      <Text className='tool-tip'>{s.name}</Text>
                    </View>
                  </SwiperItem>
                )
              })
            }
          </Swiper>
        </CBlock>

        {/* 广播 */}
        <View className='tips'>
          <Text>约本广场</Text>
          <Image src={sounds} style="width: 16px;height:16px;margin:0 5px;" />
          <Swiper
            className='tips-content' 
            autoplay
            vertical
          >
          {
            tips.map((t, i) => {
              return (<SwiperItem key={i}>
              <Text className='demo-text-1'>{t}</Text>
            </SwiperItem>)
            })
          }
          </Swiper>
        </View>

        {/* 功能入口 */}
        {/* <View className='segment entrys-con fsbc'>
          <CBlock>
            <Image className='entry-icon' src={entryIcon1} mode='aspectFill' />
            <View className='entry-name'>快速匹配</View>
          </CBlock>
          <CBlock>
            <Image className='entry-icon' src={entryIcon2} mode='aspectFill' />
            <View className='entry-name'>上新榜单</View>
          </CBlock>
          <CBlock>
            <Image className='entry-icon' src={entryIcon3} mode='aspectFill' />
            <View className='entry-name'>创建房间</View>
          </CBlock>
          <CBlock>
            <Image className='entry-icon' src={entryIcon4} mode='aspectFill' />
            <View className='entry-name'>查找房间</View>
          </CBlock>
          <CBlock>
            <Image className='entry-icon' src={entryIcon5} mode='aspectFill' />
            <View className='entry-name'>每日签到</View>
          </CBlock>
        </View> */}

        {/* 房间区域 */}
        <View className='segment rooms-con fsbc p030'>
          <CBlock>
            <View className='room room-big'>
              <View className='max fcc'>
                <Image src={feature1} mode='scaleToFill' ></Image>
                <View className='tool-tip'>
                  <Text style="font-size: 24px;font-weight:bold;">剧本大厅</Text>
                </View>
              </View>
            </View>
          </CBlock>
          <View className='con fsbc-c h100'>
            <CBlock>
              <View className='room room-small'>
                <View className='max fcc'>
                  <Image src={feature2} mode='scaleToFill' ></Image>
                  <View className='tool-tip'>
                    <Text style="font-size: 16px;">快速匹配</Text>
                  </View>
                </View>
              </View>
            </CBlock>
            <CBlock>
              <View className='room room-small'>
                <View className='max fcc'>
                  <Image src={feature3} mode='scaleToFill' ></Image>
                  <View className='tool-tip'>
                  <Text style="font-size: 16px;">上新榜单</Text>
                  </View>
                </View>
              </View>
            </CBlock>
          </View>
        </View>

        {/* 剧本列表 */}

        <View className='segment-header'>
          <Text>推荐剧本</Text>
        </View>
        <View className='segment plays-con p030'>
          {
            plays.map((p, idx) => {
              return (
                <View
                  className='mt20'
                  onClick={this.goRoom.bind(this, p.id)}
                  key={p._id + idx}
                >
                  <Play play={p}  />
                </View>
              )
            })
          }
        </View>

        <Tabbar />

      </View>
    )
  }

  /** 业务函数 */

}
