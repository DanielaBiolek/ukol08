const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

//1.
const pole1 = document.querySelector('#pole1')

numbers.forEach ((prvek) => {

    pole1.innerHTML += `${prvek}, `
})

//2.
const pole2 = document.querySelector('#pole2')

numbers.forEach ((prvek) => {

    pole2.innerHTML += `${prvek**2}, `
})

//3.
const pole3 = document.querySelector('#pole3')

numbers.forEach ((prvek) => {

    if (prvek.toString().includes('-') === true) {
        pole3.innerHTML += `${prvek}, `
    }
})

//4.
const pole4 = document.querySelector('#pole4')

numbers.forEach ((prvek) => {
    
    pole4.innerHTML += `${Math.abs(prvek)}, `
})


//5.
const pole5 = document.querySelector('#pole5')

numbers.forEach ((prvek) => {

    if (prvek % 2 === 0) {
        pole5.innerHTML += `${prvek}, `
    }
})

//6.
const pole6 = document.querySelector('#pole6')

numbers.forEach ((prvek) => {

    if (Math.abs(prvek) % 3 === 0) {
        pole6.innerHTML += `${prvek}, `
    }
})


//7.
const pole7 = document.querySelector('#pole7')

numbers.forEach ((prvek) => {

    if (prvek.toString().includes('-') === true) {
        pole7.innerHTML += `${5 + Math.abs(prvek)}, `
    } else if (prvek >=0 && prvek < 5) {
        pole7.innerHTML += `${5 - prvek}, `
    } else {
        pole7.innerHTML += `${prvek - 5}, `}
})


//8.
const pole8 = document.querySelector('#pole8')

numbers.forEach ((prvek) => {

    if (prvek.toString().includes('-') === true) {
        pole8.innerHTML += `${(5 + Math.abs(prvek))**2}, `
    } else if (prvek >=0 && prvek < 5) {
        pole8.innerHTML += `${(5 - prvek)**2}, `
    } else {
        pole8.innerHTML += `${(prvek - 5)**2}, `}
})


//9.
const pole9 = document.querySelector('#pole9')

const zapornaNumbers = []

numbers.forEach ((prvek) => {

    if (prvek.toString().includes('-') === true) {
       zapornaNumbers.push(prvek)
    }
})


pole9.innerHTML =  `V poli "Numbers" je ${zapornaNumbers.length} záporných čísel.`


//10.
const pole10 = document.querySelector('#pole10')

let soucet = 0;
numbers.forEach ((prvek) => {
    soucet += prvek
})

pole10.innerHTML =  `Součet všech čísel v poli "Numbers" je ${soucet}.`


//11.
const pole11 = document.querySelector('#pole11')

const prumer = soucet / numbers.length

pole11.innerHTML =  `Průměr všech čísel v poli "Numbers" je ${prumer}.`


//12
const pole12 = document.querySelector('#pole12')

const kladnaNumbers = []

numbers.forEach ((prvek) => {

    if (prvek.toString().includes('-') === false) {
       kladnaNumbers.push(prvek)
    }
})

let soucetKladnych = 0;
kladnaNumbers.forEach ((prvek) => {
    soucetKladnych += prvek
})

pole12.innerHTML =  `Součet všech kladných čísel v poli "Numbers" je ${soucetKladnych}.`