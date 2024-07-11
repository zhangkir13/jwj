var Sprite = Laya.Sprite;
var Stage       = laya.Stage;
var HttpRequest = laya.net.HttpRequest;
var HTMLDivElement    = Laya.HTMLDivElement;
var Browser     = laya.utils.Browser;
var WebGL       = laya.webgl.WebGL;
var Event   = laya.events.Event;
var Rectangle = laya.maths.Rectangle;

// 定义饮料
var hs = new Sprite();
var sw = new Sprite();
var cl = new Sprite();
var spr = new Sprite();
var ibt = new Sprite();
var mk = new Sprite();
var sugar = new Sprite();
var pu = new Sprite();
var oj = new Sprite();
var cj = new Sprite();
var gt = new Sprite();
var ne = new Sprite();

var salt = new Sprite();
var ginger = new Sprite();
var soymilk = new Sprite();
var honey = new Sprite();
var Vinegar = new Sprite();
var Soysauce = new Sprite();
var bhscs = new Sprite();
var Syrup = new Sprite();
var ijovo = new Sprite();
var coffee = new Sprite();

// 定义冰块
var icecake = new Sprite();

// 定义蔬菜
var cucumber = new Sprite();
var carrot = new Sprite();
var tomato = new Sprite();
var mint = new Sprite();
var onion = new Sprite();
var egg = new Sprite();
var pepper = new Sprite();
var garlic = new Sprite();

// 定义水果
var orange = new Sprite();
var banana = new Sprite();
var pomegranate = new Sprite();
var mango = new Sprite();
var apple = new Sprite();
var pear = new Sprite();
var watermelon = new Sprite();
var lemon = new Sprite();
var grape = new Sprite();

// 定义榨汁机
var juicer = new Sprite();

// 定义按钮
var addbtn = new Sprite();
var mixbtn = new Sprite();
var judgebtn = new Sprite();

// 定义label
 var label = new laya.ui.Label();
    label.font = "黑体";
    label.fontSize = 25;
    label.wordWrap = true;
    label.valign = "middle";
    label.width = 290;
    label.height = 75;
    label.x = 620;
    label.y = 480;

var label_apple = new laya.ui.Label();
    label_apple.font = "黑体";
    label_apple.fontSize = 18;
    label_apple.color = "#fff";
    label_apple.bold = true;
    label_apple.width = 79;
    label_apple.x = 46;
    label_apple.y = 200;
    label_apple.text = "苹果汁";
var label_banana = new laya.ui.Label();
    label_banana.font = "黑体";
    label_banana.fontSize = 18;
    label_banana.color = "#fff";
    label_banana.bold = true;
    label_banana.width = 79;
    label_banana.x = 46;
    label_banana.y = 224;
    label_banana.text = "香蕉汁";
var label_watermelon = new laya.ui.Label();
    label_watermelon.font = "黑体";
    label_watermelon.fontSize = 18;
    label_watermelon.color = "#fff";
    label_watermelon.bold = true;
    label_watermelon.width = 79;
    label_watermelon.x = 46;
    label_watermelon.y = 248;
    label_watermelon.text = "西瓜汁";
var label_pear = new laya.ui.Label();
    label_pear.font = "黑体";
    label_pear.fontSize = 18;
    label_pear.color = "#fff";
    label_pear.bold = true;
    label_pear.width = 79;
    label_pear.x = 46;
    label_pear.y = 272;
    label_pear.text = "梨汁";
var label_grape = new laya.ui.Label();
    label_grape.font = "黑体";
    label_grape.fontSize = 18;
    label_grape.color = "#fff";
    label_grape.bold = true;
    label_grape.width = 79;
    label_grape.x = 46;
    label_grape.y = 296;
    label_grape.text = "葡萄汁";
var label_mango = new laya.ui.Label();
    label_mango.font = "黑体";
    label_mango.fontSize = 18;
    label_mango.color = "#fff";
    label_mango.bold = true;
    label_mango.width = 79;
    label_mango.x = 46;
    label_mango.y = 320;
    label_mango.text = "芒果汁";
var label_lemon = new laya.ui.Label();
    label_lemon.font = "黑体";
    label_lemon.fontSize = 18;
    label_lemon.color = "#fff";
    label_lemon.bold = true;
    label_lemon.width = 79;
    label_lemon.x = 46;
    label_lemon.y = 344;
    label_lemon.text = "柠檬汁";
var label_pomegranate = new laya.ui.Label();
    label_pomegranate.font = "黑体";
    label_pomegranate.fontSize = 18;
    label_pomegranate.color = "#fff";
    label_pomegranate.bold = true;
    label_pomegranate.width = 79;
    label_pomegranate.x = 46;
    label_pomegranate.y = 368;
    label_pomegranate.text = "石榴汁";
var label_cucumber = new laya.ui.Label();
    label_cucumber.font = "黑体";
    label_cucumber.fontSize = 18;
    label_cucumber.color = "#fff";
    label_cucumber.bold = true;
    label_cucumber.width = 79;
    label_cucumber.x = 46;
    label_cucumber.y = 392;
    label_cucumber.text = "黄瓜汁";
var label_tomato = new laya.ui.Label();
    label_tomato.font = "黑体";
    label_tomato.fontSize = 18;
    label_tomato.color = "#fff";
    label_tomato.bold = true;
    label_tomato.width = 79;
    label_tomato.x = 46;
    label_tomato.y = 412;
    label_tomato.text = "西红柿汁";

var vegeLabel = new laya.ui.Label();
var fruitLabel = new laya.ui.Label();

// 定义正常人物
var normal = new Sprite();
    normal.pos(732,47);

// 定义shaker
 var Shaker = new Sprite();
     Shaker.pos(770,292);

var IsShake = false;

var wg = new Sprite();
     wg.pos(789,362);

// 定义取物
var hold = new Sprite();
    hold.pos(699,49);

// 定义shake
var shakeWine = new Laya.Animation();

// 定义变量记录点击配料
var clickDrink_bl = new laya.ui.Label(); 
var clickVegetable_bl = new laya.ui.Label();
var clickFruit_bl = new laya.ui.Label();

// 定义变量记录加入的配料
var addDrink_bl = new laya.ui.Label();
var addVegetable_bl = new laya.ui.Label();
var addIcecake_bl = new laya.ui.Label();
var addFruit_bl = new laya.ui.Label();

// 定义分数
var core = 0;
var core_current;
var coreSum;
var coreIcecake = 0;

// 定义变量记录加入的配料数，除江小白与冰块外
var drinkCount = 0;
var addCount;

// 定义评价内容
var result_c;
var resultContent = new laya.ui.Label();

console.log("cookie"+getCookie("gametoken"))

