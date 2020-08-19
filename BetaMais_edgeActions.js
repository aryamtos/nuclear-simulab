
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text6}","click",function(sym,e){window.open("Abertura1.html","Abertura1","widht=1150,height=622");window.close();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text19}","click",function(sym,e){window.open("DefinicaoBetaMais.html","DefinicaoBetaMais","widht=1150,height=622");window.close();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'comecar'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text}","click",function(sym,e){sym.getComposition().getStage().getSymbol("fluor3").play(1000);sym.getComposition().getStage().getSymbol("positron3").play(1000);sym.getComposition().getStage().getSymbol("neutrino").play(1000);sym.getComposition().getStage().getSymbol("torio2").play(1000);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.getComposition().getStage().getSymbol("fluor3").stop(1000);sym.getComposition().getStage().getSymbol("positron3").stop(1000);sym.getComposition().getStage().getSymbol("neutrino").stop(1000);sym.getComposition().getStage().getSymbol("torio2").stop(1000);sym.getComposition().getStage().getSymbol("seta2").stop(1000);sym.getComposition().getStage().getSymbol("formula3").stop(1000);sym.getComposition().getStage().getSymbol("formula").stop(1000);sym.getComposition().getStage().getSymbol("formula2").stop(1000);});
//Edge binding end
})("comecar");
//Edge symbol end:'comecar'

//=========================================================

//Edge symbol: 'fluor'
(function(symbolName){})("fluor");
//Edge symbol end:'fluor'

//=========================================================

//Edge symbol: 'positron'
(function(symbolName){})("positron");
//Edge symbol end:'positron'

//=========================================================

//Edge symbol: 'neutrino'
(function(symbolName){})("neutrino");
//Edge symbol end:'neutrino'

//=========================================================

//Edge symbol: 'o'
(function(symbolName){})("o");
//Edge symbol end:'o'

//=========================================================

//Edge symbol: 'torio'
(function(symbolName){})("torio");
//Edge symbol end:'torio'

//=========================================================

//Edge symbol: 'formula'
(function(symbolName){})("formula");
//Edge symbol end:'formula'

//=========================================================

//Edge symbol: 'formula2'
(function(symbolName){})("formula2");
//Edge symbol end:'formula2'

//=========================================================

//Edge symbol: 'formula3'
(function(symbolName){})("formula3");
//Edge symbol end:'formula3'

//=========================================================

//Edge symbol: 'seta'
(function(symbolName){})("seta");
//Edge symbol end:'seta'

//=========================================================

//Edge symbol: 'form'
(function(symbolName){})("form");
//Edge symbol end:'form'
})(jQuery,AdobeEdge,"EDGE-73713662");