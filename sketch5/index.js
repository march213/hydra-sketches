a.show();

noise(6)
  .blend(
  	noise(120)
  	.modulateScrollX(osc(3), 0.8)
  )
  .color(1, 0.2, 0.5, 1)
  .colorama(0.323)
  .modulateScrollY(o0, 0.1, 0.3)
  .modulateScale(
  	shape([3, 5, 7, 11].ease('easeInOutCubic'), 0.4)
  		.scale(1.4)
  		.rotate(() => time % 360)
  )
  .mask(shape(2, 0.6, 0.3))
  .out(o0);