var dcy = new Dictionary();
setMap()

// 添加按钮
function showAddbtn() {
    page02.addChild(addbtn);
    addbtn.loadImage("btn/addbtn.png");
    addbtn.pos(71,473);

    addbtn.on(Event.MOUSE_DOWN,this,addDrink);
    addbtn.on(Event.MOUSE_UP,this,mouseUp);
} 

function mouseUp() {
    showAll();
    showNormal();
    showIcecake();
    showVegetables();
    showFruits();
    if(addDrink_bl.text.split(",").length>1){
        showShaker();
    }

    page02.removeChild(hold);
    page02.removeChild(shakeWine);
}

// 添加
function addDrink() {
    var str1 = addDrink_bl.text;
    var str3 = addFruit_bl.text;

    if(str1.split(",").length<4  && str3.split(",").length == 6 && str3.indexOf("apple")>-1 && str3.indexOf("pear")>-1 && str3.indexOf("lemon")>-1 && str3.indexOf("mango")>-1 && str3.indexOf("orange")>-1 && (clickDrink_bl.text =="honey" || clickDrink_bl.text == "sw" || clickDrink_bl.text =="ijovo")){
        page02.removeChild(normal);

        hold.graphics.clear();
        hold.loadImage("role/addDrink/add_"+clickDrink_bl.text+".png");
        page02.addChild(hold);

        label.text = " 材料添加完成了吗？长按{混合}摇匀哦";
        page02.addChild(label);

        core += core_current;
        addDrink_bl.text += clickDrink_bl.text+",";
    }else if(drinkCount>4){
        label.text = "配料太多，满出来了！点击混合摇匀吧！";
        page02.addChild(label);
    }
    else if (clickDrink_bl.text == "" || clickVegetable_bl.text != "" || clickFruit_bl.text != ""){
        label.text = "请先选择要添加的配料";
        page02.addChild(label);
    }else{
        page02.removeChild(normal);
    
        hold.graphics.clear();
        hold.loadImage("role/addDrink/add_"+clickDrink_bl.text+".png");
        page02.addChild(hold);

        label.text = " 材料添加完成了吗？长按{混合}摇匀哦";
        page02.addChild(label);

        core += core_current;

        drinkCount += addCount;

        addDrink_bl.text += clickDrink_bl.text+",";
    }
}
        
// 混合按钮
function showMixbtn() {
    page02.addChild(mixbtn);
    mixbtn.loadImage("btn/mixbtn.png");
    mixbtn.pos(196,473);   

    mixbtn.on(Event.MOUSE_DOWN,this,shake);
    mixbtn.on(Event.MOUSE_UP,this,mouseUp);
}

// 混合
function shake() {
     Laya.loader.load("res/atlas/shake.json",Laya.Handler.create(this,createShake),null,Laya.Loader.ATLAS);
}

function createShake() {
    if (addDrink_bl.text == "" && addVegetable_bl.text == "" && addFruit_bl.text == ""){
        label.text = "请先添加基酒和配料";
        page02.addChild(label);
    }else if(addDrink_bl.text.indexOf("ijovo")>-1 && addDrink_bl.text.split(",").length == 2){
        label.text = "请添加其他配料";
        page02.addChild(label);
    }else{
        showAll();
        showIcecake();
        showFruits();
        page02.removeChild(normal);
        page02.removeChild(hold);
        page02.removeChild(Shaker);
        page02.removeChild(fruitLabel);
        page02.removeChild(vegeLabel);
        
        shakeWine.loadAtlas("res/atlas/shake.json");
        shakeWine.interval = 80;
        shakeWine.index = 1;
        shakeWine.play();

        shakeWine.height = 200;
        shakeWine.width = 100;
        shakeWine.pos(697,47);
        page02.addChild(shakeWine);

        label.text = "点击品鉴，来尝尝看吧";
        page02.addChild(label);
        IsShake = true;
    }  
}

// 品鉴按钮
function showJudgebtn() {
    page02.addChild(judgebtn);
    judgebtn.loadImage("btn/judgebtn.png");
    judgebtn.pos(321,473);   

    judgebtn.on(Event.CLICK,this,judge);
}

// 品鉴
function judge() {
    if(IsShake){
        Laya.loader.load("res/atlas/drink.json",Laya.Handler.create(this,createDrink),null,Laya.Loader.ATLAS);
    }else if(addDrink_bl.text == "" && addVegetable_bl.text == "" && addFruit_bl.text == ""){
        label.text = "请先添加基酒和配料";
        page02.addChild(label);
    }else{
        label.text = "请先点击混合按钮将加入的配料摇匀";
        page02.addChild(label);
    }
}

function createDrink() {
    // 倒酒
    window.setTimeout("showDrink02()",1000);
    page02.removeChild(normal);
    page02.removeChild(hold);
    page02.removeChild(shakeWine);
    page02.removeChild(Shaker);

    hold.graphics.clear();
    hold.loadImage("role/drink/drink01.png");
    hold.pos(669,49);
    page02.addChild(hold);

    showWineGlass();

    normal.graphics.clear();
    normal.loadImage("role/drink/wine.png");
    normal.pos(795,346);
    page02.addChild(normal);
}

function showDrink02() {
    // 喝酒
    window.setTimeout("showDrink03()",1000);
    page02.removeChild(Shaker);
    page02.removeChild(wg);

    hold.graphics.clear();
    hold.loadImage("role/drink/drink02.png");
    hold.pos(669,49);
    page02.addChild(hold);
    normal.graphics.clear();
    IsShake = false;
}

