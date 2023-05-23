import { selector } from 'recoil';
import { exampleState } from '@/recoil/atoms/exampleAtom';

export const exampleValue = selector({
  key: 'exampleValue',
  get: ({ get }) => get(exampleState),
  set: ({ set }, newValue) => set(exampleState, newValue),
});
