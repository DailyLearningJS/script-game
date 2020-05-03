/* eslint-disable import/prefer-default-export */

import { plays } from './res/play/index.js'

import { getRandomItem, getRandomFormatedTime, getRandomID, percent } from '../utils/utils.js'
import play1 from '../res/play/1.jpg'
import play2 from '../res/play/2.jpg'
// import play3 from '../res/play/3.jpg'
// import play4 from '../res/play/4.jpg'
// import play5 from '../res/play/5.jpg'
// import play6 from '../res/play/6.jpg'
// import play7 from '../res/play/7.jpg'

// import user1 from '../res/user/1.png'
// import user2 from '../res/user/2.png'
// import user3 from '../res/user/3.png'
// import user4 from '../res/user/4.png'
// import user5 from '../res/user/5.png'
// import user6 from '../res/user/6.png'
// import user7 from '../res/user/7.png'
// import user8 from '../res/user/8.png'
const playPic = [
  play1, play2,
  //  play3, play4, play5, play6, play7
]

/** Model */

// 获取评论数据
const getCommentModel = () => {
  const username = ['张三', '李四', '王五', '老六', '郝七', '孙八', '包九', '石十']
  const comments = [
    '爱你哟, 吹爆~',
    '先给个红包吧, 挺有意思的',
    '就是流程太短了 要不然 我就给个大红包!',
    '其实我们也是有长评论的~\n\n就是流程太短了 要不然 我就给个大红包!就是流程太短了 要不然 我就给个大红包!就是流程太短了 要不然 我就给个大红包!就是流程太短了 要不然 我就给个大红包!就是流程太短了 要不然 我就给个大红包!就是流程太短了 要不然 我就给个大红包!',
  ]

  return {
    _id: getRandomID(),
    user: {
      src: 
      name: getRandomItem(username)
    },
    data: getRandomItem(comments),
    time: getRandomFormatedTime()
  }
}

