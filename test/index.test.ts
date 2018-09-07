import {generateFakeWord, generateFakeWordByLength, generateFakeWordByMinMaxLength} from '../lib';
import * as assert from 'power-assert';

describe('generateFakeWordByLength', () => {
  it('should return fake world with length', async () => {
    const length: number = 6;
    const fakeWord: string = await generateFakeWordByLength(6);
    assert.equal(fakeWord.length, length);
  });

  it('should return fake world with min and max lengths', async () => {
    const minLength: number = 4;
    const maxLength: number = 9;
    for(let i = 0; i < 100; i++) {
      const fakeWord: string = await generateFakeWordByMinMaxLength(minLength, maxLength);
      assert.equal(minLength <= fakeWord.length && fakeWord.length <= maxLength, true);
    }
  });
});
