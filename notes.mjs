$$$$$$$$$$  COMMANDS TO CREATE    $$$$$$$$$$$$$$$
// fluter is none scence thing jo hui hy 5 saalo ma


$$$$$$$$$$$$$$$$$$$$$$$
console.log(process.platform)
console.log(process.env.USER)

	TOP LEVEL AWAIT ? 
// const {readFile} = require('fs').promises;
// const file = await =()=>{
// 	console.log('shehzad');
// }


//.get is not to modify data reather just to get data
// .gets 1st argument is the path user will navigate to
app.get('/', async (request, response) => {

	// if(err) response.status(500).send("sorry, out of Order!");

	response.send(await console.log(`Shehzad`))
	// console.log(`Shehzad`)

})




app.listen(process.env.PORT || 3000, () => console.log(`Shehzad app is avaliable on local host 3000`))


// ? process.env.NODE_ENV

$$$$$$$$$$$$$$$$$  NOTES  $$$$$$$$$$$$$$$$$$$$$$$$$
// use promises instead of callbacks to avoid callbacks hell
// old way of importing const express = require('express')
// code from Express Website  https://expressjs.com/en/starter/hello-world.html

// server Hosters
// google cloud
// hareko
// cyclic

//21-Sep-2022
// server is a software mosly referd hardware
// server per load zada aayga tw wo crash kare ga agar axha code hoga tw deer se response aay ga aur bura code hoga tw crash kar jae ga
// (what is load balancer)orkestration system=kuberneties
// host=mazban  || server=serve karne wala ||   |||||||
// request bhaja jae ga JSON ma aur server ka response JSON ma hoga = REST API
// client server comminution 
// QraphQL is new and experimantal and REST API
// URL ?? (head=, body)
// Methods = ( get=server ko bhajna, post=secrat data like psw, delete, )
// encrutp (kon karta hy?)
// 
// 23-sep-2022
// port = andar bahar jane ka rasta
// cora npm = ye ye batata hy kon kon mere server ko call kare ka
// 
// 28-sep-2022
// Express ko samjho sahi se
// 
// 30-sep-2022
// nodemon
// server per variable nhi banty ye Rest API ky rules ky khilaf hy
// cors library
// polling is also not recommended
// ak variable agar 1 bit le raha hy tw agar 1 lac user hyn tw...
// REST API principles
//    1 . Uniform interface
//    2 . Clint-Server (these 2 should be different)
//    3 . Stateless  
//    4 . Cacheable (ak photo 2 bar na aay ya jae)
//    5 . Layered System
//    6 . Code on demand
// server band kyu hoty hyn                      ?
// 512MB ram hoti hy server ma so use responsively
// orkistration system   (kubernaties is most popular Oski...)
// nodemon (isko install karna hota hy npm se)(cloud ma ye allow nhi)
// start ky illawa sab kam npm run se hoga
// npm run dev ("dev" : "nodemon filename.js"  <= put this in package.json in scritps)
// npm packages cache ma hoty hyn             ?
// server per kuxh nhi chorna Post se aaya data Get se gya data khatam
// 
// 
$$$$$$$$$$   MONGO DB  $$$$$$$$$$$
// 10 Years hogye hyn its muture and completed its tenoure
// scehmaless hy ye but ap scehma use bhi kar sagty ho
// 
// Big Data
//    volume (atleast 1TB)
//    frequence (AI)
//    scehmaless (kuxh pata nhi data ma kya aajaye)
//     ()
// social media are war machine
// puri dunya ma har koi call record karti hyn
// 

3-Oct-2022
// cors
// 
// mongooes library is good for web not for big data
// mongooes provide schema and validation
// 
// firebase shuru ma bhOt aasan hy but advance wala mongoDB se zada mushkil hy
// firebase is a total failer (sir inzamam)
// server user se qareeb hona chiye (developer se qareeb nhi hona chiye) aur DB server se qareeb hona chiye
// Database Adminstration
// SQL dosen't update fast but it update at same time(bank need SQL nhi tw 2 bar cash withdraw ho jae)(query is also slow)
// Social media need NoSQL 
//
// replica dataset (to)
// data wharehouse
// 
// http Status
// 500 (agar server per error ho)
// 404 (page not found)
// 
// 
// 
// 
// poling is not recomended (to call sever every 5s)
// setInterval(refresh(), 5000);
// 
14-oct-2022
// await wala kam try{} catch(err){ cl(err)} ma karty hyn
// 
12-oct-2022
// search dialogflow on yt 
// make google dialogflow community
// attend confrence
// async use karo tw call back nhi lagana
// 
//
//

21-Nov-2022
// starting NODE Server with expressJS in Web 8 class 
// browser ma chalne wali amd 
// comman purani aur module nayi server per chalne wali
// server is a software that can run on cloud 
// cloud per kuxh nhi hota sabkuxh zameen per hota hy
// package.lock.json lock se files ky version lock ho jaty hyn
// speed || space
// time is important then space
// JWT auth and other for social login 
// 
// 
// 
23-Nov-2022
// npm i --save-dev @types/express
// server with mjs with node --watch
// CYCLIC ma enviormint variable save karky code ma process.env.variable_ka_nam
// 
// 
// 
// 
// 
// 
// 
25-Nov-2022
// DevOps
// express app ko host karne ko google app engine 
// docker = kubernaites
// app.get jab req aay gyi tw chale ga 
// but app.use har waqt chale ga
// __dirname = folder name
// path node ki default library
// express per aani wali req pipeline machmanezim se guzarti hy 
// brower router is better then hash router 
// hash router is not good for SEO
// 
// 
19-Jan-2022
// (Sir Inzamam)
//  WebRTC protocol for call (on-top TPC)
// Ye server aur client dono per chalana hota hy
// Full text search 🔍
// Data structure wo tareeka hy data sajane ka jis se us data per query aur CURD perform karna aasan ho RAM ma ya Rom ma ya db ma

// Binary search
// Agar data sorted nhi hy tw uspe binary search nhi chale ga

// Liener search nhi karni hoti
//  Mongo ki id sorted hoti hy aur phale wale se bari hoti hy

1-Mar-2023
/*
28-feb-2023
folder structure
- The util. js file contains a set of JavaScript utility functions that are used across multiple components.
- Utils folder consists of some repeatedly used functions that are commonly used in the project. It should contain only common js functions & objects like dropdown options, regex condition, data formatting, etc.
- /utils is a place where you can place small snippets you can use throughout the application.
-
- for storing all utility functions such as formatters.
- 
- 
- https://github.com/stars/shehza-d/lists/back-end
- https://github.com/practicajs/practica
- https://practica.dev/

14-jul-2023
Type of hosting
- nano (lambda)
- micro service arciture (cyclic,vercel)(backgroud kubernaties)
- linux machine

what is stateless for laymen?

kya express ma cache ho jata hy?

api case??

*/