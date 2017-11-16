var read = require('read-file-utf8')
var loki = require('lokijs');
var banco = new loki('conf/banco.json');
var local = '/banco.json'
var arquivo = read(__dirname + local);
banco.loadJSON(arquivo);
window.Vue = require('vue');
// ----------------------------------------------------------------
var tbl_cadastro = banco.getCollection('tbl_cadastro');
console.log("Registros: " + banco.getCollection("tbl_cadastro").count());
//-----------------------------------------------------------------
new Vue({
  el: 'body', // Definindo um elemento
  data: {
    cadastro: []
  },
  ready: function() {
    this.cadastro = tbl_cadastro.data;
  },
  // Acções do meu projeto
  methods: {
    fazerLogin: function() {
      vNome = $("#vNome").val();
      vSenha = $("#vSenha").val();
      result = tbl_cadastro.find({'nome': { '$eq' : vNome }} && {'senha': { '$eq' : vSenha }});
      if (result == false) {
        console.log('não ok');
      }else {
        //console.log('ok');
        window.location.href = "dados.html";
      }
      console.log('Nome: ',this.cadastro = result);

      // redireciona para outra pagina
    }

  }
})
