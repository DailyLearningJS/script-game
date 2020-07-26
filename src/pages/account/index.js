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
        src: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@5.0/src/res/banner/banner.jpg'
      },
      {
        name: '恶人之森',
        src: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@5.0/src/res/banner/banner1.jpg'
      },
    ],
    button: [
      {
        title: '会员管理',
        url: ''
      },
      {
        title: '预约管理',
        url: ''
      },
      {
        title: '消费记录',
        url: ''
      },
      {
        title: '充值记录',
        url: ''
      },
      {
        title: '买单记录',
        url: ''
      },
      {
        title: '剧本管理',
        url: ''
      },
      {
        title: '上传剧本',
        url: ''
      },
      {
        title: '优惠券管理',
        url: ''
      },
      {
        title: '消息通知',
        url: ''
      },
      {
        title: '价格设置',
        url: ''
      },
      {
        title: '用户画像分布',
        url: ''
      },
      {
        title: '剧本评分数据',
        url: ''
      },
      {
        title: '店铺评分数据',
        url: ''
      },
      {
        title: '帮助教程',
        url: ''
      },
      {
        title: '积分设置',
        url: ''
      },
      {
        title: '门店资料',
        url: ''
      }
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
        <View className="buttonView">
          {
            this.store.button.map(btn => {
            return (<Button className="button" onClick={() => this.goUrl(btn.url)}>{btn.title}</Button>)
            })
          }
          </View>
       

      </View>
    )
  }
  goUrl (url) {
    Taro.navigateTo({
      url
    })
  }

}
