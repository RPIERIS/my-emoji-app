let myYesEmojis = []
let myNoEmojis = []
let emojiList = ["🈁","😍","😎","🥳","🤓","🥇","🀄","👩🏽‍💻","🙆🏽‍♀️","🤦🏽‍♂️","✌🏽","🖐🏽","👏🏽"]
let myEmojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"))
const yesContainer = document.getElementById("yes-emojis")
const noContainer = document.getElementById("no-emojis")
const emojiInput = document.getElementById("emoji-input")
const yesBtn = document.getElementById("yes-btn")
const noBtn = document.getElementById("no-btn")
const clearstorageBtn = document.getElementById("clearstorage-btn")


function randomEmoji(myArray) {
    let randomNumber = Math.floor(Math.random() * myArray.length)
    return emojiList[randomNumber]
} 

function inputUpdate() {
    let newEmoji = randomEmoji(emojiList)
    emojiInput.value = newEmoji
}

inputUpdate()

if (myEmojisFromLocalStorage) {
    myEmojis = myEmojisFromLocalStorage
    console.log(myEmojis)
    renderEmojis(myEmojisFromLocalStorage)
}


function renderEmojis(items) {
    let emoji = ""
    for (let i = 0; i < items.length; i++) {
        emoji += `<span>${items[i]}</span>`
    } 
    yesContainer.innerHTML = emoji
}


yesBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
        renderEmojis(myEmojis)
        inputUpdate()
    }
})

noBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
        renderEmojis(myEmojis)
    }
})

// popBtn.addEventListener("click", function() {
//     myEmojis.pop()
//     localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
//     renderEmojis(myEmojis)
// })

// shiftBtn.addEventListener("click", function() {
//     myEmojis.shift()
//     localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
//     renderEmojis(myEmojis)
// })

clearstorageBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myEmojis = []
    emojiInput.value = ""
    myEmojisFromLocalStorage = ""
    renderEmojis(myEmojisFromLocalStorage)
    inputUpdate()
})

