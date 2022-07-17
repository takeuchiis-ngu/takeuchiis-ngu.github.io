let questionbox = ['最高級の時計がほしい', '日本のブランドが良い', '特徴的な時計が良い', 'おしゃれなものかシンプルなものかだとシンプルな方を選ぶ', '値段は上がるが精密な方が良い', '人とは違うものの方が好きだ', 'がっちりしている時計が好みだ', '結果：1番', '結果：2番', '結果：3番', '結果：4番', '結果：5番', '結果：6番', '結果：7番', '結果：8番'];
let pointa = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let s = 0;

function question(ans) {
    let mes = "";
    s = pointa[s*2+ans];
    console.log(s);
    mes = questionbox[s];
    if(s >= 7) {
        s = 0;
        button2.disabled = true;
        button3.disabled = true;
    }

    const p_result = document.querySelector('#result');
    p_result.textContent = mes;
}

function start() {
    button2.disabled = false;
    button3.disabled = false;
    s = 0;
    let mes = questionbox[s];
    const p_result = document.querySelector('#result');
    p_result.textContent = mes;
}

$('#button1').on('click', function(){
    $('#result').fadeIn();
});


