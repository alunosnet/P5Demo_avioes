"use strict"
//imagems
let imgAviao; 
let imgRocket;

//tamanho canvas
let canvasx=400;
let canvasy=400;


//coordenadas do avião
let xaviao=0;
let yaviao=300;
let velocidadex=2;
let largura_aviao=110; //largura do avião
let altura_aviao=92;

//rocket
let xrocket=0;
let yrocket=0;
let altura_rocket=137;
let largura_rocket=68;
let rocketvisivel=false;
let velocidadeyrocket=2;

let perdeu=false;

function preload()
{

}

function setup()
{
    createCanvas(canvasx, canvasy);
    imgAviao = loadImage('assets/Aircraft_01.png'); 
    imgRocket = loadImage('assets/rocket.png');
}

function Colisao()
{
    //verifica colunas
    if ((xrocket>=xaviao && xrocket<=xaviao+largura_aviao)
        ||(xrocket+largura_rocket>=xaviao && xrocket+largura_rocket<=xaviao+largura_aviao))
    {
        //verifica linhas
        if (yrocket+altura_rocket>=yaviao && yrocket+altura_rocket<=yaviao+altura_aviao)
            return true;
        if (yrocket>=yaviao && yrocket<=yaviao+altura_aviao)
            return true;
    }

    return false;
}

function AtirarRocket()
{
    xrocket=random(0,canvasx-40);
    rocketvisivel=true;
    yrocket=0;
}

function draw() 
{
    //limpa o canvas
    background(220);

    if (perdeu)
    {
        textSize(32);
        text('Game Over', 10, 30);
    }
    else
    {
   
        if(rocketvisivel==true)
        {
            yrocket += velocidadeyrocket;
            image(imgRocket,xrocket,yrocket);
            if(yrocket>canvasy)
                rocketvisivel=false;
        }
        else
        {
            if (random(0,100)>10)
                AtirarRocket();
        }
        // movimento do avião
        if (keyIsDown(LEFT_ARROW)) 
        {
        xaviao -= velocidadex;
        }
        if (keyIsDown(RIGHT_ARROW))
        {
        xaviao += velocidadex;
        }
        //controlar se sai do canvas
        if (xaviao+largura_aviao>=canvasx)
        {
            xaviao = canvasx-largura_aviao;
        }
        if(xaviao<0)
        {
            xaviao=0;
        }
        //desenha
        image(imgAviao,xaviao,yaviao);
        //teste colisões
        if (Colisao())
            perdeu=true;
    }
}

function keyPressed()
{

}