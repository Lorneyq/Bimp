import styles from './WeatherSubinfo.module.scss';

import Sun from './Sun/Sun';
import TableInfo from './TableInfo/TableInfo';
import Wind from './Wind/Wind';

const WeatherSubinfo = props => {
  const {
    icon,
    sunset,
    sunrise,
    windDirectionName,
    windSpeed,
    windDirectionImage,
    windDegree,
    minTemperature,
    maxTemperature,
    feelTemperature,
    pressure,
  } = props;

  if (icon !== undefined) {
    return (
      <div className={styles.WeatherSubinfo}>
        <Sun sunset={sunset} sunrise={sunrise} />
        <Wind
          windDirectionName={windDirectionName}
          windSpeed={windSpeed}
          windDirectionImage={windDirectionImage}
          windDegree={windDegree}
        />
        <TableInfo
          minTemperature={minTemperature}
          maxTemperature={maxTemperature}
          feelTemperature={feelTemperature}
          pressure={pressure}
        />
      </div>
    );
  }
};

export default WeatherSubinfo;
