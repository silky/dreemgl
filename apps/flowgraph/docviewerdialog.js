/* Copyright 2015 Teem2 LLC. Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  
   You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, 
   software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
   either express or implied. See the License for the specific language governing permissions and limitations under the License.*/

define.class('$ui/view', function(require, $$, dialog, $ui$, textbox,view, icon, treeview, cadgrid, label, button, $$, ballbutton, $widgets$, markdown){

	this.bgcolor = vec4(0,0,0,0.5);
	this.flexdirection ="column" 
	this.attributes = {
		title:"Docviewer",
		body:"some bodytext here..."
	}

	this.render =function(){
		return dialog({title:this.title, position:"relative"},
			view({bg:false, flexdirection:"column", padding:20 },
			markdown({body:this.body, fontcolor:"white", bg:false}),
				view({flexdirection:"row",bg:false, alignitems: "flex-end", justifycontent:"flex-end", alignself:"flex-end"   }, 
					button({padding:10, text:"Close", icon:"check", click: function(){this.screen.closeModal(true);} })
 				)
			)
		);		
	}
})