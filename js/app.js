let html = document.getElementById('htmlCode');
let css = document.getElementById('cssCode');
let js = document.getElementById('jsCode');

const autoLoad = () => {
  if (localStorage.getItem('html')) html.value = localStorage.getItem('html');
  else html.value = '<div>\n\n</div>';

  if (localStorage.getItem('css')) css.value = localStorage.getItem('css');
  else css.value = '<style>\n\n</style>';

  if (localStorage.getItem('js')) js.value = localStorage.getItem('js');
  else js.value = '<script>\n\n</script>';
};

const autoSave = (html, css, js) => {
  localStorage.setItem('html', html);
  localStorage.setItem('css', css);
  localStorage.setItem('js', js);
};

function showPreview() {
  var htmlCode = html.value;
  var cssCode = '' + css.value + '';
  var jsCode = '' + js.value + '';
  var frame = document.getElementById('preview-window').contentWindow.document;

  autoSave(htmlCode, cssCode, jsCode);

  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

function show(x) {
  document.getElementById('html').style.display = 'none';
  document.getElementById('css').style.display = 'none';
  document.getElementById('js').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById(x).style.display = 'block';
}

// for mobile
function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById('html').style.display = 'block';
    document.getElementById('css').style.display = 'block';
    document.getElementById('js').style.display = 'block';
    document.getElementById('result').style.display = 'block';
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById('html').style.display == 'block'
  ) {
    document.getElementById('css').style.display = 'none';
    document.getElementById('js').style.display = 'none';
    document.getElementById('result').style.display = 'none';
  }
}