function showDrink03() {
    // 评分
    coreSum = 5000-core/drinkCount+coreIcecake;
    console.log("总分:"+coreSum);
    page02.removeChild(Shaker);
    hold.graphics.clear();
    hold.pos(691,47);
    var str1 = addDrink_bl.text;
    var str2 = addVegetable_bl.text;
    var str3 = addFruit_bl.text;
    var str_ijovo = "ijovo";
    var str_ibt = "ibt";
    var str_mk = "mk";
    var str_cj = "cj";
    var str_sugar = "sugar";
    var str_sw = "sw";

    var str_spr = "spr";
    var str_honey = "honey";
    var str_egg = "egg";
    

    var str_lemon = "lemon";
    var str_apple = "apple";
    var str_pear = "pear";
    var str_mango = "mango";
    var str_orange = "orange";


    var str_Vinegar = "Vinegar";
    var str_Soysauce = "Soysauce";
    var str_pepper = "pepper";
    var str_garlic = "garlic";
    var str_onion = "onion";

    // 蘑菇云配方
    if(str1.split(",").length == 4 && str1.indexOf(str_ijovo)>-1 && str1.indexOf(str_ibt)>-1 && str1.indexOf(str_mk)>-1 && addIcecake_bl!=""){
        coreSum = 5000;
        hold.loadImage("role/drink/drink_success.png");
        page02.addChild(hold);

        resultContent.on(Event.CLICK,this,openN,["www.baidu.com"]);

        result_c = "哎呦不错，行家啊！恭喜您，成功解锁蘑菇云配方。点击链接查看本鸡尾酒江小白的打开方式。";
        window.setTimeout(showResult,1000);
    }else if(str1.split(",").length == 4 && str2.split(",").length == 2 && str1.indexOf(str_ijovo)>-1 && str1.indexOf(str_spr)>-1 && str2.indexOf(str_egg)>-1 && str1.indexOf(str_honey)>-1 && addIcecake_bl!=""){
        coreSum = 5000;
        hold.loadImage("role/drink/drink_success.png");
        page02.addChild(hold);

        resultContent.on(Event.CLICK,this,openN,["www.baidu.com"]);

        result_c = "哎呦不错，行家啊！恭喜您，成功解锁橙色预警配方。点击链接查看本鸡尾酒江小白的打开方式。";
        window.setTimeout(showResult,1000);
    }else if(str1.split(",").length == 3 && str3.split(",").length == 2 && str1.indexOf(str_ijovo)>-1 && str1.indexOf(str_cj)>-1 && str3.indexOf(str_lemon)>-1 && addIcecake_bl!=""){
        coreSum = 5000;
        hold.loadImage("role/drink/drink_success.png");
        page02.addChild(hold);

        resultContent.on(Event.CLICK,this,openN,["www.baidu.com"]);

        result_c = "哎呦不错，行家啊！恭喜您，成功解锁白富美配方。点击链接查看本鸡尾酒江小白的打开方式。";
        window.setTimeout(showResult,1000);
    }else if(str1.split(",").length == 4 && str3.split(",").length == 6 && str1.indexOf(str_ijovo)>-1 && str3.indexOf(str_apple)>-1 && str3.indexOf(str_pear)>-1 && str3.indexOf(str_lemon)>-1 && str3.indexOf(str_mango)>-1 && str3.indexOf(str_orange)>-1 && str1.indexOf(str_honey)>-1 && str1.indexOf(str_sw)>-1 && addIcecake_bl!=""){
        coreSum = 5000;
        hold.loadImage("role/drink/drink_success.png");
        page02.addChild(hold);

        resultContent.on(Event.CLICK,this,openN,["www.baidu.com"]);

        result_c = "哎呦不错，行家啊！恭喜您，成功解锁彩虹堂配方。点击链接查看本鸡尾酒江小白的打开方式。";
        window.setTimeout(showResult,1000);
    }
    else if(str1.indexOf(str_ijovo)<0){
        coreSum = "-1000";
        hold.loadImage("role/drink/drink_normal.png");
        page02.addChild(hold);
        result_c = "Excuse me？让你调鸡尾酒你给我来杯混合饮料。微笑，负分。";
        window.setTimeout("showResult()",1000);
    }else if(str1.indexOf(str_Vinegar)>-1 || str1.indexOf(str_Soysauce)>-1 || str2.indexOf(str_pepper)>-1 || str2.indexOf(str_garlic)>-1 || str2.indexOf(str_onion)>-1){
        hold.loadImage("role/drink/drink_green.png");
        page02.addChild(hold);
        result_c = "这你也敢放酒里？忍不住叫您一声壮士";
        window.setTimeout("showResult()",1000);
    }
    else if(coreSum>4499){
        hold.loadImage("role/drink/drink_success.png");
        page02.addChild(hold);
        result_c = "大师，很不错啊！要不真调来试试？说不定还能创造出一款新鸡尾酒！";
        window.setTimeout(showResult,1000);
       
    }else if(coreSum>4299 && coreSum<4499){
        hold.loadImage("role/drink/drink_normal.png");
        page02.addChild(hold);
        result_c = "这位同学，调酒天赋不错哦，你与大师只有一步之遥。";
        window.setTimeout("showResult()",1000);
       
    }else if(coreSum>4049 && coreSum<4299){
        hold.loadImage("role/drink/drink_new.png");
        page02.addChild(hold);
        result_c = "新手上路，还要多多练习哦。";
        window.setTimeout("showResult()",1000);
        
    }else if(coreSum>3900 && coreSum<4049){
        hold.loadImage("role/drink/drink_blue.png");
        page02.addChild(hold);
        result_c = "品尝这杯酒，需要的不是舌头，是勇气。";
        window.setTimeout("showResult()",1000);
     
    }else if(coreSum>3699 && coreSum<3899){
        hold.loadImage("role/drink/drink_red.png");
        page02.addChild(hold);
        result_c = "大湿，喝完这杯酒，我整个人都方了。";
        window.setTimeout("showResult()",1000);
      
    }else if(coreSum<3699){
        hold.loadImage("role/drink/drink_green.png");
        page02.addChild(hold);
        result_c = "这位大侠，口味略重啊！";
        window.setTimeout("showResult()",1000);
        
    } 
}

// 提示面板
function showInfo() {
    var info = new Sprite();
    page02.addChild(info);
    info.loadImage("btn/info.png");
    info.pos(605,472);   
}

function showtishi() {
    label.text = "点击选中江小白，并长按添加，倒入基酒";
    page02.addChild(label);
}
    
function showHoneysuckle(){
    page02.addChild(hs);
    hs.size(42,98);
    hs.loadImage("drink/Honeysuckle.png");
    hs.pos(106,106);

    hs.on(Event.MOUSE_OVER, this, showInfotext,["金银花露"]);
    hs.on(Event.MOUSE_OUT,this,hideInfotext);
    hs.on(Event.CLICK,this,holdDrink,[hs,"hold_hs.png","hs",1750,1]);
}

function showSodawater() {
    page02.addChild(sw);
    sw.loadImage("drink/Sodawater.png");
    sw.pos(153,88);

    sw.on(Event.MOUSE_OVER,this,showInfotext,["苏打水"]);
    sw.on(Event.MOUSE_OUT,this,hideInfotext);
    sw.on(Event.CLICK,this,holdDrink,[sw,"hold_sw.png","sw",650,1]);
}

function showCola() {
    page02.addChild(cl);
    cl.loadImage("drink/cola.png");
    cl.pos(205,57);

    cl.on(Event.MOUSE_OVER,this,showInfotext,["可乐"]);
    cl.on(Event.MOUSE_OUT,this,hideInfotext);
    cl.on(Event.CLICK,this,holdDrink,[cl,"hold_cl.png","cl",500,1]);
}

