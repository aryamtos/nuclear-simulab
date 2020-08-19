
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text3}","click",function(sym,e){window.open("Quarks.html","Quarks","width=1000,height=622");window.close();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text7}","click",function(sym,e){window.open("Extras.html","Extras","width=1000,height=622");window.close();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'quark'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("quark");
//Edge symbol end:'quark'

//=========================================================

//Edge symbol: 'textop'
(function(symbolName){})("textop");
//Edge symbol end:'textop'

//=========================================================

//Edge symbol: 'pn'
(function(symbolName){})("pn");
//Edge symbol end:'pn'

//=========================================================

//Edge symbol: 'nucleo'
(function(symbolName){})("nucleo");
//Edge symbol end:'nucleo'

//=========================================================

//Edge symbol: 'proton'
(function(symbolName){})("proton");
//Edge symbol end:'proton'

//=========================================================

//Edge symbol: 'click'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.getComposition().getStage().getSymbol("pn").stop(1000);sym.getComposition().getStage().getSymbol("nucleo").stop(1000);sym.getComposition().getStage().getSymbol("proton2").stop(1000);sym.getComposition().getStage().getSymbol("p").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_magnifier132}","click",function(sym,e){sym.getComposition().getStage().getSymbol("pn").play(1000);sym.getComposition().getStage().getSymbol("nucleo").play(1000);sym.getComposition().getStage().getSymbol("proton2").play(1000);sym.getComposition().getStage().getSymbol("p").play(1000);});
//Edge binding end
})("click");
//Edge symbol end:'click'

//=========================================================

//Edge symbol: 'p'
(function(symbolName){})("p");
//Edge symbol end:'p'

//=========================================================

//Edge symbol: 'l'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.getComposition().getStage().getSymbol("pn").stop(1000);sym.getComposition().getStage().getSymbol("p").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_magnifier13}","click",function(sym,e){sym.getComposition().getStage().getSymbol("pn").play(1000);sym.getComposition().getStage().getSymbol("p").play(1000);});
//Edge binding end
})("l");
//Edge symbol end:'l'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'pr1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.getComposition().getStage().getSymbol("down").stop(1000);sym.getComposition().getStage().getSymbol("up").stop(1000);sym.getComposition().getStage().getSymbol("up2").stop(1000);sym.getComposition().getStage().getSymbol("o").stop(1000);sym.getComposition().getStage().getSymbol("onda1").stop(1000);sym.getComposition().getStage().getSymbol("onda3").stop(1000);sym.getComposition().getStage().getSymbol("onda2").stop(1000);sym.getComposition().getStage().getSymbol("nucleoq").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Proton6}","click",function(sym,e){sym.getComposition().getStage().getSymbol("down").play(1000);sym.getComposition().getStage().getSymbol("up").play(1000);sym.getComposition().getStage().getSymbol("up2").play(1000);sym.getComposition().getStage().getSymbol("o").play(1000);sym.getComposition().getStage().getSymbol("onda1").play(1000);sym.getComposition().getStage().getSymbol("onda3").play(1000);sym.getComposition().getStage().getSymbol("onda2").play(1000);sym.getComposition().getStage().getSymbol("nucleoq").play(1000);});
//Edge binding end
})("pr1");
//Edge symbol end:'pr1'

//=========================================================

//Edge symbol: 'quark1'
(function(symbolName){})("quark1");
//Edge symbol end:'quark1'

//=========================================================

//Edge symbol: 'texto'
(function(symbolName){})("texto");
//Edge symbol end:'texto'

//=========================================================

//Edge symbol: 'neutro'
(function(symbolName){})("neutro");
//Edge symbol end:'neutro'

//=========================================================

//Edge symbol: 'n'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){});
//Edge binding end
})("n");
//Edge symbol end:'n'

//=========================================================

//Edge symbol: 'texto2'
(function(symbolName){})("texto2");
//Edge symbol end:'texto2'

//=========================================================

//Edge symbol: 'nucleoq'
(function(symbolName){})("nucleoq");
//Edge symbol end:'nucleoq'

//=========================================================

//Edge symbol: 'o'
(function(symbolName){})("o");
//Edge symbol end:'o'

//=========================================================

//Edge symbol: 'n1'
(function(symbolName){})("n1");
//Edge symbol end:'n1'

//=========================================================

//Edge symbol: 'up'
(function(symbolName){})("up");
//Edge symbol end:'up'

//=========================================================

//Edge symbol: 'up2'
(function(symbolName){})("up2");
//Edge symbol end:'up2'

//=========================================================

//Edge symbol: 'down'
(function(symbolName){})("down");
//Edge symbol end:'down'

//=========================================================

//Edge symbol: 'onda1'
(function(symbolName){})("onda1");
//Edge symbol end:'onda1'

//=========================================================

//Edge symbol: 'onda2'
(function(symbolName){})("onda2");
//Edge symbol end:'onda2'

//=========================================================

//Edge symbol: 'onda3'
(function(symbolName){})("onda3");
//Edge symbol end:'onda3'

//=========================================================

//Edge symbol: 'pro'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.getComposition().getStage().getSymbol("teste").stop(1000);});
//Edge binding end
})("pro");
//Edge symbol end:'pro'

//=========================================================

//Edge symbol: 'b'
(function(symbolName){})("b");
//Edge symbol end:'b'

//=========================================================

//Edge symbol: 'teste'
(function(symbolName){})("teste");
//Edge symbol end:'teste'

//=========================================================

//Edge symbol: 'begin'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text}","click",function(sym,e){sym.getComposition().getStage().getSymbol("u").play(1000);sym.getComposition().getStage().getSymbol("h").play(1000);sym.getComposition().getStage().getSymbol("torio").play(1000);sym.getComposition().getStage().getSymbol("formula").play(1000);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.getComposition().getStage().getSymbol("u").stop(1000);sym.getComposition().getStage().getSymbol("h").stop(1000);sym.getComposition().getStage().getSymbol("torio").stop(1000);sym.getComposition().getStage().getSymbol("f2").stop(1000);sym.getComposition().getStage().getSymbol("formula").stop(1000);});
//Edge binding end
})("begin");
//Edge symbol end:'begin'

//=========================================================

//Edge symbol: 'rect'
(function(symbolName){})("rect");
//Edge symbol end:'rect'

//=========================================================

//Edge symbol: 'texto1'
(function(symbolName){})("texto1");
//Edge symbol end:'texto1'
})(jQuery,AdobeEdge,"EDGE-3727983");