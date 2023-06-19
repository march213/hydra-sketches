speed = 1;

osc(10, 0.1, 10).mask(shape(10, 0.001, 1))
    .brightness([-0.5, 0.2, 0.1, -0.5].smooth())
    .modulateRotate(gradient(2), () => time % 360 * 2)
  	.modulateScrollX(o0)
    .modulateScrollY(osc(10), 1, 0.5)
    .rotate(() => time % 360)
 	.scale([0.5, 1, 0.5, 1].smooth())
	.modulateScale(noise(8))
  .out(o0);

