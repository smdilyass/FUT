const btnCloseModal = document.getElementById('buttonClose');
let sideBare = document.getElementById("aside")
let tiran = document.querySelector("#main")
fetch("ass/json/data.json")
    .then(response => response.json())
    .then(obj => {
        const players = obj.players;
        const playerContainer = document.getElementById('aside');
        players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.setAttribute("draggable", "true")
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

fetch("ass/json/data.json")
    .then(response => response.json())
    .then(obj => {
        const players = obj.players;
        const playerContainer = document.getElementById('here');
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


const addbutton = document.getElementById("ajoute-button")
addbutton.addEventListener("click", function () {
    const blockform = document.getElementById("ajoute-player");
    blockform.style = "display:block;"
});

function addPlayer() {
    const name = document.getElementById('Name').value;
    const position = document.getElementById('position').value;
    const photo = document.getElementById('photo').value;

    const club = document.getElementById('club').value;
    const logo = document.getElementById('logo').value;
    const rating = document.getElementById('rating').value;
    const playerDiv = document.getElementById('aside');

    console.log(validateForm());

    if (validateForm() === true) {
        playerDiv.innerHTML += `
        <div class="player-card">
        <div class="player-photo">
            <img src="${photo}" alt="${name}" style="width: 100%; height: auto; ">
        </div>
        <p>${name}</p>
        <p>Position: ${position}</p>
        <p>Rating: ${rating}</p>
        <div class="club-logo">
            <img src="${logo}" alt="${club}" style="width: 10px; height: auto;"> ${club}
        </div>
        </div>
    `;

    
    document.getElementById('playerForm').reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
    btnCloseModal.click();
    document.getElementById('message').innerHTML = "";
    }
    else {
        console.log("none");

    }


}
document.querySelector('button[data-bs-toggle="modal"]').addEventListener('click', () => {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
});





function validateForm() {
    let isValid = true;
    const namePlayer = document.getElementById('Name').value.trim();
    const photoPlayer = document.getElementById('photo').value.trim();
    const positionPlayer = document.getElementById('position').value.trim();
    const clubPlayer = document.getElementById('club').value.trim();
    const logoPlayer = document.getElementById('logo').value.trim();
    const ratingPlayer = document.getElementById('rating').value.trim();


    const nameRegex = /^[a-zA-ZÀ-ÿ\s-]{2,30}$/;
    const urlRegex = /^https?:\/\/.+\.(jpg|png|gif)$/;
    const positionRegex = /^[A-Z]{2,3}$/;
    const numberRegex = /^[0-9]{1,2}$/;
    

    if (!namePlayer.match(nameRegex)) {
        document.getElementById('message').innerHTML = "Name invalide.";        
        isValid = false;
    }
    if (!photoPlayer.match(urlRegex)) {
        document.getElementById('message').innerHTML = "L'URL de la photo est invalide.";
        isValid = false;
    }
    if (!positionPlayer.match(positionRegex)) {
        document.getElementById('message').textContent = "Position  invalide.";
        isValid = false;
    }
    if (!clubPlayer.match(nameRegex)) {
        document.getElementById('message').textContent = "Le club est invalide.";
        isValid = false;
    }
    if (!logoPlayer.match(urlRegex)) {
        document.getElementById('message').textContent = "L'URL du logo est invalide.";
        isValid = false;
    }
    if (!ratingPlayer.match(numberRegex)) {
        document.getElementById('message').textContent = "Rating invalide.";
        isValid = false;
    }
    
    return isValid;
}