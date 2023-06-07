

import 'regenerator-runtime/runtime';
import editorController from '@src/controller/editor';

jest.mock('@src/service/editor', () =>
  jest.fn().mockImplementation(() => ({
    getComponentList: jest.fn(() => []),
    getWebPlugins: jest.fn(() => []),
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

describe('editor controller测试', () => {
  it('获取组件列表', async () => {
    await editorController.getComponentList(mockCtx);
    expect(mockCtx.body).toEqual({
      ret: 0,
      msg: '获取组件列表成功',
      data: [],
    });
  });
  it('获取web插件', async () => {
    await editorController.getWebPlugins(mockCtx);
    expect(mockCtx.body).toEqual([]);
  });
});
