const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=3b1fed08fda2e3d6f56dd646b54c91a31a0b8e44");
    data = await response.json();
    for(let i = 0; i<1500; i++)
    {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}

getEmoji();

btnEl.addEventListener("click", ()=>{
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerHTML = emoji[randomNum].emojiName;
    emojiNameEl.innerHTML = emoji[randomNum].emojiCode;
});