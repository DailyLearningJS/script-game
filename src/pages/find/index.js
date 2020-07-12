import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components';
import Tabbar from '../../components/tabbar/index';
import Play from '../../components/play/index';
import { getRandomBasicPlayData } from '../../comm/play.js';

import './index.less';
export default class Find extends Component {
  config = {
    navigationBarTitleText: '发现'
  }
  store = {
    newPlay: getRandomBasicPlayData(1),
    hotplays: [
      getRandomBasicPlayData(5),
      getRandomBasicPlayData(6),
      getRandomBasicPlayData(7)
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
    tips: [
      '《诡秘玩具城》房间号 1234 等待一名玩家...',
      '《恶人之森》房间号 2345 等待两名玩家...',
      '《黑色星期五》房间号 2335 等待一名名玩家...',
    ]
  }
  goRoom (id) {
    Taro.navigateTo({
      url: `../room/index?playid=${id}`
    })
  }
  render () {
    const { tips, plays, newPlay, hotplays } = this.store
    return (
      <View className='page with-tabbar'>
        <View className='title'>
          <Text className='title-text'>剧本大厅</Text>
        </View>
        {/* 广播 */}
        <View className='tips'>
          <Text> 约本广场 </Text>
          <Image src='https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@3.0/src/res/sound-filling-fill.png' style='width: 16px;height:16px;margin:0 5px;' />
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
        <View className='segment newPlay p030'>
          <View className='more'>更多</View>
          <View className='newPlay-tips'>
            <Text>今日上新</Text>
          </View>
          <View
            className='mt20'
            onClick={this.goRoom.bind(this, newPlay.id)}
          >
            <Play play={newPlay}  />
          </View>
        </View>
        <View className='segment-header'>
          <Text>热玩剧本</Text>
          <Text style='color: #fff; float: right;font-size: 10px;font-weight: normal;'>更多</Text>
        </View>
        <View className='segment hotplays-con p030'>
          {
            hotplays.map((p, idx) => {
              return (
                <View
                  className='mt20'
                  onClick={this.goRoom.bind(this, p.id)}
                  key={p._id + idx}
                >
                  <Play play={p} showStar />
                </View>
              )
            })
          }
        </View>



        <View className='segment-header'>
          <Text>剧本推荐</Text>
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
}
