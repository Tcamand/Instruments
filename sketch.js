var x=105, y=120, opçao=1, tela=0;
var img, img1, ply, volta, title, mudo, som, tgame, hdphone, usfone;
var waves;
var pno, flt, viol;//imagens
var parabens;//músicas
var ac_violao;//instrumentos
var play, pause, stp;//controles
function preload() {
  //fotos dos colaboradores
  img = loadImage('images/eu.jpg')//minha foto
  img1 = loadImage('images/cleiton.jpg')//foto de cleiton
  //botões do jogo
  ply = loadImage('images/g18.png')// botão de play
  volta = loadImage('images/voltar.png')// botão de voltar
  mudo = loadImage('images/mute.png')// desliga o som
  som = loadImage('images/unmute.png')// liga o som
  play = loadImage('images/controles/play.png')// play do jogo
  pause = loadImage('images/controles/pause.png')// botão de pausa
  stp = loadImage('images/controles/stop.png')// botão de parar
  //imagens de instrumentos
  pno = loadImage('images/instrumentos/piano.png')// piano
  flt = loadImage('images/instrumentos/flute.jpg')//flauta
  viol = loadImage('images/instrumentos/violão.jpg')//violão
  //sons de instrumentos
  ac_violao = loadSound('Audios/ac_guit.ogg')
  //sons do jogo
  parabens = loadSound('Audios/Teclado/Parabéns.mp3')
  //títulos
  title = loadImage('images/title.png')//título do menu
  tgame = loadImage('images/title_game.png')//título do jogo
  //outras imagens
  hdphone = loadImage('images/headphone.png')//Headphone
  usfone = loadImage('archives pctures/usefone.png')//use fone
  //Gifs
  waves = loadImage('archives pctures/waves.gif')//ondas
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0);
}
function draw() {
  background("#48fe67");
  if(tela==0){
     menu()
  }
  if(tela==1){ // tela com o botão de play - pré_jogo
    tela1()
  }
  if(tela==2){ // tela de instruções
    tela2()
  }
  if(tela==3){ // tela de créditos
    tela3()
  }
  if(tela==4){ // tela da primeira fase do jogo
    tela11()
  }
}
function menu(){ // menu principal
 
  fill("#48fe67")
  if(mouseX>windowWidth/2-125 && mouseX<windowWidth/2-125+250 && mouseY>y+75 && mouseY<y+200){
    rect(windowWidth/2-125, y+75, 250, 80, 5)
    if(mouseIsPressed){
      tela=1
    }
  }
  if(mouseX>windowWidth/2-125 && mouseX<windowWidth/2-125+250 && mouseY>y+175 && mouseY<(y+175)+80){
    rect(windowWidth/2-125, y+175, 250, 80, 5)
    if(mouseIsPressed){
      tela=2
    }
  }
  if(mouseX>windowWidth/2-125 && mouseX<windowWidth/2-125+250 && mouseY>y+275 && mouseY<(y+275)+80){
    rect(windowWidth/2-125, y+275, 250, 80, 5)
    if(mouseIsPressed){
      tela=3
    }
  }
  image(title, windowWidth/4, 80, 700, 80)//título do jogo
  image(mudo, 1200, 550, 80, 40)// desativa o som de fundo
  if(mouseX>1200 && mouseX<1280 && mouseY>550 && mouseY<590){
    if(mouseIsPressed){
      image(som, 1200, 550, 80, 40)// ativa o som de fundo
      //
    }else{//desativa o som de fundo
     //
    }
  }
  fill(10)
  textAlign(CENTER)
  textSize(37)
  text("INÍCIO", windowWidth/2, 250)
  text("INSTRUÇÕES", windowWidth/2, 350)
  text("CRÉDITOS", windowWidth/2, 450)
  image(waves, windowWidth/2-400, windowHeight/2+200, 800, 100)//Gif de ondas
}

