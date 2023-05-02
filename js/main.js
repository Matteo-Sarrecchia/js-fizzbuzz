// richiamare elemento contenitore
const contenitore = document.getElementById("contenitore");

for (let i = 1; i <= 100; i++ ){

    // creare un nuovo elemento
    const cube = document.createElement("div");

    // aggiungere classe
    cube.classList.add("square");

    // associare elemento creato al contenitore
    contenitore.append(cube);
    
    
    if ((i%3 == 0) && (i%5 == 0)){
        console.log("divisibile per 3 e 5")
        cube.append("FizzBuzz");
        cube.classList.add("fizzBuzz");

    } else if (i%5 == 0) {
        console.log("divisibile per 5")
        cube.append("Buzz");
        cube.classList.add("buzz");

    } else if (i%3 == 0) {
        console.log("divisibile per 3")
        cube.append("Fizz");
        cube.classList.add("fizz");

    } else {
        console.log(i)
        cube.append(i);
    }
    

}

