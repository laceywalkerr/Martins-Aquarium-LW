const locationCollection = []

const getLocationData = () => {
    return fetch("http://localhost:8088/location").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfLocation) => {
                locationCollection = arrayOfLocation
        }
    )
}