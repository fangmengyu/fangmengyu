const $  = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


function getFromData(el){
    var inps = $$.bind(el)('input[name],textarea[name],select[name]');
    var res  = {};
    inp.foreach( (n,i,a)=>{
        if  (n.type == 'radio') {
            n.checked && res.push(n.name,n.value);
        } else if (n.type == 'checkbox'){
            if ( n.checked ) {
                res[n.name] ? res[n.name].push(n.value) : res.push(n.name,[n.value]);
            }
        } else {
            res.push(n.name,n.value);
        }
    } )
    return res;

}

var Qs = function(){

    var getFromData = function(el){
        var inps = $$.bind(el)('input[name],textarea[name],select[name]');
        var res  = {};
        inp.foreach( (n,i,a)=>{
            if  (n.type == 'radio') {
                n.checked && res.push(n.name,n.value);
            } else if (n.type == 'checkbox'){
                if ( n.checked ) {
                    res[n.name] ? res[n.name].push(n.value) : res.push(n.name,[n.value]);
                }
            } else {
                res.push(n.name,n.value);
            }
        } )
        return res;
    };


    //  导出 API

    this.getFromData = getFromData;


};

var qs = new Qs();

console.log(qs.getFromData)


$('input.phone').on('keyup',function(){
    this.value = this.value.replace(/[^\d]/g,'');
})

$('input.phone').on('blur',function(){
    if ( /^1[3-9]\d{9}$/.test(this.value) ) {
        // 如果输入的是正确的手机号
    } else {
        // 如果输入手机号不合法
    }
})

function checkPhone(this,fn1,fn2){
    if ( /^1[3-9]\d{9}$/.test(this.value) ) {
        fn1(this);
    } else {
        fn2(this);
    }
}