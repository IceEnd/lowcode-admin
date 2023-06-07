

// 编辑器左侧边栏表单配置
export const AsideFormConfig = {
  data: [
    {
      id: 1,
      url: '/act',
      icon: 'el-icon-date',
      text: '活动管理',
      items: [
        {
          id: 101,
          url: '/create',
          icon: '',
          text: '新建活动',
        },
        {
          id: 102,
          url: '/my',
          icon: '',
          text: '我的活动',
        },
        {
          id: 103,
          url: '/all',
          icon: '',
          text: '全部活动',
        },
      ],
    },
  ],
  collapse: false,
};
