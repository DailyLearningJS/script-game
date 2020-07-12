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

  /** 业务函数 */

  initData () {
  }
}
