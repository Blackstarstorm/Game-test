const baseURL = "https://pokeapi.co/api/v2/type/"
const button = document.querySelector("#search")
const searchType = document.querySelector(".pokemon-list")
const input = document.querySelector("#types")
const modal = document.querySelector("#modal")
const display = document.querySelector("#display")
const displayBack = document.querySelector("#displayBack")
console.log("test")

let renderList = (types) => {
  searchType.innerHTML = ""
  types.forEach((type) => {
    const typeOutput = document.createElement('div')
    typeOutput.innerHTML = `<h3>${type.pokemon.name}</h3><button id=${type.pokemon.name} class="more-info">Show Me</button>`;
    searchType.append(typeOutput);
  })

  const learnButton = document.querySelectorAll(".more-info")

  learnButton.forEach((button) => {
    button.addEventListener("click", async () => {
      modal.style.display = "block"
      display.innerHTML = ""
      const name = button.id;
      const sprite = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      let pic = sprite.data.sprites.front_default
      const pokeDiv = document.createElement("div")
      pokeDiv.innerHTML = pic ? `<img src=${pic} />` : `<p>This Pokemon has yet to be photographed!</p>`
      display.append(pokeDiv)
    })
  })
}

displayBack.addEventListener("click", function () {
  modal.style.display = "none";
})

const getData = async () => {
  const pokeType = input.value
  const music = input[input.selectedIndex].getAttribute("music");
  const response = await axios.get(`https://pokeapi.co/api/v2/type/${pokeType}/`)
  pokemonList = response.data.pokemon
  renderList(pokemonList)
  const sound = document.querySelector("#sound"); 
  const audio = document.querySelector("#audio"); 
  sound.src = music;
  audio.load();
  audio.play();
}

button.addEventListener("click", getData)











