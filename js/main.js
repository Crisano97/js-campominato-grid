
const playButton = document.getElementById('play-btn');

const mainContainer = document.getElementById('main-container');


const difficultySelect = document.getElementById('game-level');

playButton.addEventListener ('click', function(){
    
    
    mainContainer.innerHTML = "";
    
    let newElementDiv = createNewBox('box-container', 'd-flex');

    mainContainer.append(newElementDiv);

    let selectValue = difficultySelect.value;

    let boxNumber = 100;
    let boxStyle = 'box-l';

    if (selectValue == 2) {
        boxNumber = 81;
        boxStyle = 'box-m';

    } else if (selectValue == 3) {
        boxNumber = 49;
        boxStyle = 'box-s';

    }

    numberOfBoxGenerator(boxNumber,boxStyle);

});

function createNewBox(style){
    const currentBox = document.createElement('div');
    currentBox.classList.add(style);
    return currentBox;
}


function numberOfBoxGenerator (count, boxStyle){

    const boxContainer = document.querySelector('.box-container');
    for (let i = 1; i <= count; i++) {
        const newBox = createNewBox(boxStyle);
        newBox.innerHTML = i;

        addEventListenerToggle(newBox, 'azure');

        boxContainer.append(newBox);

    }
}


function addEventListenerToggle (htmlElement, classToToggle) {
        htmlElement.addEventListener('click', function() {
        htmlElement.classList.toggle(classToToggle);
        console.log('hai cliccato' + "" + htmlElement.innerHTML)
        
    });
}


