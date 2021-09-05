import produce, { Draft } from 'immer';
import { State, StateCreator } from 'zustand';

// Log every time state is changed
export const log =
  <T extends State>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (args) => {
        console.log('  applying', args);
        set(args);
        console.log('  new state', get());
      },
      get,
      api,
    );

// Turn the set method into an immer proxy
export const immer =
  <T extends State>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (partial, replace) => {
        const nextState =
          typeof partial === 'function'
            ? produce(partial as (state: Draft<T>) => T)
            : (partial as T);
        return set(nextState, replace);
      },
      get,
      api,
    );

// Use as the example below

// import pipe from 'ramda/es/pipe';
// import { immer, log } from '@/lib/zustand-middlewares';
// import create, { devtools } from 'zustand'
//
// const createStore = pipe(log, immer, devtools, create);
