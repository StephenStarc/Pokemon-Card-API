

const typecolor = {
    bug: "#26de81",
     dragon:"#ffeaa7",
      electric :"#fed330",
     fairy:"#ff0869",
      fighting:"#30336b",
       fire:"#f8932b",
        flying:"#81ecec",
         grass:"#80b894",
          ground:"#efb549",
           ghost:"#a55eea",
            ice:"#74b9ff",
             normal:"#95afc8",
              poison:"#6c5ce7",
               psychic:"#a29bfe",
                rock:"#2d3436",
                 water:"#8190ff",
                 dark:"#4b4b4b",

}
const url = 'https://pokeapi.co/api/v2/pokemon'
const btn = document.getElementById('btn')
const card = document.getElementById('card')

const getpokeid = () => {
    let id = Math.floor(Math.random() * 648) + 1
    pokemoncardgen(id)
}

pokemoncardgen  = (id) => {
fetch(`${url}/${id}`)
.then(result => result.json())
.then(poke => {
    pokemoncard(poke)
})
}

pokemoncard = (poke) => {
    const pokeHP =  poke.stats[0].base_stat
    const pokeIMG = poke.sprites.other.dream_world.front_default
    const pokeNAME = (poke.name).toUpperCase()
    const pokeATTACK = poke.stats[1].base_stat
    const pokeDEFENSE = poke.stats[2].base_stat
    const pokeSPEED = poke.stats[5].base_stat

    
    pokeCOLOR = typecolor[poke.types[0].type.name]
    console.log(pokeCOLOR)

    card.innerHTML = `
    <p class="hp">
            <span>HP</span>
            ${pokeHP}
        </p>
        <img src="${pokeIMG}" />
        <h2 class="pokemon-name">${pokeNAME}</h2>
        <div class="types">
            
        </div>
        <div class="stats">
            <div class="pro power">
            <h3>${pokeATTACK}</h3>
            <p>Attack</p>
            </div>
        <div class="pro power">
            <h3>${pokeDEFENSE}</h3>
            <p>Defense</p>
        </div>
        <div class="pro power">
            <h3>${pokeSPEED}</h3>
            <p>Speed</p>
        </div>
        </div>
    `
    poketype(poke.types)
    themecolor(pokeCOLOR)
}
poketype = (type) => {
    type.forEach(item => {
        let span = document.createElement('SPAN')
        span.textContent = item.type.name
        document.querySelector(".types").appendChild(span)
    })
}
themecolor = (pokeCOLOR) => {
    card.style.background = `radial-gradient(
        circle at 50% 0%, ${pokeCOLOR} 36%, #fff 36%)`
    card.querySelectorAll('.types span').forEach(type => type.style.backgroundColor = pokeCOLOR)
}


btn.addEventListener('click', getpokeid)
window.addEventListener('load', getpokeid)




//POKE IMG - poke.sprites.other.dream_world.front_default
/* <span>type 1</span>
            <span>type 2</span> */