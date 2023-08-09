canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.lineWidth = 1;
ctx.rect(150, 143, width=430, height=200);
ctx.stroke();



ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth= 5;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth= 5;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth= 5;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth= 5;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth= 5;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

console.log("The Olympic Games, which originated in ancient Greece as many as 3,000 years ago, were revived in the late 19th century and have become the world’s preeminent sporting competition. From the 8th century B.C. to the 4th century A.D., the Games were held every four years in Olympia, located in the western Peloponnese peninsula, in honor of the god Zeus. The first modern Olympics took place in 1896 in Athens, and featured 280 participants from 12 nations, competing in 43 events. Since 1994, the Summer and Winter Olympic Games have been held separately and have alternated every two years. The 2022 Winter Olympics will be held from February 4 to February 20, 2022 in Beijing, China and feature figure skating, ice hockey, curling and more."); 