let button = document.querySelector('button')
let result = document.getElementById('result')


button.addEventListener('click',()=>{
    let value = document.getElementById("value").value 
    const word = value
    getword(word)
})

const getword = async (word)=>{
    try {
        
   
 const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
 const data = await response.json()
 result.innerHTML = 
 `<h2><strong>word :</strong>${data[0].word}</h2>
 <p>${data[0].meanings[0].partOfSpeech}</p>
 <p><h2>Meaning :</h2>${data[0].meanings[0].definitions[0].definition ===undefined ? "word not found" :data[0].meanings[0].definitions[0].definition }</p>
 <p><h2>Example:</h2>${data[0].meanings[0].definitions[0].definition ===undefined ? "word not found" :data[0].meanings[0].definitions[0].example }</p>`

} 
catch (error) {
     result.innerHTML = `<p>Sorry the word could not be found</p>`   
}
}
