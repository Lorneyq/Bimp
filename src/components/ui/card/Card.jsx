import styles from './Card.module.scss';

const Card = ({ children }) => {
  return <div className={`${styles.Card} dark:bg-dark`}>{children}</div>;
};

export default Card;
