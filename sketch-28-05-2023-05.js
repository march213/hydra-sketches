
// before that also need to run hydra-osc to talk with supercollider on the same port

await loadScript("https://cdn.jsdelivr.net/gh/ojack/hydra-osc/lib/osc.min.js");
_osc = new OSC()
_osc.open()
_osc.on("*", (m) => { console.log(m.address, m.args)})

hue = 0
// "/a" =  a channel from supercollider
_osc.on("/a", (m) => {
	hue = m.args[0]
})

shape(4)
  .modulateScale(src(o0), () => hue * 0.5, 1)
  .add(gradient(() => hue))
  .out();

