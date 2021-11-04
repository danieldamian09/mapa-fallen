const arg = document.getElementById('argentina');
const aus = document.getElementById('australia');
const can = document.getElementById('canada');
const col = document.getElementById('colombia');
const chl = document.getElementById('chile');
const mex = document.getElementById('mexico');
const eeuu = document.getElementById('unitedStates');
const world = document.getElementById('world');
var myModal = document.getElementById('myModal')
let msg = document.getElementById('elegido');


arg.addEventListener("mouseover", (e) => {
    msg.innerHTML = `Argentina`;
})

aus.addEventListener("mouseover", (e) => {
    msg.innerHTML = `Australia`;
})

can.addEventListener("mouseover", (e) => {
    msg.innerHTML = `Canada`;
})

col.addEventListener("mouseover", (e) => {
    msg.innerHTML = `Colombia`;
})

chl.addEventListener("mouseover", (e) => {
    msg.innerHTML = `Chile`;
})

mex.addEventListener("mouseover", (e) => {
    msg.innerHTML = `Mexico`;
})

eeuu.addEventListener("mouseover", (e) => {
    msg.innerHTML = `United States`;
})

world.addEventListener("mouseover", (e) => {
    msg.innerHTML = `Rest of the world`;
})