function showSprite(){
    page02.addChild(spr);
    spr.loadImage("drink/Sprite.png");
    spr.pos(261,58);

    spr.on(Event.MOUSE_OVER,this,showInfotext,["雪碧"]);
    spr.on(Event.MOUSE_OUT,this,hideInfotext);
    spr.on(Event.CLICK,this,holdDrink,[spr,"hold_spr.png","spr",400,1]);
}

function showIceBlackTea() {
    page02.addChild(ibt);
    ibt.loadImage("drink/IceBlackTea.png");
    ibt.pos(317,62);

    ibt.on(Event.MOUSE_OVER,this,showInfotext,["冰红茶"]);
    ibt.on(Event.MOUSE_OUT,this,hideInfotext);
    ibt.on(Event.CLICK,this,holdDrink,[ibt,"hold_ibt.png","ibt",300,1]);
}

function showMilk() {
    page02.addChild(mk);
    mk.loadImage("drink/milk.png");
    mk.pos(369,102);

    mk.on(Event.MOUSE_OVER,this,showInfotext,["牛奶"]);
    mk.on(Event.MOUSE_OUT,this,hideInfotext);
    mk.on(Event.CLICK,this,holdDrink,[mk,"hold_mk.png","mk",720,1]);
}

function showSugar() {
    page02.addChild(sugar);
    sugar.loadImage("drink/sugar.png");
    sugar.pos(437,129);

    sugar.on(Event.MOUSE_OVER,this,showInfotext,["白糖"]);
    sugar.on(Event.MOUSE_OUT,this,hideInfotext);
    sugar.on(Event.CLICK,this,holdDrink,[sugar,"hold_sugar.png","sugar",800,1]);
}

function showPulsation() {
    page02.addChild(pu);
    pu.loadImage("drink/pulsation.png");
    pu.pos(489,62);

    pu.on(Event.MOUSE_OVER,this,showInfotext,["脉动"]);
    pu.on(Event.MOUSE_OUT,this,hideInfotext);
    pu.on(Event.CLICK,this,holdDrink,[pu,"hold_pu.png","pu",700,1]);
}

function showOrangeJuice() {
    page02.addChild(oj);
    oj.loadImage("drink/OrangeJuice.png");
    oj.pos(545,58);

    oj.on(Event.MOUSE_OVER,this,showInfotext,["橙汁"]);
    oj.on(Event.MOUSE_OUT,this,hideInfotext);
    oj.on(Event.CLICK,this,holdDrink,[oj,"hold_oj.png","oj",500,1]);
}

function showCoconutJuice() {
    page02.addChild(cj);
    cj.loadImage("drink/CoconutJuice.png");
    cj.pos(601,102);

    cj.on(Event.MOUSE_OVER,this,showInfotext,["椰汁"]);
    cj.on(Event.MOUSE_OUT,this,hideInfotext);
    cj.on(Event.CLICK,this,holdDrink,[cj,"hold_cj.png","cj",750,1]);
}

function showGreenTea() {
    page02.addChild(gt);
    gt.loadImage("drink/greenTea.png");
    gt.pos(649,57);

    gt.on(Event.MOUSE_OVER,this,showInfotext,["绿茶"]);
    gt.on(Event.MOUSE_OUT,this,hideInfotext);
    gt.on(Event.CLICK,this,holdDrink,[gt,"hold_gt.png","gt",1200,1]);
}

function showNutritionExpress() {
    page02.addChild(ne);
    ne.loadImage("drink/NutritionExpress.png");
    ne.pos(701,62);

    ne.on(Event.MOUSE_OVER,this,showInfotext,["营养快线"]);
    ne.on(Event.MOUSE_OUT,this,hideInfotext);
    ne.on(Event.CLICK,this,holdDrink,[ne,"hold_ne.png","ne",750,1]);
}

function showJuicer(){
    page02.addChild(juicer);
    juicer.loadImage("drink/Juicer.png");
    juicer.pos(55,223);

    juicer.on(Event.MOUSE_OVER,this,showInfotext,["榨汁机，点击开启"]);
    juicer.on(Event.MOUSE_OUT,this,hideInfotext);
    juicer.on(Event.CLICK,this,ClickJuicer);
}

function showSalt() {
    page02.addChild(salt);
    salt.loadImage("drink/salt.png");
    salt.pos(163,273);

    salt.on(Event.MOUSE_OVER,this,showInfotext,["盐"]);
    salt.on(Event.MOUSE_OUT,this,hideInfotext);
    salt.on(Event.CLICK,this,holdDrink,[salt,"hold_salt.png","salt",1500,1]);
}

function showGinger() {
    page02.addChild(ginger);
    ginger.loadImage("drink/ginger.png");
    ginger.pos(218,210);

    ginger.on(Event.MOUSE_OVER,this,showInfotext,["姜汁"]);
    ginger.on(Event.MOUSE_OUT,this,hideInfotext);
    ginger.on(Event.CLICK,this,holdDrink,[ginger,"hold_ginger.png","ginger",2000,1]);
}

function showSoymilk() {
    page02.addChild(soymilk);
    soymilk.loadImage("drink/Soymilk.png");
    soymilk.pos(266,205);

    soymilk.on(Event.MOUSE_OVER,this,showInfotext,["豆奶"]);
    soymilk.on(Event.MOUSE_OUT,this,hideInfotext); 
    soymilk.on(Event.CLICK,this,holdDrink,[soymilk,"hold_soymilk.png","soymilk",1650,1]);   
}

function showHoney() {
    page02.addChild(honey);
    honey.loadImage("drink/Honey.png");
    honey.pos(314,256);

    honey.on(Event.MOUSE_OVER,this,showInfotext,["蜂蜜"]);
    honey.on(Event.MOUSE_OUT,this,hideInfotext);    
    honey.on(Event.CLICK,this,holdDrink,[honey,"hold_honey.png","honey",300,1]);   
}

function showVinegar() {
    page02.addChild(Vinegar);
    Vinegar.loadImage("drink/vinegar.png");
    Vinegar.pos(382,223);

    Vinegar.on(Event.MOUSE_OVER,this,showInfotext,["醋"]);
    Vinegar.on(Event.MOUSE_OUT,this,hideInfotext);  
    Vinegar.on(Event.CLICK,this,holdDrink,[Vinegar,"hold_Vinegar.png","Vinegar",4300,1]); 
}

function showSoysauce() {
    page02.addChild(Soysauce);
    Soysauce.loadImage("drink/soysauce.png");
    Soysauce.pos(444,215);

    Soysauce.on(Event.MOUSE_OVER,this,showInfotext,["酱油"]);
    Soysauce.on(Event.MOUSE_OUT,this,hideInfotext);  
    Soysauce.on(Event.CLICK,this,holdDrink,[Soysauce,"hold_Soysauce.png","Soysauce",4000,1]); 
}

