(function(e){function t(t){for(var a,o,s=t[0],u=t[1],l=t[2],d=0,h=[];d<s.length;d++)o=s[d],r[o]&&h.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0dfe":function(e,t,n){},"3a8e":function(e,t,n){"use strict";var a=n("a9b2"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{dark:e.dark},attrs:{id:"app"}},[n("h1",{staticStyle:{"text-align":"center"}},[e._v("\n    VuePhoneNumberInput\n  ")]),e._m(0),n("div",{staticClass:"container"},[n("button",{staticClass:"btn",on:{click:function(t){e.dark=!e.dark}}},[e._v("\n      Enable Dark Mode\n    ")]),n("div",{staticClass:"component-container"},[n("div",{staticClass:"component"},[n("VuePhoneNumberInput",{attrs:{id:"phoneNumber1",color:"purple",dark:e.dark,disabled:e.disabled,"default-country-code":e.defaultCountry,"ignored-countries":e.countriesIgnored,"preferred-countries":e.countriesList,"no-validator-state":!1},on:{update:e.onUpdate},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1),n("br"),n("div",{staticClass:"component"},[n("h3",[e._v('Datas returned with "onUpdate" event')]),n("hr"),n("b",[e._v("v-model")]),e._v(" : "+e._s(e.phoneNumber)+"\n        "),n("hr"),n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"component"},[n("table",[e._m(1),e._l(e.resultsTable,function(t){return n("tr",{key:t},[n("td",{attrs:{align:"left"}},[e._v("\n                  "+e._s(t)+"\n                ")]),n("td",[e._v(e._s(e.results[t]))])])})],2)]),n("div",{staticClass:"component flex-1"},[e._v("\n            "+e._s(e.results)+"\n          ")])])])]),n("div",{staticClass:"component-container"},[n("div",{staticClass:"component"},[n("b",[e._v("With translations (FR) - No flags - Dark")]),n("br"),n("br"),n("VuePhoneNumberInput",{attrs:{id:"phoneNumber2",translations:e.translations,dark:"","no-flags":""},on:{update:e.onUpdate2},model:{value:e.phoneNumber2,callback:function(t){e.phoneNumber2=t},expression:"phoneNumber2"}})],1),n("br"),n("div",{staticClass:"component"},[n("h3",[e._v('Datas returned with "onUpdate" event')]),n("hr"),n("b",[e._v("v-model")]),e._v(" : "+e._s(e.phoneNumber)+"\n        "),n("hr"),n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"component"},[n("table",[e._m(2),e._l(e.resultsTable2,function(t){return n("tr",{key:t},[n("td",{attrs:{align:"left"}},[e._v("\n                  "+e._s(t)+"\n                ")]),n("td",[e._v(e._s(e.results2[t]))])])})],2)]),n("div",{staticClass:"component flex-1"},[e._v("\n            "+e._s(e.results2)+"\n          ")])])])])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("a",{staticClass:"btn btn-dark margin-right",attrs:{target:"_blank",href:"https://github.com/LouisMazel/vue-phone-number-input"}},[e._v("\n      Github\n    ")]),n("a",{staticClass:"btn btn-danger",attrs:{target:"_blank",href:"https://www.npmjs.com/package/vue-phone-number-input"}},[e._v("\n      Npm\n    ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Key")]),n("th",[e._v("Value")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Key")]),n("th",[e._v("Value")])])}],o=n("a4bb"),s=n.n(o),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-phone-number-input flex",class:{dark:e.dark}},[n("div",{staticClass:"select-country-container"},[n("CountrySelector",{ref:"CountrySelector",staticClass:"input-country-selector",attrs:{id:e.id+"_country_selector",items:e.codesCountries,color:e.color,error:e.shouldChooseCountry,hint:e.shouldChooseCountry?e.t.countrySelectorError:null,dark:e.dark,disabled:e.disabled,valid:e.isValid&&!e.noValidatorState,"preferred-countries":e.preferredCountries,"only-countries":e.onlyCountries,"ignored-countries":e.ignoredCountries,label:e.t.countrySelectorLabel,"no-flags":e.noFlags,size:e.size},model:{value:e.countryCode,callback:function(t){e.countryCode=t},expression:"countryCode"}})],1),n("div",{staticClass:"flex-1"},[n("VueInputUI",{ref:"PhoneNumberInput",staticClass:"input-phone-number",attrs:{id:e.id+"_phone_number",label:e.t.phoneNumberLabel,hint:e.countryCode&&e.phoneNumber?e.phoneFormatted:null,color:e.color,dark:e.dark,disabled:e.disabled,size:e.size,valid:e.isValid&&!e.noValidatorState},on:{focus:function(t){e.$emit("phone-number-focused")}},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1)])},l=[],c=n("cebc"),d=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1876"],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]],h=d.map(function(e){return{name:e[0],iso2:e[1].toUpperCase(),dialCode:e[2],priority:e[3]||0,areaCodes:e[4]||null}}),p=n("3e84"),f=n("42c6"),m=n.n(f),b=(n("f71a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onBlur,expression:"onBlur"}],ref:"parent",staticClass:"field country-selector",class:[{"is-focused":e.isFocus,"has-value":e.value,"has-hint":e.hint,"has-error":e.error,"is-disabled":e.disabled,"is-dark":e.dark,"no-flags":e.noFlags},e.size],on:{click:e.onFocus,keydown:e.keyboardNav}},[e.value&&!e.noFlags?n("div",{staticClass:"flag-container field-country-flag"},[n("div",{class:"iti-flag-small iti-flag "+e.value.toLowerCase()})]):e._e(),n("input",{ref:"CountrySelector",staticClass:"field-input",style:[e.borderStyle],attrs:{id:e.id,placeholder:e.label,disabled:e.disabled,readonly:""},domProps:{value:e.selectedCountry.name},on:{focus:e.onFocus,click:function(t){e.$emit("click")}}}),n("div",{staticClass:"country-selector-arrow"},[e._v("\n    ▼\n  ")]),n("label",{ref:"label",staticClass:"field-label",class:e.error?"text-danger":null,style:[e.colorStyle],attrs:{for:e.id},on:{click:e.onFocus}},[e._v("\n    "+e._s(e.hint||e.label)+"\n  ")]),n("Transition",{attrs:{name:"slide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isFocus,expression:"isFocus"}],ref:"countriesList",staticClass:"country-list"},e._l(e.countriesSorted,function(t){return n("div",{key:t.code,staticClass:"flex align-center country-list-item",class:[{selected:e.value===t.iso2},{"keyboard-selected":e.tmpValue===t.iso2}],style:[e.value===t.iso2?e.bgStyle:null],on:{click:function(n){n.stopPropagation(),e.updateValue(t.iso2)}}},[e.noFlags?e._e():n("div",{staticClass:"flag-container"},[n("div",{class:"iti-flag-small iti-flag "+t.iso2.toLowerCase()})]),n("div",[e._v(e._s(t.name))])])}),0)])],1)}),y=[],v=(n("7f7f"),n("f559"),n("20d6"),n("75fc")),g=(n("7514"),n("6762"),n("2fdb"),n("a2df")),C=30,S={name:"CountrySelector",directives:{clickOutside:g["directive"]},props:{value:{type:[String,Object],required:!1,default:null},label:{type:String,default:"Choose country"},hint:{type:String,default:String},size:{type:String,default:String},error:{type:Boolean,default:Boolean},disabled:{type:Boolean,default:!1},valid:{type:Boolean,default:!1},validColor:{type:String,default:"yellowgreen"},color:{type:String,default:String},dark:{type:Boolean,default:!1},id:{type:String,default:"CountrySelector"},items:{type:Array,default:Array,required:!0},preferredCountries:{type:Array,default:null},onlyCountries:{type:Array,default:null},ignoredCountries:{type:Array,default:Array},noFlags:{type:Boolean,default:!1}},data:function(){return{isFocus:!1,selectedIndex:null,tmpValue:this.value,query:""}},computed:{borderStyle:function(){var e=this.isFocus&&!this.error||this.valid;return e?{border:"1px solid ".concat(this.valid?this.validColor:this.color," !important")}:null},colorStyle:function(){var e=this.isFocus||this.valid;return e?{color:"".concat(this.valid?this.validColor:this.color)}:null},bgStyle:function(){return{backgroundColor:"".concat(this.color)}},itemHeight:function(){return{height:"".concat(this.itemHeight,"px")}},countriesList:function(){var e=this;return this.items.filter(function(t){return!e.ignoredCountries.includes(t.iso2)})},countriesFiltered:function(){var e=this.onlyCountries||this.preferredCountries;return this.countriesList.filter(function(t){return e.find(function(e){return t.iso2.includes(e)})})},otherCountries:function(){var e=this;return this.countriesList.filter(function(t){return!e.preferredCountries.includes(t.iso2)})},countriesSorted:function(){return this.preferredCountries?[].concat(Object(v["a"])(this.countriesFiltered),Object(v["a"])(this.otherCountries)):this.onlyCountries?this.countriesFiltered:this.countriesList},selectedCountry:function(){var e=this;return this.value?Object(c["a"])({},this.countriesSorted.find(function(t){return t.iso2===e.value}),{index:this.countriesSorted.findIndex(function(t){return t.iso2===e.value})}):{}},tmpValueIndex:function(){var e=this;return this.countriesSorted.findIndex(function(t){return t.iso2===e.tmpValue})}},mounted:function(){var e=this;this.$parent.$on("phone-number-focused",function(){e.isFocus=!1})},methods:{onFocus:function(){this.disabled||(this.$emit("focus"),this.isFocus=!0,this.value&&this.scrollToSelectedOnFocus(this.selectedCountry.index))},onBlur:function(){this.$emit("blur"),this.isFocus=!1},updateValue:function(e){this.isFocus=!1,this.tmpValue=e,this.$emit("input",e)},scrollToSelectedOnFocus:function(e){var t=this;this.$nextTick(function(){t.$refs.countriesList.scrollTop=e*C-3*C})},keyboardNav:function(e){var t=this,n=e.keyCode;if(40===n||38===n){e.view.event.preventDefault();var a=40===n?this.tmpValueIndex+1:this.tmpValueIndex-1;(-1===a||a>=this.countriesSorted.length)&&(a=-1===a?this.countriesSorted.length-1:0),this.tmpValue=this.countriesSorted[a].iso2,this.scrollToSelectedOnFocus(a)}else if(13===n)this.updateValue(this.tmpValue);else if(27===n)this.onBlur();else{clearTimeout(this.queryTimer),this.queryTimer=setTimeout(function(){t.query=""},1e3);var r=String.fromCharCode(n);if(8===n&&""!==this.query)this.query=this.query.substring(0,this.query.length-1);else if(/[a-zA-Z-e ]/.test(r)){this.query+=e.key;var i=this.preferredCountries?this.countriesSorted.slice(this.preferredCountries.length):this.countriesSorted,o=i.findIndex(function(e){return t.tmpValue=e.iso2,e.name.toLowerCase().startsWith(t.query)});-1!==o&&this.scrollToSelectedOnFocus(o+(this.preferredCountries?this.preferredCountries.length:0))}}}}},k=S,N=(n("3a8e"),n("2877")),_=Object(N["a"])(k,b,y,!1,null,"060eaf8d",null);_.options.__file="CountrySelector.vue";var w=_.exports,I={countrySelectorLabel:"Country code",countrySelectorError:"Choose country",phoneNumberLabel:"Phone number"},B=function(){var e=window.navigator.userLanguage||window.navigator.language;return e.substr(0,2).toUpperCase()},V={name:"VuePhoneNumberInput",components:{VueInputUI:m.a,CountrySelector:w},props:{value:{type:String,default:null},id:{type:String,default:"VuePhoneNumberInput"},color:{type:String,default:"dodgerblue"},dark:{type:Boolean,default:Boolean},disabled:{type:Boolean,default:Boolean},defaultCountryCode:{type:String,default:null},size:{type:String,default:String},preferredCountries:{type:Array,default:null},onlyCountries:{type:Array,default:null},ignoredCountries:{type:Array,default:Array},translations:{type:Object,default:Object},noValidatorState:{type:Boolean,default:!1},noUseBrowserLocale:{type:Boolean,default:!1},noFlags:{type:Boolean,default:!1}},data:function(){return{results:{}}},mounted:function(){var e=this.defaultCountryCode||(this.noUseBrowserLocale?null:B());this.value&&e&&this.emitValue({phoneNumber:this.phoneNumber,countryCode:e})},computed:{t:function(){return Object(c["a"])({},I,this.translations)},codesCountries:function(){return h},countryCode:{get:function(){return this.results.countryCode||this.defaultCountryCode},set:function(e){this.emitValue({countryCode:e,phoneNumber:this.phoneNumber}),this.$refs.PhoneNumberInput.$el.querySelector("input").focus()}},phoneNumber:{get:function(){return this.value},set:function(e){this.$emit("input",e),this.emitValue({countryCode:this.countryCode,phoneNumber:e})}},shouldChooseCountry:function(){return!this.countryCode&&!!this.phoneNumber},phoneFormatted:function(){var e=new p["a"](this.countryCode).input(this.phoneNumber);return this.isValid?this.results.formatInternational:e},isValid:function(){return this.results.isValid}},methods:{getParsePhoneNumberFromString:function(e){var t=e.phoneNumber,n=e.countryCode,a=t&&n?Object(p["b"])(t,n):null;return Object(c["a"])({phoneNumber:t||null,countryCode:n,isValid:!1},a?{formattedNumber:a.number,nationalNumber:a.nationalNumber,isValid:a.isValid(),type:a.getType(),formatInternational:a.formatInternational(),formatNational:a.formatNational(),uri:a.getURI()}:null)},emitValue:function(e){this.results=this.getParsePhoneNumberFromString(e),this.$emit("update",this.results)}}},x=V,F=(n("9957"),Object(N["a"])(x,u,l,!1,null,null,null));F.options.__file="index.vue";var M=F.exports,z={name:"App",components:{VuePhoneNumberInput:M},data:function(){return{phoneNumber:"0665656565",phoneNumber2:null,defaultCountry:"FR",countriesList:["FR","BE","DE"],countriesIgnored:["AF","AD","AL"],translations:{countrySelectorLabel:"Code pays",countrySelectorError:"Choisir un pays",phoneNumberLabel:"Numéro de téléphone"},results:{},results2:{},dark:!1,disabled:!1}},computed:{resultsTable:function(){return s()(this.results)},resultsTable2:function(){return s()(this.results)}},methods:{onUpdate:function(e){this.results=e},onUpdate2:function(e){this.results2=e}}},P=z,T=(n("b038"),Object(N["a"])(P,r,i,!1,null,"15aee691",null));T.options.__file="App.vue";var L=T.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(L)}}).$mount("#app")},9957:function(e,t,n){"use strict";var a=n("0dfe"),r=n.n(a);r.a},a9b2:function(e,t,n){},b038:function(e,t,n){"use strict";var a=n("b343"),r=n.n(a);r.a},b343:function(e,t,n){}});
//# sourceMappingURL=app.564518ad.js.map