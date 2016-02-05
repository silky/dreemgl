define.class("$server/composition",function(require, $ui$, screen, view, icon, label, splitcontainer, cadgrid, $widgets$, toolkit) {
	
	this.render = function() {
		return [
			screen(
				splitcontainer(
					cadgrid({
							name:"grid", 
							flex:3, 
							overflow:"scroll", 
							bgcolor:"#4e4e4e", 
							gridsize:5, 
							majorevery:5, 
							majorline:"#575757", 
							minorline:"#484848"
						},
						view({x:30, y:40, size:[100,100], bgcolor:'lightred'},icon({icon:'flask'}),icon({fgcolor:'pink', icon:'circle'})),
						view({x:300, y:40, size:[200,200], bgcolor:'lightgreen'},view({x:10, y:10, size:[100,100], bgcolor:'orange'},view({width:50, height:50, bgcolor:'purple', tooltarget:false}),icon({fgcolor:'cornflower', icon:'flask'}))),
						view({x:200, y:150, size:[100,100], bgcolor:'lightblue'},label({text:'hello', bgcolor:NaN, fgcolor:'brown'})),
						icon({height:50, width:50, fgcolor:'cornflower', icon:'flask'}),
						view({height:60, width:60, bgcolor:'purple'})
					),
					toolkit({inspect:"grid"})
				)
			)
		]
	}
}
)