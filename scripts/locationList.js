

const locationList = () => {
    // Iterate the sollection if location objects
    for (const currentLocationObject of locationCollection) {

        // Convert the current location to its HTML representation
        const locationHTML = locationConverter(currentLocationObject)

        // Find the <article> element in index.html
        const locationArticleElement = document.querySelector(".locationList")
    
        //Put the location HTML representation inside the <carrier>
        locationArticleElement.innerHTML += locationHTML
    }
}