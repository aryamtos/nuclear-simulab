
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"beforeDeletion",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text2}","click",function(sym,e){window.open("Abertura1.html","Abertura1","width=1150,height=670");window.close();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text3}","click",function(sym,e){window.open("index.html","index");window.close();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'comecar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.getComposition().getStage().getSymbol("w1").stop(1000);sym.getComposition().getStage().getSymbol("gama3").stop(1000);sym.getComposition().getStage().getSymbol("w2").stop(1000);sym.getComposition().getStage().getSymbol("symbol").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text}","click",function(sym,e){sym.getComposition().getStage().getSymbol("w1").play(1000);sym.getComposition().getStage().getSymbol("gama3").play(1000);sym.getComposition().getStage().getSymbol("w2").play(1000);sym.getComposition().getStage().getSymbol("symbol").play(1000);});
//Edge binding end
})("comecar");
//Edge symbol end:'comecar'

//=========================================================

//Edge symbol: 'gama'
(function(symbolName){})("gama");
//Edge symbol end:'gama'

//=========================================================

//Edge symbol: 'w1'
(function(symbolName){})("w1");
//Edge symbol end:'w1'

//=========================================================

//Edge symbol: 'w2'
(function(symbolName){})("w2");
//Edge symbol end:'w2'

//=========================================================

//Edge symbol: 'symbol'
(function(symbolName){})("symbol");
//Edge symbol end:'symbol'
})(jQuery,AdobeEdge,"EDGE-79840699");