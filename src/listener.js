import { locationChanged } from './reducer';

export function startListener(history, store) {
  store.dispatch(locationChanged({
    pathname: history.location.pathname,
    search: history.location.search,
    hash: history.location.hash,
  }));

  history.listen((location) => {
    store.dispatch(locationChanged({
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
    }));
  });
}
