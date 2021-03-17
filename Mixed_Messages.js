function generateRandomNumber(num) {
    // Generates a whole number between 0 and 1
    return Math.floor(Math.random() * num)
  }
  
  const horoscope = {
    sign: ['sea', 'moon', 'sun', 'sky', 'air'],
    fortune: ['mixed luck', 'money coming your way', 'touble ahead', 'good luck', 'a long and happy life'],
    advice: ['open your heart', 'learn to relax', 'take some time out', 'trust no one']
  }
  
  // Store the 'wisdom' in an array
  let personalWisdom = []
  
  // Iterate over the object
  for(let prop in horoscope) {
    let optionIdx = generateRandomNumber(horoscope[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'sign':
        personalWisdom.push(`Your sign is "${horoscope[prop][optionIdx]}".`)
        break
      case 'fortune':
        personalWisdom.push(`You will have: "${horoscope[prop][optionIdx]}".`)
        break
      case 'advice':
        personalWisdom.push(`You should: "${horoscope[prop][optionIdx]}".`)
        break
      default:
        personalWisdom.push('Please provide more information.')
    }
  }
  
  function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
  }
  
  formatWisdom(personalWisdom);