let button = document.querySelector('#button');
let result = document.querySelector('#result');

button.addEventListener('click', function() {
    let etvalue = document.querySelector('#entertext').value.toLowerCase();
    etvalue = etvalue.split('а').join('qlas');
    etvalue = etvalue.split('б').join('qasdf');
    etvalue = etvalue.split('в').join('01001');
    etvalue = etvalue.split('г').join('121-0001');
    etvalue = etvalue.split('д').join('qxgc');
    etvalue = etvalue.split('е').join('dddd');
    etvalue = etvalue.split('ё').join('asdhfjhjf');
    etvalue = etvalue.split('ж').join('asddgjjh');
    etvalue = etvalue.split('з').join('qqqasassf');
    etvalue = etvalue.split('и').join('1111');
    etvalue = etvalue.split('й').join('asdasdsa');
    etvalue = etvalue.split('к').join('dahhvc');
    etvalue = etvalue.split('л').join('sssss');
    etvalue = etvalue.split('м').join('gnsdgk');
    etvalue = etvalue.split('н').join('asdrgv');
    etvalue = etvalue.split('о').join('ddfknkb');
    etvalue = etvalue.split('п').join('asdfjourfv');
    etvalue = etvalue.split('р').join('asahbcc');
    etvalue = etvalue.split('с').join('aazxzxv');
    etvalue = etvalue.split('т').join('sdfsdf');
    etvalue = etvalue.split('у').join('zxas');
    etvalue = etvalue.split('ф').join('sdq[w');
    etvalue = etvalue.split('х').join('fghfghuu');
    etvalue = etvalue.split('ц').join('fghfgh');
    etvalue = etvalue.split('ч').join('asdas');
    etvalue = etvalue.split('ш').join('hhdfhdfhfddsg');
    etvalue = etvalue.split('щ').join('sdfbdk');
    etvalue = etvalue.split('ъ').join('1pp2p2');
    etvalue = etvalue.split('ы').join('eferer');
    etvalue = etvalue.split('ь').join('asitlv');
    etvalue = etvalue.split('э').join('asjkmqq');
    etvalue = etvalue.split('ю').join('akmqx');
    etvalue = etvalue.split('я').join('astvcvvh');

    etvalue = etvalue.split(' ').join('-');
    
    
    result.innerHTML = `<a href="https://fakem1ner.github.io/03/read-link.html?text=${etvalue}">Ссылка</a>`;
});
