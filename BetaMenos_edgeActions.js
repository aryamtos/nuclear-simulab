
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_menu}","click",function(sym,e){window.open("Abertura.html","Abertura","widht=1000,height=622");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_voltar}","click",function(sym,e){window.open("index.html","index","width=1000,height=622");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'begin'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text}","click",function(sym,e){sym.getComposition().getStage().playAll();sym.getComposition().getStage().getSymbol("helio1").play(1000);sym.getComposition().getStage().getSymbol("uranio2").play(1000);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",203,function(sym,e){sym.getComposition().getStage().getSymbol("uranio2").stop(1000);sym.getComposition().getStage().stopAll();sym.getComposition().getStage().getSymbol("helio1").stop(1000);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",45190,function(sym,e){});
//Edge binding end
})("begin");
//Edge symbol end:'begin'

//=========================================================

//Edge symbol: 'uranio2'
(function(symbolName){})("uranio2");
//Edge symbol end:'uranio2'

//=========================================================

//Edge symbol: 'eletron'
(function(symbolName){})("eletron");
//Edge symbol end:'eletron'

//=========================================================

//Edge symbol: 'antineutrino'
(function(symbolName){})("antineutrino");
//Edge symbol end:'antineutrino'

//=========================================================

//Edge symbol: 'comecar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",197,function(sym,e){sym.getComposition().getStage().getSymbol("antineutrino").stop(1000);sym.getComposition().getStage().getSymbol("paladio").stop(1000);sym.getComposition().getStage().getSymbol("eletron1").stop(1000);sym.getComposition().getStage().getSymbol("u234").stop(1000);sym.getComposition().getStage().getSymbol("f1").stop(1000);sym.getComposition().getStage().getSymbol("f3").stop(1000);sym.getComposition().getStage().getSymbol("f2").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2Copy}","click",function(sym,e){sym.getComposition().getStage().getSymbol("antineutrino").play(1000);sym.getComposition().getStage().getSymbol("paladio").play(1000);sym.getComposition().getStage().getSymbol("eletron1").play(1000);sym.getComposition().getStage().getSymbol("u234").play(1000);sym.getComposition().getStage().getSymbol("f1").play(1000);sym.getComposition().getStage().getSymbol("f3").play(1000);sym.getComposition().getStage().getSymbol("f2").play(1000);});
//Edge binding end
})("comecar");
//Edge symbol end:'comecar'

//=========================================================

//Edge symbol: 'menu'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2}","click",function(sym,e){window.open("Abertura.html","Abertura");});
//Edge binding end
})("menu");
//Edge symbol end:'menu'

//=========================================================

//Edge symbol: 'voltar'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2Copy2}","click",function(sym,e){window.open("index.html","index");});
//Edge binding end
})("voltar");
//Edge symbol end:'voltar'

//=========================================================

//Edge symbol: 'raio'
(function(symbolName){})("raio");
//Edge symbol end:'raio'

//=========================================================

//Edge symbol: 'paladio'
(function(symbolName){})("paladio");
//Edge symbol end:'paladio'

//=========================================================

//Edge symbol: 'u234'
(function(symbolName){})("u234");
//Edge symbol end:'u234'

//=========================================================

//Edge symbol: 'f'
(function(symbolName){})("f");
//Edge symbol end:'f'

//=========================================================

//Edge symbol: 'eletron1'
(function(symbolName){})("eletron1");
//Edge symbol end:'eletron1'

//=========================================================

//Edge symbol: 'f1'
(function(symbolName){})("f1");
//Edge symbol end:'f1'

//=========================================================

//Edge symbol: 'f2'
(function(symbolName){})("f2");
//Edge symbol end:'f2'

//=========================================================

//Edge symbol: 'f3'
(function(symbolName){})("f3");
//Edge symbol end:'f3'
})(jQuery,AdobeEdge,"EDGE-54163123");