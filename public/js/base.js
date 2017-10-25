const $  = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


var Qs = (function(){
    return {
        getFromData : function(el){
            var inps = $$.bind(el)('input[name],textarea[name],select[name]');
            var res  = {};
            inps.foreach( (n,i,a) => {
                if  (n.type == 'radio') {
                    n.checked && (res[n.name] = n.value);
                } else if (n.type == 'checkbox'){
                    if ( n.checked ) {
                        res[n.name] ? res[n.name].push(n.value) : res[n.name] = n.value;
                    }
                } else {
                    res[n.name] = n.value;
                }
            } )
            return res;
        }
    }

})();
