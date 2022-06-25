/* 
    Step 1 - Quando passar o mouse em cima do personagem temos que: 

         - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele
        - retirar a classe do personagem que está selecionado

    Step 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande
        - alterar a imagem do personagem
        - alterar o nome do personagem selecionado



Variável que vai ter a função de pegar todos os personagens e quando o mouse passar por cima deles a propriedade de selecionado será passaada 

O querySelectorAll Retorna uma lista de elementos presentes no document (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que coincidam com o grupo de seletores especificado. O objeto retornado é uma NodeList.
*/

const characters = document.querySelectorAll('.character');

/*
- A NodeList retornada irá conter todos os elementos do documento que coincidam com os seletores especificados que no caso é o retorno de todos os itens com a classe .character
- Para cada personagem nessa array eu irei aplicar a função que fará a propriedade ser passada e após o mouse sair de um personagem para o outro, será levado a animação de seleção de personagem
*/

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {
        
        const selectedId = character.attributes.id.value;


        const characterSelected = document.querySelector('.selected');
        characterSelected.classList.remove('selected');

        character.classList.add('selected');

        //Step 2

        const playerOneImage = document.getElementById('character_player_1');
        playerOneImage.src = `./assets/images/${selectedId}.png`;

        const playerName1 = document.getElementById('player1');
        const selectedName = character.getAttribute('data-name');

        playerName1.innerHTML = selectedName; 
    });
});






