var Sprite = Laya.Sprite;
var Stage       = laya.display.Stage;
var Text        = laya.display.Text;
var HttpRequest = laya.net.HttpRequest;
var Browser     = laya.utils.Browser;
var WebGL       = laya.webgl.WebGL;
var Event   = laya.events.Event;

 
Laya.init(970,580,WebGL);

Laya.stage.alignV = Stage.ALIGN_MIDDLE;
Laya.stage.alignH = Stage.ALIGN_CENTER;

Laya.stage.scaleMode = "showall";
var bg = new Laya.Sprite();
bg.loadImage("bg/bg01.png");
bg.scaleMode = "showall";
Laya.stage.addChild(bg);

Laya.loader.load("res/atlas/go.json",Laya.Handler.create(this,createAnimation),null,Laya.Loader.ATLAS);

var page02 = new Laya.Sprite();
var go = new Laya.Animation();

// localStorage.setItem("token","twR2ExNRjJZuSBzlrJ1xitvcv1qwpwqI");

// 获取urltoken
var url = window.location.href
var url02 = url.split("#")[1].split("&")[0]
// var postUrl = decodeURI(url.split("#")[1].split("&")[1].split("=")[1])
var postUrl = unescape(url.split("#")[1].split("&")[1].split("=")[1])
sessionStorage.setItem("postUrl",postUrl); 
// console.log("postUrl"+postUrl)
// console.log(url.split("#")[1].split("&")[1].split("=")[1])

// 设置cookie
var date=new Date()
date.setSeconds(date.getSeconds()+30*60)
document.cookie='gametoken='+url02+';expires='+date

sessionStorage.setItem("data",""); 


function createAnimation() {
    go.loadAtlas("res/atlas/go.json");
    go.interval = 350;
    go.index = 1;
    go.play();

    go.height = 200;
    go.width = 100;
    go.pos(423,407);
    Laya.stage.addChild(go);
    go.once(Event.CLICK,this,clickGO);
}

function clickGO(){
    console.log("clickgo");
    Laya.stage.removeChild(bg);

    showGame();
}

function showGame(){
    Laya.stage.addChild(page02);
    Laya.stage.removeChild(go);

    var bg02 = new Laya.Sprite();
    bg02.loadImage("bg/bg02.png");
    bg02.scaleMode = "showall";
    page02.addChild(bg02);

    // 加载底部按钮
    showAddbtn();
    showMixbtn();
    showJudgebtn();
    showInfo();
    showtishi();

    // 加载第一排配料
    showHoneysuckle();
    showSodawater();
    showCola();
    showSprite();
    showIceBlackTea();
    showMilk();
    showSugar();
    showPulsation();
    showOrangeJuice();
    showCoconutJuice();
    showGreenTea();
    showNutritionExpress();

    // 榨汁机及第二排配料
    showJuicer();
    showSalt();
    showGinger();
    showSoymilk();
    showHoney();
    showVinegar();
    showSoysauce();
    showBhscs();
    showSyrup();
    showIjovo();
    showCoffee();

    // 冰块及果盘
    showIcecake();
    showVegetables();
    showFruits();

    // 人物
    showNormal();
}