function showBhscs() {
    page02.addChild(bhscs);
    bhscs.loadImage("drink/bhscs.png");
    bhscs.pos(499,203);

    bhscs.on(Event.MOUSE_OVER,this,showInfotext,["百花蛇草水"]);
    bhscs.on(Event.MOUSE_OUT,this,hideInfotext);   
    bhscs.on(Event.CLICK,this,holdDrink,[bhscs,"hold_bhscs.png","bhscs",1900,1]);  
}

function showSyrup() {
    page02.addChild(Syrup);
    Syrup.loadImage("drink/syrup.png");
    Syrup.pos(546,225);

    Syrup.on(Event.MOUSE_OVER,this,showInfotext,["糖浆"]);
    Syrup.on(Event.MOUSE_OUT,this,hideInfotext);  
    Syrup.on(Event.CLICK,this,holdDrink,[Syrup,"hold_Syrup.png","Syrup",100,1]); 
}

function showIjovo() {
    page02.addChild(ijovo);
    ijovo.loadImage("drink/ijovo.png");
    ijovo.pos(596,251);

    ijovo.on(Event.MOUSE_OVER,this,showInfotext,["江小白"]);
    ijovo.on(Event.MOUSE_OUT,this,hideInfotext);  
    ijovo.on(Event.CLICK,this,holdDrink,[ijovo,"hold_ijovo.png","ijovo",0,0]); 
}

function showCoffee() {
    page02.addChild(coffee);
    coffee.loadImage("drink/coffee.png");
    coffee.pos(655,191);

    coffee.on(Event.MOUSE_OVER,this,showInfotext,["咖啡"]);
    coffee.on(Event.MOUSE_OUT,this,hideInfotext);  
    coffee.on(Event.CLICK,this,holdDrink,[coffee,"hold_coffee.png","coffee",1300,1]); 
}

function showIcecake() {
    page02.addChild(icecake);
    icecake.loadImage("drink/icecake.png");
    icecake.pos(185,325);  

    icecake.on(Event.MOUSE_OVER,this,showInfotext,["冰块"]);
    icecake.on(Event.MOUSE_OUT,this,hideInfotext);
    icecake.on(Event.CLICK,this,holdIcecake);
}

function showVegetables() {
    var vegetable = new Sprite();
    page02.addChild(vegetable);
    vegetable.loadImage("drink/Vegetables.png");
    vegetable.pos(295,357);

     // 黄瓜
    page02.addChild(cucumber);
    cucumber.loadImage("drink/Vegetables/cucumber.png");
    cucumber.pos(400,357);
    cucumber.on(Event.MOUSE_OVER,this,showInfotext,["黄瓜"]);
    cucumber.on(Event.MOUSE_OUT,this,hideInfotext);
    cucumber.on(Event.CLICK,this,holdVegetables,[1150,1,"黄瓜","cucumber"]); 
    // cucumber.on(Event.MOUSE_DOWN,this,onStartDrag);

    // 胡萝卜
    page02.addChild(carrot);
    carrot.loadImage("drink/Vegetables/Carrot.png");
    carrot.pos(388,357);
    carrot.on(Event.MOUSE_OVER,this,showInfotext,["胡萝卜"]);
    carrot.on(Event.MOUSE_OUT,this,hideInfotext);
    carrot.on(Event.CLICK,this,holdVegetables,[1500,1,"胡萝卜","carrot"]);

    // 西红柿
    page02.addChild(tomato);
    tomato.loadImage("drink/Vegetables/tomato.png");
    tomato.pos(407,379);
    tomato.on(Event.MOUSE_OVER,this,showInfotext,["西红柿"]);
    tomato.on(Event.MOUSE_OUT,this,hideInfotext);
    tomato.on(Event.CLICK,this,holdVegetables,[1250,1,"西红柿","tomato"]);

    // 薄荷
    page02.addChild(mint);
    mint.loadImage("drink/Vegetables/Mint.png");
    mint.pos(341,358);
    mint.on(Event.MOUSE_OVER,this,showInfotext,["薄荷"]);
    mint.on(Event.MOUSE_OUT,this,hideInfotext);
    mint.on(Event.CLICK,this,holdVegetables,[350,1,"薄荷","mint"]);

    // 洋葱
    page02.addChild(onion);
    onion.loadImage("drink/Vegetables/onion.png");
    onion.pos(299,368);
    onion.on(Event.MOUSE_OVER,this,showInfotext,["洋葱"]);
    onion.on(Event.MOUSE_OUT,this,hideInfotext);
    onion.on(Event.CLICK,this,holdVegetables,[3900,1,"洋葱","onion"]);

    // 鸡蛋
    page02.addChild(egg);
    egg.loadImage("drink/Vegetables/egg.png");
    egg.pos(357,386);
    egg.on(Event.MOUSE_OVER,this,showInfotext,["鸡蛋"]);
    egg.on(Event.MOUSE_OUT,this,hideInfotext);
    egg.on(Event.CLICK,this,holdVegetables,[1150,1,"鸡蛋","egg"]);

    // 辣椒
    page02.addChild(pepper);
    pepper.loadImage("drink/Vegetables/Pepper.png");
    pepper.pos(303,388);
    pepper.on(Event.MOUSE_OVER,this,showInfotext,["辣椒"]);
    pepper.on(Event.MOUSE_OUT,this,hideInfotext);
    pepper.on(Event.CLICK,this,holdVegetables,[4200,1,"辣椒","pepper"]);

     // 大蒜
    page02.addChild(garlic);
    garlic.loadImage("drink/Vegetables/garlic.png");
    garlic.pos(341,378);
    garlic.on(Event.MOUSE_OVER,this,showInfotext,["大蒜"]);
    garlic.on(Event.MOUSE_OUT,this,hideInfotext);
    garlic.on(Event.CLICK,this,holdVegetables,[4300,1,"大蒜","garlic"]);
}

