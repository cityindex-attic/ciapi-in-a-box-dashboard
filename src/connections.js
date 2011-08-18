jsPlumb.bind("ready", function() {

    // chrome fix.
    document.onselectstart = function () { return false; };

    // render mode
    var resetRenderMode = function(desiredMode) {
        var newMode = jsPlumb.setRenderMode(desiredMode);
        $(".rmode").removeClass("selected");
        $(".rmode[mode='" + newMode + "']").addClass("selected");
        var disableList = (newMode === jsPlumb.VML) ? ".rmode[mode='canvas'],.rmode[mode='svg']" : ".rmode[mode='vml']";
        $(disableList).attr("disabled", true);
        jsPlumbDemo.init();
    };

    $(".rmode").bind("click", function() {
        var desiredMode = $(this).attr("mode");
        if (jsPlumbDemo.reset) jsPlumbDemo.reset();
        jsPlumb.reset();
        resetRenderMode(desiredMode);
    });

    resetRenderMode(jsPlumb.CANVAS);

});
;(function() {

	window.jsPlumbDemo = {
			
		init : function() {
			
			jsPlumb.DefaultDragOptions = { cursor: "pointer", zIndex:2000 };
			jsPlumb.setMouseEventsEnabled(true);
	
			var connectorStrokeColor = "rgba(50, 50, 200, 1)",
			connectorHighlightStrokeColor = "rgba(180, 180, 200, 1)",
			hoverPaintStyle = { lineWidth:13,strokeStyle:"#7ec3d9" };			

            var w23Stroke = "rgb(189,11,11)";
	        var connection11 = jsPlumb.connect({
                source:"UIApp-component",
                target:"RESTWebServices-component",
                paintStyle:{
                    lineWidth:8,
                    strokeStyle:w23Stroke,
                    outlineColor:"#666",
                    outlineWidth:1
                },
                hoverPaintStyle:hoverPaintStyle,
                anchors:[ "BottomCenter", "TopCenter" ],
                endpoint:"Rectangle",
                endpointStyles:[
                    { gradient : { stops:[[0, w23Stroke], [1, "#558822"]] }},
                    { gradient : {stops:[[0, w23Stroke], [1, "#882255"]] }}
                ]
			});

            var connection12 = jsPlumb.connect({
                source:"UIApp-component",
                target:"ActiveMQEndpoint-component",
                paintStyle:{
                    lineWidth:8,
                    strokeStyle:w23Stroke,
                    outlineColor:"#666",
                    outlineWidth:1
                },
                hoverPaintStyle:hoverPaintStyle,
                anchors:[ "BottomCenter", "TopCenter" ],
                endpoint:"Rectangle",
                endpointStyles:[
                    { gradient : { stops:[[0, w23Stroke], [1, "#558822"]] }},
                    { gradient : {stops:[[0, w23Stroke], [1, "#882255"]] }}
                ]
			});
            var connection13 = jsPlumb.connect({
                source:"UIApp-component",
                target:"LightStreamer-component",
                paintStyle:{
                    lineWidth:8,
                    strokeStyle:w23Stroke,
                    outlineColor:"#666",
                    outlineWidth:1
                },
                hoverPaintStyle:hoverPaintStyle,
                anchors:[ "BottomCenter", "TopCenter" ],
                endpoint:"Rectangle",
                endpointStyles:[
                    { gradient : { stops:[[0, w23Stroke], [1, "#558822"]] }},
                    { gradient : {stops:[[0, w23Stroke], [1, "#882255"]] }}
                ]
			});

            var conn4Color = "rgba(46,164,26,0.8)";
	        var connection21 = jsPlumb.connect({
		        						source:'RESTWebServices-component',
		        						target:'ActiveMQMessageBus-component',
		        						connector:"Flowchart",
		        						anchors:["BottomCenter", "TopCenter"],
		        						paintStyle:{
											lineWidth:9,
											strokeStyle:conn4Color,
											outlineColor:"#666",
					 						outlineWidth:1
					 					},
		        						hoverPaintStyle:hoverPaintStyle,
		        						endpointsOnTop:false,
		        						endpointStyle:{ radius:10, fillStyle:conn4Color },
		        						labelStyle : { cssClass:"component label" },
		        						label : "ActiveMQ\nmap&nbsp;message\njson&nbsp;message"
		        				});

            var connection22 = jsPlumb.connect({
		        						source:'ActiveMQEndpoint-component',
		        						target:'ActiveMQMessageBus-component',
		        						connector:"Flowchart",
		        						anchors:["BottomCenter", "TopCenter"],
		        						paintStyle:{
											lineWidth:9,
											strokeStyle:conn4Color,
											outlineColor:"#666",
					 						outlineWidth:1
					 					},
		        						hoverPaintStyle:hoverPaintStyle,
		        						endpointsOnTop:false,
		        						endpointStyle:{ radius:10, fillStyle:conn4Color },
		        						labelStyle : { cssClass:"component label" },
		        						label : "ActiveMQ\nNative&nbsp;message"
		        				});

            var connection23 = jsPlumb.connect({
		        						source:'LightStreamer-component',
		        						target:'ActiveMQMessageBus-component',
		        						connector:"Flowchart",
		        						anchors:["BottomCenter", "TopCenter"],
		        						paintStyle:{
											lineWidth:9,
											strokeStyle:conn4Color,
											outlineColor:"#666",
					 						outlineWidth:1
					 					},
		        						hoverPaintStyle:hoverPaintStyle,
		        						endpointsOnTop:false,
		        						endpointStyle:{ radius:10, fillStyle:conn4Color },
		        						labelStyle : { cssClass:"component label" },
		        						label : "ActiveMQ\nmap&nbsp;message"
		        				});

             var connection31 = jsPlumb.connect({
		        						source:'ActiveMQMessageBus-component',
		        						target:'MockTradingSystem-component',
		        						connector:"Flowchart",
		        						anchors:["BottomCenter", "TopCenter"],
		        						paintStyle:{
											lineWidth:9,
											strokeStyle:conn4Color,
											outlineColor:"#666",
					 						outlineWidth:1
					 					},
		        						hoverPaintStyle:hoverPaintStyle,
		        						endpointsOnTop:false,
		        						endpointStyle:{ radius:10, fillStyle:conn4Color },
		        						labelStyle : { cssClass:"component label" },
		        						label : "ActiveMQ\nnative&nbsp;message"
		        				});
		}
	};	
})();
