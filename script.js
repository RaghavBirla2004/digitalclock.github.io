setInterval(() =>{
    d = new Date()
    htime = new Date().getHours()
    mtime = new Date().getMinutes()
    stime = new Date().getSeconds()
    t1.innerText = htime
    t2.innerText = mtime
    t3.innerText = stime

},1000)