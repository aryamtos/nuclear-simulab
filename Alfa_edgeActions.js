
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1350000,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_back}","click",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7258,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_begin}","click",function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'begin'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text}","click",function(sym,e){sym.getComposition().getStage().getSymbol("u").play(1000);sym.getComposition().getStage().getSymbol("h").play(1000);sym.getComposition().getStage().getSymbol("torio").play(1000);sym.getComposition().getStage().getSymbol("formula").play(1000);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.getComposition().getStage().getSymbol("u").stop(1000);sym.getComposition().getStage().getSymbol("h").stop(1000);sym.getComposition().getStage().getSymbol("torio").stop(1000);sym.getComposition().getStage().getSymbol("f2").stop(1000);sym.getComposition().getStage().getSymbol("formula").stop(1000);});
//Edge binding end
})("begin");
//Edge symbol end:'begin'

//=========================================================

//Edge symbol: 'link'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Urnio}","click",function(sym,e){window.open("PropriedadesA.html","PropriedadesA");});
//Edge binding end
})("link");
//Edge symbol end:'link'

//=========================================================

//Edge symbol: 'menu'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2}","click",function(sym,e){window.open("Abertura1.html","Abertura1","width=1150,height=622");});
//Edge binding end
})("menu");
//Edge symbol end:'menu'

//=========================================================

//Edge symbol: 'f'
(function(symbolName){})("f");
//Edge symbol end:'f'

//=========================================================

//Edge symbol: 'back'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text2}","click",function(sym,e){window.open("index.html","index");});
//Edge binding end
})("back");
//Edge symbol end:'back'

//=========================================================

//Edge symbol: 'u'
(function(symbolName){})("u");
//Edge symbol end:'u'

//=========================================================

//Edge symbol: 'h'
(function(symbolName){})("h");
//Edge symbol end:'h'

//=========================================================

//Edge symbol: 'torio'
(function(symbolName){})("torio");
//Edge symbol end:'torio'

//=========================================================

//Edge symbol: 'formula'
(function(symbolName){})("formula");
//Edge symbol end:'formula'
})(jQuery,AdobeEdge,"EDGE-6675406");