const statsDiv=document.getElementById("stats-container");
// const progressContainer = document.getElementById("project-progress-container");


const statsData = [
  {
    title: "Open Tasks",
    value: 24,
    icon: "fa-solid fa-list-check",
    color: "success"
  },
  {
    title: "Active Projects",
    value: 12,
    icon: "fa-solid fa-rocket",
    color: "success"
  },
  {
    title: "Pending Reviews",
    value: 8,
    icon: "fa-solid fa-pen",
    color: "success"
  },
  {
    title: "New Messages",
    value: 15,
    icon: "fa-solid fa-envelope",
    color: "success"
  }
];

statsData.forEach(stat => {
    const col=document.createElement("div");
    col.className = "col-12 col-sm-6 col-lg-3 mb-2";

    col.innerHTML = `
    <div class="stat-card p-4 bg-white">
        <div class="d-flex align-items-center gap-3">
            <div class="stat-icon bg-success">
                <i class="${stat.icon}"></i>
            </div>
            <h6 class="mb-0 fw-semibold text-muted">${stat.title}</h6>
        </div>

        <hr class="my-3">

        <h2 class="fw-bold mb-0">${stat.value}</h2>
    </div>
  `;

    statsDiv.appendChild(col);
});

// ----------projects progress section----------
// const projectProgressData = [
//   { name: "Project Alpha", progress: 65 },
//   { name: "Beta Launch", progress: 40 }
// ];
document.addEventListener("DOMContentLoaded", function () {

  const projectData = [
      { name: "Project Alpha", progress: 65 },
      { name: "Beta Launch", progress: 40 },
      { name: "API Integration", progress: 85 },
      { name: "UI Redesign", progress: 55 }
  ];

  const ctx = document.getElementById("projectChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: projectData.map(p => p.name),
      datasets: [{
        label: "Completion %",
        data: projectData.map(p => p.progress),
        borderColor: "#28a745",
        backgroundColor: "rgba(40, 167, 69, 0.15)",
        tension: 0.4,          // smooth curve
        fill: true,            // area under line
        pointBackgroundColor: "#28a745",
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: "#e9ecef"
          }
        },
         x: {
          grid: {
            display: false
          }
        }
      }
    }
  });

});

// projectProgressData.forEach(project => {
//   const row = document.createElement("div");
//   row.className = "mb-4";

//   row.innerHTML = `
//     <div class="fw-semibold mb-2">${project.name}</div>

//     <div class="d-flex align-items-center gap-3">
//       <div class="progress flex-grow-1" style="height: 25px; border-radius: 5px;">
//         <div 
//           class="progress-bar bg-success" 
//           role="progressbar" 
//           style="width: ${project.progress}%; border-radius: 5px;">
//         </div>
//       </div>

//       <div class="small">
//         <span class="fw-bold text-success">${project.progress}%</span>
//         <span class="text-muted">Complete</span>
//       </div>
//     </div>

//     <hr class="mt-4">
//   `;

//   progressContainer.appendChild(row);
// });