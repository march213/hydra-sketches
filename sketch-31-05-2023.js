await loadScript("https://cdn.jsdelivr.net/gh/ojack/hydra-osc/lib/osc.min.js");

_osc = new OSC()
_osc.open()

mod = 1
col = 0.1
_osc.on("/supercollider", (m) => {
	mod = Math.floor(m.args[0] / 100);
  	col = parseFloat((m.args[0] / 1000).toFixed(2));
})

const aThing = () => {
  return osc(3, 0.8, 0.05)
    .kaleid([3,4,5,7,8,9,10,20].fast(2))
    .color(0.5, 0.42)
    .colorama(() => col)
    .rotate(0.001,() => Math.sin(time)* -0.001 )
    .modulateRotate(o0,()=>Math.sin(time) * 0.001)
    .modulate(o0, () => mod)
    .scale(0.1)
}

aThing().rotate(() => Math.PI * 2 * time * 0.05).scale(4).out(o0);





