const container = document.querySelector("#container");
const baseUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 151; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const newImg = document.createElement("img");
  const label = document.createElement("span");
  label.innerText = `#${i}`;
  newImg.src = `${baseUrl}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(label);

  container.appendChild(pokemon);
}
