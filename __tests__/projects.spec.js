const request = require('supertest');

const app = require('../src/app');

describe('Projects', () => {
  it('should be able to add new projedt', async () => {
    const response = await request(app)
      .post('/projects')
      .send({
        title: 'novo projeto',
        owner: 'Fernando',
      });

    expect(response.body).toEqual({
      title: 'novo projeto',
      owner: 'Fernando',
    });
  });


  it('shoud be able to list projects', async () => {
    await request(app)
      .post('/projects')
      .send({
        title: 'novo projeto',
        owner: 'Fernando'
      });

    const response = await request(app).get('/projects');

    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          title: 'novo projeto',
          owner: 'Fernando'
        }
      ])
    )
  })
});