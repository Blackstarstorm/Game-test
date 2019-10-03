const baseURL = "https://pokeapi.co/api/v2/type/"
const button = document.querySelector("button")
const searchType = document.querySelector(".pokemon-list")
const input = document.querySelector("#types")
const display = document.querySelector("#display")

let renderList = (types) => {
  searchType.innerHTML = "<h2>Pokemon List</h2>"
  types.forEach((type) => {
    const typeOutput = document.createElement('div')
    typeOutput.innerHTML = `<h3>${type.pokemon.name}</h3><button id=${type.pokemon.name} class="more-info">Show Me</button>`;
    searchType.append(typeOutput);
  })

  const learnButton = document.querySelectorAll(".more-info")

  learnButton.forEach((button) => {
    button.addEventListener("click", async () => {
      display.innerHTML = ""
      const name = button.id;
      const sprite = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      let pic = sprite.data.sprites.front_default
      const pokeDiv = document.createElement("div")
      pokeDiv.innerHTML = `<img src=${pic} />`
      display.append(pokeDiv)
    })
  })
}

const getData = async () => {
  const pokeType = input.value
  const response = await axios.get(`https://pokeapi.co/api/v2/type/${pokeType}/`)
  pokemonList = response.data.pokemon
  // console.log(pokemonList)
  renderList(pokemonList)
}

button.addEventListener("click", getData)











