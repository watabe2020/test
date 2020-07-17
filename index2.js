const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

button.addEventListener("click",async function(){

//    const res = await fetch("https://jsonplaceholder.typicode.com/users");
//    const res = await fetch("https://tetsudo.rti-giken.jp/free/delay.json");
    const res = await fetch("https://api.gnavi.co.jp/RestSearchAPI/20150630/?keyid=4e9b6f5c84abbf88601be041f1dacfcc&latitude=34.702492&longitude=135.495965&range=3");

    const users = await res.json();
    console.log(users);


    for ( let i in users.rest ){
        //    users.forEach( function(user){
            const list = document.createElement("li");
            list.innerText= users.rest[i].name + ' URL: '+users.rest[i].url;
           // list.innerText= user.company;
            lists.appendChild(list);
    };

});