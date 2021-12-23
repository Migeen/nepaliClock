let ti;
let t;
let d;
function timeis() {
    ti = new Date();
    d = ti.toLocaleDateString();
    let am;
    // let pm;
    let h = ti.getHours();
    if (h > 12) {
        h = (h-12);
        am = "PM";
    } else {
        am = "AM";
        return h;
    }


    t = h + " : " + ti.getMinutes() + " : " + ti.getSeconds();
    let b = document.getElementById("time");

    b.innerHTML = t + " " + am + ' on ' + d;
}

console.log(d);
setInterval(timeis, 1000);