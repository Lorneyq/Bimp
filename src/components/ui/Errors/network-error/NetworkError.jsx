import { t } from 'i18next';
import { useEffect, useState } from 'react';
import InformCard from '../../inform-card/InformCard';
import BackgroundOverlay from '../../overlay/BackgroundOverlay';
import styles from './NetworkError.module.scss';
import NetworkErrorIcon from './network-error.svg';

const NetworkError = ({ setError }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsOpen(false);
    setError(null);
  };

  return (
    <>
      {isOpen && (
        <>
          <InformCard isAbsolute={true}>
            <img
              src={NetworkErrorIcon}
              className={styles.Error}
              alt={t('Network Error')}
            />
            <span className={styles.Text}>{t('Network Error')}</span>
          </InformCard>
          <div onClick={handleClick}>
            <BackgroundOverlay />
          </div>
        </>
      )}
    </>
  );
};

export default NetworkError;
