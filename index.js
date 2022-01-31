const toogleButton = document.getElementsByClassName("toogle-button")[0]
const Links = document.getElementsByClassName("navbar-links")[0]
// console.log(Links);

toogleButton.addEventListener("click", ()=> {
    Links.classList.toggle('active')   
})


let count = 0;
function increment(){
    count  += 1;
    countEl.textContent = count;
}
let countEl = document.getElementById("count-el");


// let c = [1, 6, 38, 100]
// for (let i = 1; i <= 100; i++) {
//     console.log(count[i])
// }