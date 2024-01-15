let game = {
    start() {
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')

        this.background = new Image()
        this.background.src = 'sprites/background.png'

        this.background.addEventListener('load', () => {
            this.run()
        })

        console.log('start')
        console.log(this.background.src)
    },
    run() {
        window.requestAnimationFrame(() => {
            this.ctx.drawImage(this.background, 0, 0)
        })

        console.log('run')
    }
}

game.start()