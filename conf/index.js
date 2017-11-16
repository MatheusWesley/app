var loki = require('lokijs');
var lokiIndexedAdapter = require('./../node_modules/lokijs/src/loki-indexed-adapter.js');

// CRIANDO BANCO DE DADOS
var idbAdapter = new lokiIndexedAdapter('loki');
var banco = new loki('conf/banco.json');
// CRIANDO TABELAS
  var tbl_cadastro = banco.addCollection('tbl_cadastro');

// CAPITURANDO OS DADOS DO FORMULARIO PARA INSERIR NA TABELA
$(document).ready(function() {
  $("#salvar").on('click',function(e) {
    e.preventDefault();
    var trataEmail = $("#email").val();
    let pessoa = {
      nome: $("#nome").val(),
      email: trataEmail + "@email.com",
      senha: $("#senha").val()
    }
    tbl_cadastro.insert(pessoa);
    banco.save()
    console.log("Registros: " + banco.getCollection("tbl_cadastro").count());
    $('#formCadastro').trigger("reset");
  });
});
