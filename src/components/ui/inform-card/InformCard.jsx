import styles from './InformCard.module.scss';

const InformCard = ({ children, isAbsolute }) => {
  return (
    <div
      className={`${styles.InformCard} dark:bg-dark ${
        isAbsolute ? `${styles.Absolute}` : `${styles.Relative}`
      }`}
    >
      {children}
    </div>
  );
};

export default InformCard;
