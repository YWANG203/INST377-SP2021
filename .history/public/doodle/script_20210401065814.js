document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    const gravity = 0.9
    let doodlerLeftSpace = 50
    let dooddlerBottomSpace = 150
    let doodlerBottomSpace = startPoint
    let isGameOver = false
    let platformCount = 5
    let platforms = []
    let upTimerId
    let downTimerId
    let score = 0 
    let speed = 3
    let isJumping = true
    let isGoingLeft = false
    let isGoingRight = false
    let leftTimerId
    let rightTimerId

    class Platform {
        constructor(newPlatBottom) {
          this.left = Math.random() * 315
          this.bottom = newPlatBottom
          this.visual = document.createElement('div')
    
          const visual = this.visual
          visual.classList.add('platform')
          visual.style.left = this.left + 'px'
          visual.style.bottom = this.bottom + 'px'
          grid.appendChild(visual)
        }
      }

    function createPlatforms() {
      for(let i =0; i < platformCount; i++) {
        let platGap = 600 / platformCount
        let newPlatBottom = 100 + i * platGap
        let newPlatform = new Platform (newPlatBottom)
        platforms.push(newPlatform)
        console.log(platforms)
      }
    }

    function movePlatforms() {
        if (doodlerBottomSpace > 200) {
            platforms.forEach(platform => {
              platform.bottom -= 4
              let visual = platform.visual
              visual.style.bottom = platform.bottom + 'px'
    
              if(platform.bottom < 10) {
                let firstPlatform = platforms[0].visual
                firstPlatform.classList.remove('platform')
                platforms.shift()
                console.log(platforms)
                score++
                var newPlatform = new Platform(600)
                platforms.push(newPlatform)
              }
          }) 
        } 
    }

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
