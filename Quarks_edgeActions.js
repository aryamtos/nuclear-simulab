
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Text4}","click",function(sym,e){window.open("Extras.html","Extras","width=1000,height=622");window.close();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_neutron}","click",function(sym,e){window.open("Neutron.html","Neutron","width=1000,height=622");window.close();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'proton'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Proton52}","click",function(sym,e){window.open("Q.html","Q","width=1000,height=622");window.close();});
//Edge binding end
})("proton");
//Edge symbol end:'proton'

//=========================================================

//Edge symbol: 'neutron'
(function(symbolName){})("neutron");
//Edge symbol end:'neutron'
})(jQuery,AdobeEdge,"EDGE-497392");