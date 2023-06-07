// 新建活动表单配置
// eslint-disable-next-line @typescript-eslint/naming-convention
export const BlankActFormConfig = [
  {
    labelWidth: '120px',
    items: [
      { name: 'actName', text: '活动名称', rules: [{ required: true, message: '请输入活动名称', trigger: 'blur' }] },
      {
        names: ['actBeginTime', 'actEndTime'],
        text: '活动时间',
        type: 'daterange',
        rules: [
          { required: true, message: '请输入活动时间', trigger: 'blur' },
          {
            trigger: 'blur',
            validator: (
              args: { callback: (arg0?: string | undefined) => void },
              data: { model: { c_b_time: string | number | Date; c_e_time: string | number | Date } },
            ) => {
              const start = new Date(data.model.c_b_time);
              const end = new Date(data.model.c_e_time);
              if (start > end) args.callback('结束有效期不能小于开始期');
              else args.callback();
            },
          },
        ],
      },
      {
        name: 'operator',
        text: '创建人',
        rules: [{ required: true }],
        disabled: true,
        defaultValue: process.env.VUE_APP_USER_NAME || 'admin',
      },
    ],
  },
];
