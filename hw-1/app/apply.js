// var util = require('util');
var _nycda = _nycda || {};
_nycda.apply = function (item, property, value) {


    if(item && property){
        if(property.indexOf('.') > 0){
            var keys = property.split('.');
            var len = keys.length;
            var prop = item;
            var i = 0;
            for(; i<len-1; i++){
                prop = prop[keys[i]];
            }

             // In js, you have to set the property of an obj via a reference or
             // it will reset the value of the var that's doing the referencing.
             // So we end the loop one step early and set it like this:
            prop[keys[len-1]] = value;

            return item;
        }else{
            item[property] = value;
        }
    }

    return item;

};