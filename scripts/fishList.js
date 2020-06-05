const fishTypeDropdown = document.querySelector(".typeChoice")
const constentTarget = document.querySlelector(".fishlist")

const clearFishList = () => constantTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change"), clickEvent => {
    const userChoice = clickEvent.target.value

    if (userChoice === 'holy'){
        clearFishList()
        showHolyFish()
    }
}


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
        contentTarget.innerHTML += fishHTMLRepresentation
    }
}

// Function to show common fish in the browser

const showRegularFish  = () => {
    const fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation
    }
}

const fishList = () => {
    showHolyFish()
    showSoldierFish()
    showRegularFish()
    
}


//          REMNANTS OF OLD CODE FOR REFERANCE PURPOSES 
// const fishList = () => {
//     // Iterate the sollection if fish objects
//     for (const currentFishObject of fishCollection) {

//         // Convert the current fish to its HTML representation
//         const fishHTML = fishConverter(currentFishObject)

//         // Find the <article> element in index.html
//         


// const fishArticleElement = document.querySelector(".fishList")


//         //Put the fish HTML representation inside the <carrier>
//         fishArticleElement.innerHTML += fishHTML
        
//     }
// }
