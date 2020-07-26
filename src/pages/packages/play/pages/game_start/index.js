import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { Block, View, Text, Image, Swiper, SwiperItem, Button, ScrollView } from '@tarojs/components';


import './index.less'

const roleInArr = [
  {
    name: '老大',
    way: '人脸检测',
    role: '管家'
  },
  {
    name: '老二',
    way: '人脸检测',
    role: '总经理'
  },
  {
    name: '张飒',
    way: '人脸检测',
    role: '电脑维修师傅'
  },
  {
    name: '王伟',
    way: '人脸检测',
    role: '外卖配送员'
  },
  {
    name: '张杰',
    way: '人脸检测',
    role: '店长'
  },
  {
    name: '王浩',
    way: '人脸检测',
    role: '管秘书家'
  },
  {
    name: '赵日天',
    way: '人脸检测',
    role: '保镖'
  },
]
export default class AccountPage extends Component {

  config = {
    navigationBarTitleText: '剧本杀'
  }
  state = {
    showPanel: false,
    panelContent: '',
    roleList: [
      {
        name: '房主',
        way: '人脸检测',
        role: '婉儿'
      },
    ]
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
        {/* <View className="gameBox">
          <View className="tipButton" style="top: 100px; right: 100px;" onClick={this.goDetail}>台灯</View>
          <View className="tipButton" style="top:200px; left: 100px;" onClick={this.goDetail}>花盆</View>
        </View> */}
        <MovableArea className="gameBox">
          <MovableView className="gameBg" direction='all'>
            <View className="tipButton" style="top: 100px; right: 100px;" onClick={this.goDetail}>台灯</View>
            <View className="tipButton" style="top:200px; left: 100px;" onClick={this.goDetail}>花盆</View>
          </MovableView>
        </MovableArea>
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
                    onClick={this.goDetail}
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
            {
              this.state.roleList.map((item, index) => {
                return (<View className='message-item' key={index}>
                  <View className='orange'>系统：</View>
                  <View>
                    <Text className='white'>{item.name}</Text>通过 <Text className='orange'>{item.way}</Text>， 匹配<Text className='orange'>【{item.role}】</Text>角色。
                  </View>
                </View>)
              })
            }

          </ScrollView>

          {/* <Swiper
            className='scrollview' 
            autoplay
            vertical
            circular
          >
            <SwiperItem key={1}>
              <View className='message-item'>
                  <View className='orange'>系统：</View>
                  <View>
                    <Text className='white'>我是房主</Text>通过 <Text className='orange'>人脸检测</Text>， 匹配<Text className='orange'>【婉儿】</Text>角色。
                  </View>
                </View>
            </SwiperItem>
            <SwiperItem key={2}>
              <View className='message-item'>
                  <View className='orange'>系统：</View>
                  <View>
                    <Text className='white'>我是张三</Text>通过 <Text className='orange'>人脸检测</Text>， 匹配<Text className='orange'>【门卫】</Text>角色。
                  </View>
                </View>
            </SwiperItem>
            <SwiperItem key={3}>
              <View className='message-item'>
                  <View className='orange'>系统：</View>
                  <View>
                    <Text className='white'>我是李丹</Text>通过 <Text className='orange'>人脸检测</Text>， 匹配<Text className='orange'>【司机】</Text>角色。
                  </View>
                </View>
            </SwiperItem>
            <SwiperItem key={4}>
              <View className='message-item'>
                  <View className='orange'>系统：</View>
                  <View>
                    <Text className='white'>我是王五</Text>通过 <Text className='orange'>人脸检测</Text>， 匹配<Text className='orange'>【关小二】</Text>角色。
                  </View>
                </View>
            </SwiperItem>
            <SwiperItem key={5}>
              <View className='message-item'>
                  <View className='orange'>系统：</View>
                  <View>
                    <Text className='white'>我是王文</Text>通过 <Text className='orange'>人脸检测</Text>， 匹配<Text className='orange'>【管家】</Text>角色。
                  </View>
                </View>
            </SwiperItem>
          </Swiper> */}
      </View>
      { this.state.showPanel && <View className="panelMock">
          <View className="panel">
          <View className="paneltop">
            <Image src="https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@5.0/src/res/wxfeature/close.png" className="closeBtn" onClick={this.closePanel}></Image>
          </View>
            { this.state.panelContent || '剧本逻辑推理性很强，沉浸感不错' }
          </View>
      </View>
    }
    </View>
    )
  }
  closePanel () {
    this.setState({
      showPanel: false
    })
  }
  goDetail () {
    this.setState({
      showPanel: true
    })
  } 
  /** 业务函数 */

  initData () {
    let index = 0;
    let setIntervalId = null;
    setIntervalId = setInterval(() => {
      let roleList = this.state.roleList.concat(roleInArr[index])
      if(this.state.roleList.length > 7) {
        clearInterval(setIntervalId)
        return
      }
      if(this.state.roleList.length >= 3) {
        roleList.shift()
      }
      if (index === roleInArr.length) index = 0
      this.setState({
        roleList
      })
      index++
    }, 2000)
  }
}
