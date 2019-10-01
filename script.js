const baseURL = "https://pokeapi.co/api/v2/type/"
// const search = document.querySelector()
const button = document.querySelector("button")
const searchType = document.querySelector(".pokemon-list")
const input = document.querySelector("#blank")


let renderList = (types) => {
  types.forEach((type) => {
    const typeOutput = document.createElement('div')
    typeOutput.innerHTML = `<h3>${type.pokemon.name}</h3><button id=${type.pokemon.name} class="more-info">Learn More</button>`;
    searchType.append(typeOutput);
  })
  const learnButton = document.querySelectorAll(".more-info")

  console.log(learnButton)
  learnButton.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.id)
    })
  })
}

const getData = async () => {
  const pokeType = input.value
  const response = await axios.get(`https://pokeapi.co/api/v2/type/${pokeType}/`)
  pokemonList = response.data.pokemon
  console.log(pokemonList)
  renderList(pokemonList)
}

button.addEventListener("click", getData)





// button.addEventListener("click", async () => {
//   let type = search.value;
//   let response = await axios.get(`${baseURL}${type}/`)
//   let typeList = response.data.Search;
//   renderList(typeList);
// });

//  button.addEventListener("click", async function () {
//    const category = dropdown[dropdown.selectedIndex].id
//    const response = await axios.get('https://pokeapi.co/api/v2/')