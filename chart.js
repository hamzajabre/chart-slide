
Eleve = {
    type: "bar", // Graphique de type bar
    data: {
        labels: ["francais","anglais","math","physique","histoire"], 
        datasets: [{
            label: "Examen blanc", 
            data: [14,18,10,9,5],
            backgroundColor: "blue", 
            borderColor: "blue", 
            },
            {
            label:"session1",
            data: [12,15,13,14,8],
            backgroundColor: "green",
            },
            {
            label:"session2",
            data:[12,12,15,9,16],
            backgroundColor: "grey",
            },
    ]
    },
    }
    context = document.getElementById("myChart")
    let myChart = new Chart(context,Eleve);