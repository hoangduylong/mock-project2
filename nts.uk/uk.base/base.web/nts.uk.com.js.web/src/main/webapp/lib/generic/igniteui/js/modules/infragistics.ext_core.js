/*!@license
* Infragistics.Web.ClientUI infragistics.ext_core.js 19.1.20191.172
*
* Copyright (c) 2011-2019 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$0=$$t;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["IComparable$1:a","IEquatable$1:b","Action:c","Action$1:d","Action$2:e","Action$3:f","Action$4:g","Action$5:h","Action$6:i","Action$7:j","Action$8:k","Action$9:l","Comparison$1:m","Error:n","FormatException:o","IConvertible:p","IFormatProvider:q","Error:r","Date:s","DateTimeKind:t","DayOfWeek:u","Number:v","EventArgs:w","EventHandler$1:x","Func$1:y","Func$2:z","Func$3:aa","Func$4:ab","Func$5:ac","Func$6:ad","Func$7:ae","Func$8:af","Func$9:ag","IComparable:ah","Nullable$1:ai","Nullable:aj","Number:ak","ParamArrayAttribute:al","Enum:am","Array:an","Attribute:ao","AttributeTargets:ap","Boolean:aq","Number:ar","String:as","Delegate:at","IDisposable:au","Number:av","Number:aw","Number:ax","IntPtr:ay","MulticastDelegate:az","Object:a0","ReflectionUtil:a1","RuntimeFieldHandle:a2","RuntimeTypeHandle:a3","SystemException:a4","TypeCode:a5","Number:a6","Script:a7","Number:a8","StringSplitOptions:a9","StringComparison:ba","Number:bb","Type:bc","Number:bd","Number:be","Number:bf","UIntPtr:bg","ValueType:bh","Void:bi","IEqualityComparer:bj","ICollection:bk","IDictionary:bl","IList:bm","JSDictionary:bn","Array:bo","Array:bp","Array:bq","CompareCallback:br","Dictionary:bs","IEnumerable:bt","IEnumerator:bu","ICollection$1:bv","IEnumerable$1:bw","IEnumerator$1:bx","IEqualityComparer$1:by","IList$1:bz","PlaceholderSystemCollectionsObjectModel:b0","PlaceholderSystemCollectionsSpecialized:b1","EditorBrowsableState:b2","ISupportInitialize:b3","ITypeDescriptorContext:b4","TypeConverter:b5","INotifyPropertyChanged:b6","PropertyChangedEventArgs:b7","PropertyChangedEventHandler:b8","Calendar:b9","CalendarWeekRule:ca","CompareInfo:cb","CompareOptions:cc","NumberStyles:cd","PlaceholderSystemGlobalization:ce","CultureInfo:cf","DateTimeFormat:cg","NumberFormatInfo:ch","ConstructorInfo:ci","MethodBase:cj","MemberInfo:ck","MethodInfo:cl","ParameterInfo:cm","PropertyInfo:cn","Assembly:co","PlaceholderSystemWindows:cp","PlaceholderSystemWindowsControls:cq","PlaceholderSystemWindowsControlsPrimitives:cr","PlaceholderSystemWindowsData:cs","PlaceholderSystemWindowsInput:ct","PlaceholderSystemWindowsMarkup:cu","PlaceholderSystemWindowsMediaImaging:cv","PlaceholderSystemWindowsMediaAnimation:cw","PlaceholderSystemWindowsMediaEffects:cx","PlaceholderSystemWindowsShapes:cy","PlaceholderSystemWindowsAutomation:cz","PlaceholderSystemWindowsAutomationPeers:c0","PlaceholderSystemWindowsDocuments:c1","PlaceholderSystemWindowsInk:c2","PlaceholderSystemWindowsThreading:c3","PlaceholderSystemText:c4","XMLHttpRequest:c5","RuntimeHelpers:c6","Interlocked:c7","Monitor:c8","Thread:c9","ThreadStart:da","SeekOrigin:db","Stream:dc","XmlAttribute:dd","XmlDocument:de","XmlDocumentParser:df","XmlElement:dg","XmlLinkedNode:dh","XmlNode:di","XmlNodeList:dj","XmlNamedNodeMap:dk","XmlNodeType:dl","XmlSchemaForm:dm","PlaceholderInfragisticsControlerChartsAutomationPeers:dn"]);$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$1=$$t;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["ButtonElement:a","DOMTokenList:b","ListItemElement:c","Node:d","SpanElement:e","TemplateElement:f","DomRenderer:g","DomWrapper:h","DomWrapperPosition:i","INormalizedEvent:j","CanvasElement:k","DivElement:l","Element:m","ElementAttribute:n","ElementAttributeCollection:o","ElementCollection:p","ElementEventHandler:q","ElementNodeType:r","EventListener:s","EventListener$1:t","IElementEventHandler:u","ImageElement:v","InputElement:w","MutationObserverInit:x","MutationRecord:y","OptionElement:z","SelectElement:aa","OptionsCollection:ab","WebStyle:ac","TextAreaElement:ad","Callback:ae","CanvasContext:af","CanvasContext2D:ag","ImageData:ah","Gradient:ai","TextMetrics:aj","JQuery:ak","JQueryObject:al","JQueryCallback:am","JQueryUICallback:an","JQueryPosition:ao"]);$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$6=$$t;$$0=$.ig.globalDefs.$$0;$$1=$.ig.globalDefs.$$1;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["IFormattable:n","Predicate$1:r","IComparer:aa","Comparer$1:ab","DefaultComparer$1:ac","IComparer$1:ad","AsyncCompletedEventHandler:af"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compare,$x=$.ig.util.replace,$y=$.ig.util.stringFormat,$z=$.ig.util.stringFormat1,$0=$.ig.util.stringFormat2,$1=$.ig.util.stringCompare1,$2=$.ig.util.stringCompare2,$3=$.ig.util.stringCompare3,$4=$.ig.util.compareSimple,$5=$.ig.util.tryParseNumber,$6=$.ig.util.tryParseNumber1,$7=$.ig.util.numberToString,$8=$.ig.util.numberToString1,$9=$.ig.util.parseNumber,$aa=$.ig.util.isDigit,$ab=$.ig.util.isDigit1,$ac=$.ig.util.isLetter,$ad=$.ig.util.isNumber,$ae=$.ig.util.isLetterOrDigit,$af=$.ig.util.isLower,$ag=$.ig.util.toLowerCase,$ah=$.ig.util.toUpperCase,$ai=$.ig.util.equalsSimple,$aj=$.ig.util.tryParseInt32_1,$ak=$.ig.util.tryParseInt32_2,$al=$.ig.util.intToString1,$am=$.ig.util.parseInt32_1,$an=$.ig.util.parseInt32_2;$d("ListSortDirection:ah",false,false,{Ascending:0,Descending:1});$d("UriKind:y",false,false,{RelativeOrAbsolute:0,Absolute:1,Relative:2});$d("Guid_GuidStyles:m",true,false,{AllowBraces:2,AllowDashes:4,AllowHexPrefix:8,AllowParenthesis:1,Any:15,BraceFormat:96,DigitFormat:64,HexFormat:160,None:0,NumberFormat:0,ParenthesisFormat:80,RequireBraces:32,RequireDashes:64,RequireHexPrefix:128,RequireParenthesis:16});$d("Guid_GuidParseThrowStyle:l",false,false,{None:0,All:1,AllButOverflow:2});$d("Guid_ParseFailureKind:k",false,false,{None:0,ArgumentNull:1,Format:2,FormatWithParameter:3,NativeException:4,FormatWithInnerException:5});$c("Localization:ak","Object",{init:function(){$.ig.$op.init.call(this)},register:function(a,b){if($$t.$ak.b==null){$$t.$ak.b={}}$$t.$ak.b[a]=b},c:function(a,b,c){var d;if($$t.$ak.a!=null){d=$$t.$ak.a(a,b)}else{d=$.ig.util.getLocaleValue(a,b)}if(String.isNullOrEmpty(d)){d=""}else if(c!=null&&c.length>0){d=$z(d,c)}return d},$type:new $.ig.Type("Localization",$.ig.$ot)},true);$c("GC:a","Object",{init:function(){$.ig.$op.init.call(this)},$type:new $.ig.Type("GC",$.ig.$ot)},true);$c("Activator:b","Object",{init:function(){$.ig.$op.init.call(this)},b:function(a){return null},c:function(a,b){return null},a:function($t){return $f($t)},$type:new $.ig.Type("Activator",$.ig.$ot)},true);$c("AggregateException:c","Error",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$n.init.call(this,0)},init1:function(a,b){$$0.$n.init1.call(this,1,b)},init2:function(a,b,c){$$0.$n.init2.call(this,2,b,c)},$type:new $.ig.Type("AggregateException",$$0.$n.$type)},true);$c("ArgumentException:d","Error",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break;case 3:this.init3.apply(this,arguments);break}return}$$0.$n.init.call(this,0)},init1:function(a,b){$$0.$n.init1.call(this,1,b)},init2:function(a,b,c){$$0.$n.init1.call(this,1,b)},init3:function(a,b,c){$$0.$n.init2.call(this,2,b,c)},$type:new $.ig.Type("ArgumentException",$$0.$n.$type)},true);$c("ArgumentNullException:e","Error",{init:function(a,b){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$n.init1.call(this,1,b+" cannot be null.")},init1:function(a){$$0.$n.init.call(this,0);throw new $$t.q(0)},init2:function(a,b,c){$$0.$n.init1.call(this,1,c);throw new $$t.q(0)},$type:new $.ig.Type("ArgumentNullException",$$0.$n.$type)},true);$c("ArgumentOutOfRangeException:f","ArgumentException",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break;case 3:this.init3.apply(this,arguments);break;case 4:this.init4.apply(this,arguments);break}return}$$t.$d.init.call(this,0)},init1:function(a,b){$$t.$d.init1.call(this,1,b+" is out of range.")},init2:function(a,b,c){$$t.$d.init1.call(this,1,c)},init3:function(a,b,c,d){$$t.$f.init2.call(this,2,d,b)},init4:function(a,b,c){$$t.$d.init3.call(this,3,b,c)},$type:new $.ig.Type("ArgumentOutOfRangeException",$$t.$d.$type)},true);$c("Convert:g","Object",{init:function(){$.ig.$op.init.call(this)},toDouble5:function(a){return a},toDouble1:function(a){return a},toDouble:function(a){return a},toDouble2:function(a){return a},toDecimal:function(a){return a},toDecimal3:function(a){return a},toDecimal1:function(a){return a},toInt32:function(a){if(a>=0){var b=$.ig.truncate(Math.floor(a));var c=a-b;var d=Math.ceil(a)-a;if(c>d||c==d&&(b&1)>0){b++}return b}else{var e=$.ig.truncate(Math.ceil(a));var f=e-a;var g=a-Math.floor(a);if(f>g||f==g&&(e&1)>0){e--}return e}},toInt322:function(a){return parseInt(a)},toDouble3:function(a){return $$t.$g.toDouble4(a,$$0.$cf.currentCulture())},toDouble4:function(a,b){var c=$.ig.util.getValue($.ig.util.unwrapNullable(a));if(c==null){return 0}var d=+c;if($.ig.util.isNaN(d)){return c.toDouble(b)}return d},toInt321:function(a){var b=$.ig.util.getValue($.ig.util.unwrapNullable(a));if(b==null){return 0}var c=+b;if($.ig.util.isNaN(c)){return b.toInt32($$0.$cf.currentCulture())}return c},toInt64:function(a){var b=$.ig.util.getValue($.ig.util.unwrapNullable(a));if(b==null){return 0}var c=+b;if($.ig.util.isNaN(c)){return b.toInt64($$0.$cf.currentCulture())}return c},toDecimal2:function(a){var b=$.ig.util.getValue($.ig.util.unwrapNullable(a));if(b==null){return 0}var c=+b;if($.ig.util.isNaN(c)){return b.toDecimal($$0.$cf.currentCulture())}return c},toByte:function(a){return a?1:0},toByte1:function(a){var b=$.ig.util.getValue($.ig.util.unwrapNullable(a));if(b==null){return 0}var c=+b;if($.ig.util.isNaN(c)){return b.toByte($$0.$cf.currentCulture())}return c},toBoolean:function(a){var b=$.ig.util.getValue($.ig.util.unwrapNullable(a));if(b==null){return false}return!!b},toDateTime:function(a){var b=$.ig.util.getValue($.ig.util.unwrapNullable(a));if(b==null){return $$0.$s.minValue()}if($b($$0.$s.$type,b)!==null){return b}var c=+b;if(!$.ig.util.isNaN(c)){return $.ig.Date.prototype.fromTicks(c)}return $$0.$s.parse(b.toString(),null)},toChar:function(a){return $u(a)},toChar1:function(a){return $u(a)},toDouble6:function(a,b){return $9(a,b)},toUInt16:function(a){return a?1:0},toBoolean1:function(a){return a!=0},toUInt32:function(a){return a},fromBase64String:function(a){return $.ig.util.b64toUint8Array(a)},toBase64String:function(a){return $.ig.util.uint8ArraytoB64(a)},toByte2:function(a,b){throw new $$t.q(0)},$type:new $.ig.Type("Convert",$.ig.$ot)},true);$c("Environment:h","Object",{init:function(){$.ig.$op.init.call(this)},newLine:function(){return"\n"},b:function(){try{throw new Error}catch(a){return a.stack}return""},$type:new $.ig.Type("Environment",$.ig.$ot)},true);$c("IFormattable:n","Object",{$type:new $.ig.Type("IFormattable",null)},true);$c("Guid:i","ValueType",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break;case 3:this.init3.apply(this,arguments);break}return}$$0.$bh.init.call(this)},ae:0,ac:0,ad:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,init1:function(a,b){$$0.$bh.init.call(this);this.ae=b[3]<<24|b[2]<<16|b[1]<<8|b[0];this.ac=b[5]<<8|b[4];this.ad=b[7]<<8|b[6];this.r=b[8];this.s=b[9];this.t=b[10];this.u=b[11];this.v=b[12];this.w=b[13];this.x=b[14];this.y=b[15]},init2:function(a,b,c,d,e,f,g,h,i,j,k,l){$$0.$bh.init.call(this);this.ae=b;this.ac=c;this.ad=d;this.r=e;this.s=f;this.t=g;this.u=h;this.v=i;this.w=j;this.x=k;this.y=l},init3:function(a,b){$$0.$bh.init.call(this);if(b==null){throw new $$t.e(0,"g")}var c=new $$t.j;c.i(1);if(!function(){var d=$$t.$i.n(b,15,c);c=d.p2;return d.ret}()){throw c.a()}this.ae=c.c.ae;this.ac=c.c.ac;this.ad=c.c.ad;this.r=c.c.r;this.s=c.c.s;this.t=c.c.t;this.u=c.c.u;this.v=c.c.v;this.w=c.c.w;this.x=c.c.x;this.y=c.c.y},compareTo1:function(a){var b=this.ae-a.ae;if(b!=0){return b}b=this.ac-a.ac;if(b!=0){return b}b=this.ad-a.ad;if(b!=0){return b}b=this.r-a.r;if(b!=0){return b}b=this.s-a.s;if(b!=0){return b}b=this.t-a.t;if(b!=0){return b}b=this.u-a.u;if(b!=0){return b}b=this.v-a.v;if(b!=0){return b}b=this.w-a.w;if(b!=0){return b}b=this.x-a.x;if(b!=0){return b}b=this.y-a.y;return b},compareTo:function(a){if($b($$t.$i.$type,a)!==null){return this.compareTo1(a)}return 1},equals:function(a){return $$t.$i.l_op_Equality(this,a)},newGuid:function(){return new $$t.i(3,$.ig.util.createGuid())},toByteArray:function(){return[this.ae,this.ae>>8,this.ae>>16,this.ae>>24,this.ac,this.ac>>8,this.ad,this.ad>>8,this.r,this.s,this.t,this.u,this.v,this.w,this.x,this.y]},toString:function(){return this.toString1("D",null)},toString2:function(a){return this.toString1(a,null)},toString1:function(a,b){var c;if(a==null||a.length==0){a="D"}var d=0;var e=38;var f=true;var g=false;if(a.length!=1){throw new $$0.o(0)}var h=a.charAt(0);switch(h){case"D":case"d":c=new Array(36);e=36;break;case"N":case"n":c=new Array(32);e=32;f=false;break;case"B":case"b":c=new Array(38);c[d++]="{";c[37]="}";break;case"P":case"p":c=new Array(38);c[d++]="(";c[37]=")";break;default:if(h!="X"&&h!="x"){throw new $$0.o(0)}c=new Array(68);c[d++]="{";c[67]="}";e=68;f=false;g=true;break}if(g){c[d++]="0";c[d++]="x";d=$$t.$i.af(c,d,this.ae>>24,this.ae>>16);d=$$t.$i.af(c,d,this.ae>>8,this.ae);c[d++]=",";c[d++]="0";c[d++]="x";d=$$t.$i.af(c,d,this.ac>>8,this.ac);c[d++]=",";c[d++]="0";c[d++]="x";d=$$t.$i.af(c,d,this.ad>>8,this.ad);c[d++]=",";c[d++]="{";d=$$t.$i.ag(c,d,this.r,this.s,true);c[d++]=",";d=$$t.$i.ag(c,d,this.t,this.u,true);c[d++]=",";d=$$t.$i.ag(c,d,this.v,this.w,true);c[d++]=",";d=$$t.$i.ag(c,d,this.x,this.y,true);c[d++]="}"}else{d=$$t.$i.af(c,d,this.ae>>24,this.ae>>16);d=$$t.$i.af(c,d,this.ae>>8,this.ae);if(f){c[d++]="-"}d=$$t.$i.af(c,d,this.ac>>8,this.ac);if(f){c[d++]="-"}d=$$t.$i.af(c,d,this.ad>>8,this.ad);if(f){c[d++]="-"}d=$$t.$i.af(c,d,this.r,this.s);if(f){c[d++]="-"}d=$$t.$i.af(c,d,this.t,this.u);d=$$t.$i.af(c,d,this.v,this.w);d=$$t.$i.af(c,d,this.x,this.y)}return $.ig.util.createString3(c,0,e)},af:function(a,b,c,d){return $$t.$i.ag(a,b,c,d,false)},ag:function(a,b,c,d,e){if(e){a[b++]="0";a[b++]="x"}a[b++]=$$t.$i.z(c>>4);a[b++]=$$t.$i.z(c);if(e){a[b++]=",";a[b++]="0";a[b++]="x"}a[b++]=$$t.$i.z(d>>4);a[b++]=$$t.$i.z(d);return b},z:function(a){a&=15;return a>9?$u(a-10+97):$u(a+48)},tryParse:function(a,b){var c=new $$t.j;c.i(0);if(function(){var d=$$t.$i.n(a,15,c);c=d.p2;return d.ret}()){b=c.c;return{ret:true,p1:b}}b=$$t.$i.empty;return{ret:false,p1:b}},n:function(a,b,c){if(a==null){c.k(2,"Format_GuidUnrecognized");return{ret:false,p2:c}}var d=a.trim();if(d.length==0){c.k(2,"Format_GuidUnrecognized");return{ret:false,p2:c}}var e=d.indexOf("-",0)>=0;if(e){if((b&(64|4))==0){c.k(2,"Format_GuidUnrecognized");return{ret:false,p2:c}}}else if((b&64)!=0){c.k(2,"Format_GuidUnrecognized");return{ret:false,p2:c}}var f=d.indexOf("{",0)>=0;if(f){if((b&(32|2))==0){c.k(2,"Format_GuidUnrecognized");return{ret:false,p2:c}}}else if((b&32)!=0){c.k(2,"Format_GuidUnrecognized");return{ret:false,p2:c}}if(d.indexOf("(",0)>=0){if((b&(16|1))==0){c.k(2,"Format_GuidUnrecognized");return{ret:false,p2:c}}}else if((b&16)!=0){c.k(2,"Format_GuidUnrecognized");return{ret:false,p2:c}}try{if(e){return{ret:function(){var g=$$t.$i.o(d,c);c=g.p1;return g.ret}(),p2:c}}if(f){return{ret:function(){var g=$$t.$i.p(d,c);c=g.p1;return g.ret}(),p2:c}}return{ret:function(){var g=$$t.$i.q(d,c);c=g.p1;return g.ret}(),p2:c}}catch(g){var h=$b($$t.$o.$type,g);if(h!=null){c.m(5,"Format_GuidUnrecognized",null,null,h);return{ret:false,p2:c}}var i=$b($$t.$d.$type,g);if(i!=null){c.m(5,"Format_GuidUnrecognized",null,null,i);return{ret:false,p2:c}}throw g}},o:function(a,b){var c;var d;var e;var f=0;var g=0;if(a.charAt(0)=="{"){if(a.length!=38||a.charAt(37)!="}"){b.k(2,"Format_GuidInvLen");return{ret:false,p1:b}}f=1}else if(a.charAt(0)=="("){if(a.length!=38||a.charAt(37)!=")"){b.k(2,"Format_GuidInvLen");return{ret:false,p1:b}}f=1}else if(a.length!=36){b.k(2,"Format_GuidInvLen");return{ret:false,p1:b}}if(a.charAt(8+f)!="-"||a.charAt(13+f)!="-"||(a.charAt(18+f)!="-"||a.charAt(23+f)!="-")){b.k(2,"Format_GuidDashes");return{ret:false,p1:b}}g=f;if(!function(){var h=$$t.$i.j(a,g,8,8192,c,b);g=h.p1;c=h.p4;b=h.p5;return h.ret}()){return{ret:false,p1:b}}b.c.ae=c;g++;if(!function(){var h=$$t.$i.j(a,g,4,8192,c,b);g=h.p1;c=h.p4;b=h.p5;return h.ret}()){return{ret:false,p1:b}}b.c.ac=c;g++;if(!function(){var h=$$t.$i.j(a,g,4,8192,c,b);g=h.p1;c=h.p4;b=h.p5;return h.ret}()){return{ret:false,p1:b}}b.c.ad=c;g++;if(!function(){var h=$$t.$i.j(a,g,4,8192,c,b);g=h.p1;c=h.p4;b=h.p5;return h.ret}()){return{ret:false,p1:b}}g++;f=g;if(!function(){var h=$$t.$i.j(a,g,4,8192,d,b);g=h.p1;d=h.p4;b=h.p5;return h.ret}()){return{ret:false,p1:b}}if(!function(){var h=$$t.$i.j(a,g,8,8192,e,b);g=h.p1;e=h.p4;b=h.p5;return h.ret}()){return{ret:false,p1:b}}b.c.r=c>>8&255;b.c.s=c&255;c=d;b.c.t=c>>8&255;b.c.u=c&255;c=e;b.c.v=c>>24&255;b.c.w=c>>16&255;b.c.x=c>>8&255;b.c.y=c&255;return{ret:true,p1:b}},ah:function(a){var b=0;var c=new Array(a.length);for(var d=0;d<a.length;d++){var e=a.charAt(d);if(!/\s/i.test(e)){c[b++]=e}}return $.ig.util.createString3(c,0,b)},p:function(a,b){var c=0;var d=0;a=$$t.$i.ah(a);if(String.isNullOrEmpty(a)||a.charAt(0)!="{"){b.k(2,"Format_GuidBrace");return{ret:false,p1:b}}if(!$$t.$i.b(a,1)){b.l(2,"Format_GuidHexPrefix","{0xdddddddd, etc}");return{ret:false,p1:b}}c=3;d=a.indexOf(",",c)-c;if(d<=0){b.k(2,"Format_GuidComma");return{ret:false,p1:b}}if(!function(){var e=$$t.$i.i(a.substr(c,d),-1,4096,b.c.ae,b);b.c.ae=e.p3;b=e.p4;return e.ret}()){return{ret:false,p1:b}}if(!$$t.$i.b(a,c+d+1)){b.l(2,"Format_GuidHexPrefix","{0xdddddddd, 0xdddd, etc}");return{ret:false,p1:b}}c=c+d+3;d=a.indexOf(",",c)-c;if(d<=0){b.k(2,"Format_GuidComma");return{ret:false,p1:b}}if(!function(){var e=$$t.$i.k(a.substr(c,d),-1,4096,b.c.ac,b);b.c.ac=e.p3;b=e.p4;return e.ret}()){return{ret:false,p1:b}}if(!$$t.$i.b(a,c+d+1)){b.l(2,"Format_GuidHexPrefix","{0xdddddddd, 0xdddd, 0xdddd, etc}");return{ret:false,p1:b}}c=c+d+3;d=a.indexOf(",",c)-c;if(d<=0){b.k(2,"Format_GuidComma");return{ret:false,p1:b}}if(!function(){var e=$$t.$i.k(a.substr(c,d),-1,4096,b.c.ad,b);b.c.ad=e.p3;b=e.p4;return e.ret}()){return{ret:false,p1:b}}if(a.length<=c+d+1||a.charAt(c+d+1)!="{"){b.k(2,"Format_GuidBrace");return{ret:false,p1:b}}d++;var e=new Array(8);for(var f=0;f<8;f++){if(!$$t.$i.b(a,c+d+1)){b.l(2,"Format_GuidHexPrefix","{... { ... 0xdd, ...}}");return{ret:false,p1:b}}c=c+d+3;if(f<7){d=a.indexOf(",",c)-c;if(d<=0){b.k(2,"Format_GuidComma");return{ret:false,p1:b}}}else{d=a.indexOf("}",c)-c;if(d<=0){b.k(2,"Format_GuidBraceAfterLastNumber");return{ret:false,p1:b}}}var g=$i($an(a.substr(c,d),515,null));if(g>255){b.k(2,"Overflow_Byte");return{ret:false,p1:b}}e[f]=g}b.c.r=e[0];b.c.s=e[1];b.c.t=e[2];b.c.u=e[3];b.c.v=e[4];b.c.w=e[5];b.c.x=e[6];b.c.y=e[7];if(c+d+1>=a.length||a.charAt(c+d+1)!="}"){b.k(2,"Format_GuidEndBrace");return{ret:false,p1:b}}if(c+d+1!=a.length-1){b.k(2,"Format_ExtraJunkAtEnd");return{ret:false,p1:b}}return{ret:true,p1:b}},q:function(a,b){var c;var d;var e;var f=0;if(a.length!=32){b.k(2,"Format_GuidInvLen");return{ret:false,p1:b}}for(var g=0;g<a.length;g++){var h=a.charAt(g);if(h.charCodeAt(0)<"0".charCodeAt(0)||h.charCodeAt(0)>"9".charCodeAt(0)){var i=$ah(h);if(i.charCodeAt(0)<"A".charCodeAt(0)||i.charCodeAt(0)>"F".charCodeAt(0)){b.k(2,"Format_GuidInvalidChar");return{ret:false,p1:b}}}}if(!function(){var j=$$t.$i.i(a.substr(f,8),-1,4096,b.c.ae,b);b.c.ae=j.p3;b=j.p4;return j.ret}()){return{ret:false,p1:b}}f+=8;if(!function(){var j=$$t.$i.k(a.substr(f,4),-1,4096,b.c.ac,b);b.c.ac=j.p3;b=j.p4;return j.ret}()){return{ret:false,p1:b}}f+=4;if(!function(){var j=$$t.$i.k(a.substr(f,4),-1,4096,b.c.ad,b);b.c.ad=j.p3;b=j.p4;return j.ret}()){return{ret:false,p1:b}}f+=4;if(!function(){var j=$$t.$i.i(a.substr(f,4),-1,4096,c,b);c=j.p3;b=j.p4;return j.ret}()){return{ret:false,p1:b}}f+=4;if(!function(){var j=$$t.$i.i(a.substr(f,4),-1,f,d,b);d=j.p3;b=j.p4;return j.ret}()){return{ret:false,p1:b}}f+=4;if(!function(){var j=$$t.$i.i(a.substr(f,8),-1,f,e,b);e=j.p3;b=j.p4;return j.ret}()){return{ret:false,p1:b}}b.c.r=c>>8&255;b.c.s=c&255;c=d;b.c.t=c>>8&255;b.c.u=c&255;c=e;b.c.v=c>>24&255;b.c.w=c>>16&255;b.c.x=c>>8&255;b.c.y=c&255;return{ret:true,p1:b}},k:function(a,b,c,d,e){var f=0;return{ret:function(){var g=$$t.$i.l(a,f,b,c,d,e);f=g.p1;d=g.p4;e=g.p5;return g.ret}(),p3:d,p4:e}},l:function(a,b,c,d,e,f){var g;e=0;var h=function(){var i=$$t.$i.j(a,b,c,d,g,f);b=i.p1;g=i.p4;f=i.p5;return i.ret}();e=g;return{ret:h,p1:b,p4:e,p5:f}},i:function(a,b,c,d,e){var f=0;return{ret:function(){var g=$$t.$i.j(a,f,b,c,d,e);f=g.p1;d=g.p4;e=g.p5;return g.ret}(),p3:d,p4:e}},j:function(a,b,c,d,e,f){e=0;var g=b;try{if(c==-1){var h=a.length-b;while(true){if(function(){var i=$ak(a.substr(b,h),515,$$0.$cf.invariantCulture(),e);e=i.p3;return i.ret}()){break}h--}b+=h}else{e=$an(a.substr(b,c),515,null);b+=c}}catch(i){if(f.d!=0){throw i}f.j(i);return{ret:false,p1:b,p4:e,p5:f}}if(c!=-1&&b-g!=c){f.k(2,"Format_GuidInvalidChar");return{ret:false,p1:b,p4:e,p5:f}}return{ret:true,p1:b,p4:e,p5:f}},b:function(a,b){return a.length>b+1&&a.charAt(b)=="0"&&$ag(a.charAt(b+1))=="x"},l_op_Inequality:function(a,b){return!$$t.$i.l_op_Equality(a,b)},l_op_Inequality_Lifted:function(a,b){if(!a.hasValue()){return b.hasValue()}else if(!b.hasValue()){return true}return $$t.$i.l_op_Inequality(a.value(),b.value())},l_op_Equality:function(a,b){return a.ae==b.ae&&a.ac==b.ac&&a.ad==b.ad&&a.r==b.r&&a.s==b.s&&a.t==b.t&&a.u==b.u&&a.v==b.v&&a.w==b.w&&a.x==b.x&&a.y==b.y},l_op_Equality_Lifted:function(a,b){if(!a.hasValue()){return!b.hasValue()}else if(!b.hasValue()){return false}return $$t.$i.l_op_Equality(a.value(),b.value())},$type:new $.ig.Type("Guid",$$0.$bh.$type,[$$t.$n.$type,$$0.$ah.$type,$$0.$a.$type.specialize(-1),$$0.$b.$type.specialize(-1)])},true);$$t.$i.$type.initSelfReferences();$c("Guid_GuidResult:j","ValueType",{init:function(){this.c=new $$t.i;$$0.$bh.init.call(this)},c:null,d:0,e:0,h:null,f:null,g:null,b:null,i:function(a){this.c=$$t.$i.empty;this.d=a},j:function(a){this.e=4;this.b=a},k:function(a,b){this.m(a,b,null,null,null)},l:function(a,b,c){this.m(a,b,c,null,null)},m:function(a,b,c,d,e){this.e=a;this.h=b;this.f=c;this.g=d;this.b=e;if(this.d!=0){throw this.a()}},a:function(){switch(this.e){case 1:return new $$t.e(0,this.g);case 2:return new $$0.o(0);case 3:return new $$0.o(0);case 4:return this.b;case 5:return new $$0.o(2,"The format of the Guid was incorrect.",this.b)}return new $$0.o(0)},$type:new $.ig.Type("Guid_GuidResult",$$0.$bh.$type)},true);$c("IndexOutOfRangeException:o","Error",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$n.init.call(this,0)},init1:function(a,b){$$0.$n.init1.call(this,1,b)},$type:new $.ig.Type("IndexOutOfRangeException",$$0.$n.$type)},true);$c("InvalidOperationException:p","Error",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$$0.$n.init1.call(this,1,"Invalid operation")},init1:function(a,b){$$0.$n.init1.call(this,1,b)},init2:function(a,b,c){$$0.$n.init2.call(this,2,b,c);throw new $$t.q(0)},$type:new $.ig.Type("InvalidOperationException",$$0.$n.$type)},true);$c("NotImplementedException:q","Error",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$n.init1.call(this,1,"not implemented")},init1:function(a,b){$$0.$n.init1.call(this,1,b);throw new $$t.q(0)},$type:new $.ig.Type("NotImplementedException",$$0.$n.$type)},true);$c("Random:s","Object",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$.ig.$op.init.call(this)},init1:function(a,b){$.ig.$op.init.call(this)},nextDouble:function(){return Math.random()},next:function(){return this.next1(2147483647)},next1:function(a){return $.ig.truncate(Math.round(this.nextDouble()*(a-1)))},next2:function(a,b){return a+$.ig.truncate(Math.round(this.nextDouble()*(b-a-1)))},$type:new $.ig.Type("Random",$.ig.$ot)},true);$c("IComparer:aa","Object",{$type:new $.ig.Type("IComparer",null)},true);$c("IComparer$1:ad","Object",{$type:new $.ig.Type("IComparer$1",null)},true);$c("StringComparer:t","Object",{h:0,init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$.ig.$op.init.call(this)},init1:function(a,b){$.ig.$op.init.call(this);this.h=b},compare:function(a,b){return $1($b(String,a),$b(String,b),this.h)},compare1:function(a,b){return $1(a,b,this.h)},create:function(a,b){if(a.name()==$$0.$cf.invariantCulture().name()){return b?$$t.$t.invariantCultureIgnoreCase:$$t.$t.invariantCulture}return b?$$t.$t.currentCultureIgnoreCase:$$t.$t.currentCulture},equalsC:function(a,b){return this.compare1(a,b)==0},getHashCodeC:function(a){if(a==null){return 0}switch(this.h){case 0:case 2:case 4:return a.getHashCode();case 1:return a.toLowerCase().getHashCode();case 3:case 5:return a.toLowerCase().getHashCode();default:return 0}},$type:new $.ig.Type("StringComparer",$.ig.$ot,[$$t.$aa.$type,$$0.$bj.$type,$$t.$ad.$type.specialize(String),$$0.$by.$type.specialize(String)])},true);$c("Tuple$2:u","Object",{$t1:null,$t2:null,_c:null,_d:null,init:function($t1,$t2,a,b){this.$t1=$t1;this.$t2=$t2;if(!this.hasOwnProperty("$type")){this.$type=this.$type.specialize(this.$t1,this.$t2)}$.ig.$op.init.call(this);this._c=a;this._d=b},equals:function(a){var b=$b($$t.$u.$type.specialize(this.$t1,this.$t2),a);return b!=null&&$.ig.$op.equalsStatic($e(this.$t1,this._c),$e(this.$t1,b._c))&&$.ig.$op.equalsStatic($e(this.$t2,this._d),$e(this.$t2,b._d))},getHashCode:function(){var a=0;if($e(this.$t1,this._c)!=null){a=this._c.getHashCode()}if($e(this.$t2,this._d)!=null){a=a^this._d.getHashCode()<<16}return a},$type:new $.ig.Type("Tuple$2",$.ig.$ot)},true);$c("Tuple$3:v","Object",{$t1:null,$t2:null,$t3:null,_c:null,_d:null,_e:null,init:function($t1,$t2,$t3,a,b,c){this.$t1=$t1;this.$t2=$t2;this.$t3=$t3;if(!this.hasOwnProperty("$type")){this.$type=this.$type.specialize(this.$t1,this.$t2,this.$t3)}$.ig.$op.init.call(this);this._c=a;this._d=b;this._e=c},equals:function(a){var b=$b($$t.$v.$type.specialize(this.$t1,this.$t2,this.$t3),a);return b!=null&&$.ig.$op.equalsStatic($e(this.$t1,this._c),$e(this.$t1,b._c))&&$.ig.$op.equalsStatic($e(this.$t2,this._d),$e(this.$t2,b._d))&&$.ig.$op.equalsStatic($e(this.$t3,this._e),$e(this.$t3,b._e))},getHashCode:function(){var a=0;if($e(this.$t1,this._c)!=null){a=this._c.getHashCode()}if($e(this.$t2,this._d)!=null){a=a^this._d.getHashCode()<<8}if($e(this.$t3,this._e)!=null){a=a^this._e.getHashCode()<<16}return a},$type:new $.ig.Type("Tuple$3",$.ig.$ot)},true);$c("Tuple:w","Object",{init:function(){$.ig.$op.init.call(this)},a:function($t1,$t2,a,b){return new $$t.u($t1,$t2,a,b)},b:function($t1,$t2,$t3,a,b,c){return new $$t.v($t1,$t2,$t3,a,b,c)},$type:new $.ig.Type("Tuple",$.ig.$ot)},true);$c("Uri:x","Object",{init:function(a,b){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break;case 3:this.init3.apply(this,arguments);break}return}$$t.$x.init2.call(this,2,b,1,true)},init1:function(a,b,c){$$t.$x.init2.call(this,2,b,c,true)},init2:function(a,b,c,d){$.ig.$op.init.call(this);this.value(b)},_value:null,value:function(a){if(arguments.length===1){this._value=a;return a}else{return this._value}},isAbsoluteUri:function(){var a=this.value();var b=a.length;if(b!=0&&$ac(a.charAt(0))){for(var c=1;c<b;c++){var d=a.charAt(c);if(d==":"){return true}if(d!="+"&&d!="-"&&d!="."&&!$ae(d)){break}}}return false},scheme:function(){var a=this.value();var b=a.length;if(b!=0&&$ac(a.charAt(0))){for(var c=1;c<b;c++){var d=a.charAt(c);if(d==":"){return a.substr(0,c)}if(d!="+"&&d!="-"&&d!="."&&!$ae(d)){break}}}throw new $$t.p(1,"The scheme cannot be obtained from a relative Uri.")},encodeURIComponent:function(a){return null},escapeUriString:function(a){if(/^([A-Z]:)|(\\\\)/i.test(a)){return a}return encodeURI(a)},tryCreate:function(a,b,c){if($$t.$x.isWellFormedUriString(a,b)){c=new $$t.x(2,a,b,false);return{ret:true,p2:c}}c=null;return{ret:false,p2:c}},isWellFormedUriString:function(a,b){switch(b){case 1:if(!/^(((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?))([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.test(a)){return false}break;case 2:if(!/^([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.test(a)){return false}break;default:case 0:if(!/^((((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?)))?([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.test(a)){return false}break}return true},toString:function(){if(/^([A-Z]:)|(\\\\)/i.test(this.value())){return this.value()}var a=decodeURI(this.value());if(/^(http|ftp|https):\/\/[\w-]+(\.[\w-]*)+?$/i.test(a)){a+="/"}return a},init3:function(a,b,c){$.ig.$op.init.call(this);throw new $$t.q(0)},absolutePath:function(){throw new $$t.q(0)},absoluteUri:function(){throw new $$t.q(0)},localPath:function(){var a=/^(((http|ftp|https):\/\/[\w-]+(\.[\w-]*)+)|(file:\/\/\/?))([\w\\$()!'.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/i.exec(this.value());if(a==null){throw new $$t.p(0)}if(a[6]!=null){return decodeURI(a[6])}return"/"},originalString:function(){return this.value()},isWellFormedOriginalString:function(){return $$t.$x.isWellFormedUriString(this.value(),0)},$type:new $.ig.Type("Uri",$.ig.$ot)},true);$c("WeakReference:z","Object",{b:null,init:function(a){$.ig.$op.init.call(this);this.b=a},a:function(){return true},c:function(a){if(arguments.length===1){this.b=a;return a}else{return this.b}},$type:new $.ig.Type("WeakReference",$.ig.$ot)},true);$c("StringBuilder:aj","Object",{_internal:null,internal:function(a){if(arguments.length===1){this._internal=a;return a}else{return this._internal}},init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break}return}$.ig.$op.init.call(this);this.internal("")},init1:function(a,b){$$t.$aj.init.call(this,0)},init2:function(a,b){$.ig.$op.init.call(this);this.internal(b)},k:function(a){if(a!=null){this.l(a.toString())}return this},l:function(str_){if(str_!=null){this._internal=this._internal.concat(str_)}return this},n:function(a){var str_=a.toString();this._internal=this._internal.concat(str_);return this},h:function(chr_){this._internal=this._internal.concat(chr_);return this},i:function(chr_,count_){if(chr_.repeat){this._internal=this._internal.concat(chr_.repeat(count_))}else{for(var a=0;a<count_;a++){this._internal=this._internal.concat(chr_)}}return this},j:function(value_){this._internal=this._internal.concat(value_);return this},m:function(value_,startIndex_,count_){this._internal=this._internal.concat(value_.substr(startIndex_,count_));return this},g:function(value_,startIndex_,charCount_){this._internal=this._internal.concat(value_.slice(startIndex_,startIndex_+charCount_).join(""));return this},t:function(){return this.u("")},u:function(str_){if(str_!=null){this._internal=this._internal.concat(str_)}this._internal=this._internal.concat($.ig.Environment.prototype.newLine());return this},v:function(){this.internal("");return this},w:function(index_,chr_){if(index_==this.c()){this.h(chr_)}else{this._internal=this._internal.substring(0,index_).concat(chr_).concat(this._internal.substring(index_,this._internal.length))}return this},x:function(index_,str_){if(index_==this.c()){this.l(str_)}else{this._internal=this._internal.substring(0,index_).concat(str_).concat(this._internal.substring(index_,this._internal.length));
}return this},y:function(startIndex_,length_){this._internal=this._internal.substring(0,startIndex_).concat(this._internal.substring(startIndex_+length_,this._internal.length));return this},z:function(oldCh_,newCh_){this._internal=this._internal.replace(oldCh_,newCh_);return this},toString:function(){return this.internal()},f:function(a,b){return this.internal().substr(a,b)},c:function(a){if(arguments.length===1){if(a<=this.c()){this._internal=this._internal.substring(0,a)}else{throw new $$t.q(0)}return a}else{return this.internal().length}},item:function(index_,a){if(arguments.length===2){this._internal=this._internal.substring(0,index_).concat(a).concat(this._internal.substring(index_+1,this._internal.length));return a}else{return this.internal().charAt(index_)}},q:function(a,b){return this.l($y(a,b))},p:function(a,b){return this.l($z(a,b))},o:function(a,b,c){return this.l($0(a,b,c))},r:function(a,b,c){return this.l($y(a,b,c))},s:function(a,b,c,d){return this.l($y(a,b,c,d))},_b:0,$type:new $.ig.Type("StringBuilder",$.ig.$ot)},true);$c("InAttribute","Attribute",{init:function(){$$0.$ao.init.call(this)},$type:new $.ig.Type("InAttribute",$$0.$ao.$type)},true);$c("Out1Attribute","Attribute",{init:function(){$$0.$ao.init.call(this)},$type:new $.ig.Type("Out1Attribute",$$0.$ao.$type)},true);$c("Debug:ai","Object",{init:function(){$.ig.$op.init.call(this)},b:function(a,b){},d:function(a){},a:function(a){},c:function(a){},$type:new $.ig.Type("Debug",$.ig.$ot)},true);$c("DebuggerDisplayAttribute","Attribute",{init:function(a){$$0.$ao.init.call(this)},_a:null,_d:null,_b:null,_c:null,$type:new $.ig.Type("DebuggerDisplayAttribute",$$0.$ao.$type)},true);$c("AsyncCompletedEventArgs:ae","EventArgs",{d:null,b:false,f:null,init:function(a,b,c){$$0.$w.init.call(this);this.b=b;this.d=a;this.f=c},error:function(){return this.d},cancelled:function(){return this.b},userState:function(){return this.f},h:function(){if(this.error()!=null){throw this.error()}},$type:new $.ig.Type("AsyncCompletedEventArgs",$$0.$w.$type)},true);$c("CancelEventArgs:ag","EventArgs",{init:function(a){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$0.$w.init.call(this)},init1:function(a,b){$$0.$w.init.call(this)},_cancel:false,cancel:function(a){if(arguments.length===1){this._cancel=a;return a}else{return this._cancel}},$type:new $.ig.Type("CancelEventArgs",$$0.$w.$type)},true);$c("GeneratedCodeAttribute","Attribute",{a:null,c:null,init:function(a,b){$$0.$ao.init.call(this);this.a=a;this.c=b},b:function(){return this.a},d:function(){return this.c},$type:new $.ig.Type("GeneratedCodeAttribute",$$0.$ao.$type)},true);$c("Comparer$1:ab","Object",{$t:null,init:function($t){this.$t=$t;if(!this.hasOwnProperty("$type")){this.$type=this.$type.specialize(this.$t)}$.ig.$op.init.call(this)},defaultComparerValue:function($t){return new $$t.ac($t)},compare:function(a,b){},create:function($t,a){return null},$type:new $.ig.Type("Comparer$1",$.ig.$ot,[$$t.$aa.$type,$$t.$ad.$type.specialize(0)])},true);$c("DefaultComparer$1:ac","Comparer$1",{$t:null,init:function($t){this.$t=$t;if(!this.hasOwnProperty("$type")){this.$type=this.$type.specialize(this.$t)}$$t.$ab.init.call(this,this.$t)},compare:function(a,b){var c=$b($$0.$a.$type.specialize(this.$t),a);if(c!=null){return c.compareTo(b)}var d=$b($$0.$a.$type.specialize(this.$t),b);if(d!=null){return-d.compareTo(a)}return $.ig.util.compare(a,b)},$type:new $.ig.Type("DefaultComparer$1",$$t.$ab.$type.specialize(0))},true);$$t.$ak.a=null;$$t.$ak.b=null;$$t.$i.empty=new $$t.i(0);$$t.$t.currentCulture=new $$t.t(1,0);$$t.$t.currentCultureIgnoreCase=new $$t.t(1,1);$$t.$t.invariantCulture=new $$t.t(1,2);$$t.$t.invariantCultureIgnoreCase=new $$t.t(1,3);$$t.$t.ordinal=new $$t.t(1,4);$$t.$t.ordinalIgnoreCase=new $$t.t(1,5);$$t.$x.schemeDelimiter="://"});