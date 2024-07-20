import { createAction } from '@reduxjs/toolkit';
// import { parse } from 'query-string';
import { PUSH, REPLACE, GO, GO_BACK, GO_FORWARD } from './constants';


export const push = createAction(PUSH);

export const replace = createAction(REPLACE);

export const go = createAction(GO);

export const goBack = createAction(GO_BACK);

export const goForward = createAction(GO_FORWARD);

// export const locationChange = ({ pathname, search, hash }) => ({
//   type: LOCATION_CHANGE,
//   payload: {
//     pathname,
//     search,
//     queries: parse(search),
//     hash,
//   },
// });
