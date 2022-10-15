// import { dadJoke } from './joker.js';

// export async function testDadJoke() {
//   const joke = await dadJoke();
//   const testPasses = Boolean(joke);
//   console.log(joke);
//   console.log('Dad Joke Test:', testPasses ? 'PASSED' : 'FAILED');
//   return testPasses;
// }

// testDadJoke();

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});