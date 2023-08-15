import { t } from 'i18next';
import { useState } from 'react';
import InformCard from '../../inform-card/InformCard';
import BackgroundOverlay from '../../overlay/BackgroundOverlay';
import styles from './LocationError.module.scss';
import LocationErrorIcon from './location-error.svg';

const LocationError = ({ setError }) => {
  const [isOpen, setIsOpen] = useState(true);

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
              src={LocationErrorIcon}
              className={styles.Error}
              alt={t('Location Error')}
            />
            <span className={styles.Text}>{t('Location Error')}</span>
          </InformCard>
          <div onClick={handleClick}>
            <BackgroundOverlay />
          </div>
        </>
      )}
    </>
  );
};

export default LocationError;
