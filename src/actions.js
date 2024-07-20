import { createAction } from '@reduxjs/toolkit';
import { parse } from 'query-string';
import { PUSH, REPLACE, GO, GO_BACK, GO_FORWARD, LOCATION_CHANGE } from './constants';


export const push = createAction(PUSH);

export const replace = createAction(REPLACE);

export const go = createAction(GO);

export const goBack = createAction(GO_BACK);

export const goForward = createAction(GO_FORWARD);

function prepare({ pathname, search, hash }) {
  return {
    payload: {
      pathname,
      search,
      queries: parse(search),
      hash,
    },
  };
}

export const locationChanged = createAction(LOCATION_CHANGE, prepare);

