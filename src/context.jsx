import { 
    createContext,
    useContext,
    useState, useEffect
} from "react";
import weatherAPI from "./api/weatherAPI"

const AppContext = createContext()
const CURRENT_WEATHER_URL = "/current.json"

const AppProvider = ({ children }) => {

    const [ locations, setLocations ] = useState(["dehradun", "london", "jakarta"])
    const [ climateData, setClimateData ] = useState()
 
    const getClimateData = async ( url ) => {
        try {
            const responses = await Promise.all(locations.map((location) => {
                return (
                    weatherAPI.get(url, {
                        params: {
                            q: location
                        }
                    })
                )
            }))
            
            const data = responses.map((response) => {
                return (
                    {
                        location: response.data.location,
                        current_data: response.data.current
                    }
                )
            })

            setClimateData(data)
            console.log(climateData)
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        getClimateData(CURRENT_WEATHER_URL)
    }, [])

    return (
        <AppContext.Provider value={{ climateData }}>
            { children }
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }