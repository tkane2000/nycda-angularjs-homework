var _nycda = _nycda || {};
_nycda.get = function (item, property) {

    if(!item || !property) return item;

    var keys = property.split('.');
    var len = keys.length;
    var prop = item;
    
    for(var i = 0; i<len; i++){
        prop = prop[keys[i]];
        if(!prop) break;
    }
  
    return prop;
};
