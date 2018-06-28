var x = document.getElementById("bar-chart");
var y = new Chart(x, {
    type: 'bar',
    data: {
        labels: ["Venezuela", "Colombia", "Ecuador", "Perú", "Chile","Argentina","Uruguay","Paraguay"],
        datasets: [{
            label: "Infección Malware",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850","#58C31E","#E38D08","#08CFE3"],
            data: [46.1, 46.7, 45.6, 39.9,37.6,31.2,22.2,42.9]
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Infecciones de Malware en Sudamérica (2016)'
        }
    }
});
