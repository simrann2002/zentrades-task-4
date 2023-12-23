document.addEventListener('DOMContentLoaded', function() {
    var ctxLocation = document.getElementById('jobLocationChart').getContext('2d');
    var revenueByJobLocationChart = new Chart(ctxLocation, {
        type: 'bar', 
        data: {
            labels: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'], 
            datasets: [{
                label: 'Revenue for November 2019',
                data: [12000, 19000, 3000, 5000, 2000, 3000], 
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Initialize the Revenue By Job Type Chart
    var ctxType = document.getElementById('jobTypeChart').getContext('2d');
    var revenueByJobTypeChart = new Chart(ctxType, {
        type: 'bar', 
        data: {
            labels: ['Service Plumbing', 'Bid Work HVAC', 'Service HVAC', 'Bid Work Plumbing', 'HWT Replacement', 'Maintenance', 'Material Sale'], // Replace with actual labels
            datasets: [{
                label: 'Revenue for November 2019',
                data: [15000, 12000, 8000, 16000, 4000, 7000, 3000], 
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});
