import Notiflix from 'notiflix';

const onFetchInfo = () => {
  Notiflix.Notify.info('Too many matches found, please enter a more specific name!');
};

const onFetchSuccess = () => {
  Notiflix.Notify.success('Woho, here you are!');
};

const onFetchError = () => {
  Notiflix.Notify.failure('Oops, there is no country with that name!');
};

export { onFetchInfo, onFetchError, onFetchSuccess };
