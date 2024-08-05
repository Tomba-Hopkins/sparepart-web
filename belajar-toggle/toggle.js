const toggle = document.querySelector('#switch')
const body = document.querySelector('body')

toggle.addEventListener('change', function(){
    if (this.checked){
        body.classList.toggle('item')
    } else {
        body.classList.remove('item')
    }
})