var read = require('read-file-utf8')
var loki = require('lokijs');
var banco = new loki('conf/banco.json');
var arquivo = read(__dirname + '/banco.json');
window.Vue = require('vue');
banco.loadJSON(arquivo);
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
      //result = tbl_cadastro.find({'nome': { '$eq' : vNome }} && {'senha': { '$eq' : vSenha }});
      if (tbl_cadastro.find({'nome': { '$eq' : vNome }}) == false) {
        console.log('Nome: ' + vNome);
        console.log('Usuario errado');
      } else if (tbl_cadastro.find({'senha': { '$eq' : vSenha }}) == false) {
          console.log('Senha: ' + vSenha);
          console.log('Senha errada');
      }else{
          console.log('Nome: ' + vNome);
          console.log('Senha: ' + vSenha);
          console.log('Tudo ok');
          //window.location.href = "dados.html";
        }
      //console.log('Nome: ',this.cadastro = result);

      // redireciona para outra pagina
    }

  }
})
