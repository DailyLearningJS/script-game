import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { View, Text, Block, Image, Swiper, SwiperItem } from '@tarojs/components'

import Tabbar from '../../components/tabbar/index'
import Play from '../../components/play/index'
import CBlock from '../../components/cblock/index'

import { getRandomBasicPlayData } from '../../comm/play.js'

import './index.less'


export default class standardPage extends Component {

  config = {
  }
  store = {
    swipers: [
      {
        name: '谋杀之谜',
        src: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@2.0/src/res/banner/banner.jpg'
      },
      {
        name: '恶人之森',
        src: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@2.0/src/res/banner/banner1.jpg'
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
    const { swipers, tips, plays } = this.store

    return (
      <View className='page with-tabbar'>

        {/* 顶部轮播图 */}
        <CBlock delay={100}>
          <Swiper
            className='header-swiper'
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
                  <SwiperItem key={i} style='background:url({{s.src}});background-repeat: no-repeat;background-size:100% 100%;'>
                 
                  </SwiperItem>
                )
              })
            }
          </Swiper>
        </CBlock>

        {/* 广播 */}
        <View className='tips'>
          <Text>约本广场</Text>
          <Image src='https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@2.0/src/res/sound-filling-fill.png' style='width: 16px;height:16px;margin:0 5px;' />
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

        {/* 房间区域 */}
        <View className='segment rooms-con fsbc p030'>
          <CBlock>
            <View className='room room-big'>
              <View className='max fcc'>
                <Image src='https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@2.0/src/res/feature/feature1.png' mode='scaleToFill' ></Image>
                <View className='tool-tip'>
                  <Text style='font-size: 24px;font-weight:bold;'>剧本大厅</Text>
                </View>
              </View>
            </View>
          </CBlock>
          <View className='con fsbc-c h100'>
            <CBlock>
              <View className='room room-small'>
                <View className='max fcc'>
                  <Image src='https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@2.0/src/res/feature/feature2.png' mode='scaleToFill' ></Image>
                  <View className='tool-tip'>
                    <Text style='font-size: 16px;'>快速匹配</Text>
                  </View>
                </View>
              </View>
            </CBlock>
            <CBlock>
              <View className='room room-small'>
                <View className='max fcc'>
                  <Image src='https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@2.0/src/res/feature/feature3.png' mode='scaleToFill' ></Image>
                  <View className='tool-tip'>
                  <Text style='font-size: 16px;'>上新榜单</Text>
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
