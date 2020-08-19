
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text7}","click",function(sym,e){window.open("DefinicaoFissao.html","DefinicaoFissao","width=1000,height=620");window.close();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text6}","click",function(sym,e){window.open("Abertura.html","Abertura","width=1130,height=670");window.close();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'uranio235'
(function(symbolName){})("uranio235");
//Edge symbol end:'uranio235'

//=========================================================

//Edge symbol: 'neutron'
(function(symbolName){})("neutron");
//Edge symbol end:'neutron'

//=========================================================

//Edge symbol: 'begin'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",200,function(sym,e){sym.getComposition().getStage().getSymbol("uranio235").stop(1000);sym.getComposition().getStage().getSymbol("neutron").stop(1000);sym.getComposition().getStage().getSymbol("uranio2351").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text}","click",function(sym,e){sym.getComposition().getStage().getSymbol("uranio235").play(100);sym.getComposition().getStage().getSymbol("neutron").play(100);sym.getComposition().getStage().getSymbol("uranio2351").stop(1000);});
//Edge binding end
})("begin");
//Edge symbol end:'begin'

//=========================================================

//Edge symbol: 'uranio2351'
(function(symbolName){})("uranio2351");
//Edge symbol end:'uranio2351'

//=========================================================

//Edge symbol: 'n3'
(function(symbolName){})("n3");
//Edge symbol end:'n3'

//=========================================================

//Edge symbol: 'comecar'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4195,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.getComposition().getStage().getSymbol("u1").stop(1000);sym.getComposition().getStage().getSymbol("u2").stop(1000);sym.getComposition().getStage().getSymbol("u3").stop(1000);sym.getComposition().getStage().getSymbol("n2").stop(1000);sym.getComposition().getStage().getSymbol("n332").stop(1000);sym.getComposition().getStage().getSymbol("raio").stop(1000);sym.getComposition().getStage().getSymbol("luz").stop(1000);sym.getComposition().getStage().getSymbol("n31").stop(1000);sym.getComposition().getStage().getSymbol("n").stop(1000);sym.getComposition().getStage().getSymbol("uranio235").stop(1000);sym.getComposition().getStage().getSymbol("uraniof").stop(1000);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text}","click",function(sym,e){sym.getComposition().getStage().getSymbol("u1").play(1000);sym.getComposition().getStage().getSymbol("u2").play(1000);sym.getComposition().getStage().getSymbol("u3").play(1000);sym.getComposition().getStage().getSymbol("n2").play(1000);sym.getComposition().getStage().getSymbol("n332").play(1000);sym.getComposition().getStage().getSymbol("raio").play(1000);sym.getComposition().getStage().getSymbol("luz").play(1000);sym.getComposition().getStage().getSymbol("n31").play(1000);sym.getComposition().getStage().getSymbol("n").play(1000);sym.getComposition().getStage().getSymbol("uranio235").play(1000);sym.getComposition().getStage().getSymbol("uraniof").play(1000);});
//Edge binding end
})("comecar");
//Edge symbol end:'comecar'

//=========================================================

//Edge symbol: 'n'
(function(symbolName){})("n");
//Edge symbol end:'n'

//=========================================================

//Edge symbol: 'u235'
(function(symbolName){})("u235");
//Edge symbol end:'u235'

//=========================================================

//Edge symbol: 'u2351'
(function(symbolName){})("u2351");
//Edge symbol end:'u2351'

//=========================================================

//Edge symbol: 'uraniof'
(function(symbolName){})("uraniof");
//Edge symbol end:'uraniof'

//=========================================================

//Edge symbol: 'uranio235_1'
(function(symbolName){})("uranio235_1");
//Edge symbol end:'uranio235_1'

//=========================================================

//Edge symbol: 'raio'
(function(symbolName){})("raio");
//Edge symbol end:'raio'

//=========================================================

//Edge symbol: 'luz'
(function(symbolName){})("luz");
//Edge symbol end:'luz'

//=========================================================

//Edge symbol: 'n1'
(function(symbolName){})("n1");
//Edge symbol end:'n1'

//=========================================================

//Edge symbol: 'n32'
(function(symbolName){})("n32");
//Edge symbol end:'n32'

//=========================================================

//Edge symbol: 'n31'
(function(symbolName){})("n31");
//Edge symbol end:'n31'

//=========================================================

//Edge symbol: 'n2'
(function(symbolName){})("n2");
//Edge symbol end:'n2'

//=========================================================

//Edge symbol: 'n33'
(function(symbolName){})("n33");
//Edge symbol end:'n33'

//=========================================================

//Edge symbol: 'u1'
(function(symbolName){})("u1");
//Edge symbol end:'u1'

//=========================================================

//Edge symbol: 'u2'
(function(symbolName){})("u2");
//Edge symbol end:'u2'

//=========================================================

//Edge symbol: 'u3'
(function(symbolName){})("u3");
//Edge symbol end:'u3'
})(jQuery,AdobeEdge,"EDGE-144970175");