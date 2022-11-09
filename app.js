// document.addEventListener('DOMContentLoaded', e => {
//   const h1 = document.querySelector("h1")
  
//   let h1Animation = h1.innerText = 'wdf'
//   let textAnimation = "This is working"
//   for (let i = 0; i < 10; i++) {
//     h1Animation += textAnimation[i]
//     // setTimeout(() => {h1Animation += textAnimation[i]}, 1000)
//   }
//   console.log(h1Animation)
//   return h1Animation
// })


function bruh() {
  let textAnimation = 'I am a junior software engineer with the desire to work with others and continuously learn through challenges'
  for (let i = 0; i < textAnimation.length; i++) {
    setTimeout(() => {
      setTimeout(() => { document.getElementById("displayDiv").innerHTML += textAnimation[i]}, 100*i)
    }, 2000)
  }
 console.log(textAnimation[0])
  }

bruh()
