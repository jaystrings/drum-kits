// document.querySelector('button').addEventListener("click",handleClick)

// function handleClick(){
//     alert("i got clicked")
// }
//  document.querySelectorAll('.drums')


let drumSound = {
    w:'./sounds/crash.mp3',
    k : './sounds/kick-bass.mp3',
    s : './sounds/snare.mp3',
    a : './sounds/tom-1.mp3',
    d : './sounds/tom-2.mp3',
    j : './sounds/tom-3.mp3',
    l : './sounds/tom-4.mp3',

}



let jerry = document.querySelectorAll('.drum')

jerry.forEach(jer=>{
    jer.onclick=()=>{
        var audio = new Audio(drumSound[jer.value])

        // var audio = new Audio("sounds/tom-1.mp3")
        audio.play()
    }
})