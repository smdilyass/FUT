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

    })
    .catch(error => console.error("Error fetching the data:", error));


const addbutton = document.getElementById("ajoute-button")
addbutton.addEventListener("click", function () {
    const blockform = document.getElementById("ajoute-player");
    blockform.style = "display:block;"
});

