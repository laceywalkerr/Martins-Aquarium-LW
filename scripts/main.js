// FISH DATA

getFishData().then(
    () => {
        console.log("inside",fishCollection)
    }
)

console.log("outside", fishCollection)

fishList()


// LOCATION DATA

getLocationData().then(
    () => {
        console.log("inside", locationCollection)
    }
)
console.log("outside", locationCollection)
locationList()

// QUOTE DATA

getQuoteData().then(
    () => {
        console.log("inside", quoteCollection)
    }
)
console.log("outside", quoteCollection)
quoteList()

// TIP DATA

getTipData().then(
    () => {
        console.log("inside", tipCollection)
    }
)
console.log("outside", tipCollection)
tipList()
