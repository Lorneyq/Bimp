import styles from './CloseButton.module.scss';

import { t } from 'i18next';

const CloseButton = ({ closeModal }) => {
  return (
    <button
      className={styles.CloseButton}
      onClick={closeModal}
      aria-label={t('Close')}
    >
      X
    </button>
  );
};

export default CloseButton;
