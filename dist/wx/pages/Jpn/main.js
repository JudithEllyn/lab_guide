require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([9],{

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Jpn__ = __webpack_require__(29);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Jpn__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Jpn_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1e6d3eeb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_Jpn_vue__ = __webpack_require__(32);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(30)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Jpn_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1e6d3eeb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_Jpn_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\Jpn\\Jpn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Jpn.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e6d3eeb", Component.options)
  } else {
    hotAPI.reload("data-v-1e6d3eeb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 30:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 31:
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

var innerAudioContext = wx.createInnerAudioContext();
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            ad1: "/static/audio/pipax.mp3"
        };
    },

    methods: {
        play1: function play1() {
            innerAudioContext.src = this.ad1;
            console.log("音频停止状态");
            innerAudioContext.play();
        },
        stop1: function stop1() {
            innerAudioContext.stop();
        }
    }
});

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "char"
  }, [_c('p', [_vm._v("言語実験教学モデルセンター——バーチャルシミュレーションラボラトリ紹介")]), _vm._v(" "), _c('p', [_vm._v("言語実験教学モデルセンターのバーチャルシミュレーションラボラトリは、新しい技能型")]), _vm._v(" "), _c('p', [_vm._v("実験教学任務の試しや完成を主目的として、バーチャル放送形式の革新型教学モードを構")]), _vm._v(" "), _c('p', [_vm._v("築すること、または学校のバーチャル放送プラットフォームとバーチャル３Ｄシーン、イ")]), _vm._v(" "), _c('p', [_vm._v("メージレンダリングシステムと共に使用することによって、学生に革新型のバーチャル放")]), _vm._v(" "), _c('p', [_vm._v("送学習実験プラットフォームを提供する。言語バーチャルシミュレーション実験プラット")]), _vm._v(" "), _c('p', [_vm._v("フォームの構築により、教師と学生の間にインターアクションができる映像ネットワーク")]), _vm._v(" "), _c('p', [_vm._v("教育モードを確立させる。言語実験のとき、学生の科学技術、音楽、美術及びデザインな")]), _vm._v(" "), _c('p', [_vm._v("どの面で潜在的な創造力が開発できるだけでなく、マルチメディアコンピュータ及び「撮")]), _vm._v(" "), _c('p', [_vm._v("影、録音、編集、放送」などの総合機材技術を身につける。そのため、学生たちは一人で")]), _vm._v(" "), _c('p', [_vm._v("ビデオ授業、教育素材、テレビ番組など作れるし、学生の学習の積極性と能動性を高める")]), _vm._v(" "), _c('p', [_vm._v("ことができる。教師たちは授業をするとき、実用的な教材を自由に作れるし、違う学生に")]), _vm._v(" "), _c('p', [_vm._v("よって、課題に対する理解を深めることもできる。")])], 1), _vm._v(" "), _c('button', {
    staticClass: "audio1",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.play1
    }
  }, [_vm._v("播放音频")]), _vm._v(" "), _c('button', {
    staticClass: "audio1",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.stop1
    }
  }, [_vm._v("停止")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1e6d3eeb", esExports)
  }
}

/***/ })

},[28]);