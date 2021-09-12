import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState("Adana");
    const [cityWeather, setCityWeather] = useState([])

    useEffect(() => {
        (async () => {
            const weather = await axios(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=25e585073d9232f10fa66afa76d62fda`)
            setCityWeather(weather.data.list)
        })()
    }, [city])

    const values = {
        city,
        setCity,
        cityWeather
    }

    return <WeatherContext.Provider value={values} >{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext);