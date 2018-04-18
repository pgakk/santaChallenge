const fs = require('fs');
let floor = 0;

fs.readFile('./input.txt', (err, data) => {
	console.time('part1');
	if(err)
		console.log(err);
	const floorNum = data.reduce((floor, htmlCode, i) => {
		switch(htmlCode){
			case 40: floor++; break;
			case 41: floor--; break;
			default: break;
		}
		return floor;
	}, 0);
	console.log(`Santa's floor no.: ${floorNum}`);
	console.timeEnd('part1');
})

fs.readFile('./input.txt', (err, data) => {
	console.time('part2');
	if(err)
		console.log(err);
	const position = data.reduce((floor, htmlCode, i) => {
		switch(htmlCode){
			case 40: floor++; break;
			case 41: floor--; break;
			default: break;
		}
		if(floor === -1) {
			let position = i+1;
			console.log(`Char positioned at ${position} makes Santa to first enter the basement.`);
			return position;
		}
		return floor;
	}, 0);
	console.timeEnd('part2');
})