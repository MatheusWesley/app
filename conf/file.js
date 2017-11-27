
function pegaArquivo(e) {
  var arquivos = e.target.files;
  for (var i = 0, arquivo; arquivo = arquivos[i]; i++) {
    console.log(arquivo.path);
    window.open(arquivo.path);
  }
}
document.getElementById('arquivos').addEventListener('click', pegaArquivo, false);




/*
function pegaArquivo(evento) {
  var arquivos = evento.target.files; // FileList object

  // files is a FileList of File objects. List some properties.
  var saida = [];
  for (var i = 0, arquivo; arquivo = arquivos[i]; i++) {
    // saida.push('<li><strong>', escape(arquivo.name), '</strong> (', arquivo.type || 'n/a', ') - ',
    //   arquivo.size, ' bytes, last modified: ',
    //   arquivo.lastModifiedDate.toLocaleDateString(), '</li>');
  //   saida.push('Nome: ' + arquivo.name + '\n' +
  //              'Tipo: ' + arquivo.type + '\n' +
  //              'Tamanho: ' + arquivo.size + ' bytes\n' +
  //              'Data Modificação: ' + arquivo.lastModifiedDate.toLocaleDateString() + '\n'+
  //              'Local: ' + arquivo.path);
}
  document.getElementById('lista').innerHTML = '<ul>' + saida.join('') + '</ul>';
}

document.getElementById('arquivos').addEventListener('change', pegaArquivo, false);
*/
