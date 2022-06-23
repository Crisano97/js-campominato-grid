
const playButton = document.getElementById('play-btn');

const mainContainer = document.getElementById('main-container');


playButton.addEventListener ('click', function(){
    mainContainer.innerHTML = "";
    let newElementDiv = document.createElement('div');
    newElementDiv.classList.add('box-container', 'd-flex')

    mainContainer.append(newElementDiv);

    //mi seleziono l'elemento del DOM;
const boxContainer = document.querySelector('.box-container');

//all'interno dell'elemento selezionato vado a inserire i miei elementi;

    for (let i = 1; i <= 100; i++) {
        const newBox = createNewBox();
        newBox.innerHTML = i;

        let addedClassName = addEventListenerToggle(newBox, 'azure');

        boxContainer.append(newBox);

    }

})

//mi creo una funzione per creare gli elementi che mi servono;
function createNewBox(){
    const currentBox = document.createElement('div');
    currentBox.classList.add('box');
    return currentBox;
}

//mi creo una funzione che mi aggiunga che al click del mio elemento questo si colori;
function addEventListenerToggle (htmlElement, classToToggle) {
    htmlElement.addEventListener('click', function() {
        htmlElement.classList.toggle(classToToggle);
    console.log('hai cliccato' + "" + htmlElement.innerHTML)
        
    });
}

