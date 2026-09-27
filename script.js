// Lista dei canti (puoi aggiungerne quanti ne vuoi qui dentro)
const canti = [
    { titolo: "Alleluia, canta al Signore", categoria: "Ingresso / Alleluia", tonalita: "Re maggiore" },
    { titolo: "Santo, Santo, Santo", categoria: "Santo", tonalita: "Sol maggiore" },
    { titolo: "Signore pietà", categoria: "Atto penitenziale", tonalita: "La minore" },
    { titolo: "Tu scendi dalle stelle", categoria: "Natale", tonalita: "Do maggiore" }
];

function mostraCanti(lista) {
    const tbody = document.getElementById("cantiBody");
    tbody.innerHTML = "";
    
    lista.forEach(canto => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td><strong>${canto.titolo}</strong></td><td>${canto.categoria}</td><td>${canto.tonalita}</td>`;
        tbody.appendChild(tr);
    });
}

function filtraCanti() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const cantiFiltrati = canti.filter(canto => 
        canto.titolo.toLowerCase().includes(query) || 
        canto.categoria.toLowerCase().includes(query)
    );
    mostraCanti(cantiFiltrati);
}

// Mostra tutti i canti all'avvio
window.onload = () => mostraCanti(canti);
