function textFlow() {
  let textAnimation = 'I am a junior software engineer with the desire to work with others and continuously learn through challenges'
  for (let i = 0; i < textAnimation.length; i++) {
    setTimeout(() => {
      setTimeout(() => { document.getElementById("displayDiv").innerHTML += textAnimation[i]}, 60*i)
    }, 2000)
  }
}

textFlow()
