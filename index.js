function getRandomNumber() {
    return new Promise(resolve => {
       setTimeout(() => {
           resolve(Math.floor(Math.random() * 100));
       }, 2000);
   });
}

async function fun() {
    const x = await getRandomNumber();
    console.log(x);
    return x;
}

fun();

// async function getCity() {
//     let response = await fetch('https://geocode.xyz/seattle?json=1');
//     if(response.ok) {
//         let json = await response.json();
//     }
//     else {
//         alert("HTTP-Error: " + response.status);
//     }
//     return response;
// }

// let answer = getCity();
// console.log(answer);

