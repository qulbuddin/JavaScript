//Cara Penulisan Function
//function namafunction(argument){
// ... Isi function 
//}

function learneverytime(name){
    console.log(name)
}
learneverytime('My Name Is Budi')



function tambah(bil1,bil2){
    return bil1 + bil2
}
console.log(tambah(3,10));


//Part 2


function intro(name,age){
    if (age>30){
        return name + ' Too Old For You'
    }else{
        return name + ' Is For You broh'
    }
}

var introduction = intro(prompt('Your name ?'),prompt('Your age ?'));

console.log(introduction)
//console.log(intro(prompt('Your name ?'),prompt('Your age ?'));)
document.getElementById("element1").innerHTML = introduction;