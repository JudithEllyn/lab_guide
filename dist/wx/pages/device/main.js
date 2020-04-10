require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device__ = __webpack_require__(23);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__device__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_device_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_df4bf4ce_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_device_vue__ = __webpack_require__(26);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(24)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_device_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_df4bf4ce_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_device_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\device\\device.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] device.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-df4bf4ce", Component.options)
  } else {
    hotAPI.reload("data-v-df4bf4ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);
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
      tit1: '实验室概况',
      msg1: '目前，中心建筑面积约4360平方米，9种类型39套立体虚拟仿真实验室、立体远程训练实验室、立体协同训练仿真实验室、立体化虚拟个性化实验室等，3套无线调频及音频外文广播电台、图书资料室2个、集中控制室3套，设备3900余台件，固定资产达4320万元。承担全校9个学院，两个研究生院本科及研究生公共基础实验教学工作，现为全校36个本科专业42个研究生专业开设44门实验课程，是我校规模最大的基础实践教学平台，每年直接受益学生达12000余名，年实验人时数超过78万，是为社会培养适应信息化时代发展需要的复合型人才的重要基地，逐步形成了实验装备先进、实验体系完善、实验队伍优秀、管理规范高效、创新氛围浓厚、具有国内领先水平、特色鲜明的虚拟仿真实验教学中心。',
      tit2: 'The introduction of labs',
      msg2: 'So far, the centre consists of 9 types of 39 sets of three-dimensional virtual simulation laboratory, three-dimensional tele-training laboratory, three-dimensional coordination training simulation laboratory, three-dimensional simulation personalization laboratory, etc, with a floorage of 4360 square metre. As well as 3 sets of wireless FM and audio English broadcasting station, 2 reference rooms, 3 centralized control rooms,more than 3900 pieces of equipment.The fixed asset of the centre is now 43.2 million yuan. As the largest basic practical teaching platform, the centre undertakes the public basic experimental teaching work of 9 colleges and 2 graduate schools, launches 44 experimental courses for 36 undergraduate majors and44 postgraduate majors, which benefits more than 12 thousand students annually while more than 780,000 experiment hours every year. As a significant base to cultivate inter-disciplinary talents adapting the development of informationization for society, it has gradually formed a virtual simulation experimental teaching centre with advanced experiment equipment, perfect experiment system, excellent experiment team, productive specification management, creative atmosphere and domestic advanced level.',
      tit3: '実験室概要',
      msg3: '現在、建築面積約4360平方メートル、9种类、39セットの立体バーチャルリアリティーラボラトリ、立体リモート練習ラボラトリ、立体協同練習バーチャルリアリティーラボラトリ、立体個性的なバーチャルリアリティーラボラトリなどがある。3軒無線fmやオーディオの放送部門、図書資料室2つ、コンソール3軒、設備約3900台があり、固定資産4320万元。ラボラトリは全校の9つの学部、２つの大学院の全体学生の基礎実験教学のため設立したものである。ラボラトリは現在全校36個の学部の専門と大学院の42個の専攻、合わせて44門の実験の課程のため開設されて、我が校の最大規模の基礎実践教学のプラットフォームである。毎年直接受益の生徒約12000万人、年実験に参加する人',
      msg4: '学生数は78万を超える。我がラボラトリは情報化時代の高速な発展に応じる複合型の人材を育てる重要基地で、実験設備先進、実験システム完備、実験チーム優秀、管理高効、革新的な雰囲気が濃厚の、国内のトップレベル、特色の鮮やかなバーチャルリアリティー教育センターである。'
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
    index_E: function index_E() {
      console.log("/static/audio/an.mp3");
      this.play("/static/audio/an.mp3");
    },
    index_J: function index_J() {
      console.log("/static/audio/an.mp3");
      this.play("/static/audio/an.mp3");
    },
    index_C: function index_C() {
      console.log("/static/audio/an.mp3");
      this.play("/static/audio/an.mp3");
    }
  }

});

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background-image": "url(/static/images/blue4.png)"
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.tit1))]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.msg1))]), _vm._v(" "), _c('button', {
    staticClass: "message3",
    attrs: {
      "id": "chn_btn",
      "eventid": '0'
    },
    on: {
      "click": _vm.index_E
    }
  }, [_vm._v("汉语介绍")]), _vm._v(" "), _c('button', {
    staticClass: "message3",
    attrs: {
      "id": "stop_btn",
      "eventid": '1'
    },
    on: {
      "click": _vm.stop
    }
  }, [_vm._v("停")]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.tit2))]), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.msg2))]), _vm._v(" "), _c('button', {
    staticClass: "message3",
    attrs: {
      "id": "eng_btn",
      "eventid": '2'
    },
    on: {
      "click": _vm.index_E
    }
  }, [_vm._v("English guide")]), _vm._v(" "), _c('button', {
    staticClass: "message3",
    attrs: {
      "id": "stop_btn",
      "eventid": '3'
    },
    on: {
      "click": _vm.stop
    }
  }, [_vm._v("stop")]), _vm._v(" "), _c('img', {
    staticClass: "aa",
    attrs: {
      "src": "/static/images/com.png",
      "background-size": "cover"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "title2"
  }, [_vm._v(_vm._s(_vm.tit3))]), _vm._v(" "), _c('div', {
    staticClass: "message2"
  }, [_vm._v(_vm._s(_vm.msg3))]), _vm._v(" "), _c('div', {
    staticClass: "message2"
  }, [_vm._v(_vm._s(_vm.msg4))]), _vm._v(" "), _c('button', {
    staticClass: "message4",
    attrs: {
      "id": "jpn_btn",
      "eventid": '4'
    },
    on: {
      "click": _vm.index_J
    }
  }, [_vm._v("日本語ガイド")]), _vm._v(" "), _c('button', {
    staticClass: "message3",
    attrs: {
      "id": "stop_btn",
      "eventid": '5'
    },
    on: {
      "click": _vm.stop
    }
  }, [_vm._v("停")])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "float": "right",
      "clear": "both"
    },
    attrs: {
      "align": "center"
    }
  }, [_c('img', {
    staticClass: "a",
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
     require("vue-hot-reload-api").rerender("data-v-df4bf4ce", esExports)
  }
}

/***/ })

},[22]);