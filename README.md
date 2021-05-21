# Emoji Love - Emoji Hate

I have created this from a Scrimba Module. I also use MDN Web Docs quite regularly to learn. My aim was to adapt the emoji course and use everything I learnt on Module 3 in the project. A few elements I found very interesting were 

1. localStorage - JS function with the ability to getItem, setItem and clear. I also learnt about JSON.parse and JSON.stringify. These were needed as localstorage saves as a string. An array would need to be changed.
2. Math.Random and Math.floor. Creating random numbers was fun and I wanted to incorporate it to the project.

## images 
heaven
Photo by <a href="https://unsplash.com/@kaushikpanchal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kaushik Panchal</a> on <a href="https://unsplash.com/s/photos/heaven?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

hell
Photo by <a href="https://unsplash.com/@ianstauffer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ian Stauffer</a> on <a href="https://unsplash.com/s/photos/hell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>



## Experimenting code

I am using the below section to experitment with some elements.  

One of the first things I did was to see if I could save and load everythings as an array. However it appears that emojis have different lenths so it is not possible to place them on the browser/user-agent via a for loop. I found a question for this on Stack Overflow asking ["how can I split a string containing emoji into an array"](https://stackoverflow.com/questions/24531751/how-can-i-split-a-string-containing-emoji-into-an-array). The below code is an unsuccesful attempt at it. 

```
pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        if (emojiInput.value.length > 1) {
            let string = emojiInput.value
            string.split(/.*?/u)
            localStorage.setItem("myEmojis", JSON.stringify(string))
            emojiInput.value = ""
            console.log(string)
            renderEmojis(string)
        }
        for (let i = 0; i < emojiInput.value.length; i++) {
            console.log(emojiInput.value[i])
            myEmojis.push(emojiInput.value[i])
            emojiInput.value[i] = ""
            localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
            
        } 
        renderEmojis(string)
    }
})
```

## Words by Scrimba

# title(){
		
		return this.options.title || this.options.name;
	}

Quick start:

```
$ yarn # npm install
$ yarn build # npm run build
````

## Development

Run Webpack in watch-mode to continually compile the JavaScript as you work:

```
$ yarn watch # npm run watch
```

## Supporting Scrimba

Since 2017, we have created over 20 free courses on Scrimba, and we're going to
continue launching free courses. But to pay our bills, we have to charge once
in a while. So if you've ever wanted to "give back" to Scrimba, you can do that by buying
	one of our paid courses

- [Become a professional React developer](https://scrimba.com/course/greact)
- [The Responsive Web Design Bootcamp](https://scrimba.com/course/gresponsive)
- [The Ultimate JavaScript Bootcamp](https://scrimba.com/course/gjavascript)

	It would also mean the world to us if you share the courses.  

Happy Coding!
  