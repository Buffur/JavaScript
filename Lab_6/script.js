let array = [
    ["Test", "Test", "Test"],
    ["Test", 5, "Test"],
    ["Test", 5, "Test"],
    ["Test", 5, "Test"]
];

function CTable(arr) {
    let table = document.getElementById("arrayTable");
    arr.forEach(row => {
        let tr = document.createElement("tr");
        row.forEach(cell => {
            let td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}

CTable(array);