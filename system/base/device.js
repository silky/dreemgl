/* DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others.
   Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); You may not use this file except in compliance with the License.
   You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing,
   software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and limitations under the License.*/


define.class(function(){
	this.atConstructor = function(){}

	// Base class for all implementations of the device subsystem

	// a device should:
	// - open a drawing context for a single "screen" in the composition
	// - provide user-interface hooks (pointer/keyboard) 
	// - provide a frame-hook for accurate tear-free display & animations



	this.atRedraw = function(time){}

	this.atResize = function(){}

	// some list of layers

	// layer has list of draweable shader instances + ref to mesh
	// - calculateable z-index
	// - 3d mode needs to sort


});
