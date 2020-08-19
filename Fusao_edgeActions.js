
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text9}","click",function(sym,e){window.open("DefinicaoFusao.html","DefinicaoFusao","width=1000,height=630");window.close();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text6}","click",function(sym,e){window.open("Abertura1.html","Abertura1","width=1150,height=670");window.close();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'deuterio'
(function(symbolName){})("deuterio");
//Edge symbol end:'deuterio'

//=========================================================

//Edge symbol: 'tritio'
(function(symbolName){})("tritio");
//Edge symbol end:'tritio'

//=========================================================

//Edge symbol: 'energia'
(function(symbolName){})("energia");
//Edge symbol end:'energia'

//=========================================================

//Edge symbol: 'raio'
(function(symbolName){})("raio");
//Edge symbol end:'raio'

//=========================================================

//Edge symbol: 'neutron'
(function(symbolName){})("neutron");
//Edge symbol end:'neutron'

//=========================================================

//Edge symbol: 'helio'
(function(symbolName){})("helio");
//Edge symbol end:'helio'

//=========================================================

//Edge symbol: 'begin'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.getComposition().getStage().getSymbol("deuterio3").stop(1000);sym.getComposition().getStage().getSymbol("tritio").stop(1000);sym.getComposition().getStage().getSymbol("raio").stop(1000);sym.getComposition().getStage().getSymbol("energia").stop(1000);sym.getComposition().getStage().getSymbol("neutron4").stop(1000);sym.getComposition().getStage().getSymbol("helio3").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text7}","click",function(sym,e){sym.getComposition().getStage().getSymbol("deuterio3").play(1000);sym.getComposition().getStage().getSymbol("tritio").play(1000);sym.getComposition().getStage().getSymbol("raio").play(1000);sym.getComposition().getStage().getSymbol("energia").play(1000);sym.getComposition().getStage().getSymbol("neutron4").play(1000);sym.getComposition().getStage().getSymbol("helio3").play(1000);});
//Edge binding end
})("begin");
//Edge symbol end:'begin'
})(jQuery,AdobeEdge,"EDGE-115783872");