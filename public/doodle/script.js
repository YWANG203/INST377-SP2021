document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let dooddlerBottomSpace = 150
    let isGameOver = false
    let platformCount = 5

    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left =  doodlerLeftSpace + 'px'
        doodler.style.bottom = dooddlerBottomSpace + 'px'

    }

    class Platform{
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom
            this.left = 
        }
    }

    function createPlatforms() {
        for(let i = 0; i < platformCount; i++) {
            let platGap = 600 / platformCount
            let newPlatBottom = 100 + i * platGap
            let newPlatform = new platform()
        }
    }

    function start() {
        if (!isGameOver == false) {
            createDoodler()
            createPlatforms()
        }
    }
    start()
})
