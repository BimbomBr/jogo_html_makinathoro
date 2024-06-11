function continuar() {
  document.getElementById("body").style.backgroundImage = "imagens/.jpg";
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você tem duas escolhas: </h3>';
  formation += '<br>';
  formation += '<div class="botao">'
  formation += '<button class="botoes" onclick="Escolha1()">Sair do laboratório</button>';
  formation += '<button class="botoes" onclick="Escolha2()">Ficar no laboratório</button>';
  formation += '</div>'
  $(".principal").append(formation);
}


function Escolha1() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você sai desesperado para encontrar sobreviventes e no meio do caminho encontra o segurança Apolo. </h3>';
  formation += ' <img src="imagens/lab_corredor.gif" class="imagens">';
  formation += '<br>';
  formation += '<div class="botao">'
  formation += '<button class="botoes" onclick="Escolha11()">Procurar Sobreviventes</button>';
  formation += '<button class="botoes" onclick="Escolha12()">Fugir</button>';
  formation += '</div>'
  $(".principal").append(formation);
}

function Escolha11() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você procura por sobreviventes e encontra Max, o gordinho da tecnologia, que na qual está fugindo dos zumbis. </h3>'
  formation += '<img src="imagens/max_gordin.png" class="imagens">';
  formation += '<br>'
  formation += '<div class="botao">'
  formation += '<button class="botoes" onclick="Escolha111()">Salvar Max</button>';
  formation += '<button class="botoes" onclick="Escolha112()">Ignorar</button>';
  formation += '</div>'
  $(".principal").append(formation);
}

function Escolha112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você é um vacilão, não é? Salve o gordinho logo.';
  formation += '<br>';
  formation += '<div class="botao">'
  formation += '<button class="botoes" onclick="Escolha111()">Salvar Max</button>';
  formation += '</div>'
  $(".principal").append(formation);
}

function Escolha111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você derrotou os zumbis e chamou Max para seu grupo, logo após vocês saíram do laboratório. </h3>'
  formation += '<img src="imagens/exitlab.jpg" class="imagens">';
  formation += '<br>'
  formation += '<div class="botao">'
  formation += '<button class="botoes" onclick="Escolha1111()">Procurar um meio de Transporte</button>';
  formation += '<button class="botoes" onclick="Escolha1112()">Ir a pé</button>';
  formation += '</div>'
  $(".principal").append(formation);
}

function Escolha1112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> No meio do caminho, vocês encontram uma horda de zumbis. </h3>'
  formation += '<img src="imagens/" class="imagens">';
  formation += '<br>';
  formation += '<div class="botao">'
  formation += '<button class="botoes" onclick="Escolha11121()">Lutar</button>';
  formation += '<button class="botoes" onclick="Escolha11122()">Fugir</button>';
  formation += '</div>'
  $(".principal").append(formation);
}

function Escolha11121() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Vocês lutam e derrotam todos. </h3>'
  formation += '<img src="imagens/zumbicidade.jpg" class="imagens">';
  formation += '<br>';
  formation += '<button class="botoes" onclick="Escolha1111()">Continuar</button>';
  $(".principal").append(formation);
}

function Escolha11122() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Vocês fogem desesperadamente e no meio do caminho são cercado por outros zumbis e por fim são infectados. </h3>';
  formation += '<br>';
  $(".principal").append(formation);
}

function Escolha1111() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> No meio do caminho você encontra Jasmim, que está em cima de uma casa. </h3>'
  formation += '<br>';
  formation += '<img src="imagens/jasmin.jpg" class="imagens">';
  formation += '<div class="botao">'
  formation += '<button class="botoes" onclick="Escolha11111()">Salvar Jasmin</button>';
  formation += '<button class="botoes" onclick="Escolha11112()">Ignorar</button>';
  formation += '</div>'
  $(".principal").append(formation);
}

function Escolha11112() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Jasmin se distrai, tropeça e morre. </h3>'
  formation += '<button class="botoes" onclick="Escolha11111()">Continuar</button>';
  $(".principal").append(formation);
}

