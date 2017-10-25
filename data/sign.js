exports.out = function(req,res){
    //  清除 session 和 cookie 
    res.status(200).send('ok');
}