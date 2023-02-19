function convert() {
    let srcElm = document.getElementById("textarea");
    let resultElm = document.getElementById("result");

    var str = srcElm.value;
    var result = str.replace(/#/g, ',');
    resultElm.textContent = result.substr(1) + ',';
}