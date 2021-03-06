/* DreemGL is a collaboration between Teeming Society & Samsung Electronics, sponsored by Samsung and others.
   Copyright 2015-2016 Teeming Society. Licensed under the Apache License, Version 2.0 (the "License"); You may not use this file except in compliance with the License.
   You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing,
   software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and limitations under the License.*/

// flexbox flexdirection example.
define.class("$server/composition",
	function ($ui$, screen, view) {

		this.render = function () {
			return [
				screen(
					{name: 'default', clearcolor: 'white'},
					/* boxes with flexdirection row / horizontal layout */
					view({
						  w: 160,
							bgcolor: 'darkvanilla',
							padding: vec4(5)
						},
						view({w:30, h:30, bgcolor: 'alabamacrimson'}),
						view({w:30, h:30, bgcolor: 'castletongreen'}),
						view({w:30, h:30, bgcolor: 'amber'}),
						view({w:30, h:30, bgcolor: 'azure'}),
						view({w:30, h:30, bgcolor: 'byzantine'})
					),
					/* boxes with flexdirectino 'column' / vertical layout */
					view({
							w: 160,
							bgcolor: 'darkmediumgray',
							flexdirection:"column",
							padding: vec4(5)
						},
						view({w:30, h:30, bgcolor: 'alabamacrimson'}),
						view({w:30, h:30, bgcolor: 'castletongreen'}),
						view({w:30, h:30, bgcolor: 'amber'}),
						view({w:30, h:30, bgcolor: 'azure'}),
						view({w:30, h:30, bgcolor: 'byzantine'})
					)
				)
			];
		}
	}
);
