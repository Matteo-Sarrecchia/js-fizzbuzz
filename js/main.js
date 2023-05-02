// richiamare elemento contenitore
const contenitore = document.getElementById("contenitore");

for (let i = 1; i <= 100; i++ ){

    // creare un nuovo elemento
    const cube = document.createElement("div");
    // aggiungere classe
    cube.classList.add("square");

    // associare elemento creato al contenitore
    contenitore.append(cube);

    cube.append(i);
    
    if ((i%3 == 0) && (i%5 == 0)){
        console.log("divisibile per 3 e 5")
    } else if (i%5 == 0) {
        console.log("divisibile per 5")
    } else if (i%3 == 0) {
        console.log("divisibile per 3")
    } else {
        console.log(i)
    }

    
}

