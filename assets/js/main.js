// Write your javascript code here

import team from "../../data/team";
console.log(team);

const teamListEl = document.getElementById("teamList");
console.log(teamListEl);

// for (const players of team) {
//   teamListEl.innerHTML += `<li class="player-style">#${players.id}<br>
//    Name - ${players.name}
//    <br> Clubs - (${players.clubs})
//    <br> Total Goals - ${players.goals}
//    <br>Country - ${players.family.country}
//    <br>Married - ${players.married}
//    <br>DOD - ${players.dod}
//    <br>Age - ${players.family.age}

//   </li>`;

//   teamListEl.innerHTML += `<img src = "https://www.footballbenchmark.com/documents/images/top10(1).png" class="player-img"/ >`;
// }

teamListEl.classList.add("grid", "grid-cols-12");

for (const player of team) {
  const listItem = document.createElement("li");
  // listItem.classList.add("flex");

  listItem.innerHTML = `
  <div class ="player-style flex">
  <div class ="col-start-6 "> 
  #${player.id} 
  <br> Name - ${player.name} 
  <br> Club - (${player.clubs}) 
  <br> Goals - ${player.goals}
  <br> Country - ${player.family.country}
  <br> Age - ${player.family.age}
  <br> Martial Status - ${player.married}
  <br> Date Of Dead - ${player.dod}
  </div>

  <div class = "col-end-6 " > <img src= ${player.img} class ="player-img">
  </div>
  
  
  </div>

  
  
 `;

  teamListEl.appendChild(listItem);
}
