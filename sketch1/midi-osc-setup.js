await loadScript("https://cdn.jsdelivr.net/gh/ojack/hydra-osc/lib/osc.min.js");

_osc = new OSC()
_osc.open()

amp = 0.2;
freq = 440;

_osc.on("/amp", (m) => {
	amp = m.args[0];
  	console.log(amp)
})

_osc.on("/freq", (m) => {
	freq = m.args[0];
  	console.log(freq)
})

shape(30, 0.5, () => amp)
  .color(0.1, 0.4, 0)
  .out(o0);
