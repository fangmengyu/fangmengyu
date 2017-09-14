
window.addEventListener('load',function(){

    $('#login').addEventListener('submit',function(e){
        e.preventDefault();
        console.log(1);
        var action = this.action;
        // var data   = Qs_Form.getData(this);


    })
    
    $('.ceshi').addEventListener('click',AD.add,false);

})


var AD = {
    a : 1,
    add : function(){
        console.log(AD.a)
        console.log(this.a);
    }
}

var AD = (function () {
    var _s = {

    };
    return _s;

})();



