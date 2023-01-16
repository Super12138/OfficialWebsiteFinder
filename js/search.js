var input = document.getElementById("input");
var table = document.getElementById("table");
var timer;

input.addEventListener("input", function () {
    clearTimeout(timer); // 清除计时器
    timer = setTimeout(function () {
        var text = input.value;
        var reg = new RegExp(text, "i");
        var found = false;
        for (var i = 1, row; row = table.rows[i]; i++) {
            for (var j = 0, col; col = row.cells[j]; j++) {
                if (reg.test(col.textContent)) {
                    found = true;
                    row.style.display = "";
                    console.log('找到')
                    break;
                } else {
                    row.style.display = "none";
                }
            }
        }
        if (!found) {
            //var row = table.insertRow(-1);
            //var cell = row.insertCell(0);
            //cell.colSpan = table.rows[0].cells.length;
            //cell.innerHTML = "无数据";
            console.log('未找到')
            mdui.snackbar({
                message: '无数据',
                position: 'bottom',
                timeout: '1000'
            });
            //alert('无数据')
        }
    }, 600); // 设置计时器为500毫秒
});