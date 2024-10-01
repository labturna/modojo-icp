/*! For license information please see 9325.fd3d0fc4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmodojo_landing_page=self.webpackChunkmodojo_landing_page||[]).push([[9325],{9325:(e,t,n)=>{n.r(t),n.d(t,{TagAngleInterpolationBracket:()=>B,TagAngleInterpolationDollar:()=>D,TagAutoInterpolationBracket:()=>w,TagAutoInterpolationDollar:()=>v,TagBracketInterpolationBracket:()=>C,TagBracketInterpolationDollar:()=>E});var o,i,_=n(672),r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,u=Object.prototype.hasOwnProperty,c=(e,t,n,o)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let i of s(t))u.call(e,i)||i===n||r(e,i,{get:()=>t[i],enumerable:!(o=a(t,i))||o.enumerable});return e},d={};c(d,o=_,"default"),i&&c(i,o,"default");var l=["assign","flush","ftl","return","global","import","include","break","continue","local","nested","nt","setting","stop","t","lt","rt","fallback"],k=["attempt","autoesc","autoEsc","compress","comment","escape","noescape","function","if","list","items","sep","macro","noparse","noParse","noautoesc","noAutoEsc","outputformat","switch","visit","recurse"],p={close:">",id:"angle",open:"<"},g={close:"\\]",id:"bracket",open:"\\["},A={close:"[>\\]]",id:"auto",open:"[<\\[]"},m={close:"\\}",id:"dollar",open1:"\\$",open2:"\\{"},f={close:"\\]",id:"bracket",open1:"\\[",open2:"="};function F(e){return{brackets:[["<",">"],["[","]"],["(",")"],["{","}"]],comments:{blockComment:[`${e.open}--`,`--${e.close}`]},autoCloseBefore:"\n\r\t }]),.:;=",autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string"]}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"}],folding:{markers:{start:new RegExp(`${e.open}#(?:${k.join("|")})([^/${e.close}]*(?!/)${e.close})[^${e.open}]*$`),end:new RegExp(`${e.open}/#(?:${k.join("|")})[\\r\\n\\t ]*>`)}},onEnterRules:[{beforeText:new RegExp(`${e.open}#(?!(?:${l.join("|")}))([a-zA-Z_]+)([^/${e.close}]*(?!/)${e.close})[^${e.open}]*$`),afterText:new RegExp(`^${e.open}/#([a-zA-Z_]+)[\\r\\n\\t ]*${e.close}$`),action:{indentAction:d.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp(`${e.open}#(?!(?:${l.join("|")}))([a-zA-Z_]+)([^/${e.close}]*(?!/)${e.close})[^${e.open}]*$`),action:{indentAction:d.languages.IndentAction.Indent}}]}}function b(){return{brackets:[["<",">"],["[","]"],["(",")"],["{","}"]],autoCloseBefore:"\n\r\t }]),.:;=",autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string"]}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"}],folding:{markers:{start:new RegExp(`[<\\[]#(?:${k.join("|")})([^/>\\]]*(?!/)[>\\]])[^<\\[]*$`),end:new RegExp(`[<\\[]/#(?:${k.join("|")})[\\r\\n\\t ]*>`)}},onEnterRules:[{beforeText:new RegExp(`[<\\[]#(?!(?:${l.join("|")}))([a-zA-Z_]+)([^/>\\]]*(?!/)[>\\]])[^[<\\[]]*$`),afterText:new RegExp("^[<\\[]/#([a-zA-Z_]+)[\\r\\n\\t ]*[>\\]]$"),action:{indentAction:d.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp(`[<\\[]#(?!(?:${l.join("|")}))([a-zA-Z_]+)([^/>\\]]*(?!/)[>\\]])[^[<\\[]]*$`),action:{indentAction:d.languages.IndentAction.Indent}}]}}function x(e,t){const n=`_${e.id}_${t.id}`,o=e=>e.replace(/__id__/g,n),i=e=>{const t=e.source.replace(/__id__/g,n);return new RegExp(t,e.flags)};return{unicode:!0,includeLF:!1,start:o("default__id__"),ignoreCase:!1,defaultToken:"invalid",tokenPostfix:".freemarker2",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],[o("open__id__")]:new RegExp(e.open),[o("close__id__")]:new RegExp(e.close),[o("iOpen1__id__")]:new RegExp(t.open1),[o("iOpen2__id__")]:new RegExp(t.open2),[o("iClose__id__")]:new RegExp(t.close),[o("startTag__id__")]:i(/(@open__id__)(#)/),[o("endTag__id__")]:i(/(@open__id__)(\/#)/),[o("startOrEndTag__id__")]:i(/(@open__id__)(\/?#)/),[o("closeTag1__id__")]:i(/((?:@blank)*)(@close__id__)/),[o("closeTag2__id__")]:i(/((?:@blank)*\/?)(@close__id__)/),blank:/[ \t\n\r]/,keywords:["false","true","in","as","using"],directiveStartCloseTag1:/attempt|recover|sep|auto[eE]sc|no(?:autoe|AutoE)sc|compress|default|no[eE]scape|comment|no[pP]arse/,directiveStartCloseTag2:/else|break|continue|return|stop|flush|t|lt|rt|nt|nested|recurse|fallback|ftl/,directiveStartBlank:/if|else[iI]f|list|for[eE]ach|switch|case|assign|global|local|include|import|function|macro|transform|visit|stop|return|call|setting|output[fF]ormat|nested|recurse|escape|ftl|items/,directiveEndCloseTag1:/if|list|items|sep|recover|attempt|for[eE]ach|local|global|assign|function|macro|output[fF]ormat|auto[eE]sc|no(?:autoe|AutoE)sc|compress|transform|switch|escape|no[eE]scape/,escapedChar:/\\(?:[ntrfbgla\\'"\{=]|(?:x[0-9A-Fa-f]{1,4}))/,asciiDigit:/[0-9]/,integer:/[0-9]+/,nonEscapedIdStartChar:/[\$@-Z_a-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u1FFF\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183-\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3006\u3031-\u3035\u303B-\u303C\u3040-\u318F\u31A0-\u31BA\u31F0-\u31FF\u3300-\u337F\u3400-\u4DB5\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,escapedIdChar:/\\[\-\.:#]/,idStartChar:/(?:@nonEscapedIdStartChar)|(?:@escapedIdChar)/,id:/(?:@idStartChar)(?:(?:@idStartChar)|(?:@asciiDigit))*/,specialHashKeys:/\*\*|\*|false|true|in|as|using/,namedSymbols:/&lt;=|&gt;=|\\lte|\\lt|&lt;|\\gte|\\gt|&gt;|&amp;&amp;|\\and|-&gt;|->|==|!=|\+=|-=|\*=|\/=|%=|\+\+|--|<=|&&|\|\||:|\.\.\.|\.\.\*|\.\.<|\.\.!|\?\?|=|<|\+|-|\*|\/|%|\||\.\.|\?|!|&|\.|,|;/,arrows:["->","-&gt;"],delimiters:[";",":",",","."],stringOperators:["lte","lt","gte","gt"],noParseTags:["noparse","noParse","comment"],tokenizer:{[o("default__id__")]:[{include:o("@directive_token__id__")},{include:o("@interpolation_and_text_token__id__")}],[o("fmExpression__id__.directive")]:[{include:o("@blank_and_expression_comment_token__id__")},{include:o("@directive_end_token__id__")},{include:o("@expression_token__id__")}],[o("fmExpression__id__.interpolation")]:[{include:o("@blank_and_expression_comment_token__id__")},{include:o("@expression_token__id__")},{include:o("@greater_operators_token__id__")}],[o("inParen__id__.plain")]:[{include:o("@blank_and_expression_comment_token__id__")},{include:o("@directive_end_token__id__")},{include:o("@expression_token__id__")}],[o("inParen__id__.gt")]:[{include:o("@blank_and_expression_comment_token__id__")},{include:o("@expression_token__id__")},{include:o("@greater_operators_token__id__")}],[o("noSpaceExpression__id__")]:[{include:o("@no_space_expression_end_token__id__")},{include:o("@directive_end_token__id__")},{include:o("@expression_token__id__")}],[o("unifiedCall__id__")]:[{include:o("@unified_call_token__id__")}],[o("singleString__id__")]:[{include:o("@string_single_token__id__")}],[o("doubleString__id__")]:[{include:o("@string_double_token__id__")}],[o("rawSingleString__id__")]:[{include:o("@string_single_raw_token__id__")}],[o("rawDoubleString__id__")]:[{include:o("@string_double_raw_token__id__")}],[o("expressionComment__id__")]:[{include:o("@expression_comment_token__id__")}],[o("noParse__id__")]:[{include:o("@no_parse_token__id__")}],[o("terseComment__id__")]:[{include:o("@terse_comment_token__id__")}],[o("directive_token__id__")]:[[i(/(?:@startTag__id__)(@directiveStartCloseTag1)(?:@closeTag1__id__)/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${t.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${t.id}`}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{cases:{"@noParseTags":{token:"tag",next:o("@noParse__id__.$3")},"@default":{token:"tag"}}},{token:"delimiter.directive"},{token:"@brackets.directive"}]],[i(/(?:@startTag__id__)(@directiveStartCloseTag2)(?:@closeTag2__id__)/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${t.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${t.id}`}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:"delimiter.directive"},{token:"@brackets.directive"}]],[i(/(?:@startTag__id__)(@directiveStartBlank)(@blank)/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${t.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${t.id}`}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:"",next:o("@fmExpression__id__.directive")}]],[i(/(?:@endTag__id__)(@directiveEndCloseTag1)(?:@closeTag1__id__)/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${t.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${t.id}`}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:"delimiter.directive"},{token:"@brackets.directive"}]],[i(/(@open__id__)(@)/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${t.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${t.id}`}}}:[{token:"@brackets.directive"},{token:"delimiter.directive",next:o("@unifiedCall__id__")}]],[i(/(@open__id__)(\/@)((?:(?:@id)(?:\.(?:@id))*)?)(?:@closeTag1__id__)/),[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:"delimiter.directive"},{token:"@brackets.directive"}]],[i(/(@open__id__)#--/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${t.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${t.id}`}}}:{token:"comment",next:o("@terseComment__id__")}],[i(/(?:@startOrEndTag__id__)([a-zA-Z_]+)/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:`@default_angle_${t.id}`},"$1==[":{token:"@rematch",switchTo:`@default_bracket_${t.id}`}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag.invalid",next:o("@fmExpression__id__.directive")}]]],[o("interpolation_and_text_token__id__")]:[[i(/(@iOpen1__id__)(@iOpen2__id__)/),[{token:"bracket"===t.id?"@brackets.interpolation":"delimiter.interpolation"},{token:"bracket"===t.id?"delimiter.interpolation":"@brackets.interpolation",next:o("@fmExpression__id__.interpolation")}]],[/[\$#<\[\{]|(?:@blank)+|[^\$<#\[\{\n\r\t ]+/,{token:"source"}]],[o("string_single_token__id__")]:[[/[^'\\]/,{token:"string"}],[/@escapedChar/,{token:"string.escape"}],[/'/,{token:"string",next:"@pop"}]],[o("string_double_token__id__")]:[[/[^"\\]/,{token:"string"}],[/@escapedChar/,{token:"string.escape"}],[/"/,{token:"string",next:"@pop"}]],[o("string_single_raw_token__id__")]:[[/[^']+/,{token:"string.raw"}],[/'/,{token:"string.raw",next:"@pop"}]],[o("string_double_raw_token__id__")]:[[/[^"]+/,{token:"string.raw"}],[/"/,{token:"string.raw",next:"@pop"}]],[o("expression_token__id__")]:[[/(r?)(['"])/,{cases:{"r'":[{token:"keyword"},{token:"string.raw",next:o("@rawSingleString__id__")}],'r"':[{token:"keyword"},{token:"string.raw",next:o("@rawDoubleString__id__")}],"'":[{token:"source"},{token:"string",next:o("@singleString__id__")}],'"':[{token:"source"},{token:"string",next:o("@doubleString__id__")}]}}],[/(?:@integer)(?:\.(?:@integer))?/,{cases:{"(?:@integer)":{token:"number"},"@default":{token:"number.float"}}}],[/(\.)(@blank*)(@specialHashKeys)/,[{token:"delimiter"},{token:""},{token:"identifier"}]],[/(?:@namedSymbols)/,{cases:{"@arrows":{token:"meta.arrow"},"@delimiters":{token:"delimiter"},"@default":{token:"operators"}}}],[/@id/,{cases:{"@keywords":{token:"keyword.$0"},"@stringOperators":{token:"operators"},"@default":{token:"identifier"}}}],[/[\[\]\(\)\{\}]/,{cases:{"\\[":{cases:{"$S2==gt":{token:"@brackets",next:o("@inParen__id__.gt")},"@default":{token:"@brackets",next:o("@inParen__id__.plain")}}},"\\]":{cases:{..."bracket"===t.id?{"$S2==interpolation":{token:"@brackets.interpolation",next:"@popall"}}:{},..."bracket"===e.id?{"$S2==directive":{token:"@brackets.directive",next:"@popall"}}:{},[o("$S1==inParen__id__")]:{token:"@brackets",next:"@pop"},"@default":{token:"@brackets"}}},"\\(":{token:"@brackets",next:o("@inParen__id__.gt")},"\\)":{cases:{[o("$S1==inParen__id__")]:{token:"@brackets",next:"@pop"},"@default":{token:"@brackets"}}},"\\{":{cases:{"$S2==gt":{token:"@brackets",next:o("@inParen__id__.gt")},"@default":{token:"@brackets",next:o("@inParen__id__.plain")}}},"\\}":{cases:{..."bracket"===t.id?{}:{"$S2==interpolation":{token:"@brackets.interpolation",next:"@popall"}},[o("$S1==inParen__id__")]:{token:"@brackets",next:"@pop"},"@default":{token:"@brackets"}}}}}],[/\$\{/,{token:"delimiter.invalid"}]],[o("blank_and_expression_comment_token__id__")]:[[/(?:@blank)+/,{token:""}],[/[<\[][#!]--/,{token:"comment",next:o("@expressionComment__id__")}]],[o("directive_end_token__id__")]:[[/>/,"bracket"===e.id?{token:"operators"}:{token:"@brackets.directive",next:"@popall"}],[i(/(\/)(@close__id__)/),[{token:"delimiter.directive"},{token:"@brackets.directive",next:"@popall"}]]],[o("greater_operators_token__id__")]:[[/>/,{token:"operators"}],[/>=/,{token:"operators"}]],[o("no_space_expression_end_token__id__")]:[[/(?:@blank)+/,{token:"",switchTo:o("@fmExpression__id__.directive")}]],[o("unified_call_token__id__")]:[[/(@id)((?:@blank)+)/,[{token:"tag"},{token:"",next:o("@fmExpression__id__.directive")}]],[i(/(@id)(\/?)(@close__id__)/),[{token:"tag"},{token:"delimiter.directive"},{token:"@brackets.directive",next:"@popall"}]],[/./,{token:"@rematch",next:o("@noSpaceExpression__id__")}]],[o("no_parse_token__id__")]:[[i(/(@open__id__)(\/#?)([a-zA-Z]+)((?:@blank)*)(@close__id__)/),{cases:{"$S2==$3":[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:""},{token:"@brackets.directive",next:"@popall"}],"$S2==comment":[{token:"comment"},{token:"comment"},{token:"comment"},{token:"comment"},{token:"comment"}],"@default":[{token:"source"},{token:"source"},{token:"source"},{token:"source"},{token:"source"}]}}],[/[^<\[\-]+|[<\[\-]/,{cases:{"$S2==comment":{token:"comment"},"@default":{token:"source"}}}]],[o("expression_comment_token__id__")]:[[/--[>\]]/,{token:"comment",next:"@pop"}],[/[^\->\]]+|[>\]\-]/,{token:"comment"}]],[o("terse_comment_token__id__")]:[[i(/--(?:@close__id__)/),{token:"comment",next:"@popall"}],[/[^<\[\-]+|[<\[\-]/,{token:"comment"}]]}}}function $(e){const t=x(p,e),n=x(g,e),o=x(A,e);return{...t,...n,...o,unicode:!0,includeLF:!1,start:`default_auto_${e.id}`,ignoreCase:!1,defaultToken:"invalid",tokenPostfix:".freemarker2",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],tokenizer:{...t.tokenizer,...n.tokenizer,...o.tokenizer}}}var D={conf:F(p),language:x(p,m)},E={conf:F(g),language:x(g,m)},B={conf:F(p),language:x(p,f)},C={conf:F(g),language:x(g,f)},v={conf:b(),language:$(m)},w={conf:b(),language:$(f)}}}]);
//# sourceMappingURL=9325.fd3d0fc4.chunk.js.map