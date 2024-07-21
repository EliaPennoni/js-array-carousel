console.log('js connected')
// possiamo immaginare questo array
// come fosse letto da un db presente su un qualche server
// gli array contano da 0
const immagini = [
    "img/IMG_5255.jpg", // 0    // elemento numero 1
    "img/IMG_5267.jpg", // 1    // elemento numero 2   
    "img/IMG_5287.jpg", // 2    // elemento numero 3
    "img/IMG_5611.jpg", // 3    // elemento numero 4
    "img/IMG_5620.jpg", // 4    // elemento numero 5
    "img/IMG_5399.jpg"  // 5    // elemento numero 6
];

// sintassi del ciclo For
// variabile di controllo -> inizializzata
// espressione -> condizione
// incremento -> incremento/decremento

console.log ("la dimensione dell'array è: " + immagini.length);

// prendo il div di nome "pictures"
const carouselContainer = document.getElementById("pictures");

// length è la proprietà dell'array che
// fornisce la dimensione (il numero di elementi)
for (let i = 0; i < immagini.length ; i++){
    // voglio accedere all'elemento i-esimo dell'array
    // console.log(imageArray[i]);
    console.log("L'immagine con indice " + i + " è " + immagini[i]);
    const img = document.createElement("img"); // crea un nuovo <img>
    // <img>    
    // aggiungo il src alla img

    img.src=immagini[i];
 
    // <img src = "path_immagine" >
    img.classList.add('carousel-image'); 
    // la variabile che controlla gli indici
    // in questo codice è i

    // differenza tra = e == / ===
    // un = serve per assegnare un valore
    // differenza tra == e ===

    if(i===0) {
        img.classList.add('visible'); 
    }

    carouselContainer.appendChild(img);
}