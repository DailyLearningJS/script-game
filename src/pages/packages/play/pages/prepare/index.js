import Taro, { Component } from '@tarojs/taro'
// eslint-disable-next-line no-unused-vars
import { View, Text, Image } from '@tarojs/components'

import CBlock from '../../../../../components/cblock/index'
import MainButton from '../../../../../components/mainButton/index'

import { getRandomPlayData } from '../../../../../comm/play.js'

import './index.less'


export default class PreparePage extends Component {

  config = {
    navigationBarTitleText: '准备界面'
  }
  state = {
    userinfo: {
      name: 'Lionad',
      sex: 1,
      lever: 7,
    },
    play: {
      roles: []
    },
    players: [
      {
        name: 'Lionad',
        sex: 1,
        lever: 7,
      }
    ],
    isLongDetails: false,
    roleSelectedRec: {},  // 记录角色含有选择的用户的容器
    roleReadydRec: {},    // 记录角色准备状态容器
    readyRoleKey: '',     // 当前准备角色的key
    canReady: false,      // 当前用户能否准备
    isReady: false        // 当前用户是否已经准备
  }
  store = {
  }

  /** 页面生命周期 & 生命周期相关函数 */

  componentWillMount () {
    this.initData();
  }
  componentDidShow () {}

  /** 页面交互逻辑函数 */

  toggleisLongDetails () {
    this.setState({
      isLongDetails: !this.state.isLongDetails
    });
  }

  activeRole (r) {
    // if (this.state.isReady) return
    const { play, userinfo, roleSelectedRec } = this.state;
    const username = userinfo.name;

    // 从其他角色的列表中取出自己
    Object.entries(roleSelectedRec).map(e => {
      const [ k, v ] = e
      if (k !== r.name) {
        if (v.includes(username)) {
          v.splice(v.findIndex(x => x === username), 1)
        }
      }
    })
    // 在此列表中添加自己
    const handle = roleSelectedRec[r.name]
    handle && !handle.includes(username) && handle.push(username)

    this.setState({
      roleSelectedRec,
      canReady: !!(handle && handle[0] === username),
      readyRoleKey: play.roles.find(x => x.name === r.name).key
    })
  }
  getReady () {
    const { userinfo, roleSelectedRec, roleReadydRec, readyRoleKey } = this.state
    const username = userinfo.name
    Object.entries(roleSelectedRec).map(e => {
      const [k, v] = e
      if (v.includes(username)) {
        this.setState({
          roleReadydRec: (
            roleReadydRec[k] = !roleReadydRec[k],
            roleReadydRec
          ),
          isReady: roleReadydRec[k]
        }, () => {
          // for test
          this.state.isReady && Taro.navigateTo({
            url: `/pages/packages/play/pages/game/index?role=${readyRoleKey}`
          })
        })
      }
    })
  }

  /** 页面跳转函数 */

  /** 渲染相关函数 */

  render () {
    const { play, players, roleSelectedRec, roleReadydRec, canReady, isReady } = this.state

    return (
      <View className='page with-main-button'>

        {/* players-con */}
        <View className='players-con fsc'>
          {
            players.map((player, i) => {
              return (
                <View className='player-con fcc-c' key={player.name}>
                  <Image className='role-icon' src={'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@1.0/src/res/user/' + (i + 1) + '.png'} mode='aspectFill' />
                  <View className='role-name'>{player.name}</View>
                </View>
              )
            })
          }
        </View>

        {/* play content */}
        <View
          className='play-info-con br8 p-r'
          style={{
            height: this.state.isLongDetails ? Taro.pxTransform(600) : Taro.pxTransform(130)
          }}
        >
          {/* 展开按钮 */}
          <View
            className={'click-area arrow-icon fcc ' + (this.state.isLongDetails ? 'reverse' : '')}
            onClick={this.toggleisLongDetails.bind(this)}
          >
            <Text className='iconfont'>&#xe652;</Text>
          </View>

          {/* 剧本标题 */}
          <View className='play-title'>{play.name}</View>

          {/* 剧本图片及内容 */}
          <Image
            className='header-image'
            src={play.room.images[0]}
            mode='aspectFill'
          />
          <View className='intro-con'>
            <View className='block block-intro'>
              <View className='intro'>
                <Text className='fs22 ls1 c444'>{play.intro}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* play roles con */}
        <View className='roles-con fsc-c'>
          {
            play.roles.map((r, idx) => {
              return (
                <View className='w100' key={r.name + idx}>
                  <CBlock disabled={isReady}>
                    <View
                      className='role-con br8 bgc-w fsac'
                      onClick={this.activeRole.bind(this, r)}
                    >
                      <Image className='role-avatar' src={'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@1.0/src/res/user/' + (idx + 1) + '.png'} mode='aspectFill' />
                      <View className='role-info-con h100 f1 fsbs-c'>
                        <View className='role-info-wrapper'>
                          <View className='role-name fs24 c444'>{r.name}</View>
                          <View className='role-brief fs22 c666'>{r.brief}</View>
                        </View>
                        <View className='role-select-con w100 fsbc'>
                          {/* player inline images */}
                          <View className='role-select-player fsc'>
                            {
                              roleSelectedRec[r.name] &&
                              roleSelectedRec[r.name].map((player, pidx) => {
                                return (
                                  <View key={player.name}>
                                    <Image className={'player-icon ' + (pidx === 0 ? 'first' : '')} src={'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@1.0/src/res/user/' + (pidx + 1) + '.png'} mode='aspectFill' />
                                    {
                                      roleSelectedRec[r.name].length > 1 && pidx === 0 && (
                                        <View className='split-line'></View>
                                      )
                                    }
                                  </View>
                                )
                              })
                            }
                          </View>
                          {/* ready icon */}
                          <View className='role-select-ready'>
                            {
                              roleReadydRec[r.name] && (
                                <Text className='ready-icon iconfont fs30'>&#xe600;</Text>
                              )
                            }
                          </View>
                        </View>
                      </View>
                    </View>
                  </CBlock>
                </View>
              )
            })
          }
        </View>

        {/* main button */}
        <MainButton
          label={isReady ? '取消准备' : '选择角色'}
          disabled={!canReady}
          onClick={this.getReady.bind(this)}
        />

      </View>
    )
  }

  /** 业务函数 */

  initData () {
    const play = getRandomPlayData()
    this.setState({
      play,
      roleSelectedRec: play.roles.reduce((p, c) => (p[c.name] = [], p), {}),
      roleReadydRec: play.roles.reduce((p, c) => (p[c.name] = false, p), {}),
    })
    // 模拟别人选了某个角色
    setTimeout(() => {
      const { roleSelectedRec } = this.state
      this.setState({
        roleSelectedRec: (
          roleSelectedRec[Taro.$utils.getRandomItem(play.roles).name] = ['test'],
          roleSelectedRec
        )
      })
    }, 1000)
  }

}
