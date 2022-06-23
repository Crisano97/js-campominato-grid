
const playButton = document.getElementById('play-btn');

const mainContainer = document.getElementById('main-container');


const difficultySelect = document.getElementById('game-level');

playButton.addEventListener ('click', function(){
    
    
    mainContainer.innerHTML = "";
    let newElementDiv = document.createElement('div');
    newElementDiv.classList.add('box-container', 'd-flex')

    mainContainer.append(newElementDiv);

    let selectValue = difficultySelect.value;

    let boxNumber = 100;
    let style = 'box-l';

    if (selectValue == 2) {
        boxNumber = 81;
        style = 'box-m';

    } else if (selectValue == 3) {
        boxNumber = 49;
        style = 'box-s';

    }

    drawGrid(boxNumber,style);

});

function createNewBox(boxStyle){
    const currentBox = document.createElement('div');
    currentBox.classList.add(boxStyle);
    return currentBox;
}

function addEventListenerToggle (htmlElement, classToToggle) {
        htmlElement.addEventListener('click', function() {
        htmlElement.classList.toggle(classToToggle);
        console.log('hai cliccato' + "" + htmlElement.innerHTML)
        
    });
}

function drawGrid (count, style){

    const boxContainer = document.querySelector('.box-container');
    for (let i = 1; i <= count; i++) {
        const newBox = createNewBox(style);
        newBox.innerHTML = i;

        addEventListenerToggle(newBox, 'azure');

        boxContainer.append(newBox);

    }
}


