require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__part__ = __webpack_require__(43);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__part__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_part_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_78666af9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_part_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_part_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_78666af9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_part_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\part\\part.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] part.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78666af9", Component.options)
  } else {
    hotAPI.reload("data-v-78666af9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var innerAudioContext = wx.createInnerAudioContext();
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            dev_src: "/static/audio/3.aiff",
            gg: "/static/images/VR/1.png",
            proj: "",
            perf: "",
            cont: ""
        };
    },

    methods: {
        play: function play(audio) {
            innerAudioContext.src = audio;
            innerAudioContext.play();
        },
        stop: function stop() {
            innerAudioContext.stop();
        },
        previewImage: function previewImage(e) {
            var current = e.target.src;
            console.log(current);
            wx.previewImage({
                current: current // 当前显示图片的http链接  \  
            });
        }
    }

});

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('button', {
    staticClass: "stop",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.stop
    }
  }, [_vm._v("停止播放")]), _vm._v(" "), _c('div', {
    staticClass: "imgs"
  }, [_c('div', [_vm._v("点击图片即可播放语音导览")]), _vm._v(" "), _c('div', {
    staticClass: "once"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": "/static/images/VR/1.png",
      "eventid": '1'
    },
    on: {
      "click": _vm.previewImage
    }
  }), _vm._v(" "), _c('p', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.play(_vm.dev_src)
      }
    }
  }, [_vm._v("投影设备")])], 1), _vm._v(" "), _c('div', {
    staticClass: "once"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": "/static/images/VR/2.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("表演厅")])], 1), _vm._v(" "), _c('div', {
    staticClass: "once"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": "/static/images/VR/3.png",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.play(_vm.dev_src)
      }
    }
  }), _vm._v(" "), _c('p', [_vm._v("中控室")])], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-78666af9", esExports)
  }
}

/***/ })

},[42]);