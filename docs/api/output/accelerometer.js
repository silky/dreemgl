Ext.data.JsonP.accelerometer({"tagname":"class","name":"accelerometer","autodetected":{},"files":[{"filename":"accelerometer.js","href":"accelerometer.html#accelerometer"}],"extends":"node","members":[{"name":"acceleration","tagname":"attribute","owner":"accelerometer","id":"attribute-acceleration","meta":{}},{"name":"supported","tagname":"attribute","owner":"accelerometer","id":"attribute-supported","meta":{}},{"name":"x","tagname":"attribute","owner":"accelerometer","id":"attribute-x","meta":{}},{"name":"y","tagname":"attribute","owner":"accelerometer","id":"attribute-y","meta":{}},{"name":"z","tagname":"attribute","owner":"accelerometer","id":"attribute-z","meta":{}},{"name":"addListener","tagname":"method","owner":"node","id":"method-addListener","meta":{}},{"name":"find","tagname":"method","owner":"node","id":"method-find","meta":{}},{"name":"findChild","tagname":"method","owner":"node","id":"method-findChild","meta":{}},{"name":"mixin","tagname":"method","owner":"node","id":"method-mixin","meta":{}},{"name":"removeListener","tagname":"method","owner":"node","id":"method-removeListener","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-accelerometer","short_doc":"The accelerometer receives acceleration data where available. ...","classIcon":"icon-class","superclasses":["node"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/node' rel='node' class='docClass'>node</a><div class='subclass '><strong>accelerometer</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/accelerometer.html#accelerometer' target='_blank'>accelerometer.js</a></div></pre><div class='doc-contents'><p>The accelerometer receives acceleration data where available.\n<br/><a href=\"/examples/sensors\">example &raquo;</a></p>\n\n<iframe style=\"border:0;width:900px;height:300px\" src=\"/apps/docs/example#path=$root/sensors/accelerometer.js\"></iframe>\n\n\n<p><a target=\"blank\" href=\"/apps/docs/example#path=$root/sensors/accelerometer.js\">open example in new tab &raquo;</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-attribute'>Attributes</h3><div class='subsection'><div id='attribute-acceleration' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='accelerometer'>accelerometer</span><br/><a href='source/accelerometer.html#accelerometer-attribute-acceleration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/accelerometer-attribute-acceleration' class='name expandable'>acceleration</a> : vec3<span class=\"signature\"></span></div><div class='description'><div class='short'>Three component (x, y, z) instant acceleration of the device ...</div><div class='long'><p>Three component (x, y, z) instant acceleration of the device</p>\n<p>Defaults to: <code>&quot;0,0,0&quot;</code></p></div></div></div><div id='attribute-supported' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='accelerometer'>accelerometer</span><br/><a href='source/accelerometer.html#accelerometer-attribute-supported' target='_blank' class='view-source'>view source</a></div><a href='#!/api/accelerometer-attribute-supported' class='name expandable'>supported</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>True if accelerometer is supported ...</div><div class='long'><p>True if accelerometer is supported</p>\n<p>Defaults to: <code>&quot;undefined&quot;</code></p></div></div></div><div id='attribute-x' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='accelerometer'>accelerometer</span><br/><a href='source/accelerometer.html#accelerometer-attribute-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/accelerometer-attribute-x' class='name expandable'>x</a> : typeless<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for the x component of acceleration ...</div><div class='long'><p>Alias for the x component of acceleration</p>\n<p>Defaults to: <code>&quot;undefined&quot;</code></p></div></div></div><div id='attribute-y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='accelerometer'>accelerometer</span><br/><a href='source/accelerometer.html#accelerometer-attribute-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/accelerometer-attribute-y' class='name expandable'>y</a> : typeless<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for the y component of acceleration ...</div><div class='long'><p>Alias for the y component of acceleration</p>\n<p>Defaults to: <code>&quot;undefined&quot;</code></p></div></div></div><div id='attribute-z' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='accelerometer'>accelerometer</span><br/><a href='source/accelerometer.html#accelerometer-attribute-z' target='_blank' class='view-source'>view source</a></div><a href='#!/api/accelerometer-attribute-z' class='name expandable'>z</a> : typeless<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias for the z component of acceleration ...</div><div class='long'><p>Alias for the z component of acceleration</p>\n<p>Defaults to: <code>&quot;undefined&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-addListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-addListener' class='name expandable'>addListener</a>( <span class='pre'>key, cb</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>add a listener to an attribute ...</div><div class='long'><p>add a listener to an attribute</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cb</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-find' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-find' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-find' class='name expandable'>find</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Finds a parent node by name. ...</div><div class='long'><p>Finds a parent node by name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-findChild' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-findChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-findChild' class='name expandable'>findChild</a>( <span class='pre'>name</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Finds a child node by name. ...</div><div class='long'><p>Finds a child node by name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-mixin' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-mixin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-mixin' class='name expandable'>mixin</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Mixes in another class or object, just pass in any number of object or class references. ...</div><div class='long'><p>Mixes in another class or object, just pass in any number of object or class references. They are copied on key by key</p>\n</div></div></div><div id='method-removeListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/node' rel='node' class='defined-in docClass'>node</a><br/><a href='source/node.html#node-method-removeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/node-method-removeListener' class='name expandable'>removeListener</a>( <span class='pre'>key, cb</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>remove a listener from an attribute, uses the actual function reference to find it\nif you dont pass in a function ref...</div><div class='long'><p>remove a listener from an attribute, uses the actual function reference to find it\nif you dont pass in a function reference it removes all listeners</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cb</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});