import { remoteRoutes } from '../routes';

describe('remoteRoutes', () => {
  it('has 2 route entries', () => {
    expect(remoteRoutes).toHaveLength(2);
  });

  it('first entry is index route', () => {
    expect(remoteRoutes[0].index).toBe(true);
  });

  it('second entry has path :id', () => {
    expect(remoteRoutes[1].path).toBe(':id');
  });
});
