const quoteCollection = []

const getQuoteData = () => {
    return fetch("http://localhost:8088/quote").then(
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfQuote) => {
                QuoteCollection = arrayOfQuote
        }
    )
}