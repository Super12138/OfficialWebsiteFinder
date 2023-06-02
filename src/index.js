var input = document.getElementById("input");
var table = document.getElementById("table");
var timer;

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const sites = JSON.parse(xhr.responseText);
        const tbody = document.querySelector('tbody');
        sites.forEach(site => {
            const tr = document.createElement('tr');
            // const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const a = document.createElement('a');
            
            /*
            const img = document.createElement('img');

            td1.appendChild(img);
            */

            td2.innerText = site.name;
            a.href = site.url;
            a.target = '_blank';
            a.innerText = site.url;
            td3.appendChild(a);

            /*
            let iconurl = '';
            if (site.icon === "") {
                iconurl = 'https://cdn.jsdelivr.net/gh/Super12138/OfficialWebsiteFinder-icons/icons/noicon.svg';
            } else {
                iconurl = 'https://cdn.jsdelivr.net/gh/Super12138/OfficialWebsiteFinder-icons/icons/' + site.icon;
            }
            img.src = iconurl;
            img.alt = site.name;
            img.className = 'mdui-img-fluid'
            
            tr.appendChild(td1);
            */

            tr.appendChild(td2);
            tr.appendChild(td3);

            tbody.appendChild(tr);
        });
    }
};
xhr.open("GET", "./site.json", true);
xhr.send();

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
        }
    }, 600); // 设置计时器为500毫秒
});