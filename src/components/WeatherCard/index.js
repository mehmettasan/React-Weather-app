import { useWeather } from '../../contexts/WeatherContext'
import styles from "./WeatherCard.module.css"

let day = new Date();
const dateNow = new Date()
const dayname = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"]

function WeatherCard() {
    const { cityWeather } = useWeather();

    return (
        <div className={styles.container}>
            {
                cityWeather.map((item, key) => {
                    return <div className={styles.weathersCard} key={key}>
                        <div>
                            <h2 className={styles.daytitle}>{dayname[day.getDay()]}</h2>
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather png" />
                            <span className={styles.maxmin}>{(item.temp.max - 273.15).toFixed(1)}° / {(item.temp.min - 273.15).toFixed(1)}°</span>
                            {(() => { day.setDate(day.getDate() + 1) })()}
                        </div>
                    </div>
                })
            }
            {(() => { day.setDate(dateNow.getDate()) })()}
        </div>
    )
}

export default WeatherCard