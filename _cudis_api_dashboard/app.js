// Example data
const weeklyHeartbeatData = [
  { date: '2024-10-01', max: 80, min: 60 },
  { date: '2024-10-02', max: 82, min: 62 },
  { date: '2024-10-03', max: 79, min: 61 },
  { date: '2024-10-04', max: 85, min: 65 },
];

const monthlyHeartbeatData = [
  { date: '2024-09', max: 84, min: 61 },
  { date: '2024-08', max: 86, min: 62 },
  { date: '2024-07', max: 82, min: 60 },
  { date: '2024-06', max: 89, min: 63 },
];

// Function to populate table data
function populateTable(data, tableId) {
  const tableBody = document.getElementById(tableId);
  tableBody.innerHTML = '';

  data.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${row.date}</td><td>${row.max}</td><td>${row.min}</td>`;
    tableBody.appendChild(tr);
  });
}

// Function to create line chart
function createLineChart(ctx, labels, maxData, minData) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Max Heart Rate',
          data: maxData,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
        },
        {
          label: 'Min Heart Rate',
          data: minData,
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Populate charts and tables on window load
window.onload = function () {
  // Weekly Heartbeat Data
  populateTable(weeklyHeartbeatData, 'weeklyData');
  createLineChart(
    document.getElementById('weeklyHeartbeatChart').getContext('2d'),
    weeklyHeartbeatData.map((d) => d.date),
    weeklyHeartbeatData.map((d) => d.max),
    weeklyHeartbeatData.map((d) => d.min)
  );

  // Monthly Heartbeat Data
  populateTable(monthlyHeartbeatData, 'monthlyData');
  createLineChart(
    document.getElementById('monthlyHeartbeatChart').getContext('2d'),
    monthlyHeartbeatData.map((d) => d.date),
    monthlyHeartbeatData.map((d) => d.max),
    monthlyHeartbeatData.map((d) => d.min)
  );
};
