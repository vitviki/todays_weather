import { useGlobalContext } from "../context"

const Homepage = () => {

    const { climateData } = useGlobalContext()

    return (
        climateData && <div>
            {
                climateData.map((data) => {
                    return (
                        <div key={data.location.name}>
                            {data.location.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Homepage