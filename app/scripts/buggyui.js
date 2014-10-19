'use strict';
var components = require('./components/components');
(function(scope){
    var polymer = scope.Polymer('buggy-app', {
    });
    
    components.registerComponents(scope);
    
    return polymer;
})(window);
