const baseURL = "https://pokeapi.co/api/v2/type/"
// const search = document.querySelector()
const button = document.querySelector("button")
const searchType = document.querySelector(".pokemon-list")
const input = document.querySelector("#types")


let renderList = (types) => {
  types.forEach((type) => {
    const typeOutput = document.createElement('div')
    typeOutput.innerHTML = `<h3>${type.pokemon.name}</h3><button id=${type.pokemon.name} class="more-info">Show Me</button>`;
    searchType.append(typeOutput);
  }) //

  const learnButton = document.querySelectorAll(".more-info")
  console.log(learnButton)
  // const sprites = document.querySelectorAll(".more-info")
  // console.log(button.id.front_default)
  learnButton.forEach((button, index) => {
    button.addEventListener("click", async () => {
      const sprite = await axios.get(`${type[index].url}`)
      console.log(sprite)

    })
  })
}

// Have to get the learn more to include infomation with info listed below will probably need a for loop.
//               console.log("Number: ", pokeID)
//               console.log("Type 2: ", pokeType2);
//               console.log("Image URI: ", imageURI);
//           });

// })
// }
const getData = async () => {
  const pokeType = input.value
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${pokeType}/`)
    pokemonList = response.data.pokemon
    console.log(pokemonList)
    renderList(pokemonList)
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", getData)






// button.addEventListener("click", async () => {
//   let type = search.value;
//   let response = await axios.get(`${baseURL}${type}/`)
//   let typeList = response.data.Search;
//   renderList(typeList);
// });
