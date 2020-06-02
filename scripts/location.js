

const locationConverter = (locationObject) => {
    const locationHTMLRepresentation = ` 
        <section class="location">
            <div class="">
                <img class="location__picture" src="${locationObject.picture}"
                    alt="The ${locationObject.where}" />
            </div>
            <div class="location__details">
                ${locationObject.description}
            </div>
        </section>`

    return locationHTMLRepresentation
}