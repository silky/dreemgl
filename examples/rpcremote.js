//Pure JS based composition
define.class('$server/composition', function(
	$server$, service,
	$ui$, screen, view, 
	$behaviors$, draggable){ this.render = function(){ return [

	service({
		name:'myservice',
		flowdata:{x:30,y:20},
		test: 10,
		dosomething: function(){
			console.log("dosomething called on server")
			this.test = 40
			this.test = function(value){
				console.log("TEST ATTRIBUTE SET ON SERVEr")
			}
		}
	}),
	screen({
		name:'mobile',
		flowdata:{x:10,y:10},
		// make an exportable attribute to something internal
		mousepos: wire('this.main.pos')
		},
		view({
			name:'main',
			size: vec2(200, 200),
			bgcolor: vec4('yellow'),
			is: draggable()
		})
	),
	screen({
		name:'remote',
		flowdata:{x:30,y:00},
		movepos: wire('this.rpc.mobile.mousepos')
		},
		view({
			size: vec2(200, 200),
			pos: wire('this.screen.movepos'),
			bgcolor: 'red',
			init: function(){
				console.log("screen2", this.rpc.server.test)
			}
		})
	)
]}})