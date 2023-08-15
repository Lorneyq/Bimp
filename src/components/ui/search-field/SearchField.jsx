import styles from './SearchField.module.scss';

const SearchField = ({
  value,
  onChange,
  onClick,
  onFocus,
  onBlur,
  placeholder,
  onKeyDown,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={`${styles.SearchField} dark:bg-clear-black`}
    />
  );
};

export default SearchField;
