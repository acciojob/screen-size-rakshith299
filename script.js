

window.addEventListener("resize", function(){
    let height = window.innerHeight;
    let width = window.innerWidth;

    let h1ele = document.querySelector("#sizeInfo > h1");


    h1ele.innerHTML = `Width: ${width} and Height: ${height}`;

    
})
