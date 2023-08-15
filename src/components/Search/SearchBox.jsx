import LocationButton from '../ui/location-button/LocationButton';
import SearchForm from './SearchForm';

import styles from './Search.module.scss';

const SearchBox = () => {
  return (
    <div className={styles.SearchBox}>
      <SearchForm />
      <LocationButton />
    </div>
  );
};

export default SearchBox;
