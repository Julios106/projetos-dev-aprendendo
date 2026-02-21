let usuarios = '[{"nome":"Ana","idade":19},{"nome":"Paulo","idade":30},{"nome":"Marta","idade":22}]';

let objeto = JSON.parse(usuarios);
//console.log(objeto[0]);

for (let i = 0; i < objeto.length; i++) {
    //console.log(objeto[i].nome);
}

const botao = document.getElementById('botao');
const input2 = document.getElementById('input');

const busca = () => {
    const input = document.getElementById('input').value.toLowerCase();//transformar tudo em minusculo.
    const mostrar = document.getElementById('mostrar');

     if((input == "" ) || (input == null)|| (input == undefined)){
                mostrar.innerHTML = "Nenhum nome digitado! Digite o nome"

                
        }else if (input === "nome".toLocaleLowerCase()) {

            fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)// no limit e pra colocar limite e vai ate 1350, evita exagerar kkk pode dar bug no pc
                .then(response => response.json())
                .then(data => {
                    console.log("Lista de Pokémons:");
                    
                    //para mostrar uque ta dentro do for no paragrafo pre
                    mostrar.innerHTML = ""

                    for (let i = 0; i < data.results.length; i++) {
                        mostrar.innerHTML += data.results[i].name + "<br>";
                    }
                    
                });
        }
        
        else{
        fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
            
            
            .then(resposta => resposta.json())
            .then(dados =>{
                //console.log(dados.name)
                //console.log(dados.height)
                //console.log(dados.weight)
                //console.log(dados.abilities[0].ability.name)


            
                mostrar.innerHTML = `-Nome:${dados.name}<br>-Altura:${dados.height}<br>-Peso:${dados.weight}<br>-Habilidade:${dados.abilities[0].ability.name} `;
                document.getElementById('img').innerHTML = `<img src="${dados.sprites.front_default}" style="width: 300px; height: 200px; ;">`;
            })

            //caso a pessoa escreva mal ou escreva algo que nao tenha
            .catch(() => {
                mostrar.innerHTML = `O Pokémon <strong> ${input} </strong> não foi encontrado 😢`;
            });

            }

            input.focus()



        

            
}


input2.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        busca(); // chama a função direto
    }
});






