let myEmojis = []
let myEmojisFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"))
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const clearstorageBtn = document.getElementById("clearstorage-btn")

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
    emojiContainer.innerHTML = emoji
}


pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
        renderEmojis(myEmojis)
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
        renderEmojis(myEmojis)
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    renderEmojis(myEmojis)
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
    renderEmojis(myEmojis)
})

clearstorageBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myEmojis = []
    emojiInput.value = ""
    myEmojisFromLocalStorage = ""
    renderEmojis(myEmojisFromLocalStorage)
})

