



const randomizer = ( validSelections : string[]) => {
  return validSelections[Math.floor(Math.random() * validSelections.length)];

}

export {randomizer}
