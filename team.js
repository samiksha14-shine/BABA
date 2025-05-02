const players = [
    "Snehal Shinde", "Samiksha Shinde", "Tanishq Shinde", "Shamala Shinde",
    "Appa Shinde", "Chetana Padhye", "Bhai Shinde", "Smita Shinde",
    "Ankit Shinde", "Trupti Dhotre", "Prashant Dhotre", "Neeraj Dhotre",
    "Rahul Padhye", "Renuka Padhye", "Sharvin Padhye"
  ];
  
  const teamSelection = document.getElementById("teamSelection");
  const selectedTeamList = document.getElementById("selectedTeam");
  const teamCount = document.getElementById("teamCount");
  const submitBtn = document.getElementById("submitBtn");
  const resetBtn = document.getElementById("resetBtn");
  
  let selectedTeam = [];
  
  players.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-card");
    
    const name = document.createElement("p");
    name.textContent = player;
    card.appendChild(name);
  
    card.addEventListener("click", () => {
      const index = selectedTeam.indexOf(player);
      if (index === -1) {
        if (selectedTeam.length >= 11) {
          alert("You can select only 11 players!");
          return;
        }
        selectedTeam.push(player);
        card.classList.add("selected");
      } else {
        selectedTeam.splice(index, 1);
        card.classList.remove("selected");
      }
  
      updateTeamPreview();
    });
  
    teamSelection.appendChild(card);
  });
  
  function updateTeamPreview() {
    selectedTeamList.innerHTML = "";
    selectedTeam.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p;
      selectedTeamList.appendChild(li);
    });
  
    teamCount.textContent = `Players Selected: ${selectedTeam.length}`;
    submitBtn.disabled = selectedTeam.length !== 11;
  }
  
  submitBtn.addEventListener("click", () => {
    localStorage.setItem("dreamTeam", JSON.stringify(selectedTeam));
    window.location.href = "scorecard.html";
  });
  
  resetBtn.addEventListener("click", () => {
    selectedTeam = [];
    document.querySelectorAll(".player-card").forEach(card => card.classList.remove("selected"));
    updateTeamPreview();
  });
  