// 获取常用的剧本字段
const getTestModel = () => {
  return getRandomItem(plays)
}
const getBasicModel = (i) => {
  const tags = ['简单本', '4人本', '找出凶手']
  percent() && tags.push('编辑推荐')

  // return getTestModel()
  return {
    _id: getRandomID(),
    name: '普通的剧本',
    src: playPic[i-1],
    stars: +((Math.random() * 5).toFixed(0)) || 1,
    // 剧本本身的标签
    tags,
    // 姥爷们对剧本印象的标签
    impressions: [
      '赛博朋克', '非常好玩', '太棒了', '阿丽塔我女神', '男主角帅',
      '反叛故事', '求续集', '有趣', '非常欢喜', '阿丽塔!',
    ],
    brief: '剧本的内容的简单介绍剧本的内容的简单介绍介绍介绍',
    intro: '剧本杀线下助手欢迎每一名新侦探的到来, 为了更好的体验游戏, 希望所有玩家都可以先体验一遍新手教程, 通关完成之后会给你颁发奖章, 以证明你是一个合格的侦探~ 剧本杀线下助手欢迎每一名新侦探的到来, 为了更好的体验游戏, 希望所有玩家都可以先体验一遍新手教程, 通关完成之后会给你颁发奖章, 以证明你是一个合格的侦探~',
    roles: [
      {
        name: '杀人凶手',
        key: 'killer',
        nick: ['凶手', '色狼'],
        // 限50个字
        brief: '我名字叫杀人凶手, 可是我不是杀人凶手啊, 但是由于简介只能这么长, 我没办法给你透露更多内容了',
        info: {
          '口头禅': '阿丽塔我女神',
          '口阿禅': '阿丽塔我女神',
          '口额禅': '阿丽塔我女神',
          '血型': 'B',
        },
      },
      {
        name: '要扮演的角色',
        nick: ['小A'],
        brief: '不立志当一个侦探, 就有鬼了, 卧槽, 刚才那是什么, 吓死我了',
        info: {
          '额好': '阿丽塔',
          '阿好': '阿丽塔',
          '给好': '阿丽塔',
          '人好': '阿丽塔',
        },
      },
      {
        name: '鬼',
        brief: '你好, 我是鬼, 偷偷告诉你, 我才是杀人的那位, 只是简介只能这么长, 我没办法给你透露更多内容了',
        info: {
          '啊好': '漫画',
          '喜好': '漫画',
          '血型': 'B',
          '哦型': 'B',
        },
      },
    ],
    segments: [
      {
        name: '背景故事',
        intro: '本阶段会向玩家展示相关剧情信息, 如背景故事, 任务故事, 时间线, 阴暗面等剧情. 玩家需仔细阅读剧情, 并更具剧情内容按剧本规则或自定顺序做自我介绍. 随后, 请点击下一阶段进行游戏. 部分剧情会有音频图片或是视频',
        content: [
          {
            type: 'line',
            data: '故事背景'
          },
          {
            type: 'text',
            data: '剧本杀是一个复杂的角色扮演推理游戏, 几个玩家共同经历一段故事, 每个人只能看到自己的剧本, 只能知道自己发生的事. 玩家在规定阶段内, 可以通过相互交流, 查找线索, 盘问证据的方式, 共同推动故事进展, 揭秘故事的真相'
          },
          {
            type: 'line',
            data: '人物映像'
          },
          {
            type: 'image',
            data: 'https://camo.githubusercontent.com/7e2e746bc8f9554e433a1060db4991a73318f7a8/68747470733a2f2f692e696d6775722e636f6d2f727932455645642e676966'
          },
          {
            type: 'text',
            data: '剧本杀是一个复杂的角色扮演推理游戏, 几个玩家共同经历一段故事, 每个人只能看到自己的剧本, 只能知道自己发生的事. 玩家在规定阶段内, 可以通过相互交流, 查找线索, 盘问证据的方式, 共同推动故事进展, 揭秘故事的真相'
          },
          {
            type: 'line',
            data: '收到一封信'
          },
          {
            type: 'letter',
            data: '剧本杀是一个复杂的角色扮演推理游戏, 几个玩家共同经历一段故事, 每个人只能看到自己的剧本, 只能知道自己发生的事. 玩家在规定阶段内, 可以通过相互交流, 查找线索, 盘问证据的方式, 共同推动故事进展, 揭秘故事的真相'
          },
        ]
      },
      {
        name: '人物描绘',
        intro: '本阶段会向玩家描绘扮演者的详细信息',
        content: [
          {
            type: 'line',
            data: '人物描绘'
          },
          {
            type: 'text',
            data: '剧本杀是一个复杂的角色扮演推理游戏, 几个玩家共同经历一段故事, 每个人只能看到自己的剧本, 只能知道自己发生的事. 玩家在规定阶段内, 可以通过相互交流, 查找线索, 盘问证据的方式, 共同推动故事进展, 揭秘故事的真相'
          },
        ]
      },
      {
        name: '介绍自己',
        intro: '此阶段, 请大少, 尔康, 四阿哥依此进行自我介绍',
        content: [
          {
            type: 'line',
            data: '人物介绍'
          },
          {
            type: 'text',
            data: '向大家介绍一下你自己'
          },
        ]
      },
      {
        name: '探索阶段Ⅰ',
        intro: '随后, 请点击下一阶段进行游戏. 部分剧情会有音频图片或是视频',
        content: [
          {
            type: 'text',
            data: '在下面四个地点, 你可以发现线索, 直到点数耗尽'
          },
        ]
      },
      {
        name: '线索分享',
        intro: '线索分享',
        content: [
          {
            type: 'text',
            data: '线索分享'
          },
        ]
      },
      {
        name: '探索阶段Ⅱ',
        intro: '随后, 请点击下一阶段进行游戏. 部分剧情会有音频图片或是视频',
        content: [
          {
            type: 'text',
            data: '在下面四个地点, 你可以发现线索, 直到点数耗尽'
          },
        ]
      },
      {
        name: '线索分享',
        intro: '线索分享',
        content: [
          {
            type: 'text',
            data: '线索分享'
          },
        ]
      },
      {
        name: '圆桌阶段',
        intro: '圆桌阶段',
        content: [
          {
            type: 'text',
            data: '圆桌阶段'
          },
        ]
      }
    ]
  }
}
// 剧本 Model
const getModel = () => {
  return Object.assign(getBasicModel(), {
    room: {
      name: '洪城客栈',
      // 房间图片
      images: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588503715549&di=573e3c1a281b7e501aa00e6629751b4d&imgtype=0&src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp92128795.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588503744299&di=d75c9f7e08590fdf3d8b237f09ad6048&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190924%2F5ed6ea2efbc94cee89dca60cbf334d2a.jpeg'
      ]
    }
  })
}

/** export */

export function getRandomPlayData () {
  return getModel()
}
export function getRandomBasicPlayData (i) {
  return getBasicModel(i)
}
export function getRandomPlayCommentData () {
  return getCommentModel()
}
