(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.gAxis = global.gAxis || {})));
}(this, function (exports) { 'use strict';

  function yaxisOrdinal() {
    return 42;
  };

  exports.yaxisOrdinal = yaxisOrdinal;

  Object.defineProperty(exports, '__esModule', { value: true });

}));