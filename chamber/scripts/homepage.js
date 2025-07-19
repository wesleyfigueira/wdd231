document.getElementById("last-modified").textContent = document.lastModified;


const town = document.querySelector('#town');
const temperature = document.querySelector('#temperature');


const mykey ="61b350926d24936d9a6ac4c071bf1c6a";
const mylat ="8.0578";
const mylong = "34.8829";

const myURL = `//api.openweathermap.org/data/3.0/onecall?lat=${mylat}&lon=${mylong}&exclude={part}&appid=${mykey}`


async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); 
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
function displayResults(data){
  town.innerHTML = `Cidade: ${data.name}`;
  temperature.innerHTML = `${data.main.temp}&deg;C`;

}
apiFetch();



//----------------------------------------------------------------------------------

async function displayMembers() {
  try {
    const response = await fetch("data/members.json");

    if (!response.ok) {
      throw new Error(`Erro ao carregar os dados: ${response.status}`);
    }

    const data = await response.json();

    const eligible = data.filter(m => m.membership == 1);

    const selected = [];
    while (selected.length < 3 && eligible.length > 0) {
      const idx = Math.floor(Math.random() * eligible.length);
      selected.push(eligible.splice(idx, 1)[0]);
    }

    const container = document.getElementById("member-cards");
    container.innerHTML = "";

    selected.forEach(member => {
      const card = document.createElement("div");
      card.className = "member-card";
      card.innerHTML = `

        <h2>${member.name}</h2>
        <hr>
        <img src="${member.image}" alt="${member.name}" style="width:100%;max-width:300px">
        <p><strong>Endereço:</strong> ${member.address}</p>
        <p><strong>Telefone:</strong> ${member.phone}</p>
        <p><strong>Email:</strong> ${member.email}</p>
        <p><a href="${member.website}" target="_blank">Site</a></p>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.error("Erro ao exibir membros:", error);
  }
}


displayMembers();



