const loadqoute = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data =>displayquote(data))
}

const displayquote = (quote)=> {
    const quoteelement = document.getElementById("qoute")
    quoteelement.innerText =quote.quote
}