!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=r);var o=r("h6c0i");document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements.amount.value,t=+e.currentTarget.elements.step.value;i=+e.currentTarget.elements.delay.value;for(var r=0;r<n;r++)a+=1,i+=t,new Promise((function(e,n){var t=Math.random()>.3;setTimeout((function(){t&&e("✅ Fulfilled promise ".concat(a," in ").concat(i,"ms")),n("❌ Rejected promise ".concat(a," in ").concat(i,"ms"))}),i)})).then((function(e){o.Notify.success(e)})).catch((function(e){o.Notify.failure(e)}))}));var i=0,a=0}();
//# sourceMappingURL=03-promises.09d867e5.js.map
