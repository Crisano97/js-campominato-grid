//mi seleziono l'elemento del DOM;
const boxContainer = document.getElementById('box-wrapper');
console.log(boxContainer)

//all'interno dell'elemento selezionato vado a inserire i miei elementi;

for (let i = 0; i < 100; i++) {
    const newBox = createNewBox();
    boxContainer.append(newBox);

}




//mi creo una funzione per creare gli elementi che mi servono;
function createNewBox(){
    const currentBox = document.createElement('div');
    currentBox.classList.add('box');
    return currentBox;
}