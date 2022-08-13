import { locationChange } from './actions';

export function startListener(history, store) {
  store.dispatch(locationChange({
    pathname: history.location.pathname,
    search: history.location.search,
    hash: history.location.hash,
  }));

  history.listen((update) => {
    store.dispatch(locationChange({
      pathname: update.location.pathname,
      search: update.location.search,
      hash: update.location.hash,
    }));
  });
}
