module.exports=function(t){function o(n){if(e[n])return e[n].exports;var r=e[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}({0:function(t,o,e){t.exports=e(131)},131:function(t,o,e){"use strict";var n=e(132);t.exports=function(t){quasar.current.layout.vm.$data.title="Tooltips",t({template:n})}},132:function(t,o){t.exports='<h5>Hover the elements below.</h5>\n<div v-tooltip.literal="Quasar Rulz!" style="width: 200px; height: 70px;background-color: #26A69A;">\n  &nbsp;\n</div>\n<br><br>\n<button class="indigo" v-tooltip.wrap.inline.literal="Tooltip">Hover</button>\n<button class="red" v-tooltip.wrap.inline.literal="Tooltip for the user">Over</button>\n<button class="purple" v-tooltip.wrap.inline.literal="Lorem Ipsum... Some long tooltip...">These</button>\n<button class="amber" v-tooltip.wrap.inline.literal="Lorem Ipsum...">Buttons</button>\n'}});