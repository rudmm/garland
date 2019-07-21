let quantity = 0;
let content = $('.content');
let button = $('.btn');
let interval;
let circles;
quantity = rndMinMax(0,100);
function rndMinMax(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}
(function createCircle(n){
for(let i=0;i<n;i++){
	content.append('<div class="circle"></div>');
}
circles = $('.circle');
})(quantity);
function setColor(circles){
	for(let i = 0;i<circles.length;i++){
		let bg = 'rgb('+rndMinMax(0,255)+','+rndMinMax(0,255)+','+rndMinMax(0,255)+')';
		if(bg===circles.eq(i-1).css('background-color')){
			--i;
		}
		circles.eq(i).css('background-color',bg);
	}
}
setColor(circles);
button.click(function(){
	if(!interval){
interval = setInterval(setColor, 500, circles);
}else{
	clearInterval(interval);
	interval = undefined;
}
	
});
