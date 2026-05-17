const ctx = document.getElementById('trendChart');

new Chart(ctx, {
  type: 'line',

  data: {
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],

    datasets: [{
      data: [62, 64, 61, 65, 66, 68, 67],

      borderColor: '#94a3b8',

      borderWidth: 3,

      tension: 0.4,

      fill: false,

      pointBackgroundColor: '#2563eb',

      pointBorderColor: '#ffffff',

      pointBorderWidth: 3,

      pointRadius: 5,

      pointHoverRadius: 6
    }]
  },

  options: {

    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false
      }
    },

    scales: {

      x: {

        grid: {
          display: false
        },

        ticks: {
          color: '#64748b',
          font: {
            size: 12
          }
        }

      },

      y: {

        display: false,

        grid: {
          display: false
        }

      }

    }

  }

});
