import styles from './StartScreen.module.scss';

import { t } from 'i18next';

import Card from '../ui/card/Card';

const StartScreen = () => {
  return (
    <div>
      <Card>
        <p className={styles.Welcome}>
          {t('Welcome')} <span className={styles.logo}>Bimp</span>
        </p>
        <p className={styles.Hint}>{t('Hint')}</p>
      </Card>
    </div>
  );
};

export default StartScreen;
