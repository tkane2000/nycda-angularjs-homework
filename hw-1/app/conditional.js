var _nycda = _nycda || {};
_nycda.conditional = function (condition, runIfTrue) {
    console.log('_nycda.conditional ------------');

    if(!runIfTrue) throw new Error('runIfTrue is either undefined or null');
    
    function runIf(){
        if(condition()){
            console.log('condition() is true');
            return runIfTrue.apply(this, arguments);
        }
    }
    function runIfConditionArgs(){
        if(condition.apply(this, arguments)){
            console.log('condition() is true');
            return runIfTrue();
        }
    }

    if(condition){
        console.log('condition was passed in');
        if (condition.length > 0){
            console.log('condition.length > 0');
            return runIfConditionArgs;
        }else{
            return runIf;
        }
    }else{
        console.log('condition is null || undefined');
        return runIfTrue;
    }
};

