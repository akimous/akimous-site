function autoPlay(video) {
    let timer
    const play = () => {
        if (video.readyState > 2)
            video.play()
        else
            timer = setTimeout(play, 1000)
    }
    const observer = new IntersectionObserver(elements => {
        const element = elements[0]
        if (element.intersectionRatio <= 0) {
            clearTimeout(timer)
            video.pause()
        } else {
            play()
        }
    })
    observer.observe(video)
}

export {
    autoPlay
}