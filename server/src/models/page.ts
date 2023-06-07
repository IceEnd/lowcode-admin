

import { AllowNull, BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import { ActInfo } from '@src/models/act';
// 页面信息表
@Table({
  tableName: 'magic_ui_config',
})
export class Page extends Model<Page> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: string;

  @ForeignKey(() => ActInfo)
  @Column({ field: 'act_id' })
  actId: number;

  @BelongsTo(() => ActInfo)
  act: ActInfo;

  @AllowNull
  @Column({ field: 'c_dist_code' })
  distCode: string;

  @AllowNull
  @Column({ field: 'c_src_code' })
  srcCode: string;

  @AllowNull
  @Column({ field: 'c_c_time' })
  pageCreateTime: string;

  @AllowNull
  @Column({ field: 'c_m_time' })
  pageModifyTime: string;

  @AllowNull
  @Column({ field: 'c_ui_version' })
  pagePublishUiVersion: string;

  @Column({ field: 'page_title' })
  pageTitle: string;

  @Column({ field: 'page_name' })
  pageName: string;

  @AllowNull
  @Column({ field: 'page_publish_time' })
  pagePublishTime: string;

  @Column({ field: 'page_publish_status' })
  pagePublishStatus: number; // 0:修改中 1：已发布

  @AllowNull
  @Column({ field: 'publish_operator' })
  pagePublishOperator: string;
}
