/* DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others.
   Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); You may not use this file except in compliance with the License.
   You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing,
   software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and limitations under the License.*/

define.class("$ui/view", function(){

	this.attributes = {
		// Color of the draggable part of the scrollbar
		draggercolor: Config({type: vec4, value: vec4("#808080")}),

		// Color of the draggable part of the scrollbar
		draggerradius: Config({type: float, value: 3}),

		// Color when the pointer is hovering over the draggable part of the scrollbar
		hovercolor: Config({type: vec4, value: vec4("#707070")}),

		// Color of the draggable part of the scrollbar while actively scrolling
		activecolor: Config({type: vec4, value: vec4("#808080")}),

		// Is this a horizontal or a vertical scrollbar?
		vertical: Config({type: Boolean, value: true}),

		// Current value of the scrollbar. Ranges from 0 to total - page
		value: Config({type:float, value:0}),

		// Page size, in total
		page: Config({type:float, value:0}),

		// total size.
		total: Config({type:float, value:0}),

		// set animation on bgcolor
		bgcolor: Config({duration: 1.0})
	}

	this.tooltarget = false;

	this.noscroll = true

	var scrollbar = this.constructor;

	this.page = function(){
		this.redraw()
	}

	this.offset = function(){
		this.redraw()
	}

	var mesh = vec2.array()
	mesh.pushQuad(0,0,0,1,1,0,1,1)

	this.hardrect = {
		draggercolor: vec4(),
		offset: 0,
		page: 0.3,
		color: function(){
			// we have a rectangle
			var rel = vec2(mesh.x*view.layout.width, mesh.y*view.layout.height)
			var offset = view.value / view.total
			var page = view.page / view.total
			var edge = 0.1//min(length(vec2(length(dFdx(rel)), length(dFdy(rel)))) * SQRT_1_2, 0.001)
			var field = float(0)
			if(view.vertical){
				field = shape.roundbox(rel, 0.05 * view.layout.width, offset*view.layout.height,.9*view.layout.width, page*view.layout.height, view.draggerradius)
			}
			else{
				field = shape.roundbox(rel, offset * view.layout.width, 0.05*view.layout.height,page*view.layout.width, .9*view.layout.height, view.draggerradius)
			}
			var fg = vec4(view.draggercolor.rgb, smoothstep(edge, -edge, field)*view.draggercolor.a)
			var bg = vec4(0.,0.,0.,0.05)
			return mix(bg.rgba, fg.rgba, fg.a)
		},
		mesh: mesh,
		update:function(){},
		position: function(){
			return vec4(mesh.x * view.layout.width, mesh.y * view.layout.height, 0, 1) * view.totalmatrix * view.viewmatrix
		}
	}

	this.margin = 1

	this.vertical = function(){
		if (this.vertical){
			this.cursor = "ns-resize";
		}else{
			this.cursor = "ew-resize";
		}
	}

	this.pointermove = function(event){
		var offset = this.value / this.total
		var page = this.page / this.total
		if (this.vertical){
			var p = offset + event.movement[1] / this.layout.height
		} else {
			var p = offset + event.movement[0] / this.layout.width
		}
		var value = clamp(p, 0, 1 - page) * this.total
		if(value != this.value){
			this.value = value
		}
	}

	this.drawcount = 0;

	this.constructor.examples = {
		Usage:function(){
			return [scrollbar({vertical: false, height: 20, total: 1, page: 0.2, offset: 0.5})]
		}
	}
})
