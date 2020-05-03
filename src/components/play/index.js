import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { View, Block, Text, Image } from '@tarojs/components'

import './index.less'



export default class PlayCmpt extends Component {

  static options = {
    addGlobalClass: true
  }
  static defaultProps = {
    play: {}
  }
  state = {
  }
  store = {
  }

  /** 页面生命周期 & 生命周期相关函数 */

  componentWillMount () {}
  componentDidShow () {}

  /** 页面跳转函数 */

  /** 渲染相关函数 */

  render () {
    const { play } = this.props
    console.log(play)
    return (
      <View className='play-cmpt fsbc'>

        <Image className='play-image br8' src={play.src} mode='aspectFill' />

        <View className='content-con f1'>

          {/* name */}
          <View className='fsbs'>
            <Text className='play-name fs24 bold'>{play.name}</Text>
            {/* <Text className='stars-con'>
              {
                Array.apply(null, { length: play.stars || 0 }).map((x, idx) => {
                  return <Text className={`iconfont fs20 star star-${play.stars.length}`} key={x + idx}>&#xe6ac;</Text>
                })
              }
            </Text> */}
          </View>

          {/* tags */}
          <View className='tags-con fss w100'>
            {
              play.tags.map(t => {
                return (
                  <Text className='tag fs20 c666' key={t}>{t}</Text>
                )
              })
            }
          </View>

          {/* brief */}
          <View className='brief-con w100 h80'>
            {
              play.brief && play.brief.split('\n').map(b => {
                return <Text className='fs22 cfff' key={b}>{b}</Text>
              })
            }
          </View>
        </View>

      </View>
    )
  }

  /** 业务函数 */

}
