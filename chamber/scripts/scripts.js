
function displayFooterInfo() {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = document.lastModified;
}




async function loadMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error('Error to load members:', error);
  }
}


function displayMembers(members) {
  const membersContainer = document.getElementById('members');
  membersContainer.innerHTML = ''; 

  members.forEach((member) => {
    const card = document.createElement('div');
    card.classList.add('member-card');
    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}" />
      <div class="member-info">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank" rel="noopener noreferrer">Website</a></p>
       
      </div>
    `;
    membersContainer.appendChild(card);
  });
}


function setupToggle() {
  const toggleBtn = document.getElementById('toggleViewBtn');
  const membersContainer = document.getElementById('members');

  

  toggleBtn.addEventListener('click', () => {
    if (membersContainer.classList.contains('grid-view')) {
      membersContainer.classList.remove('grid-view');
      membersContainer.classList.add('list-view');
      toggleBtn.textContent = 'Grid';
    } else {
      membersContainer.classList.remove('list-view');
      membersContainer.classList.add('grid-view');
      toggleBtn.textContent = 'List';
    }
  });
}


document.addEventListener('DOMContentLoaded', () => {
  loadMembers();
  displayFooterInfo();
  setupToggle();
});