function Escolha11111() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> Logo após você e seu grupo pensam em um plano para criar uma cura para o vírus. No caminho, vocês acham uma horda de zumbis. </h3>';
  formation += '<br>';
  formation += '<img src="imagens/plan_zombie.jpg" class="imagens">';
  formation += '<div class="botao">';
  formation += '<button class="botoes" onclick="Escolha111111()">Lutar</button>';
  formation += '<button class="botoes" onclick="Escolha111112()">Desviar do Caminho</button>';
  formation += '</div>';
  $(".principal").append(formation);
}

function Escolha111112() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> Vocês tem uma viagem longa, porém sem nenhuma interrupção e enfim conseguem chegar ao laboratório e por fim você conseguiu salvar o mundo de um apocalipse zumbi. </h3>'
  formation += '<br>';
  $(".principal").append(formation);
}

function Escolha111111() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> Vocês conseguem derrotar eles e ir para o laboratório. Dentro dele, vocês encontram um pequeno grupo de zumbis que restaram. </h3>'
  formation += '<img src="imagens/zombies2.png" class="imagens">';
  formation += '<br>';
  formation += '<div class="botao">'
  formation += '<button class="botoes" onclick="Escolha1111111()">Lutar</button>';
  formation += '<button class="botoes" onclick="Escolha1111112()">Tentar ir sem chamar atenção</button>';
  formation += '</div>'
  $(".principal").append(formation);
}

function Escolha1111112() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> Vocês tem sucesso e conseguem criar a cura do vírus e salvar o mundo. </h3>'
  formation += '<br>';
  $(".principal").append(formation);
}


function Escolha1111111() {
  var formation = ''
  formation += '<br>';
  formation += '<h3> Vocês conseguem derrotar os zumbis e criam a cura do vírus. </h3>'
  formation += '<br>';
  $(".principal").append(formation);
}

function Escolha12() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Com a ajuda do segurança Apolo, você conseguiu sair em segurança. Fora do laboratório, você e Apolo encontram recursos que podem criar a cura do vírus. </h3>'
  formation += '<br>';
  formation += '<div class="botao">'
  formation += '<button class="botoes" onclick="Escolha121()">Pegar as Recompensas</button>';
  formation += '<button class="botoes" onclick="Escolha122()">Ignorar</button>';
  formation += '</div>'
  $(".principal").append(formation);
}

function Escolha121() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você coleta as recompensas, cria a cura do vírus e salva o mundo. </h3>'
  formation += '<br>';
  $(".principal").append(formation);
}

function Escolha122() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você encontra uma hordas de zumbi, juntos, vocês não conseguem matar todos os zumbis e morrem. </h3>';
  formation += '<br>';
  $(".principal").append(formation);
}

function Escolha2() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você ficou no laboratório. Um grupo de zumbis te encontrou. </h3>';
  formation += '<img src="imagens/zumbilab.png" class="imagens">';
  formation += '<br>';
  formation += '<div class="botao">'
  formation += '<button class="botoes" onclick="Escolha21()">Lutar</button>';
  formation += '<button class="botoes" onclick="Escolha1()">Fugir</button>';
  formation += '</div>'
  $(".principal").append(formation);
}

function Escolha21() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Você lutou e com muita sorte, derrotou eles. </h3>';
  formation += '<img src="imagens/zumbimorto.jpg" class="imagens">';
  formation += '<br>';
  formation += '<div class="botao">'
  formation += '<button class="botoes" onclick="Escolha211()">Continuar no laboratório</button>';
  formation += '<button class="botoes" onclick="Escolha1()">Fugir</button>';
  formation += '</div>'
  $(".principal").append(formation);
}


function Escolha211() {
  var formation = '';
  formation += '<br>';
  formation += '<h3> Por azar, você acabou sendo cercado por um bando de zumbis e é infectado. </h3>';
  formation += '<img src="">';
  formation += '<br>';
  $(".principal").append(formation);
}