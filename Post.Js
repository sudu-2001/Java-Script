fetch("https://jsonplaceholder.typicode.com/posts",{
	method:"POST",
	header:{"content-type":"application/json"},
	body:JSON.stringify({name:"Sudarshan"})
})
.then(res=>res.json())
.then(data=>console.log(data));
