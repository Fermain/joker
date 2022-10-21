import { dadJoke } from './joker.js';

describe('dadJoke', () => {
  it('returns a joke', async () => {
    const joke = await dadJoke();
    expect(typeof joke).toEqual('string');
  });
});
