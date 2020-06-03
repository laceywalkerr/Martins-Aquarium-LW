
const tipConverter = (tipObject) => {
    const tipHTMLRepresentation = `
        <section class="tip">
            <div class="tip__details">
                ${tipObject.quote}
            </div>
        </section>`
    return tipHTMLRepresentation
}