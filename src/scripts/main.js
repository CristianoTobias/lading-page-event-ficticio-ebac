AOS.init();

const dataDoEvento = new Date("dec 23, 2023 23:30:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(function(){
const agora = new Date()

const diasEmMs = 1000 * 60 * 60 * 24
const horasEmMs = 1000 * 60 * 60
const minutosEmMs = 1000 * 60
const segundosEmMs = 1000

const timeStampAtual = agora.getTime()
const distanciaAteEvento = timeStampDoEvento - timeStampAtual
const diasAteEvento = Math.floor(distanciaAteEvento / (diasEmMs))
const horasAteEvento = Math.floor((distanciaAteEvento % (diasEmMs)) / (horasEmMs))
const minutosAteEvento = Math.floor((distanciaAteEvento % (horasEmMs)) / (minutosEmMs))
const segundosAteEvento = Math.floor((distanciaAteEvento % (minutosEmMs)) / (segundosEmMs))

document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`
if(diasAteEvento < 0){
    clearInterval(contaAsHoras)
    document.getElementById('contador').innerHTML = "Evento já começou"
}
}, 1000)