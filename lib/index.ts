import {wordProbability} from './word-probability';

/**
 * Generate a fake word whose length is unexpected
 *
 * @param maxSeqN
 * @param randomGenerator
 */
export function generateFakeWordWithUnexpectedLength(maxSeqN: number = 4, randomGenerator: () => number = Math.random): string {
  let ch       = "^";
  let fakeWord = "";
  let chrs: string[] = [];
  while(ch !== "END") {
    chrs = [...chrs, ch];
    if (chrs.length > maxSeqN) {
      chrs = chrs.slice(1);
    }
    let nextAccumedProbs: [string, number][];
    let n = 0;
    do {
      const str = chrs.slice(n).join("");
      nextAccumedProbs = wordProbability[str];
      n += 1
    } while (nextAccumedProbs === undefined && n < chrs.length);

    let nextCh: string = "";
    const r = randomGenerator();
    for(let x of nextAccumedProbs) {
      const candidateNextCh = x[0];
      const prob            = x[1];
      if(r <= prob) {
        nextCh = candidateNextCh;
        break
      }
    }
    if(nextCh !== "END") {
      fakeWord += nextCh;
    }
    ch = nextCh;
  }
  return fakeWord;
}

/**
 * Generate a fake word by the specific length
 *
 * @param length
 * @param maxSeqN
 * @param randomGenerator
 */
export async function generateFakeWordByLength(length: number, maxSeqN: number = 4, randomGenerator: () => number = Math.random): Promise<string> {
  let fakeWord: string = "";
  while(fakeWord.length != length) {
    fakeWord = await new Promise<string>((resolve)=>{
      resolve(generateFakeWordWithUnexpectedLength(maxSeqN, randomGenerator));
    });
  }
  return fakeWord
}

/**
 * Generate a fake word by the specific min and max lengths
 * @param minLength
 * @param maxLength
 * @param maxSeqN
 * @param randomGenerator
 */
export async function generateFakeWord(minLength: number = 4, maxLength: number = 9, maxSeqN: number = 2, randomGenerator: () => number = Math.random): Promise<string> {
  let fakeWord: string = "";
  while(!(minLength <= fakeWord.length && fakeWord.length <= maxLength)) {
    fakeWord = await new Promise<string>((resolve)=>{
      resolve(generateFakeWordWithUnexpectedLength(maxSeqN, randomGenerator));
    });
  }
  return fakeWord
}
