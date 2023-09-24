var rttInfo = navigator.connection.rtt;
var connectionEffectiveType = navigator.connection.effectiveType;
var info = document.getElementById('info')

var online =  document.getElementById('online')
var ua =  document.getElementById('ua')
var cet =  document.getElementById('cet')
var ce =  document.getElementById('ce')
var rtt =  document.getElementById('rtt')
var bw =  document.getElementById('bw')
var memo =  document.getElementById('memo')
var gpuInfo =  document.getElementById('gpu')
var adp = document.getElementById('adp')

online.innerHTML = (`${navigator.onLine}<br/>`)
console.log(`Online: ${navigator.onLine}`)

ua.innerHTML += (`${navigator.userAgent}<br/>`)
console.log(`User agent: ${navigator.userAgent}`)

cet.innerHTML += (`${connectionEffectiveType}<br/>`)
console.log(`Connection effective type: ${connectionEffectiveType}`)

ce.innerHTML += (`${navigator.cookieEnabled}<br/>`)
console.log(`Cookies enabled: ${navigator.cookieEnabled}`)

rtt.innerHTML += (`${rttInfo}<br/>`)
console.log(`Round trip time: ${rtt}`)

bw.innerHTML += (`${navigator.connection.downlink} kb<br/>`)

memo.innerHTML += (`${navigator.deviceMemory} GiB<br/>`)


if(!navigator.gpu){
    throw Error(gpuInfo.innerText += "WebGPU not supported<br/>")
}else{
    gpuInfo.innerHTML += "WebGPU supported<br/>"
}
    

if(!navigator.gpu.requestAdapter){
   adp.innerText += "Could not request GPU adapter"
}else{
    adp.innerText += "Request of GPU adapter complete"
}
