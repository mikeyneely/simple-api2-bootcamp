
const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=leGlTO72gKn6zjPeQxe04a5XiYTfQGDZ'
let apiKey = "leGlTO72gKn6zjPeQxe04a5XiYTfQGDZ"

document.querySelector('form').addEventListener('submit',function(e){
  e.preventDefault()
  let searchTerm = document.querySelector("input").value
  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=leGlTO72gKn6zjPeQxe04a5XiYTfQGDZ`)
  .then(res=> res.json())
  .then(response => {
    // search(response)
    console.log(response.response.docs.length)
    console.log("yo", response.response.docs)
    console.log("yo1", response.response.docs[0].headline.main)
    let articles = response.response.docs
    articles.forEach((el,i) => {
    let h1 = document.querySelector("h1")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")

    p.appendChild(document.createTextNode(el.headline.main))
    h1.appendChild(p)

    h2.appendChild(document.createTextNode(el.snippet))
    h1.appendChild(h2)
    })

  })
})
