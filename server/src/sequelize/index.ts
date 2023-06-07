import { Sequelize } from 'sequelize-typescript';

import sqlConf from '@src/config/database';
import models from '@src/models/index';
// 数据库初始化
export default class SequelizeHelper {
  private static instance;
  public static getInstance() {
    if (!SequelizeHelper.instance) {
      const sequelize = new Sequelize(sqlConf.database, sqlConf.user, sqlConf.password, {
        host: sqlConf.host,
        port: sqlConf.port,
        dialect: 'mysql',
        define: {
          timestamps: false,
        },
      });
      sequelize.addModels(models);
      SequelizeHelper.instance = sequelize;
    }
    return SequelizeHelper.instance;
  }
}
