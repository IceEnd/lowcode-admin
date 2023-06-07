

import type { Router } from 'vue-router';

import { MagicTable } from '@tmagic/table';

import type { ActListItem } from '@src/api/act';
import type { ColumnItem } from '@src/typings';
import { datetimeFormatter } from '@src/util/utils';

// 活动列表表单
export const getActListFormConfig = (
  pageStatusFormatter: ColumnItem['formatter'],
  actStatusFormatter: ColumnItem['formatter'],
  router: Router,
  copyActHandler: ColumnItem['handler'],
  copyActAfterHandler: ColumnItem['handler'],
) => [
  {
    prop: '',
    type: 'expand',
    component: MagicTable,
    props: (row: ActListItem) => ({
      data: row.pages,
      border: true,
      columns: [
        {
          prop: 'pageTitle',
          label: '页面标题',
        },
        {
          prop: 'pagePublishTime',
          label: '页面发布时间',
          formatter: datetimeFormatter,
        },
        {
          prop: 'pagePublishStatus',
          label: '页面状态',
          action: 'tag',
          type: (v: number) => ['', 'success'][v],
          formatter: pageStatusFormatter,
        },
        {
          prop: 'pagePublishOperator',
          label: '发布人',
          formatter: (v: string | number | Date) => (v as string) || '-',
        },
      ],
    }),
  },
  {
    prop: 'actId',
    label: '活动ID',
    width: '100',
    sortable: 'custom',
    formatter: (v: string | number | Date) => `<span style="user-select: text;">${v}</span>`,
  },
  {
    prop: 'actName',
    label: '活动名称',
    action: 'actionLink',
    handler: (row: ActListItem) => {
      router.push(`/editor/${row.actId}`);
    },
  },
  {
    prop: 'actBeginTime',
    label: '开始时间',
    formatter: datetimeFormatter,
    sortable: 'custom',
  },
  {
    prop: 'actEndTime',
    label: '结束时间',
    formatter: datetimeFormatter,
    sortable: 'custom',
  },
  {
    prop: 'actStatus',
    label: '活动状态',
    action: 'tag',
    type: (v: number) => ['info', '', 'success'][v],
    formatter: actStatusFormatter,
  },
  {
    prop: 'operator',
    label: '创建人',
  },
  {
    prop: 'actCryptoId',
    label: '活动ID加密KEY',
    width: '220',
    formatter: (v: string | number | Date) => `<span style="user-select: text;">${v}</span>`,
  },
  {
    prop: '',
    label: '操作',
    actions: [
      {
        text: '查看',
        handler: (row: ActListItem) => {
          router.push(`/editor/${row.actId}`);
        },
      },
      {
        text: '复制',
        type: 'copy',
        handler: copyActHandler,
        after: copyActAfterHandler,
      },
    ],
  },
];
