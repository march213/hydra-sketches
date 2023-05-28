const aThing = () => {
  return osc(3, 0.8, 0.05)
    .kaleid([3,10].fast(0.0001))
    .color(0.55, 0.52)
    .colorama([0.1,0.3,0.7].fast(0.5))
    .rotate(0.001,() => Math.sin(time)* -0.001 )
    .modulateRotate(o0,()=>Math.sin(time) * 0.001)
    .modulate(o0, 1.7)
    .scale(0.1)
}


aThing().rotate(() => Math.PI * 2 * time * 0.05).scale(4).out(o0);

