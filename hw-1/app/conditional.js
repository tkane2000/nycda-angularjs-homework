var _nycda = _nycda || {};
_nycda.conditional = function (condition, runIfTrue) {

    if(!runIfTrue) throw new Error('runIfTrue is either undefined or null');
    
    function runIf(){
        if(condition()){
            return runIfTrue.apply(this, arguments);
        }
    }
    function conditionHasArgsRunIf(){
        if(condition.apply(this, arguments)){
            return runIfTrue();
        }
    }

    if(condition){

        // this seems a bit hacky b/c now condition can be passed
        // args or runIfTrue, but not both
        if (condition.length > 0){
            return conditionHasArgsRunIf;
        }else{
            return runIf;
        }
    }else{
        return runIfTrue;
    }
};