function tela1(){ // tela pré-jogo
  fill("#48fe67")
  image(ply, windowWidth/2-100, windowHeight/2-100, 200, 200)//botão de play
  if(mouseX> windowWidth/2-100 && mouseX< windowWidth/2-100+200 && mouseY>windowHeight/2-100 && mouseY<windowHeight/2-100+200){
    if(mouseIsPressed){
      tela=4
    }
  }
  image(usfone, windowWidth/5-150, windowHeight/4+250, 200, 50)
  image(hdphone, windowWidth/5+70, windowHeight/4+240, 80, 70)
}
function tela11(){ //Tela de jogo - Pimeira fase
  image(volta, 1200, 60, 80, 60)// botão de voltar ao menu
  image(tgame, windowWidth/2-150, 30, 300, 100)
  if(mouseX>1200 && mouseX<1280 && mouseY>60 && mouseY<120){
    if(mouseIsPressed){
      tela=0
    }
  }
  //Controles do jogo
  image(play, windowWidth/4, windowHeight/4+50, 50, 50)//play
  image(pause, windowWidth/4+100, windowHeight/4+50, 50, 50)//pausa
  image(stp, windowWidth/4+200, windowHeight/4+50, 50, 50)//stop
}
function tela2(){// tela de instruçãoes
  image(volta, 1200, 60, 80, 60)// botão de voltar ao menu
  if(mouseX>1200 && mouseX<1280 && mouseY>60 && mouseY<120){
    if(mouseIsPressed){
      tela=0
    }
  }
  //instruções de como funciona o jogo.
  textSize(60)
  text("Instruções", windowWidth/2, 60)
  textSize(40)
  text("COMO JOGAR ?", windowWidth/5, 170)
  textSize(25)
  text("O objetivo do Jogo é clicar nas figuras dos", windowWidth/5, 240)
  text("instrumentos correspondentes, de acordo ",windowWidth/5, 270)
  text("com o som que estiver sendo executado.", windowWidth/5-8, 300)
  //Espaço para treinamento e ouvir o som dos instrumentos.
  textSize(40)
  text("VAMOS TREINAR...", windowWidth/2+300, 180)
  textSize(25)
  text("Toque nos instrumentos abaixo", windowWidth/2+300, 250)
  text("para ouvir o som que cada um ", windowWidth/2+300, 280)
  text("produzirá", windowWidth/2+300, 310)
  //toque no instrumento
  rect(windowWidth/2+100, 350, 80, 80, 5)
  image(viol, windowWidth/2+100, 350, 79, 79)
  if(mouseX>(windowWidth/2+100) && mouseX<(windowWidth/2+180) && mouseY>350 && mouseY<429){
    if(mouseIsPressed){
      ac_violao.play()
    }
  }
  rect(windowWidth/2+250, 350, 80, 80, 5)
  image(flt, windowWidth/2+250, 350, 79, 79)
  rect(windowWidth/2+400, 350, 80, 80, 5)
  image(pno, windowWidth/2+400, 350, 80, 80)
}
function tela3(){ // tela de créditos com os nomes dos desenvolvedores
  image(volta, 1200, 60, 80, 60)// botão de voltar ao menu
  if(mouseX>1200 && mouseX<1280 && mouseY>60 && mouseY<120){
    if(mouseIsPressed){
      tela=0
    }
  }
  image(img, 100, 170);
  image(img1, 1200, 400)
  textSize(60)
  text("Elaboração", windowWidth/2, 70)
  textSize(35)
  text("Thiago de Andrade", 250, 150)
  text("Cleiton J. Germano", 1150, 385)
  textSize(20)
  //Thiago - Descrição
  text("Estudante de Ciências e tecnologia da UFRN", 410, 210)
  text("Aluno da disciplina de lógica de Programação.", 415, 240)
  //Cleiton - Descrição
  text("Professor de Música (UFRN),", 1030, 450)
  text("Pós graduando em Musica e atua no ensino", 965, 480)
  text("de musica no segmento infanto-juvenil.", 990, 510)
}
function keyPressed(){
  if(key=="Enter"){
    tela=opçao
  }
  if(key=="Escape"){
    tela=0
  }
}