webpackJsonp([184],{1815:function(t,e){t.exports={content:["section",["p","A basic widget for getting the user input is a text field.\nKeyboard and mouse can be used for providing or changing data."],["h2","When To Use"],["ul",["li",["p","A user input in a form field is needed."]],["li",["p","A search input is required."]]]],meta:{category:"Components",type:"Data Entry",title:"Input",filename:"components/input/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Input"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","addonAfter"],["td","The label text displayed after (on the right side of) the input field."],["td","string","|","ReactNode"],["td"]],["tr",["td","addonBefore"],["td","The label text displayed before (on the left side of) the input field."],["td","string","|","ReactNode"],["td"]],["tr",["td","defaultValue"],["td","The initial input content"],["td","string"],["td"]],["tr",["td","disabled"],["td","Whether the input is disabled."],["td","boolean"],["td","false"]],["tr",["td","id"],["td","The ID for input"],["td","string"],["td"]],["tr",["td","prefix"],["td","The prefix icon for the Input."],["td","string","|","ReactNode"],["td"]],["tr",["td","size"],["td","The size of the input box. Note: in the context of a form, the ",["code","large"]," size is used. Available: ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]]],["tr",["td","suffix"],["td","The suffix icon for the Input."],["td","string","|","ReactNode"],["td"]],["tr",["td","type"],["td","The type of input, see: ",["a",{title:null,href:"https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types"},"MDN"],"(use ",["code","Input.TextArea"]," instead of ",["code",'type="textarea"'],")"],["td","string"],["td",["code","text"]]],["tr",["td","value"],["td","The input content value"],["td","string"],["td"]],["tr",["td","onChange"],["td","callback when user input"],["td","function(e)"],["td"]],["tr",["td","onPressEnter"],["td","The callback function that is triggered when Enter key is pressed."],["td","function(e)"],["td"]]]],["blockquote",["p","When ",["code","Input"]," is used in a ",["code","Form.Item"]," context, if the ",["code","Form.Item"]," has the ",["code","id"]," and ",["code","options"]," props defined\nthen ",["code","value"],", ",["code","defaultValue"],", and ",["code","id"]," props of ",["code","Input"]," are automatically set."]],["p","The rest of the props of Input are exactly the same as the original ",["a",{title:null,href:"https://facebook.github.io/react/docs/events.html#supported-events"},"input"],"."],["h3","Input.TextArea"],["blockquote",["p","If you are using ",["code","antd@<2.12"],", please use ",["code","Input[type=textarea]"],"."]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","autosize"],["td","Height autosize feature, can be set to ",["code","true|false"]," or an object ",["code","{ minRows: 2, maxRows: 6 }"]],["td","boolean","|","object"],["td","false"]],["tr",["td","defaultValue"],["td","The initial input content"],["td","string"],["td"]],["tr",["td","value"],["td","The input content value"],["td","string"],["td"]],["tr",["td","onPressEnter"],["td","The callback function that is triggered when Enter key is pressed."],["td","function(e)"],["td"]]]],["p","The rest of the props of ",["code","Input.TextArea"]," are the same as the original ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"},"textarea"],"."],["h4","Input.Search"],["p",["code","Added in 2.5.0"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","enterButton"],["td","to show an enter button after input"],["td","boolean","|","ReactNode"],["td","false"]],["tr",["td","onSearch"],["td","The callback function that is triggered when you click on the search-icon or press Enter key."],["td","function(value, event)"],["td"]]]],["p","Supports all props of ",["code","Input"],"."],["h4","Input.Group"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","compact"],["td","Whether use compact style"],["td","boolean"],["td","false"]],["tr",["td","size"],["td","The size of ",["code","Input.Group"]," specifies the size of the included ",["code","Input"]," fields. Available: ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]]]]],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input.Group</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Input.Group</span><span class="token punctuation">></span></span>'},["code","<Input.Group>\n  <Input />\n  <Input />\n</Input.Group>"]]]}}});