function showFruits() {
    var fruit = new Sprite();
    page02.addChild(fruit);
    fruit.loadImage("drink/Fruits.png");
    fruit.pos(473,332);

    // 香蕉
    page02.addChild(banana);
    banana.loadImage("drink/Fruits/banana.png");
    banana.pos(483,332);
    banana.on(Event.MOUSE_OVER,this,showInfotext,["香蕉"]);
    banana.on(Event.MOUSE_OUT,this,hideInfotext);
    banana.on(Event.CLICK,this,holdFruits,[1000,1,"香蕉","banana"]);

    // 橙子
    page02.addChild(orange);
    orange.loadImage("drink/Fruits/orange.png");
    orange.pos(547,342);
    orange.on(Event.MOUSE_OVER,this,showInfotext,["橙子"]);
    orange.on(Event.MOUSE_OUT,this,hideInfotext);
    orange.on(Event.CLICK,this,holdFruits,[1000,1,"橙子","orange"]);

    // 石榴
    page02.addChild(pomegranate);
    pomegranate.loadImage("drink/Fruits/pomegranate.png");
    pomegranate.pos(481,376);
    pomegranate.on(Event.MOUSE_OVER,this,showInfotext,["石榴"]);
    pomegranate.on(Event.MOUSE_OUT,this,hideInfotext);
    pomegranate.on(Event.CLICK,this,holdFruits,[950,1,"石榴","pomegranate"]);

    // 芒果
    page02.addChild(mango);
    mango.loadImage("drink/Fruits/mango.png");
    mango.pos(516,367);
    mango.on(Event.MOUSE_OVER,this,showInfotext,["芒果"]);
    mango.on(Event.MOUSE_OUT,this,hideInfotext);
    mango.on(Event.CLICK,this,holdFruits,[1350,1,"芒果","mango"]);

    // 苹果
    page02.addChild(apple);
    apple.loadImage("drink/Fruits/apple.png");
    apple.pos(514,350);
    apple.on(Event.MOUSE_OVER,this,showInfotext,["苹果"]);
    apple.on(Event.MOUSE_OUT,this,hideInfotext);
    apple.on(Event.CLICK,this,holdFruits,[1100,1,"苹果","apple"]);

    // 梨
    page02.addChild(pear);
    pear.loadImage("drink/Fruits/pear.png");
    pear.pos(551,360);
    pear.on(Event.MOUSE_OVER,this,showInfotext,["梨"]);
    pear.on(Event.MOUSE_OUT,this,hideInfotext);
    pear.on(Event.CLICK,this,holdFruits,[1450,1,"梨","pear"]);

    // 西瓜
    page02.addChild(watermelon);
    watermelon.loadImage("drink/Fruits/watermelon.png");
    watermelon.pos(577,354);
    watermelon.on(Event.MOUSE_OVER,this,showInfotext,["西瓜"]);
    watermelon.on(Event.MOUSE_OUT,this,hideInfotext);
    watermelon.on(Event.CLICK,this,holdFruits,[1250,1,"西瓜","watermelon"]);

     // 柠檬
    page02.addChild(lemon);
    lemon.loadImage("drink/Fruits/lemon.png");
    lemon.pos(580,383);
    lemon.on(Event.MOUSE_OVER,this,showInfotext,["柠檬"]);
    lemon.on(Event.MOUSE_OUT,this,hideInfotext);
    lemon.on(Event.CLICK,this,holdFruits,[400,1,"柠檬","lemon"]);

    // 葡萄
    page02.addChild(grape);
    grape.loadImage("drink/Fruits/grape.png");
    grape.pos(577,354);
    grape.on(Event.MOUSE_OVER,this,showInfotext,["葡萄"]);
    grape.on(Event.MOUSE_OUT,this,hideInfotext);
    grape.on(Event.CLICK,this,holdFruits,[1500,1,"葡萄","grape"]);
}

function showNormal() {
    normal.loadImage("role/normal.png");
    page02.addChild(normal);
}

function showShaker() {
    page02.addChild(Shaker);
    Shaker.loadImage("drink/Shaker.png");
}

function showWineGlass() {
    page02.addChild(wg);
    wg.loadImage("drink/WineGlass.png");
}


function showInfotext(value){
    document.body.style.cursor="url('../bin/btn/point.png'),auto";

    label.text = value;
    page02.addChild(label);
}

function hideInfotext() {
    var str1 = addDrink_bl.text;

    document.body.style.cursor="auto";
    if(IsShake){
        label.text = "点击品鉴，来尝尝看吧";
        page02.addChild(label);
    }else if(str1.split(",").length > 1){
        label.text = "选择其他配料，并长按添加";
        page02.addChild(label);
    }else{
        label.text = "点击选中江小白，并长按添加，倒入基酒";    
        page02.addChild(label);  
    }
}

// 取物
function holdDrink(value01,value02,value03,value04,value5) {
    showAll();
    showNormal();
    showIcecake();
    showFruits();
    
    page02.removeChild(Shaker);
    page02.removeChild(vegeLabel);
    page02.removeChild(fruitLabel);
    page02.removeChild(normal);
    page02.removeChild(value01);
    
    hold.graphics.clear();

    hold.loadImage("hold/"+value02);
    page02.addChild(hold);

    label.text = "长按添加,倒入配料";
    page02.addChild(label);
    value01.off(Event.MOUSE_OUT, this, hideInfotext);

    
    core_current = value04;
    console.log(core_current);

    addCount = value5;

    clickDrink_bl.text = value03;
}

function holdVegetables(value01,value02,value03,value04) {
    showAll();
    showNormal();
    showShaker();
    showIcecake();
    showFruits();
    page02.removeChild(fruitLabel);
    page02.removeChild(hold);
    if(drinkCount>4){
        label.text = "配料太多，满出来了！点击混合摇匀吧！";
        page02.addChild(label);
    }else{
        label.text = value03+"+1";
        page02.addChild(label);
        core_current = value01;
        addCount = value02;

        vegeLabel.width = 120;
        vegeLabel.height = 50;
        vegeLabel.x = 325;
        vegeLabel.y = 306;
        vegeLabel.font = "黑体";
        vegeLabel.fontSize = 25;
        vegeLabel.color = "#fff";
        vegeLabel.text = value03+"+1";
        page02.addChild(vegeLabel);
        clickVegetable_bl.text = value04;

        core += core_current;
        drinkCount += addCount;
        addVegetable_bl.text += clickVegetable_bl.text+",";
    }
   
    clickVegetable_bl.text = "";
    console.log(addVegetable_bl.text+","+core+","+drinkCount);
}

