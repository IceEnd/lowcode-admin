

import 'regenerator-runtime/runtime';
import actController from '@src/controller/act';

jest.mock('@src/service/act', () =>
  jest.fn().mockImplementation(() => ({
    getActList: jest.fn(() => []),
    getCount: jest.fn(() => 0),
    create: jest.fn(() => 1),
    copy: jest.fn(),
    getActInfo: jest.fn((id) => ({ actId: id })),
  })),
);

const mockCtx = {
  request: {
    body: {
      data: '{}',
    },
  },
  body: {
    data: [],
    total: 0,
    fetch: false,
    errorMsg: '',
  },
};

describe('act controller测试', () => {
  it('获取活动列表', async () => {
    await actController.getList(mockCtx);

    expect(mockCtx.body).toEqual({
      data: [],
      total: 0,
      fetch: true,
      errorMsg: '',
    });
  });

  it('获取活动列表异常', async () => {
    const mockErroCtx = { body: {}, logger:{error:jest.fn()} };
    await actController.getList(mockErroCtx);
    expect(mockErroCtx.body).toEqual({
      data: [],
      total: 0,
      fetch: false,
      errorMsg: "Cannot read property 'body' of undefined",
    });
  });

  it('新建活动', async () => {
    await actController.create(mockCtx);
    expect(mockCtx.body).toEqual({
      ret: 0,
      msg: '新建活动成功',
      data: { actId: 1 },
    });
  });

  it('新建活动异常', async () => {
    const mockErroCtx = { body: {}};
    await actController.create(mockErroCtx);
    expect(mockErroCtx.body).toEqual({
      ret: -1,
      msg: "Cannot read property 'body' of undefined",
    });
  });

  it('复制活动', async () => {
    await actController.copy(mockCtx);
    expect(mockCtx.body).toEqual({
      ret: 0,
      msg: '复制成功',
    });
  });

  it('复制活动异常', async () => {
    const mockErroCtx = { body: {} };
    await actController.copy(mockErroCtx);
    expect(mockErroCtx.body).toEqual({
      ret: -1,
      msg: "Cannot read property 'body' of undefined",
    });
  });

  it('查询活动详情', async () => {
    const getInfoCtx = {
      query: {
        id: '1',
      },
      body: {},
    };
    await actController.getInfo(getInfoCtx);
    expect(getInfoCtx.body).toEqual({
      ret: 0,
      msg: '获取活动信息成功',
      data: { actId: 1 },
    });
  });

  it('查询活动详情异常', async () => {
    const getInfoErrorCtx = {
      body: {},
    };
    await actController.getInfo(getInfoErrorCtx);
    expect(getInfoErrorCtx.body).toEqual({
      ret: -1,
      msg: "Cannot read property 'id' of undefined",
    });
  });
});
