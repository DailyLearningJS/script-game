import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { View, Block, Text, Image } from '@tarojs/components'

import './index.less'

// import settingIcon from '../../res/setting.png'

export default class CommentCmpt extends Component {

  static options = {
    addGlobalClass: true
  }
  static defaultProps = {
    comment: {}
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
    const { comment } = this.props
    var random = Math.floor(Math.random()*7, 0 );
    return (
      <View className='comment-cmpt f1 fsbs-c'>

        <View className='user-con fsbc'>
          <Image
            className='user-avatar'
            src={'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@6.0/src/res/user/' + (random + 1) + '.png'}
            mode='aspectFit'
          />
          <View className='user-info-con fsbs-c'>
            <Text className='user-name fs20 cfff'>{comment.user.name}</Text>
            <Text className='time fs18 cfff'>{comment.time}</Text>
          </View>
        </View>

        <View className='comment-con'>
          <View className='comment'>
            <Text style='color:rgba(5,61,67,0.7);' className='fs22 ls1'>{comment.data}</Text>
          </View>
        </View>

      </View>
    )
  }

  /** 业务函数 */

}
