function SilentAudio (ctx) {
    var self = this
    if (!(self instanceof SilentAudio)) return new SilentAudio(ctx)

    ctx = ctx || new AudioContext()

    var source = ctx.createConstantSource()
    var gainNode = ctx.createGain()
    gainNode.gain.value = 0.001 // required to prevent popping on start
    source.connect(gainNode)
    gainNode.connect(ctx.destination)
    source.start()
}