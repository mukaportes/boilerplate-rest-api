const HttpModule = require('../../../../src/modules/http');
const getUserAction = require('../../../../src/domain/actions/user/get');

const { HTTP_STATUS } = new HttpModule();

describe('Get User Action Tests', () => {
  // beforeAll(() => {
  //   jest.mock('../main/models/USER', () => () => {
  //     const SequelizeMock = require("sequelize-mock");
  //     const dbMock = new SequelizeMock();
  //     return dbMock.define('user',  {
  //       userId: 2,
  //       emailId: 'xyz@abc.com',
  //       firstName: 'good',
  //       lastName: 'day',
  //       creTs: "2019-01-01 13:30:31",
  //       creUserId: 'dummy'
  //     })
  //   });
  // });
  it('returns true always', () => {
    const req = {};
    const jsonMock = jest.fn();
    const res = {
      status: jest.fn(() => ({
        json: jsonMock,
      })),
    };

    getUserAction(req, res);

    expect(res.status).toHaveBeenCalledWith(HTTP_STATUS.ok);
    expect(jsonMock).toHaveBeenCalledWith({ ok: true });
  });
});