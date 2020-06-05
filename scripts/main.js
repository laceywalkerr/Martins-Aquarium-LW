// FISH DATA

getFishData().then(
    () => {
        console.log("inside",fishCollection)
        fishList()
    }
)
console.log("outside", fishCollection)


// LOCATION DATA

getLocationData().then(
    () => {
        console.log("inside", locationCollection)
        locationList()
    }
)
console.log("outside", locationCollection)


// QUOTE DATA

getQuoteData().then(
    () => {
        console.log("inside", quoteCollection)
        quoteList()
    }
)
console.log("outside", quoteCollection)


// TIP DATA

getTipData().then(
    () => {
        console.log("inside", tipCollection)
        tipList()
    }
)
console.log("outside", tipCollection)