function holdFruits(value01,value02,value03,value04) {
    showAll();
    showNormal();
    showShaker();
    showIcecake();
    showFruits();
    page02.removeChild(vegeLabel);
    page02.removeChild(hold);

    var str1 = addDrink_bl.text;
    var str3 = addFruit_bl.text;
     
    if(str3.split(",").length<3 && str1.split(",").length == 4 && str1.indexOf("ijovo")>-1 && str1.indexOf("honey")>-1 && str1.indexOf("sw")>-1 && (value04 == "apple" || value04 == "pear" || value04 == "lemon" || value04 == "mango" || value04 == "orange")){
        label.text = value03+"+1";
        page02.addChild(label);
        core_current = value01;
        addCount = value02;

        fruitLabel.width = 120;
        fruitLabel.height = 50;
        fruitLabel.x = 525;
        fruitLabel.y = 306;
        fruitLabel.font = "微软雅黑";
        fruitLabel.fontSize = 25;
        fruitLabel.color = "#fff";
        fruitLabel.text = value03+"+1";
        page02.addChild(fruitLabel);
        clickFruit_bl.text = value04;

        core += core_current;
        
        addFruit_bl.text += clickFruit_bl.text+",";
        
    }else if(drinkCount>4){
        label.text = "配料太多，满出来了！点击混合摇匀吧！";
        page02.addChild(label);

        page02.removeChild(fruitLabel);
    }else{
        label.text = value03+"+1";
        page02.addChild(label);
        core_current = value01;
        addCount = value02;

        fruitLabel.width = 120;
        fruitLabel.height = 50;
        fruitLabel.x = 525;
        fruitLabel.y = 306;
        fruitLabel.font = "微软雅黑";
        fruitLabel.fontSize = 25;
        fruitLabel.color = "#fff";
        fruitLabel.text = value03+"+1";
        page02.addChild(fruitLabel);
        clickFruit_bl.text = value04;

        core += core_current;
        drinkCount += addCount;
        addFruit_bl.text += clickFruit_bl.text+",";
    }
   
    clickFruit_bl.text = "";
    console.log(addFruit_bl.text+","+core+","+drinkCount);
}

function holdIcecake() {
    coreIcecake = 20;
    label.text = "冰块+1";
    addIcecake_bl.text = "icecake";
}

// function onStartDrag() {
//     console.log("拖");
//     var dragWidthLimit = 400;
// 	var dragHeightLimit = 200;
// 	dragRegion = new Rectangle(page02.width - dragWidthLimit >> 1, page02.height - dragHeightLimit >> 1, dragWidthLimit, dragHeightLimit);
//     cucumber.startDrag(dragRegion, true, 100);
// }

function ClickJuicer() {
    label.text = "请点击选择要添加的果汁";
    page02.addChild(label_apple);

    page02.removeChild(vegeLabel);
    page02.removeChild(fruitLabel);
    
    label_apple.on(Event.MOUSE_OVER,this,showInfotext,["苹果汁，点击添加"]);
    label_apple.on(Event.CLICK,this,addFruitJuice,[900,1,"苹果汁","apple_juice"]);

    page02.addChild(label_banana);
    label_banana.on(Event.MOUSE_OVER,this,showInfotext,["香蕉汁，点击添加"]);
    label_banana.on(Event.CLICK,this,addFruitJuice,[800,1,"香蕉汁","banana_juice"]);

    page02.addChild(label_watermelon);
    label_watermelon.on(Event.MOUSE_OVER,this,showInfotext,["西瓜汁，点击添加"]);
    label_watermelon.on(Event.CLICK,this,addFruitJuice,[1050,1,"西瓜汁","watermelon_juice"]);

    page02.addChild(label_pear);
    label_pear.on(Event.MOUSE_OVER,this,showInfotext,["梨汁，点击添加"]);
    label_pear.on(Event.CLICK,this,addFruitJuice,[1250,1,"梨汁","pear_juice"]);

    page02.addChild(label_grape);
    label_grape.on(Event.MOUSE_OVER,this,showInfotext,["葡萄汁，点击添加"]);
    label_grape.on(Event.CLICK,this,addFruitJuice,[1300,1,"葡萄汁","grape_juice"]);

    page02.addChild(label_mango);
    label_mango.on(Event.MOUSE_OVER,this,showInfotext,["芒果汁，点击添加"]);
    label_mango.on(Event.CLICK,this,addFruitJuice,[1150,1,"芒果汁","mango_juice"]);

    page02.addChild(label_lemon);
    label_lemon.on(Event.MOUSE_OVER,this,showInfotext,["柠檬汁，点击添加"]);
    label_lemon.on(Event.CLICK,this,addFruitJuice,[200,1,"柠檬汁","lemon_juice"]);

    page02.addChild(label_pomegranate);
    label_pomegranate.on(Event.MOUSE_OVER,this,showInfotext,["石榴汁，点击添加"]);
    label_pomegranate.on(Event.CLICK,this,addFruitJuice,[750,1,"石榴汁","pomegranate_juice"]);

    page02.addChild(label_cucumber);
    label_cucumber.on(Event.MOUSE_OVER,this,showInfotext,["黄瓜汁，点击添加"]);
    label_cucumber.on(Event.CLICK,this,addFruitJuice,[950,1,"黄瓜汁","cucumber_juice"]);

    page02.addChild(label_tomato);
    label_tomato.on(Event.MOUSE_OVER,this,showInfotext,["西红柿汁，点击添加"]);
    label_tomato.on(Event.CLICK,this,addFruitJuice,[1050,1,"西红柿汁","tomato_juice"]);
}

function addFruitJuice(v1,v2,v3,v4) {
    showAll();
    showNormal();
    showIcecake();
    showFruits();
    showShaker();

    page02.removeChild(hold);

    if(drinkCount>4){
        label.text = "配料太多";
        page02.addChild(label);
    }else{
        label.text = v3+"+1";
        page02.addChild(label);
        core_current = v1;
        addCount = v2;

        clickFruit_bl.text = v4;

        core += core_current;
        drinkCount += addCount;
        addFruit_bl.text += clickFruit_bl.text+",";
    }
   
    clickFruit_bl.text = "";
    console.log(addFruit_bl.text+","+core+","+drinkCount);
}

// 显示所有饮料
function showAll() {
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
    showSalt();
    showGinger();
    showVinegar();
    showSoymilk();
    showHoney();
    showSoysauce();
    showBhscs();
    showSyrup();
    showIjovo();
    showCoffee();
}


