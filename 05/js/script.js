



document.querySelector('#convert').addEventListener('click', function() {
  let field = document.querySelector('#entertxt').value;
  document.querySelector('#result').innerHTML =  (replace(field.toLowerCase()));
});

function replace(txt) {
  txt = txt.split('q').join('й');
  txt = txt.split('w').join('ц');
  txt = txt.split('e').join('у');
  txt = txt.split('r').join('к');
  txt = txt.split('t').join('е');
  txt = txt.split('y').join('н');
  txt = txt.split('u').join('г');
  txt = txt.split('i').join('ш');
  txt = txt.split('o').join('щ');
  txt = txt.split('p').join('з');
  txt = txt.split('[').join('х');
  txt = txt.split(']').join('ъ');
  txt = txt.split('a').join('ф');
  txt = txt.split('s').join('ы');
  txt = txt.split('d').join('в');
  txt = txt.split('f').join('а');
  txt = txt.split('g').join('п');
  txt = txt.split('h').join('р');
  txt = txt.split('j').join('о');
  txt = txt.split('k').join('л');
  txt = txt.split('l').join('д');
  txt = txt.split(';').join('ж');
  txt = txt.split('\'').join('э');
  txt = txt.split('z').join('я');
  txt = txt.split('x').join('ч');
  txt = txt.split('c').join('с');
  txt = txt.split('v').join('м');
  txt = txt.split('b').join('и');
  txt = txt.split('n').join('т');
  txt = txt.split('m').join('ь');
  txt = txt.split(',').join('б');
  txt = txt.split('.').join('ю');
  return txt;
}