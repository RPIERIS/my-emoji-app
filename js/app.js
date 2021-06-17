let myYesEmojis = []
let myNoEmojis = []
let emojiList = ["🈁","😍","😎","🥳","🤓","🥇","🀄","👩🏽‍💻","🙆🏽‍♀️","🤦🏽‍♂️","✌🏽","🖐🏽","👏🏽","😫","😴","😛","😕","🙃","🤯","🤬","😈","😇","🦖"]
let yesSelect = false
let noSelect = false
let myYesEmojisFromLocalStorage = JSON.parse(localStorage.getItem("myYesEmojis"))
let myNoEmojisFromLocalStorage = JSON.parse(localStorage.getItem("myNoEmojis"))
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


if (myYesEmojisFromLocalStorage) {
    yesSelect = true
    myYesEmojis = myYesEmojisFromLocalStorage
    renderEmojis(myYesEmojisFromLocalStorage)
}

if (myNoEmojisFromLocalStorage){
    noSelect = true
    myNoEmojis = myNoEmojisFromLocalStorage
    renderEmojis(myNoEmojisFromLocalStorage)
}



function renderEmojis(items) {
    let emoji = ""
    for (let i = 0; i < items.length; i++) {
        emoji += `<span>${items[i]}</span>`
        if(yesSelect) {
            yesContainer.innerHTML = emoji
        } else if (noSelect) {
            noContainer.innerHTML = emoji
        } 
    } 
    noSelect = false
    yesSelect = false    
}

function renderClear (){
    yesContainer.innerHTML = ""
    noContainer.innerHTML = ""
}


yesBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        yesSelect = true
        myYesEmojis.push(emojiInput.value)
        emojiInput.value = ""
        localStorage.setItem("myYesEmojis", JSON.stringify(myYesEmojis))
        renderEmojis(myYesEmojis)
        inputUpdate()
    }
})

noBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        noSelect = true
        myNoEmojis.push(emojiInput.value)
        emojiInput.value = ""
        localStorage.setItem("myNoEmojis", JSON.stringify(myNoEmojis))
        renderEmojis(myNoEmojis)
        inputUpdate()
    }
})



clearstorageBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myYesEmojis = []
    myNoEmojis = []
    myYesEmojisFromLocalStorage = []
    myNoEmojisFromLocalStorage = []
    renderEmojis(myYesEmojisFromLocalStorage)
    renderEmojis(myNoEmojisFromLocalStorage)
    renderClear()
    inputUpdate()
    console.log("cleared")
})

