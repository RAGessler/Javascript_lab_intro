let dayOfWeek = "Monday"
console.log(dayOfWeek);

dayOfWeek = 'Friday'
console.log(`I cant wait for ${dayOfWeek}!`)
animalInput = prompt("What is your favorite animal?")
colorInput = prompt("What is your favorite color?")
console.log(`Ive never seen a ${colorInput} ${animalInput} before!`)
// Favorite Breakfast: Egg Burrito
// Favorie Lunch: Meal Shake
// Favorite Dinner: Ribeye Steak

let timeOfDay = 0800
let selectedMeal = null
if(timeOfDay < 1200){
selectedMeal = 'Egg Burrito'
}
else if(timeOfDay > 1200 && timeOfDay < 1700){
    selectedMeal = 'Meal Shake'
}
else if(timeOfDay > 1700){
    selectedMeal = 'Ribeye Steak'
}
console.log(selectedMeal)

let randomInt = Math.floor(Math.random() * 11)
console.log(randomInt)
if(randomInt <= 2){
    console.log('Beatles')
}
else if(randomInt >= 3 && randomInt <= 5){
    console.log('Stones')
}
else if(randomInt >= 6 && randomInt <= 8){
    console.log('Floyd')
}
else if(randomInt >= 9 && randomInt <= 10){
    console.log('Hendrix')
};
for (let i = 0; i < 7; i++) {
    console.log('JavaScript is Cool!')
 }

for (let i = 0; i < 11; i++) {
    console.log(i)    
}
for (let i = 0; i < 5; i++) {
    console.log('hello')    
    console.log('goodbye')    
}

function printMovieName(){
    let favoriteMovie = 'Hacksaw Ridge'
    console.log(favoriteMovie)
}
printMovieName()

function inputFavoriteBand(){
    let userInput = prompt('What is your favorite band?')
    return userInput
}
let favoriteBand = inputFavoriteBand()
console.log(favoriteBand)

function concertDisplay(musicalAct){
    let myStreet = prompt('What street do you live on?')
    console.log(`It would be great if ${musicalAct} played on ${myStreet}!`)
}
concertDisplay(favoriteBand)

let desktopItems = ['iPad', 'Macbook', 'iPhone']
console.log(desktopItems[1])
desktopItems.push('Infinity Gauntlet')
for (let i = 0; i < 4; i++) {
    console.log(desktopItems[i])
}

let magicNumber = Math.floor(Math.random() * 101)
let guess = 0



while (guess !== magicNumber) {
    guess = parseInt(prompt('Guess the magic number'))
    if (guess === magicNumber){
        console.log(`Congrats! The magic number was ${magicNumber}`)
        break
    }
    else if (guess > magicNumber){
        console.log('Too High!')
        if(guess <= (magicNumber + 10) && guess > magicNumber){
            console.log('Getting Warmer')
        }
    }
    else if (guess < magicNumber){
        console.log('Too Low!')
        if(guess >= (magicNumber - 10) && guess < magicNumber){
            console.log('Getting Warmer')
        }
    }

    
}