// 显示结果
function showResult() {
    console.log("显示结果");
    destroyPage02();
    var bg03 = new Laya.Sprite();
    bg03.loadImage("bg/bg03.png");
    bg03.scaleMode = "showall";
    Laya.stage.addChild(bg03);

    // 得分
    var coreLast = new laya.ui.Label();
    coreLast.font = "微软雅黑";
    coreLast.color = "#f7d542";
    coreLast.bold = true;
    coreLast.text = "得分"+parseInt(coreSum)+"分";
    console.log(parseInt(coreSum));
    coreLast.fontSize = 26;
    coreLast.pos(558,162);
    coreLast.size(170,32);
    Laya.stage.addChild(coreLast);

    // 评价内容
    resultContent.fontSize = 20;
    resultContent.font = "宋体";
    resultContent.color = "#fff";
    resultContent.text =  result_c;
    resultContent.wordWrap = true;
    resultContent.pos(556,231);
    resultContent.size(177,143);
    resultContent.leading = 10;
    Laya.stage.addChild(resultContent);
    

    // 再来按钮
    var playAgainbtn = new Sprite();
    Laya.stage.addChild(playAgainbtn);
    playAgainbtn.loadImage("btn/playAgain.png");
    playAgainbtn.pos(597,405);   
    playAgainbtn.size(81,81);

    playAgainbtn.on(Event.CLICK,this,playNew);
   

    setMap();

    if(getCookie("gametoken")=="undefined" || getCookie("gametoken")==""){
        console.log("no")
    }else{
        // 分享结果
        // var shareR = new laya.ui.Label();
        // shareR.fontSize = 20;
        // shareR.font = "微软雅黑";
        // shareR.color = "#fff";
        // shareR.text =  "查看分享结果";
        // shareR.bold = true;
        // shareR.pos(576,510);
        // shareR.size(130,23);
        // Laya.stage.addChild(shareR);

        // shareR.on(Event.CLICK,this,shareUrl)

        var adList = [];
        var avList = [];
        var aiList;
        var afList = [];
        var FinalList = [];

        if(addDrink_bl.text!=''){
            var ad = addDrink_bl.text.split(",");
            for(var i=0;i<ad.length-1;i++){
                adList[i] = dcy.get(ad[i]);
                console.log(adList[i]);
                FinalList+=adList[i]+',';
            }
        } 
        if(addVegetable_bl.text!=''){
            var av = addVegetable_bl.text.split(",");
            for(var i=0;i<av.length-1;i++){
                avList[i] = dcy.get(av[i]);
                console.log(avList[i]);
                FinalList+=avList[i]+',';
            }
        }
        if(addIcecake_bl.text!=''){
            aiList = "冰块";
           console.log(aiList);
           FinalList+=aiList+',';
        }
        if(addFruit_bl.text!=''){
            var af = addFruit_bl.text.split(",");
            for(var i=0;i<af.length-1;i++){
                afList[i] = dcy.get(af[i]);
                console.log(afList[i]);
                  FinalList+=afList[i]+',';
            }
        }
        
        console.log(FinalList);
        var reg=/,$/gi; 
        FinalList=FinalList.replace(reg,""); 
        console.log(FinalList);

        var c = parseInt(coreSum)

        connect(c,result_c,FinalList);
    }
}

// function openN(v,p1,p2) {
//     console.log(v);
//     window.open("http://"+v+"?name="+p1+"?core="+p2);
// }

function destroyPage02() {
    Laya.stage.removeChild(page02);
}

function playNew() {
    console.log("再来");
    window.location.href = "index.html#"+getCookie("gametoken")+"&url="+encodeURI(sessionStorage.getItem("postUrl"));
    window.location.reload();
}

function shareUrl(){
    // window.openN("www.baidu.com");
    console.log(sessionStorage.getItem("data"));
    var data = sessionStorage.getItem("data");
    window.open(data);
}

var httr;

function connect(c,r,f){
    httr = new HttpRequest();
    token = getCookie("gametoken");
    console.log(token);
    var pUrl = sessionStorage.getItem("postUrl"); 

    httr.once(Event.COMPLETE, this, onHttpRequestComplete);
    httr.send(pUrl,'score='+c+'&'+token+'&content='+r+'&additive='+f,'post','text');
}

function onHttpRequestComplete(e){
    var data = JSON.parse(httr.data);
    if(data.code == 0){
        sessionStorage.setItem("data",data.data); 
    }  
}

function getCookie(c_name){
    if (document.cookie.length>0){
        var c_start=document.cookie.indexOf(c_name + "=")
            if (c_start!=-1){ 
                c_start=c_start + c_name.length+1 
                var c_end=document.cookie.indexOf(";",c_start)
                if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end))
            } 
        }
    return ""
}

function setMap(){
    dcy.set('hs', '金银花露');
    dcy.set('sw','苏打水');
    dcy.set('cl','可乐');
    dcy.set('spr','雪碧');
    dcy.set('ibt','冰红茶');
    dcy.set('mk','牛奶');
    dcy.set('sugar','白糖');
    dcy.set('pu','脉动');
    dcy.set('oj','橙汁');
    dcy.set('cj','椰汁');
    dcy.set('gt','绿茶');
    dcy.set('ne','营养快线');
    dcy.set('salt','盐');
    dcy.set('ginger','姜汁');
    dcy.set('soymilk','豆奶');
    dcy.set('honey','蜂蜜');
    dcy.set('Vinegar','醋');
    dcy.set('Soysauce','酱油');
    dcy.set('bhscs','百花蛇草水');
    dcy.set('Syrup','糖浆');
    dcy.set('ijovo','江小白');
    dcy.set('coffee','咖啡');
    dcy.set('icecake','冰块');

    dcy.set('cucumber','黄瓜');
    dcy.set('carrot','胡萝卜');
    dcy.set('tomato','西红柿');
    dcy.set('mint','薄荷');
    dcy.set('onion','洋葱');
    dcy.set('egg','鸡蛋');
    dcy.set('pepper','辣椒');
    dcy.set('garlic','大蒜');

    dcy.set('banana','香蕉');
    dcy.set('orange','橙子');
    dcy.set('pomegranate','石榴');
    dcy.set('mango','芒果');
    dcy.set('apple','苹果');
    dcy.set('pear','梨');
    dcy.set('watermelon','西瓜');
    dcy.set('lemon','柠檬');
    dcy.set('grape','葡萄');

    dcy.set('apple_juice','苹果汁');
    dcy.set('banana_juice','香蕉汁');
    dcy.set('watermelon_juice','西瓜汁');
    dcy.set('pear_juice','梨汁');
    dcy.set('grape_juice','葡萄汁');
    dcy.set('mango_juice','芒果汁');
    dcy.set('lemon_juice','柠檬汁');
    dcy.set('pomegranate_juice','石榴汁');
    dcy.set('cucumber_juice','黄瓜汁');
    dcy.set('tomato_juice','西红柿汁');

}


function Dictionary(){
    var items = {};
    this.set = function(key, value){
        items[key] = value; 
    };
    this.delete = function(key){
        if (this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };
    this.has = function(key){
        return items.hasOwnProperty(key);
    };
    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };
    this.clear = function(){
        items = {};
    };
    this.size = function(){
        return Object.keys(items).length;
    };
    this.keys = function(){
        return Object.keys(items);
    };
    this.values = function(){
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };
    this.each = function(fn) {
        for (var k in items) {
            if (this.has(k)) {
                fn(k, items[k]);
            }
        }
    };
    this.getItems = function(){
        return items;
    }
}