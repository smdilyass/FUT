// fetch("ass/json/data.json").then(Response => Response.json()).then(obj => {

//     // 
//     let i = -1;

//     do {
//         i++;
//         console.log(obj.players[i])
//     }while(obj.players[i].name !="Gianluigi Donnarumma")

// });


// const playerContainer = document.getElementById('players');

// players.forEach((player, index) => {
//     // Create a div for each player
//     const playerDiv = document.createElement('div');
//     playerDiv.className = 'player-card';
//     playerDiv.innerHTML = `
//         <img src="${player.photo}" alt="${player.name}" class="player-photo">
//         <h3>${player.name}</h3>
//         <p>Position: ${player.position}</p>
//         <p>Rating: ${player.rating}</p>
//         <p>Club: <img src="${player.logo}" alt="${player.club}" class="club-logo"> ${player.club}</p>
//     `;

//     // Append the player card to the container
//     playerContainer.appendChild(playerDiv);
// });

        // Fetch JSON data from the provided file
        fetch("ass/json/data.json")
            .then(response => response.json())
            .then(obj => {
                const players = obj.players; 
                const playerContainer = document.getElementById('aside');

                players.forEach(player => {
                    const playerDiv = document.createElement('div');
                    playerDiv.className = 'player-card';
                    playerDiv.innerHTML = `
                        <img src="${player.photo}" alt="${player.name}" class="player-photo">
                        <p>${player.name}</p>
                        <p>Position: ${player.position}</p>
                        <p>Rating: ${player.rating}</p>
                        <p>Club: <img src="${player.logo}" alt="" class="club-logo"> </p>
                    `;

                    playerContainer.appendChild(playerDiv);
                });

                let i = -1;
                do {
                    i++;
                    console.log(players[i]);
                } while (players[i].name !== "Gianluigi Donnarumma");
            })
            .catch(error => console.error("Error fetching the data:", error));


            const addbutton = document.getElementById("addbutton")
            addbutton.addEventListener("click", function(){
                const blockform = document.getElementById("popup");
                blockform.style = "display:block;"
            });


// const players = [
//     {
//         "name": "Lionel Messi",
//         "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
//         "position": "RW",
//         "nationality": "Argentina",
//         "flag": "https://cdn.sofifa.net/flags/ar.png",
//         "club": "Inter Miami",
//         "logo": "https://cdn.sofifa.net/meta/team/239235/120.png",
//         "rating": 93,
//         "pace": 85,
//         "shooting": 92,
//         "passing": 91,
//         "dribbling": 95,
//         "defending": 35,
//         "physical": 65
//     },
    
// ];

// fetch("ass/json/data.json").then(Response => Response.json()).then(obj => {
//     console.log(obj.players);
//     const nqmee = document.createElement("icon");
//     nqmee.innerHTML = obj.players[0].flag;
//     const player = document.getElementById("player10");

//     player.addEventListener("click", ()=>{
//         // console.log(nqmee);
//         player.appendChild(nqmee);
//     });
// });