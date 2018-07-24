###decodeURI与decodeURIComponent

encodeURI()主要用于整个URI(例如，http://www.jxbh.cn/illegal value.htm)，而encode-URIComponent()主要用于对URI中的某一段(例如前面URI中的illegal value．htm)进行编码。它们的主要区别在于，encodeURI()不会对本身属于URI的特殊字符进行编码，例如冒号、正斜杠、问号和井字号；而encodeURIComponent()则会对它发现的任何非标准字符进行编码。
一般来说,我们使用encodeURIComponent()方法的时候要比使用encodeURI()更多,因为在实践中更常见的是对查询字符串参数而不是对基础URL进行编码.

### change
change 事件被<input>, <select>, 和<textarea> 元素触发, 当用户提交对元素值的更改时。与  input 事件不同，change 事件不一定会对元素值的每次更改触发。

     <input type="radio"> 和 <input type="checkbox"> 的默认选项被修改时（通过点击或者键盘事件）;
    当用户完成提交动作时 (例如：点击了 <select>中的一个选项，从 <input type="date">标签选择了一个日期，通过 <input type="file">标签上传了一个文件，等 );
    当标签的值被修改并且失焦后，但并未进行提交 (例如：对<textarea> 或者<input type="text">的值进行编辑后。).