// const container = document.querySelector("#container");

let colorGrad = ["#312E81", "#DC2626", "#F97316", "#1E40AF", "#F43F5E", "#D946EF", "#8B5CF6", "#06B6D4", "#22C55E", "#84CC16", "#F59E0B"]
let ball = document.createElement("div");
let i = 0, a, dy, y, x, dx, friction = 0.9, dfy, dfx, clearCount = 0, interSet, ballId;
/*	increasing dy will increase power to throw vertically
	increasing dx will increase the power to throw horizontally
	increasing friction will decrease gravity at a very high rate
	increasing dfy will increase the gravity or y friction  = 0.002
	increasing dfx will increase bounce friction or x friction = 0.025 */
	
ball.setAttribute("class", "ball");
let createBalls = (e) => {
	y = e.clientY;
	x = e.clientX;
	console.log(-(y - document.body.offsetHeight));
	ball = document.createElement("div");
	ball.setAttribute("id", `ball${i}`);
	ball.setAttribute("class", `ball`);
	ball.style.top = y + "px";
	ball.style.background = colorGrad[Math.floor(Math.random()* 10)];
	ball.style.height = Math.floor(Math.random()* 60 + 10)+'px';
	console.log(ball.style.height);
	ball.style.width = ball.style.height;
	document.body.appendChild(ball);
	ballId = document.querySelector(`#ball${i}`)
	i++;
};



document.addEventListener('click', (e) => {
	createBalls(e);
	a = -(y - document.body.offsetHeight)/15;
	dy = a;
	dx = -(y - document.body.offsetHeight)/12;
	dfx = -(y - document.body.offsetHeight)/8000;
	dfy = -(y - document.body.offsetHeight)/400000;
	let startBall = () => {
		if (ballId.getBoundingClientRect().bottom > (document.body.getBoundingClientRect().top + document.body.offsetHeight )) {
			dy = -a * friction;
		} else {
			dy += 1;
			friction -= dfy;
		}
		if (ballId.getBoundingClientRect().left < document.body.getBoundingClientRect().left) 
			dx = -dx;
		if (ballId.getBoundingClientRect().right > document.body.getBoundingClientRect().right) 
			dx = -dx;
		if(x !== 0){
			if(dx > 0){
				dx -= dfx;
			}
		if(dx < 0) {
			dx += dfx;
		}
		}
		ballId.style.top = (y + dy) + "px"; 
		y += dy
		ballId.style.left = (x - dx) + "px";
		x -= dx
	}
	
	if(clearCount%2 == 0){ 
		interSet = setInterval(startBall,20) 
	}
	else {
		clearInterval(interSet);
		friction = 0.9;
		dy = a;
		if(clearCount%2 == 0) 
			dx = -(y - document.body.offsetHeight)/12;
		else 
		dx = -(y - document.body.offsetHeight)/12;
		dfx = -(y - document.body.offsetHeight)/8000;
		dfy = -(y - document.body.offsetHeight)/400000;
		return interSet = setInterval(startBall,20) 
	}
	clearCount++;
	
});