import styles from './SelectionButton.module.scss';

const SelectionButton = ({ name, onClick, active }) => {
  return (
    <button
      className={`${styles.SelectionButton} ${
        active ? 'border-dark dark:border-aquamarine' : ''
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default SelectionButton;
