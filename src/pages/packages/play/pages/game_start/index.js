import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { Block, View, Text, Image, Swiper, SwiperItem, Button, ScrollView } from '@tarojs/components';


import './index.less'


export default class AccountPage extends Component {

  config = {
    navigationBarTitleText: '剧本杀'
  }
  state = {
  }
  store = {
    actions: [
      'segments',
      'threads',
      'note',
      'open-chat',
    ],
    actionNameReflex: {
      'segments': '剧本',
      'threads': '线索',
      'note': '笔记',
      'open-chat': '语音'
    }
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

    return (
      <View className='page'>
        <View className='room-name'>
          <View className='room-name-item name'>紫藤夫人</View>
          <View className='room-name-item'>房间号：666666</View>
          <View className='room-name-item'>角色：5</View>
          <Button size='mini' className='room-name-item button'>第一轮搜证</Button>
        </View>
        <View className="gameBox">
          <View className="tipButton" style="top: 100px; right: 100px;" onClick={this.goDetail}>台灯</View>
          <View className="tipButton" style="top:200px; left: 100px;" onClick={this.goDetail}>花盆</View>
        </View>
        <View className='action-segment fsbc'>
          <View className='actions-con f1 fsac'>
            {
              this.store.actions.map(action => {
                return (
                  <View
                    className='action-con fcc-c'
                    hover-class='action-con-hover'
                    hover-start-time='0'
                    hover-stay-time='260'
                    hover-stop-propagation
                    onClick={this.handleActionClick.bind(this, action)}
                    onLongPress={this.handleActionPress.bind(this, action)}
                    key={action}
                  >
                    {
                      action === 'segments' && <Text className='iconfont'>&#xe620;</Text>
                    }
                    {
                      action === 'threads' && <Text className='iconfont'>&#xe618;</Text>
                    }
                    {
                      action === 'open-chat' && <Text className='iconfont'>&#xe627;</Text>
                    }
                    {
                      action === 'note' && <Text className='iconfont'>&#xe603;</Text>
                    }
                    <Text className='fs22 action-name'>{this.store.actionNameReflex[action]}</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
        <View className='main'>
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
  goDetail () {
    Taro.navigateTo({
      url: '/pages/packages/play/pages/game/index'
    })
  }
  /** 业务函数 */

  initData () {
  }
}
