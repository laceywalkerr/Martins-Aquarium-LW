// const fishList = () => {
//     // Iterate the sollection if fish objects
//     for (const currentFishObject of fishCollection) {

//         // Convert the current fish to its HTML representation
//         const fishHTML = fishConverter(currentFishObject)

//         // Find the <article> element in index.html
//         
    
//         //Put the fish HTML representation inside the <carrier>
//         fishArticleElement.innerHTML += fishHTML
        
//     }
// }

const contentTarget = document.querySelector(".fishList")

// Function to show holy fish in the browser
const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation
    }
}

// Function to show soldier fish in the browser
const showSoldierFish  = () => {
    const fishObjectsArray = bestSoldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        contentTarget.innerHTML + fishHTMLRepresentation
    }
}

// Function to show common fish in the browser

const showRegularFish  = () => {
    const fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        contentTarget.innerHTML + fishHTMLRepresentation
    }
}

const fishList = () => {
    showHolyFish()
    showSoldierFish()
    showRegularFish()
    
}