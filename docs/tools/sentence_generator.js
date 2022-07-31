console.log('docs/tools/sentence_generator.js')

var url = '/tools/english_polish_sentence_pairs.tsv';
var sentences = [];
var generated_sentence = {}
var txt_english = null;
var txt_polish = null;

function csvJSON(csv) {

    var lines = csv.split("\n");

    var result = [];

    // NOTE: If your columns contain commas in their values, you'll need
    // to deal with those before doing the next step 
    // (you might convert them to &&& or something, then covert them back later)
    // jsfiddle showing the issue https://jsfiddle.net/
    // var headers = lines[0].split("\t");

    for (var i = 1; i < lines.length; i++) {



        var obj = {};
        var currentline = lines[i].split("\t");
        if (currentline.length > 1) {
            obj['english'] = currentline[1];
            obj['polish'] = currentline[3].replace(/(\r\n|\n|\r)/gm, "");

            result.push(obj);
        }

    }

    //return result; //JavaScript object
    return result; //JSON
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function load_words(response) {
    let result = csvJSON(response);
    sentences = result;
    // console.log(result[0])
}

function main() {
    httpGetAsync(url, load_words)
}

function generateSentence(){
    console.log('haha');
    generated_sentence = sentences[Math.floor(Math.random()*sentences.length)];
    txt_english.value = generated_sentence.english;
    txt_polish.value = '*****************';
}

function reveal_result(){
    txt_polish.value = generated_sentence.polish;
}

window.addEventListener('load', function () {
    document.getElementsByClassName('md-overlay')[0].remove();
    document.getElementsByClassName('md-sidebar--secondary')[0].remove();
    main()
    txt_english = document.getElementById('txt_english');
    txt_polish = document.getElementById('txt_polish');
})