let fishCollection = []

const getFishData = () => {
    return fetch("http://localhost:8088/fish").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfFish) => {
                fishCollection = arrayOfFish
        }
    )
}

// 3, 6, 9, 12, etc... fish

const mostHolyFish = () => {
    const holyFish = []

    for (const hfish of fishCollection) {
        if (hfish.length % 3 === 0) {
            holyFish.push(hfish)
        }
    }
    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish

const bestSoldierFish = () => {
    const soldierFish = []

    for (const sfish of fishCollection) {
        if (sfish.length % 5 === 0) {
            soldierFish.push(sfish)
        }
    }
    return soldierFish
}

// // Any fish not a multiple of 3 or 5
const nonHolyFish = () => {
    const regularFish = []
    
    for (const xfish of fishCollection) {
        
        if (xfish.length % 3 !== 0 && xfish.length % 5 !== 0) {
            regularFish.push(xfish)
        }
    }
    return regularFish
}
// }