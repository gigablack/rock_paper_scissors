const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput
    } else {
      console.log('Invalid value')
    }
  }
  const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3)
    if(computerChoice === 0){
      return 'rock'
    } else if(computerChoice === 1){
      return 'paper'
    } else {
      return 'scissors'
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb') return 'User Won with a BOMB!!! o.O??'
    if(userChoice === computerChoice){
      return 'it was a tie!!'
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer Won!!!'
      } else {
        return 'User Won!!!'
      }
    } else if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer Won!!!'
      } else {
        return 'User Won!!!'
      }
    } else if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'Computer Won!!!'
      } else {
        return 'User Won!!!'
      }
    } else {
      return 'Invalid User Choice'
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('BOMB')
    const computerChoice = getComputerChoice()
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame()