const tipList = () => {
    for (const currentTipObject of tipCollection) {
        const tipHTML = tipConverter(currentTipObject)
        const tipArticleElement = document.querySelector(".tipList")
        tipArticleElement.innerHTML += tipHTML
    }
}
