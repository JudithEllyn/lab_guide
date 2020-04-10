require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__develop__ = __webpack_require__(18);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__develop__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_develop_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8e8318d6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_develop_vue__ = __webpack_require__(21);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(19)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_develop_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8e8318d6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_develop_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\develop\\develop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] develop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e8318d6", Component.options)
  } else {
    hotAPI.reload("data-v-8e8318d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 20:
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
      tit1: '发展历程',
      msg1: '北京邮电大学是一所以信息科技为特色、工学门类为主体，工管文理相结合的多科性大学。',
      msg2: '长期以来，我校以培养高素质创新人才为宗旨，深化语言实验教学改革，1980年，我校建立了当时国内最先进的语言实验室，1998年，成立了语言实验教学中心，为了满足专业及教师需要，还建设语言情景创意实验室、语言测试实验室。',
      msg3: '2002年，为进一步落实教育部“加强实用性英语教学，提高语言综合能力”这一国家发展战略，扩建了专门用于语言课堂教学研究和创新性实验教学的实验室，先后建立了开放式数字网络语言实验室、语音智能实验室、网络自主学习中心。',
      msg4: '2008年，中心又整合了语言技能训练实验室、中美实时语言互动实验室，2010年建立虚拟仿真实验室，实现学科深度交叉融合的虚拟仿真实验平台，同时全面开展立体网络协同仿真教学模式，满足不同层次学生的教学需要。',
      msg5: '我校先后获得“国家级精品课程”、“北京市优秀教学团队”等称号，并成为教育部示范院校、北京市高等学校实验教学示范中心、北京市大学英语实验教学创新实践基地、国家级实验教学示范中心。',
      tit2: 'The history of development',
      msg6: 'Beijing University of Posts and Telecommunication is a multidisciplinary university featuring information technology and engineering, which is composed of engineering, management, humanities and natural science.',
      msg7: 'Our school has long aimed at cultivating high-quality innovative talents, deepened the reform of language experiment and teaching.We established the most advanced laboratory in China in 1980.We established language experiment and teaching centre in 1998, the language situational creative laboratory and the language testing laboratory as well so as to satisfy the needs of subjects and teaching.',
      msg8: 'In 2002, the centre enlarged the laboratory specialized in the research on language class teaching and innovative experimental teaching in order to further implement the Ministry of Education’s national development strategy of ‘Strengthening practical English teaching and improving the synthetical ability of language’. Our school successively established open digital network laboratory, intelligent voice laboratory, and online autonomous learning centre.',
      msg9: 'The centre integrated language skills training laboratory and China-The United States real-time interactive language laboratory in 2008. The centre established Virtual Simulation Laboratory achieving the virtual simulation platform of deep cross-fusion of subjects in 2010, meanwhile, overall carried out three-dimensions network cooperative simulation teaching model to satisfy teaching needs of different layers of students.',
      msg10: 'Our school successively obtained the titles of ‘National Excellent Courses’, ’Beijing Excellent Teaching Team’, and became the Ministry of Education’s model college, Beijing University Experimental Teaching Demonstration Center, Beijing college English experimental teaching innovative practical base, and nation-level experimental teaching demonstration centre.',
      tit3: '発展の過程。',
      msg11: '北京郵電大学は、情报科学技术を特色とし、工学系を主体とし、管理学、文系と理系を组み合わせた多科性大学である。',
      msg12: '長年、わが校は革新人材を養成するという宗旨で、語学の教育改革を進めている。1980年、わが校は当時国内最先端の言語のラボラトリを設立した。1998年、言語教育センターを設立し、課程や教師の需要を満たすため、新コンセプトラボラトリは、言語テストラボラトリを創立した。',
      msg13: '2002年、文部省の「実用の英語の授業を強化し、言語総合能力を高める」という国家発展戦略に応じて、言語の教学研究と革新的な実験教学に専用の実験室を拡張し、オープン型デジタルネットワーク言語実験室、音声インターアクション実験室、ネットワーク自主学習センターを相次いで設立した。',
      msg14: '2008年、言語技能訓練センターや中米言語リアルタイムインターアクションを統合した。2010年にバーチャルリアリティーラボラトリを設立したため、各学科の深い交差融合ができた。',
      msg15: '同時、ネットワーク協同シミュレーション授業が実現し、レベルの違う学生たちの需要を満たした。「国家級精品課程」、「北京市優秀教学チーム」などの称号を次々に取得し、文部省のモデルスクール、北京市高等学校実験教学センター、北京市大学英語実験教学革新実践基地、国家級実験教学センターとなった。'

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
      this.play("/static/audio/1.aiff");
    }
  }
});

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background-image": "url(/static/images/blue2.png)"
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.tit1))]), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.msg1))]), _vm._v(" "), _c('img', {
    staticClass: "a",
    attrs: {
      "src": "/static/images/bupt.jpg",
      "background-size": "cover"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.msg2))]), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.msg3))]), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.msg4))]), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.msg5))]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "message3",
    attrs: {
      "id": "chn_btn",
      "eventid": '0'
    },
    on: {
      "click": _vm.index_C
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
  }, [_vm._v("停")])], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.tit2))]), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.msg6))]), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.msg7))]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.msg8))]), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.msg9))]), _vm._v(" "), _c('div', {
    staticClass: "message"
  }, [_vm._v(_vm._s(_vm.msg10))]), _vm._v(" "), _c('button', {
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
  }, [_vm._v("stop")]), _vm._v(" "), _c('div', {
    staticClass: "title2"
  }, [_vm._v(_vm._s(_vm.tit3))]), _vm._v(" "), _c('div', {
    staticClass: "message2"
  }, [_vm._v(_vm._s(_vm.msg11))]), _vm._v(" "), _c('div', {
    staticClass: "message2"
  }, [_vm._v(_vm._s(_vm.msg12))]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "message2"
  }, [_vm._v(_vm._s(_vm.msg13))]), _vm._v(" "), _c('div', {
    staticClass: "message2"
  }, [_vm._v(_vm._s(_vm.msg14))]), _vm._v(" "), _c('div', {
    staticClass: "message2"
  }, [_vm._v(_vm._s(_vm.msg15))]), _vm._v(" "), _c('button', {
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
    staticClass: "aa",
    attrs: {
      "src": "/static/images/renwen.jpg",
      "background-size": "cover"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "float": "left",
      "clear": "both"
    },
    attrs: {
      "align": "center"
    }
  }, [_c('img', {
    staticClass: "aa",
    attrs: {
      "src": "/static/images/fazhan.jpg",
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
     require("vue-hot-reload-api").rerender("data-v-8e8318d6", esExports)
  }
}

/***/ })

},[17]);