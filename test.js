var input = document.getElementById("input");
var button = document.getElementById("find");
var table = document.getElementById("table");

button.addEventListener("click", function () {
    var text = input.value;
    var reg = new RegExp(text, "i");

    for (var i = 1, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if (reg.test(col.textContent)) {
                row.style.display = "";
                break;
            } else {
                row.style.display = "none";
            }
        }
    }
});