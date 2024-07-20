/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import { push, replace, go, goBack, goForward, locationChanged } from './actions';

const initialState = {
  pathname: '/',
  search: '',
  queries: {},
  hash: '',
};


const routerSlice = createSlice({
  name: 'ROUTER',
  initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names
    locationChanged(state, action) {
      // "Mutating" update syntax thanks to Immer, and no `return` needed
      // eslint-disable-next-line no-param-reassign
      state = {
        ...state,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(push, (state, action) => state)
      .addCase(replace, (state, action) => state)
      .addCase(go, (state, action) => state)
      .addCase(goBack, (state, action) => state)
      .addCase(goForward, (state, action) => state)
      .addCase(locationChanged, (state, action) => ({
        ...state,
        ...action.payload,
      }))
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {});
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file

// Export the slice reducer as the default export
export default routerSlice.reducer;
