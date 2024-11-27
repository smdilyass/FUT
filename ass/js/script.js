
fetch("ass/json/data.json").then(Response => Response.json()).then(obj => {
    console.log(obj.players);
    const namee = document.createElement("object");
    const flag = document.createElement("img");
    nqmee.innerHTML = obj.players[0].flag;
    const player = document.getElementById("player10");

    player.addEventListener("click", ()=>{
        // console.log(nqmee);
        player.appendChild(flag);
    });
});
