anim = () => {
    document.getElementById("line").style.width = "700px"
    document.getElementById("line").style.left = "calc(50% - 350px)"
    const reduce = setTimeout(() => {
        document.getElementById("line").style.width = "500px"
        document.getElementById("line").style.left = "calc(50% - 250px)"
    }, 500)
    const turn = setTimeout(() => {
        document.getElementById("line").style.transform = "rotate(53.13deg)"
    }, 1000)
    const lines = setTimeout(() => {
        document.getElementById("top-line").style.top = "calc(50% - 200px)"
        document.getElementById("bottom-line").style.bottom = "calc(50% - 200px)"
    }, 1500)
    const gold = setTimeout(() => {
        document.getElementById("bottom-line").style.backgroundColor = "dodgerblue"
        document.getElementById("line").style.backgroundColor = "dodgerblue"
        document.getElementById("top-line").style.backgroundColor = "dodgerblue"
    }, 2000)
    const black = setTimeout(() => {
        document.getElementById("bottom-line").style.backgroundColor = "black"
        document.getElementById("line").style.backgroundColor = "black"
        document.getElementById("top-line").style.backgroundColor = "black"
    }, 2600)
    const back1 = setTimeout(() => {
        document.getElementById("top-line").style.top = "-400px"
        document.getElementById("bottom-line").style.bottom = "-400px"
    }, 3100)
    const back2 = setTimeout(() => {
        document.getElementById("line").style.transform = "rotate(0deg)"
    }, 3600)
    const back3 = setTimeout(() => {
        document.getElementById("line").style.left = "50%"
        document.getElementById("line").style.width = "0px"
    }, 4100)
    const cnt = setTimeout(() => {
        document.getElementById("cnt").style.opacity = "1"
        document.querySelector("body").style.overflow = "auto"
    }, 4600)
    const hide = setTimeout(() => {
        document.getElementById("intro").style.display = "none"
    }, 5100)
}