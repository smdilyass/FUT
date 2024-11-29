const btnCloseModal = document.getElementById('buttonClose');

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

function addPlayer() {
    // const closMod = document.getElementById('exampleModal');
    // closMod.classList.remove('modal fade show');
    // closMod.classList.add('modal fade');

    const name = document.getElementById('Name').value;
    const position = document.getElementById('position').value;
    const photo = document.getElementById('photo').files[0]
        ? URL.createObjectURL(document.getElementById('photo').files[0])
        : './ass/img/placeholder-card-normal.webp';
    const club = document.getElementById('club').value;
    const logo = document.getElementById('logo').value;
    const rating = document.getElementById('rating').value;

    const playerDiv = document.createElement('div');
    playerDiv.className = 'player-card';
    playerDiv.innerHTML = `
        <div class="player-photo">
            <img src="${photo}" alt="${name}" style="width: 100%; height: auto;">
        </div>
        <p>${name}</p>
        <p>Position: ${position}</p>
        <p>Rating: ${rating}</p>
        <div class="club-logo">
            <img src="${logo}" alt="${club}" style="width: 10px; height: auto;"> ${club}
        </div>
    `;


    const playerContainer = document.getElementById('players');
    playerContainer.appendChild(playerDiv);
    document.getElementById('playerForm').reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
    btnCloseModal.click();

}
document.querySelector('button[data-bs-toggle="modal"]').addEventListener('click', () => {
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
});


document.addEventListener('DOMContentLoaded', () => {
    const players = document.querySelectorAll('.player-card');
    const positions = document.querySelectorAll('#players > div');

    players.forEach(player => {
        player.setAttribute('draggable', 'true');
        player.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', player.outerHTML);
            e.dataTransfer.setData('position', player.querySelector('p:nth-child(2)').textContent.split(': ')[1]); // Extract position
        });
    });

    positions.forEach(position => {
        position.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        position.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedHTML = e.dataTransfer.getData('text/plain');
            const draggedPosition = e.dataTransfer.getData('position');
            const positionId = position.id.replace('player', '').toUpperCase();
            if (draggedPosition === positionId) {
                position.innerHTML = draggedHTML;
                position.querySelector('.player-card').setAttribute('draggable', 'false'); // Disable further dragging
            } else {
                alert(`This position is reserved for a ${positionId} player.`);
            }
        });
    });
});


