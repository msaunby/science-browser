fs = require('fs');

dem = JSON.parse(fs.readFileSync('dem.json','utf8'));

scale = 10;
i = 0;
out = {};
out.x = dem.x / scale;
out.y = dem.y / scale;
out.data=[];

for(y = 0; y < dem.y/scale; y++){
    for(x = 0; x < dem.x/scale; x++){
	idx = (y * scale)*dem.x + (x * scale);
	out.data[i] = dem.data[idx];
	i++;
    }
}
console.log("dem=" + JSON.stringify(out));
