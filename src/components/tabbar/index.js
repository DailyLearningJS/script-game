import Taro, { Component } from '@tarojs/taro';
// eslint-disable-next-line no-unused-vars
import { View, Text, Image } from '@tarojs/components';

import CBlock from '../../components/cblock/index';

import './index.less';

import home from '../../res/tabBar/home.png';
import homeFill from '../../res/tabBar/home-fill.png';
import earch from '../../res/tabBar/Exportservices.png'
import earthFill from '../../res/tabBar/Exportservices-fill.png';
import comments from '../../res/tabBar/comments.png';
import commentsFill from '../../res/tabBar/comments-fill.png';
import account from '../../res/tabBar/account.png';
import accountFill from '../../res/tabBar/account-fill.png';
import { set } from 'mobx';
import { backHome } from '../../utils/navigator';


export default class TabbarCmpt extends Component {

  static options = {
    addGlobalClass: true
  }
  state = {
    activePath: ''
  }
  store = {

    list: [
      {
        name: '首页',
        icon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@3.0/src/res/tabBar/home.png',
        activedIcon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@3.0/src/res/tabBar/home-fill.png',
        path: '../home/index'
      },
      {
        name: '发现',
        icon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@3.0/src/res/tabBar/Exportservices.png',
        activedIcon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@3.0/src/res/tabBar/Exportservices-fill.png',
        path: '../find/index'
      },
      {
        name: '消息',
        icon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@3.0/src/res/tabBar/comments.png',
        activedIcon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@3.0/src/res/tabBar/comments-fill.png',
        path: '../message/index'
      },
      {
        name: '我的',
        icon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@3.0/src/res/tabBar/account.png',
        activedIcon: 'https://cdn.jsdelivr.net/gh/DailyLearningJS/script-game@3.0/src/res/tabBar/account-fill.png',
        path: '../account/index'
      }
    ]

  }

  /** 页面生命周期 & 生命周期相关函数 */

  componentWillMount () {
    this.checkPageActive()
  }
  componentDidShow () {}

  /** 页面跳转函数 */

  /** 渲染相关函数 */

  render () {
    const { activePath } = this.state
    const { list } = this.store

    return (
      <View className='tabbar-cmpt fsac'>
        {
          list.map(item => {
            return (
              <View
                className='tabbar-list-item f1 fsc-c'
                onClick={this.goTabbarPage.bind(this, item)}
                key={item.id}
              >
                {/* src={
                  item.path === active ? item.activedIcon : item.icon
                } */}
                <CBlock>
                  <Image
                    className='tabbar-list-item-icon'
                    src={item.path === activePath ? item.activedIcon : item.icon}
                    mode='aspectFit'
                  />
                </CBlock>
                <Text
                  className={
                    'tabbar-list-item-name fs20 ' + (
                      item.path === activePath ? 'bold' : 'gray'
                    )
                  }
                >{item.name}</Text>
              </View>
            )
          })
        }
      </View>
    )
  }

  /** 业务函数 */

  checkPageActive () {
    const pageStack = Taro.getCurrentPages()
    const currentPath = pageStack[pageStack.length - 1].route
    const comparePath = currentPath.replace('pages', '..')
    this.setState({
      activePath: comparePath
    })
  }

  goTabbarPage (item) {
    if (item.path !== this.state.activePath) {
      Taro.redirectTo({
        url: item.path
      })
    }
  }

}
