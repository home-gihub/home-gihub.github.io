var generateBtn = document.getElementById('buttongeneratorRegen');
var openiniframeChkbtn = document.getElementById('buttongeneratorIframe');
var stylesSel = document.getElementById('buttongeneratorStyles');
var resultContainer = document.getElementById('buttongeneratorResult');
var resultTextarea = document.getElementById('buttongeneratorCode');
generateBtn.addEventListener('click', function(){
    var result = ''
    result = '<a';
    if (openiniframeChkbtn.checked) {
        result += ' target="_top" ';
    }
    result += '><img src="https://home-gihub.github.io/btn';
    result += stylesSel.options[stylesSel.selectedIndex].value;
    result += '.gif" /></a>';
    resultContainer.innerHTML = result;
    resultTextarea.value = result;
});