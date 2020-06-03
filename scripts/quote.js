

const quoteConverter = (quoteObject) => {
    const quoteHTMLRepresentation = ` 
        <section class="quote">
            <div class="quote__details">
                ${quoteObject.quote}
            </div>
        </section>`
    return quoteHTMLRepresentation
}