
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text4}","click",function(sym,e){window.open("Extras.html","Extras","width=1000,height=622");window.close();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text12}","click",function(sym,e){window.open("Abertura1.html","Abertura1","width=1130,height=630");window.close();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'torio'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.getComposition().getStage().getSymbol("t1").stop(1000);sym.getComposition().getStage().getSymbol("t2").stop(1000);sym.getComposition().getStage().getSymbol("t3").stop(1000);sym.getComposition().getStage().getSymbol("t").stop(1000);sym.getComposition().getStage().getSymbol("dias").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text8}","click",function(sym,e){sym.getComposition().getStage().getSymbol("t1").play(1000);sym.getComposition().getStage().getSymbol("t3").play(1000);sym.getComposition().getStage().getSymbol("t2").play(1000);sym.getComposition().getStage().getSymbol("tn1").play(1000);sym.getComposition().getStage().getSymbol("tn3").play(1000);sym.getComposition().getStage().getSymbol("tn2").play(1000);sym.getComposition().getStage().getSymbol("t").play(1000);if(sym.getComposition().getStage().getSymbol("u1").$("Text11").is(":visible")){sym.getComposition().getStage().getSymbol("u1").$("Text11").hide();}else{sym.getComposition().getStage().getSymbol("u1").$("Text11").show();}
if(sym.getComposition().getStage().getSymbol("Symbol_1").$("Text13").is(":visible")){sym.getComposition().getStage().getSymbol("Symbol_1").$("Text13").hide();}else{sym.getComposition().getStage().getSymbol("Symbol_1").$("Text13").show();}
if(sym.getComposition().getStage().getSymbol("anos").$("Text14").is(":visible")){sym.getComposition().getStage().getSymbol("anos").$("Text14").hide();}else{sym.getComposition().getStage().getSymbol("anos").$("Text14").show();}
if(sym.getComposition().getStage().getSymbol("Symbol_2").$("Text12").is(":visible")){sym.getComposition().getStage().getSymbol("Symbol_2").$("Text12").hide();}else{sym.getComposition().getStage().getSymbol("Symbol_2").$("Text12").show();}
sym.getComposition().getStage().getSymbol("u1").$("Text11").hide();sym.getComposition().getStage().getSymbol("Symbol_1").$("Text13").hide();sym.getComposition().getStage().getSymbol("Symbol_2").$("Text12").hide();sym.getComposition().getStage().getSymbol("anos").$("Text14").hide();sym.getComposition().getStage().getSymbol("dias").play(1000);});
//Edge binding end
})("torio");
//Edge symbol end:'torio'

//=========================================================

//Edge symbol: 't1'
(function(symbolName){})("t1");
//Edge symbol end:'t1'

//=========================================================

//Edge symbol: 't2'
(function(symbolName){})("t2");
//Edge symbol end:'t2'

//=========================================================

//Edge symbol: 't3'
(function(symbolName){})("t3");
//Edge symbol end:'t3'

//=========================================================

//Edge symbol: 'tn1'
(function(symbolName){})("tn1");
//Edge symbol end:'tn1'

//=========================================================

//Edge symbol: 'tn2'
(function(symbolName){})("tn2");
//Edge symbol end:'tn2'

//=========================================================

//Edge symbol: 'tn3'
(function(symbolName){})("tn3");
//Edge symbol end:'tn3'

//=========================================================

//Edge symbol: 'u238'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.getComposition().getStage().getSymbol("dias").stop(1000);sym.getComposition().getStage().getSymbol("u1").stop(1000);sym.getComposition().getStage().getSymbol("Symbol_1").stop(1000);sym.getComposition().getStage().getSymbol("Symbol_2").stop(1000);sym.getComposition().getStage().getSymbol("anos").stop(1000);sym.getComposition().getStage().getSymbol("t1").stop(1000);sym.getComposition().getStage().getSymbol("t3").stop(1000);sym.getComposition().getStage().getSymbol("t2").stop(1000);sym.getComposition().getStage().getSymbol("t").stop(1000);sym.getComposition().getStage().getSymbol("tn1").stop(1000);sym.getComposition().getStage().getSymbol("tn3").stop(1000);sym.getComposition().getStage().getSymbol("tn2").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text10}","click",function(sym,e){if(sym.getComposition().getStage().getSymbol("tn1").$("Text").is(":visible")){sym.getComposition().getStage().getSymbol("tn1").$("Text").hide();}else{sym.getComposition().getStage().getSymbol("tn1").$("Text").show();}
if(sym.getComposition().getStage().getSymbol("tn3").$("Text6").is(":visible")){sym.getComposition().getStage().getSymbol("tn3").$("Text6").hide();}else{sym.getComposition().getStage().getSymbol("tn3").$("Text6").show();}
if(sym.getComposition().getStage().getSymbol("tn2").$("Text4").is(":visible")){sym.getComposition().getStage().getSymbol("tn2").$("Text4").hide();}else{sym.getComposition().getStage().getSymbol("tn2").$("Text4").show();}
if(sym.getComposition().getStage().getSymbol("dias").$("Text").is(":visible")){sym.getComposition().getStage().getSymbol("dias").$("Text").hide();}else{sym.getComposition().getStage().getSymbol("dias").$("Text").show();}
sym.getComposition().getStage().getSymbol("u1").play(1000);sym.getComposition().getStage().getSymbol("Symbol_1").play(1000);sym.getComposition().getStage().getSymbol("Symbol_2").play(1000);sym.getComposition().getStage().getSymbol("anos").play(1000);sym.getComposition().getStage().getSymbol("t1").play(1000);sym.getComposition().getStage().getSymbol("t3").play(1000);sym.getComposition().getStage().getSymbol("t2").play(1000);sym.getComposition().getStage().getSymbol("t").play(1000);});
//Edge binding end
})("u238");
//Edge symbol end:'u238'

//=========================================================

//Edge symbol: 't'
(function(symbolName){})("t");
//Edge symbol end:'t'

//=========================================================

//Edge symbol: 'u1'
(function(symbolName){})("u1");
//Edge symbol end:'u1'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'Symbol_2'
(function(symbolName){})("Symbol_2");
//Edge symbol end:'Symbol_2'

//=========================================================

//Edge symbol: 'anos'
(function(symbolName){})("anos");
//Edge symbol end:'anos'

//=========================================================

//Edge symbol: 'dias'
(function(symbolName){})("dias");
//Edge symbol end:'dias'
})(jQuery,AdobeEdge,"EDGE-5667847");