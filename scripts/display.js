function displayPetNames(){
    getE('pets').innerHTML="";
    for(let i=0;i<salon.pets.length;i++){
        getE('pets').innerHTML+=`<p>${salon.pets[i].name}</p>`;
    }
    getE('totalPets').innerHTML=`Total=${salon.pets.length}`;
}
 // display cards of pets items list
    function displayPetCards(){
        getE('pets').innerHTML="";
        let card="";
        for(let i=0;i<salon.pets.length;i++){
            let pet = salon.pets[i];
            card+=`
            <div id="${pet.id}" class="petCard">
                <h3>${pet.name}</h3>
                <p>Age:  ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Service: ${pet.service}</p>
                <p>Type: ${pet.type}</p>
                <p>Owner: ${pet.owner}</p>
                <button onclick="deletePet(${pet.id})">Delete</button>
            </div>
            `;
    }
    getE('pets').innerHTML=card;

}
function displayPetTable() {
    getE('tableBody').innerHTML = "";
    let tableBody = document.createElement('tbody');
    
    salon.pets.forEach(pet => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.type}</td>
            <td>${pet.owner}</td>
        `;
        tableBody.appendChild(row);
    });
    
    getE('tableBody').appendChild(tableBody);
}