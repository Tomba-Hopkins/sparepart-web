const text = document.querySelector('.words');
const words = "Hello I am Smith";
const abjad = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?.,1234567890 ";

let index = 0

const acak = (target, asli) => {

    let i = 0

    const acakInterval = setInterval(() => {

        if (i >= 10){
            clearInterval()
            target.textContent = asli
        } else {
            target.textContent = abjad[Math.floor(Math.random() * abjad.length)]
            i++
        }
        
    }, 50)
    
}

const implement = () => {
    if(index < words.length){
        const span = document.createElement('span')
        text.appendChild(span)
        acak(span, words[index])
        index++
        setTimeout(implement, 100)
    }
}

implement()