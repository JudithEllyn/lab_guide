require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_sp__ = __webpack_require__(48);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__scene_sp__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scene_sp_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5825f0ce_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_scene_sp_vue__ = __webpack_require__(51);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(49)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_scene_sp_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5825f0ce_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_scene_sp_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\scene_sp\\scene_sp.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] scene_sp.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5825f0ce", Component.options)
  } else {
    hotAPI.reload("data-v-5825f0ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
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
      index_C: "",
      index_E: "",
      index_J: "",
      types_E: ["brief introdution", "Configuration and functions", "operatable experiment", "Equipment list"],
      types_C: ["简介", "配置与功能", "可操作的实验类型", "设备一览"],
      types_J: ["案内書", "配置と機能", "操作可能な操作タイプ", "設備一覧"],
      ad_C: ["/static/audio/2.aiff"],
      ad_E: [],
      ad_J: []
    };
  },

  methods: {
    picker_E: function picker_E(e) {
      this.index_E = e.mp.detail.value;
      console.log("选项改为：" + this.types_E[this.index_E]);
    },
    picker_J: function picker_J(e) {
      this.index_J = e.mp.detail.value;
      console.log("选项改为：" + this.types_J[this.index_J]);
    },
    picker_C: function picker_C(e) {
      this.index_C = e.mp.detail.value;
      console.log("选项改为：" + this.types_C[this.index_C]);
    },
    play: function play(audio) {
      innerAudioContext.src = audio;
      innerAudioContext.play();
    },
    stop: function stop() {
      innerAudioContext.stop();
    }
  },

  watch: {
    index_C: function index_C(newValue, oldValue) {
      if (this.index_C != 3) {
        console.log(this.ad_C[this.index_C]);
        this.play(this.ad_C[this.index_C]);
      }
      if (this.index_C == 3) {
        wx.navigateTo({
          url: '../part/main'
        });
      }
    },
    index_J: function index_J(newValue, oldValue) {
      console.log(this.ad_J[this.index_J]);
      this.play(this.ad_J[this.index_J]);
    },
    index_E: function index_E(newValue, oldValue) {
      console.log(this.ad_C[this.index_C]);
      this.play(this.ad_C[this.index_C]);
    }

  }

});

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "total",
    staticStyle: {
      "background-image": "url(/static/images/blue3.png)"
    }
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "button"
  }, [_c('div', {
    staticClass: "word"
  }, [_vm._v("点击可以收听对应语种语音导览")]), _vm._v(" "), _c('picker', {
    staticClass: "input",
    attrs: {
      "mode": "selector",
      "value": _vm.index_J,
      "range": _vm.types_J,
      "eventid": '1'
    },
    on: {
      "change": _vm.picker_J
    }
  }, [_c('button', {
    staticClass: "word2",
    attrs: {
      "id": "jpn_btn",
      "eventid": '0'
    },
    on: {
      "click": _vm.c
    }
  }, [_vm._v("日本語ガイド")])], 1), _vm._v(" "), _c('picker', {
    staticClass: "input",
    attrs: {
      "mode": "selector",
      "value": _vm.index_E,
      "range": _vm.types_E,
      "eventid": '2'
    },
    on: {
      "change": _vm.picker_E
    }
  }, [_c('button', {
    staticClass: "word",
    attrs: {
      "id": "eng_btn"
    }
  }, [_vm._v("English guide")])], 1), _vm._v(" "), _c('picker', {
    staticClass: "input",
    attrs: {
      "mode": "selector",
      "value": _vm.index_C,
      "range": _vm.types_C,
      "eventid": '3'
    },
    on: {
      "change": _vm.picker_C
    }
  }, [_c('button', {
    staticClass: "word",
    attrs: {
      "id": "chn_btn"
    }
  }, [_vm._v("中文导览")])], 1), _vm._v(" "), _c('button', {
    staticClass: "ting",
    attrs: {
      "id": "stop",
      "eventid": '4'
    },
    on: {
      "click": _vm.stop
    }
  }, [_vm._v("停")])], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img"
  }, [_c('img', {
    staticClass: "aa",
    attrs: {
      "src": "/static/images/exp.png",
      "background-size": "cover"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5825f0ce", esExports)
  }
}

/***/ })

},[47]);