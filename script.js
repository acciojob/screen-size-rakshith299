

window.addEventListener("resize", function(){
    let height = this.window.innerHeight;
    let width = this.window.innerWidth;

    let h1ele = document.querySelector("#sizeInfo > h1");


    h1ele.innerHTML = `Width: ${height} and Height: ${width}`;

    
})
