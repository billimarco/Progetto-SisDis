//IMPORTANT for acceding some data of the node for update, like the HTML or others, we need to use <--editor.drawflow.drawflow[module].data[id]-->.

var df = document.getElementById("drawflow");
const editor = new Drawflow(df);
const module = "Home";
editor.reroute = true;
editor.reroute_fix_curvature = true;
editor.start();


//COPY MODELS

/**HOW TO CONSTRUCT A FUNCTION
function sendFunction(port_name, ....){

    //data code
    ....
    //end data code
    
    //Find and check validity of the specific port of an event of a widget
    let check_validity = false,conn_id;
    Object.keys(connections).forEach(id => {
        if(connections[id].port_name == port_name){
            if(connections[id].output_type == "JSON"){
                conn_id = id;
                check_validity = true;
            }
        }       
    });

    if(check_validity){
        let widget_type,widget_name;
        for(let i=0; i<connections[conn_id].linked_target_widgets.length;i++){
                
            widget_type = connections[conn_id].linked_target_widgets[i].widget_type;
            widget_name = connections[conn_id].linked_target_widgets[i].widget_name;
                
            switch (widget_type) {
                case 'RadarSeries':
                    break;
        
                case 'TimeTrend':
                    break;
        
                case 'CurvedLineSeries':
                    break;
        
                case 'PieChart':
                    break;
        
                case 'BarSeries':
                    break;
        
                case 'Map':
                    break;
        
                case 'Speedometer':
                    break;
        
                case 'GaugeChart':
                    break;
        
                case 'Knob':
                    break;
        
                case 'NumericKeyboard':
                    break;
        
                case 'SingleContent':
                    break;
        
                case 'ExternalContent':
                    break;
        
                case 'Table':
                    break;
        
                case 'DeviceTable':
                    break;
        
                case 'EventTable':
                    break;
        
                case 'Button':
                    break;
        
                case 'OnOffButton':
                    break;
        
                case 'ImpulseButton':
                    break;
        
                default:
            }

        }
    }
}
*/
var functions = [
    {"func_name":"sendSURI", "func_code":`function sendSURI(port_name, jsonData){
        //data code
        var data = [];
        data[0] = {};
        var coordsAndType = [];
        coordsAndType[0] = {};
        var serviceUri = "";
        if (jsonData.value.metricName.includes(":")) {
            serviceUri = "http://www.disit.org/km4city/resource/iot/" + jsonData.value.metricName.split(":")[1] + "/" + jsonData.value.metricName.split(":")[0] + "/" + jsonData.value.metricName.split(":")[2];
            data[0].metricId = "https://www.disit.org/superservicemap//api/v1/?serviceUri=" + serviceUri + "&format=json";
            data[0].metricHighLevelType = "IoT Device Variable";
            coordsAndType[0].query = "https://www.disit.org/superservicemap//api/v1/?serviceUri=" + serviceUri + "&format=json";
            coordsAndType[0].queryType = "Default";
        } else {
            serviceUri = jsonData.value.metricId;
            data[0].metricId = serviceUri;
            data[0].metricHighLevelType = "MyKPI";
            coordsAndType[0].query = "datamanager/api/v1/poidata/" + serviceUri;
            coordsAndType[0].queryType = "MyPOI";
        }
        data[0].metricName = jsonData.value.metricName;
        data[0].metricType = jsonData.value.metricType;
        data[0].smField = jsonData.value.metricType;
        data[0].serviceUri = serviceUri;
    
        coordsAndType[0].desc = data[0].metricName;
        coordsAndType[0].color1 = "#ebb113";
        coordsAndType[0].color2 = "#eb8a13";
        //end data code
        
        
        //Find and check validity of the specific port of an event of a widget
        let check_validity = false,conn_id;
        Object.keys(connections).forEach(id => {
            if(connections[id].port_name == port_name){
                if(connections[id].output_type == "SURI"){
                    conn_id = id;
                    check_validity = true;
                }
            }       
        });
    
        if(check_validity){
            let widget_type,widget_name;
            for(let i=0; i<connections[conn_id].linked_target_widgets.length;i++){
                    
                widget_type = connections[conn_id].linked_target_widgets[i].widget_type;
                widget_name = connections[conn_id].linked_target_widgets[i].widget_name;
                
                switch (widget_type) {
                    case 'RadarSeries':
                        break;
            
                    case 'TimeTrend':
                        break;
            
                    case 'CurvedLineSeries':
                        $('body').trigger({
                            type: "showCurvedLinesFromExternalContent_" + widget_name,	
                            targetWidget: widget_name,
                            field: data[0].smField,
                            passedData: data
                        });	        
                        break;
            
                    case 'PieChart':
                        break;
            
                    case 'BarSeries':
                        break;
            
                    case 'Map':
                        for (let n=0; n<coordsAndType.length; n++) {
                            $('body').trigger({
                                type: "addSelectorPin",
                                target: widget_name,
                                passedData: coordsAndType[n]
                            });
                        }
                        break;
            
                    case 'Speedometer':
                        break;
            
                    case 'GaugeChart':
                        break;
            
                    case 'Knob':
                        break;
            
                    case 'NumericKeyboard':
                        break;
            
                    case 'SingleContent':
                        break;
            
                    case 'ExternalContent':
                        break;
            
                    case 'Table':
                        break;
            
                    case 'DeviceTable':
                        break;
            
                    case 'EventTable':
                        break;
            
                    case 'Button':
                        break;
            
                    case 'OnOffButton':
                        break;
            
                    case 'ImpulseButton':
                        break;
            
                    default:
                }
            }
        }
    }`},
    {"func_name":"sendListSURIandMetrics", "func_code":`function sendListSURIandMetrics(port_name, jsonData){
        //data code
        var coordsAndType = [];
        var data = [];
        var h = 0;
        var i = 0;
        var serviceUri = "";
        for (var l in jsonData.layers) {
            if (!jsonData.layers[l].visible || (jsonData.layers[l].visible == true)) {
                coordsAndType[i] = {};
                coordsAndType[i].desc = jsonData.layers[l].name;
                coordsAndType[i].color1 = "#ebb113";
                coordsAndType[i].color2 = "#eb8a13";
                if (!jsonData.metrics || jsonData.metrics.length<1) {
                    if (jsonData.layers[l].realtimeAttributes) {
                        jsonData.metrics = Object.keys(jsonData.layers[l].realtimeAttributes);
                    }
                    if (jsonData.layers[l].kpidata) {
                        jsonData.metrics = jsonData.layers[l].name;
                    }
                }
                for (var m in jsonData.metrics) {
                    data[h] = {};
                    if (jsonData.layers[l].name.includes(":")) {
                        serviceUri = "http://www.disit.org/km4city/resource/iot/" + jsonData.layers[l].name.split(":")[1] + "/" + jsonData.layers[l].name.split(":")[0] + "/" + jsonData.layers[l].name.split(":")[2];
                        data[h].metricId = "https://www.disit.org/superservicemap/api/v1/?serviceUri=" + serviceUri + "&format=json";
                        data[h].metricHighLevelType = "IoT Device Variable";
                        coordsAndType[i].query = "https://www.disit.org/superservicemap//api/v1/?serviceUri=" + serviceUri + "&format=json";
                        coordsAndType[i].queryType = "Default";
                    } else if ((jsonData.layers[l].brokerName && jsonData.layers[l].brokerName != "") && (jsonData.layers[l].organization && jsonData.layers[l].organization != "")) {
                        serviceUri = "http://www.disit.org/km4city/resource/iot/"+ jsonData.layers[l].brokerName + "/" + jsonData.layers[l].organization + "/" + jsonData.layers[l].name;
                        data[h].metricId = "https://www.disit.org/superservicemap/api/v1/?serviceUri=" + serviceUri + "&format=json";
                        data[h].metricHighLevelType = "IoT Device Variable";
                        coordsAndType[i].query = "https://www.disit.org/superservicemap//api/v1/?serviceUri=" + serviceUri + "&format=json";
                        coordsAndType[i].queryType = "Default";
                    } else if (jsonData.layers[l].serviceUri && jsonData.layers[l].serviceUri != "") {
                        serviceUri = jsonData.layers[l].serviceUri;
                        data[h].metricId = "https://www.disit.org/superservicemap/api/v1/?serviceUri=" + serviceUri + "&format=json";
                        data[h].metricHighLevelType = "IoT Device Variable";
                        coordsAndType[i].query = "https://www.disit.org/superservicemap//api/v1/?serviceUri=" + serviceUri + "&format=json";
                        coordsAndType[i].queryType = "Default";
                    } else {
                        if (jsonData.layers[l].name.includes("_")) {
                            serviceUri = "datamanager/api/v1/poidata/" + jsonData.layers[l].name.split("_")[1];
                        } else {
                            serviceUri = "datamanager/api/v1/poidata/" + jsonData.layers[l].name;
                        }
                        data[h].metricId = serviceUri;
                        data[h].metricHighLevelType = "MyKPI";
                        coordsAndType[i].query = serviceUri;
                        coordsAndType[i].queryType = "MyPOI";
                    }
                    data[h].metricName = jsonData.layers[l].name;
                    data[h].metricType = jsonData.metrics[m];
                    data[h].smField = jsonData.metrics[m];
                    data[h].serviceUri = serviceUri;
                    
                    h++;
                }
                i++;
            }
        }
        //end data code
        
        //Find and check validity of the specific port of an event of a widget
        let check_validity = false,conn_id;
        Object.keys(connections).forEach(id => {
            if(connections[id].port_name == port_name){
                if(connections[id].output_type == "ListSURI"){
                    conn_id = id;
                    check_validity = true;
                }
            }       
        });
    
        if(check_validity){
            let widget_type,widget_name;
            for(let i=0; i<connections[conn_id].linked_target_widgets.length;i++){
                    
                widget_type = connections[conn_id].linked_target_widgets[i].widget_type;
                widget_name = connections[conn_id].linked_target_widgets[i].widget_name;
                    
                switch (widget_type) {
                    case 'RadarSeries':
                        break;
            
                    case 'TimeTrend':
                        break;
            
                    case 'CurvedLineSeries':
                        $('body').trigger({
                            type: "showCurvedLinesFromExternalContent_" + widget_name,	
                            targetWidget: widget_name,
                            passedData: data
                        });
                        break;
            
                    case 'PieChart':
                        break;
            
                    case 'BarSeries':
                        break;
            
                    case 'Map':
                        for (let n=0; n<coordsAndType.length; n++) {
                            $('body').trigger({
                                type: "addSelectorPin",
                                target: widget_name,
                                passedData: coordsAndType[n]
                            });
                        }
                        break;
            
                    case 'Speedometer':
                        break;
            
                    case 'GaugeChart':
                        break;
            
                    case 'Knob':
                        break;
            
                    case 'NumericKeyboard':
                        break;
            
                    case 'SingleContent':
                        break;
            
                    case 'ExternalContent':
                        break;
            
                    case 'Table':
                        break;
            
                    case 'DeviceTable':
                        break;
            
                    case 'EventTable':
                        break;
            
                    case 'Button':
                        break;
            
                    case 'OnOffButton':
                        break;
            
                    case 'ImpulseButton':
                        break;
            
                    default:
                }
    
            }
        }
    }`},
    {"func_name":"sendTimeRange", "func_code":`function sendTimeRange(port_name, jsonData){

        var minT = jsonData["t1"];
        var maxT = jsonData["t2"];
        var dt1 = new Date(minT);
        var dt1_iso = dt1.toISOString().split(".")[0];
        var dt2 = new Date(maxT);
        var dt2_iso = dt2.toISOString().split(".")[0];
        
        //Find and check validity of the specific port of an event of a widget
        let check_validity = false,conn_id;
        Object.keys(connections).forEach(id => {
            if(connections[id].port_name == port_name){
                if(connections[id].output_type == "DateTime_Interval"){
                    conn_id = id;
                    check_validity = true;
                }
            }       
        });
    
        if(check_validity){
            let widget_type,widget_name;
            for(let i=0; i<connections[conn_id].linked_target_widgets.length;i++){
                    
                widget_type = connections[conn_id].linked_target_widgets[i].widget_type;
                widget_name = connections[conn_id].linked_target_widgets[i].widget_name;
                    
                switch (widget_type) {
                    case 'RadarSeries':
                        break;
            
                    case 'TimeTrend':
                        break;
            
                    case 'CurvedLineSeries':
                        $('body').trigger({
                            type: "showCurvedLinesFromExternalContent_" + widget_name,	
                            targetWidget: widget_name,
                            t1: dt1_iso,
                            t2: dt2_iso
                        });
                        break;
            
                    case 'PieChart':
                        break;
            
                    case 'BarSeries':
                        break;
            
                    case 'Map':
                        break;
            
                    case 'Speedometer':
                        break;
            
                    case 'GaugeChart':
                        break;
            
                    case 'Knob':
                        break;
            
                    case 'NumericKeyboard':
                        break;
            
                    case 'SingleContent':
                        break;
            
                    case 'ExternalContent':
                        break;
            
                    case 'Table':
                        break;
            
                    case 'DeviceTable':
                        break;
            
                    case 'EventTable':
                        break;
            
                    case 'Button':
                        break;
            
                    case 'OnOffButton':
                        break;
            
                    case 'ImpulseButton':
                        break;
            
                    default:
                }
    
            }
        }
    }`},
    {"func_name":"sendJSON", "func_code":`function sendJSON(port_name, jsonData){
    
        //Find and check validity of the specific port of an event of a widget
        let check_validity = false,conn_id;
        Object.keys(connections).forEach(id => {
            if(connections[id].port_name == port_name){
                if(connections[id].output_type == "JSON"){
                    conn_id = id;
                    check_validity = true;
                }
            }       
        });
    
        if(check_validity){
            let widget_type,widget_name;
            for(let i=0; i<connections[conn_id].linked_target_widgets.length;i++){
                    
                widget_type = connections[conn_id].linked_target_widgets[i].widget_type;
                widget_name = connections[conn_id].linked_target_widgets[i].widget_name;
                    
                switch (widget_type) {
                    case 'RadarSeries':
                        break;
            
                    case 'TimeTrend':
                        break;
            
                    case 'CurvedLineSeries':
                        $('body').trigger({
                            type: "showCurvedLinesFromExternalContent_" + widget_name,	
                            targetWidget: widget_name,
                            passedData: jsonData
                        });	
                        break;
            
                    case 'PieChart':
                        break;
            
                    case 'BarSeries':
                        break;
            
                    case 'Map':
                        break;
            
                    case 'Speedometer':
                        break;
            
                    case 'GaugeChart':
                        break;
            
                    case 'Knob':
                        break;
            
                    case 'NumericKeyboard':
                        break;
            
                    case 'SingleContent':
                        break;
            
                    case 'ExternalContent':
                        break;
            
                    case 'Table':
                        break;
            
                    case 'DeviceTable':
                        break;
            
                    case 'EventTable':
                        break;
            
                    case 'Button':
                        break;
            
                    case 'OnOffButton':
                        break;
            
                    case 'ImpulseButton':
                        break;
            
                    default:
                }
    
            }
        }
    }`},

]

var widget_data = {
    "RadarSeries" : {"widget_ports":"IN/OUT", "widget_type":"RadarSeries", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""},"click":{"ev_name":"click","code":""},"legend_item_click":{"ev_name":"legendItemClick","code":""}}},
    "TimeTrend" : {"widget_ports":"IN/OUT", "widget_type":"TimeTrend", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "CurvedLineSeries" : {"widget_ports":"IN/OUT", "widget_type":"CurvedLineSeries", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "PieChart" : {"widget_ports":"IN/OUT", "widget_type":"PieChart", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "BarSeries" : {"widget_ports":"IN/OUT", "widget_type":"BarSeries", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "Map" : {"widget_ports":"IN/OUT", "widget_type":"Map", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "Speedometer" : {"widget_ports":"IN", "widget_type":"Speedometer", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "GaugeChart" : {"widget_ports":"IN", "widget_type":"GaugeChart", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "Knob" : {"widget_ports":"IN/OUT", "widget_type":"Knob", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "NumericKeyboard" : {"widget_ports":"IN/OUT", "widget_type":"NumericKeyboard", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "SingleContent" : {"widget_ports":"IN", "widget_type":"SingleContent", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "ExternalContent" : {"widget_ports":"IN/OUT", "widget_type":"ExternalContent", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "Table" : {"widget_ports":"IN", "widget_type":"Table", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "DeviceTable" : {"widget_ports":"IN", "widget_type":"DeviceTable", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "EventTable" : {"widget_ports":"OUT", "widget_type":"EventTable", "next_port_box": 0, "port_boxes":{}, "events":{"click":{"ev_name":"click","code":""}}},
    "Button" : {"widget_ports":"OUT", "widget_type":"Button", "next_port_box": 0, "port_boxes":{}, "events":{"click":{"ev_name":"click","code":""}}},
    "OnOffButton" : {"widget_ports":"IN/OUT", "widget_type":"OnOffButton", "next_port_box": 0, "port_boxes":{}, "events":{"external_commands":{"ev_name":"externalCommands","code":""}}},
    "ImpulseButton" : {"widget_ports":"OUT", "widget_type":"ImpulseButton", "next_port_box": 0, "port_boxes":{}, "events":{"click":{"ev_name":"click","code":""}}}
};

var port_box = {"port_name": "", "associated_output_node": 0, "port_type":{}};

var port_types = [
    {"output_type": "JSON", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "color_class": "port-white"},
    {"output_type": "ListSURI", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "color_class": "port-red"},
    {"output_type": "DateTime_Interval", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "color_class": "port-green",},
    {"output_type": "SURI", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "color_class": "port-blue"},
    {"output_type": "DateTime", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "color_class": "port-yellow"},
    {"output_type": "Action", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "color_class": "port-orange"},
    {"output_type": "GPS_coordinates", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "color_class": "port-purple"},
    {"output_type": "ResetCommand", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "color_class": "port-brown"}
    //,"color_class": "port-black"
];

// TRIAL EXAMPLE
let dashboard = [
    {"widget_type":"RadarSeries","widget_name":"w_radar_series_1","ck_editor":`function execute(){
        Var e = JSON.parse(param);
        Var connections = [{"port_name":"Pippo","output_type":"JSON","linked_target_widgets":[{"widget_name":"w_radar_series_2","widget_type":"RadarSeries"}]},{"port_name":"Out_2","output_type":"JSON","linked_target_widgets":[{"widget_name":"w_single_content_5","widget_type":"SingleContent"}]}];
    
        if(e.event == "click"){
            asdasdsa;
            BOOOOO;
        }else if(e.event == "legendItemClick"){
            
        }else{
            sdasdlasd;
            dsaasdas;
            sdasd;
        }
    }`},
    {"widget_type":"RadarSeries","widget_name":"w_radar_series_2","ck_editor":``},
    {"widget_type":"RadarSeries","widget_name":"w_radar_series_3","ck_editor":``},
    {"widget_type":"CurvedLineSeries","widget_name":"w_curved_line_series_4","ck_editor":``},
    {"widget_type":"SingleContent","widget_name":"w_single_content_5","ck_editor":``},
    {"widget_type":"Button","widget_name":"w_button_6","ck_editor":``}

];
importDashboard(dashboard);
//FINISH EXAMPLE


//EDITOR EVENTS


editor.on('nodeSelected', function (id) {
    console.log("Node selected")
    console.log(editor.getNodeFromId(id));
})

editor.on('connectionCreated', function (connection) {
    let input_id = connection.input_id;
    let input_class = connection.input_class;
    let output_id = connection.output_id;
    let output_class = connection.output_class;
    Object.keys(editor.getNodeFromId(output_id).data.port_boxes).forEach(port_box_id =>{
        if(output_class == "output_"+editor.getNodeFromId(output_id).data.port_boxes[port_box_id].associated_output_node){
            let output_port_type = editor.getNodeFromId(output_id).data.port_boxes[port_box_id].port_type;
            if(!output_port_type.target_widgets_typologies.includes(editor.getNodeFromId(input_id).data.widget_type)){
                editor.removeSingleConnection(output_id,input_id,output_class,input_class);
            }
        }
    })
    
    console.log("Connection created");
})

editor.on('connectionRemoved', function (connection) {
    console.log("Connection removed");
})


//FUNCTIONAL METHODS


//an easy way function for take widget typologies based on port types
function takeWidgetTypeListFromPortTypes(port_types){
    let arr = [];
    Object.keys(widget_data).forEach(widget_type =>{
        if(port_types.includes(widget_data[widget_type].widget_ports))
            arr.push(widget_type);
    });
    return arr;
}

//update editor field HTML of a node
function updateHTMLFromNodeId(id){
    let nodeContent = document.getElementById("node-"+id).childNodes[1];
    editor.drawflow.drawflow[module].data[id].html = nodeContent.innerHTML;

    console.log("updateHTMLFromNodeId("+id+")");
    console.log(editor);
}

//change editor.editor_mode button
function changeMode(option) {

    //console.log(lock.id);
    if (option == 'lock') {
        lock.style.display = 'none';
        unlock.style.display = 'block';
    } else {
        lock.style.display = 'block';
        unlock.style.display = 'none';
    }

}


//IMPORT METHODS


//convert our model API into node //TODO to finish for importing splitted CKeditor
function importDashboard(dashboard){
    editor.clearModuleSelected();
    let splitted_ck_editor;
    for(var i=0;i<dashboard.length;i++){
        splitted_ck_editor = splitCKeditorCode(dashboard[i].ck_editor);
        addNodeToEditor(i+1, dashboard[i].widget_type, dashboard[i].widget_name, splitted_ck_editor,50+800*(i%3),50+500*(Math.floor(i/3)));
    }
    for(var i=0;i<dashboard.length;i++){
        addExistingPortsToNode(i+1, dashboard[i].ck_editor);
    }

    console.log("importDashboard(dashboard)");
    console.log(dashboard);
    console.log(editor);
}

//add node into our editor based on widget type //TODO to finish
function addNodeToEditor(id, type, name, splitted_ck_editor , pos_x, pos_y){
    var html=`<div class="title-box"><i class="fas fa-code"></i> `+type+` `+"("+widget_data[type].widget_ports+")"+`</div>`;
    var data = JSON.parse(JSON.stringify(widget_data[type]));

    //Update node HTML
    if(widget_data[type].widget_ports != "IN"){
        html += `
        <div class="box-full">
            <div class="widget-body">
                <div class="widget-body-sixty">
                    <div class="widget-body-element-name bottom-separator">
                        <label for="widgetname-`+id+`">WidgetName</label>
                        <input id="widgetname-`+id+`" type="text" value=`+name+` readonly></input>
                    </div>
                    <div id="events-room-`+id+`" class="widget-body-element-events-room">
                        <div class="widget-body-element-event-select bottom-separator">
                            <label for="events-select-`+id+`">Event</label>
                            <select id="events-select-`+id+`" onchange="switchEventDisplayed(`+id+`)"></select>
                        </div>
                    </div>
                </div>
                <div class="widget-body-forty">
                    <div id="ports-room-`+id+`" class="ports-room"></div>
                    <div id="create-ports-`+id+`" class="create-ports">
                        <label>Output Port Creator</label>
                        <input id="new-port-name-`+id+`" type="text" class="bottom-separator" placeholder="name"></input>
                        <button onclick="addPortBox(`+id+`, document.getElementById('new-port-name-`+id+`').value)" class="btn-add-port-box">add output port</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        if(widget_data[type].widget_ports == "IN/OUT"){
            editor.addNode(name, 1, 0, pos_x, pos_y, widget_data[type].widget_ports , data, html);
        }else if(widget_data[type].widget_ports == "OUT"){
            editor.addNode(name, 0, 0, pos_x, pos_y, widget_data[type].widget_ports , data, html);
        }

    }else{
        html += `
        <div class="box-full">
            <div class="widget-body">
                <div class="widget-body-one-hundred">
                    <div class="widget-body-element-name bottom-separator">
                        <label for="widgetname-`+id+`">WidgetName</label>
                        <input id="widgetname-`+id+`" type="text" value=`+name+` readonly></input>
                    </div>
                    <div id="events-room-`+id+`" class="widget-body-element-events-room">
                        <div class="widget-body-element-event-select bottom-separator">
                            <label for="events-select-`+id+`">Event</label>
                            <select id="events-select-`+id+`" onchange="switchEventDisplayed(`+id+`)"></select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        editor.addNode(name, 1, 0, pos_x, pos_y, widget_data[type].widget_ports , data, html);
    }

    //add all events of a widget
    addEventsToNodes(id);

    Object.keys(splitted_ck_editor).forEach(ck_id =>{
        Object.keys(editor.drawflow.drawflow[module].data[id].data.events).forEach(ev_id =>{
            if(splitted_ck_editor[ck_id].ev_name == editor.drawflow.drawflow[module].data[id].data.events[ev_id].ev_name){
                editor.drawflow.drawflow[module].data[id].data.events[ev_id].code = splitted_ck_editor[ck_id].code;
                document.getElementById("code-"+id+"-"+ev_id).innerHTML = splitted_ck_editor[ck_id].code;
            }
        });
    });

    console.log("addNodeToEditor("+id+","+type+","+name+","+"splitted_ck_editor"+","+pos_x+","+pos_y+")");
    console.log(editor);
}

//add events to the nodes 
function addEventsToNodes(id){
    let node_event_room = document.getElementById("events-room-"+id);
    let node_select_event = document.getElementById("events-select-"+id);

    Object.keys(editor.getNodeFromId(id).data.events).forEach(ev_name => {
        node_select_event.insertAdjacentHTML("beforeend",`<option value=`+ev_name+`>`+ev_name+`</option>`);
        node_event_room.insertAdjacentHTML("beforeend",`
                <div id="code-room-`+id+`-`+ev_name+`" class="widget-body-element-code-room">
                    <label for="code-`+id+`-`+ev_name+`">Code</label>
                    <textarea id="code-`+id+`-`+ev_name+`" df-events-`+ev_name+`-code class="widget-body-element-code-box"></textarea>
                </div>
            `);
    });

    switchEventDisplayed(id);

    updateHTMLFromNodeId(id);

    console.log("addEventsToNodes("+id+")");
    console.log(editor);
}

//switch widget event to display in a widget node
function switchEventDisplayed(id){
    let switch_ev_name = document.getElementById("events-select-"+id).value;
    let node_event_editor;
    Object.keys(editor.getNodeFromId(id).data.events).forEach(ev_name =>{
        node_event_editor = document.getElementById("code-room-"+id+"-"+ev_name);
        if(ev_name!=switch_ev_name){
            if(!node_event_editor.classList.contains("hide"))
                node_event_editor.classList.add("hide");
        } else {
            if(node_event_editor.classList.contains("hide"))
                node_event_editor.classList.remove("hide");
        }
    });

    console.log("switchEventDisplayed("+id+")");
    console.log(editor);
}

//split code of a ck editor for finding events,triggers ecc. 
//TODO incompleted, we have to assume that "e.event" and "else" are only in certain parts of the code (otherwise it doesn't work)
function splitCKeditorCode(ck_editor){
    let arr = [];
    let splitted = {"ev_name":"","code":""};
    let event_counter = 0;
    let new_splitted = "";

    //removing function execute(){}
    ck_editor = ck_editor.trim();
    ck_editor = ck_editor.slice(ck_editor.indexOf("{")+1,ck_editor.lastIndexOf("}"));
    ck_editor = ck_editor.trim();

    //take events codes and triggers
    while(ck_editor.indexOf("e.event")!=-1){
        new_splitted = JSON.parse(JSON.stringify(splitted));
        ck_editor = ck_editor.slice(ck_editor.indexOf("e.event"));
        ck_editor = ck_editor.slice(ck_editor.indexOf("\"")+1);

        new_splitted["ev_name"] = ck_editor.slice(0,ck_editor.indexOf("\""));

        ck_editor = ck_editor.slice(ck_editor.indexOf("{")+1);

        takeEventCode();

        arr.push(new_splitted);
        event_counter++;
        ck_editor = ck_editor.slice(ck_editor.indexOf("else"));
    }

    //take externalCommands codes and triggers
    new_splitted = JSON.parse(JSON.stringify(splitted));
    new_splitted["ev_name"] = "externalCommands";

    if(event_counter != 0){
        ck_editor = ck_editor.slice(ck_editor.indexOf("{")+1);
    }

    takeEventCode();
    arr.push(new_splitted);
    event_counter++;
    

    //Internal function for take code and triggers code //TODO could be problems with if else
    function takeEventCode(){
        let ev_code = ck_editor.slice(0,ck_editor.indexOf("else"));
        ev_code = ev_code.slice(0,ev_code.lastIndexOf("}"));
        ev_code = ev_code.trim();
        let code_strings = [];
        code_strings = ev_code.split("\n");
        for (let i=0 ; i < code_strings.length; i++){
            new_splitted["code"] += code_strings[i].trim()+"\n";
        };
    }


    console.log("splitCKeditorCode(ck_editor)");
    console.log(arr);

    return arr;
}

//add existing ports to a node event finded into a splitted code
function addExistingPortsToNode(id,ck_editor){
    let tableConnections = ck_editor.slice(ck_editor.indexOf("Var connections"));
    tableConnections = tableConnections.slice(tableConnections.indexOf("=")+1,tableConnections.indexOf(";"));
    if(tableConnections != ""){
        let jsonPortsConnections = JSON.parse(tableConnections);
        Object.keys(jsonPortsConnections).forEach(port_id =>{
            for(let i=0;i<port_types.length;i++)
                if(port_types[i].output_type == jsonPortsConnections[port_id].output_type){
                    addPortBox(id,jsonPortsConnections[port_id].port_name,port_types[i]);
                    let output_class = parseInt(port_id)+1;
                    Object.keys(jsonPortsConnections[port_id].linked_target_widgets).forEach(target_id =>{
                        for(let input_id=1;input_id<=Object.keys(editor.drawflow.drawflow[module].data).length;input_id++)
                            if(editor.drawflow.drawflow[module].data[input_id].name == jsonPortsConnections[port_id].linked_target_widgets[target_id].widget_name){
                                editor.addConnection(id,input_id,"output_"+output_class,"input_1");
                                break;
                            }
                    });
                    break;
                }
        });
    }
    console.log("addExistingTriggersToNode("+id+",ck_editor)");
    console.log(editor);
}


//EXPORT METHODS


//convert node data into our model API
function exportDashboard(){
    let dashboard=[];
    let exportDrawflowNodes = editor.export().drawflow.Home.data;
    for(let id=1;id<=Object.keys(exportDrawflowNodes).length;id++){
        dashboard.push({"widget_type":exportDrawflowNodes[id].data.widget_type,"widget_name": exportDrawflowNodes[id].name ,"ck_editor" :rebuildCKeditorCode(id)});
    }

    console.log("exportDashboard()");
    console.log(editor);
    console.log(dashboard);

    return dashboard;
}

//rebuild code of a ck editor into a defined structure //TODO
function rebuildCKeditorCode(id){
    let node = editor.getNodeFromId(id);
    let first_event = true, tab_counter=1, event_counter=0;
    let rebuilded = "function execute(){\n\n";
    rebuilded += "\t".repeat(tab_counter) + "Var e = JSON.parse(param);\n";
    rebuilded += "\t".repeat(tab_counter) + "Var connections = " + JSON.stringify(getConnectionsTableByNodeId(id)) + ";\n\n";
    Object.keys(functions).forEach(id =>{
        formatCode(functions[id].func_code);
    });
    rebuilded += "\n";
    Object.keys(node.data.events).forEach(ev_id => {
        if(ev_id != "external_commands"){
            if(first_event){
                rebuilded += "\t".repeat(tab_counter) + "if(e.event == \"" + node.data.events[ev_id].ev_name + "\"){\n";
                first_event = false;
            } else {
                rebuilded += "\t".repeat(tab_counter) + "}else if(e.event == \"" + node.data.events[ev_id].ev_name + "\"){\n";
            }

            tab_counter++;
            formatCode(node.data.events[ev_id].code);
            tab_counter--;

            event_counter++;
        }
    });

    //manage external commands code
    if(event_counter > 0){
        if(node.data.events["external_commands"] !== undefined){
            rebuilded += "\t".repeat(tab_counter) + "}else{\n";
            tab_counter++;
            formatCode(node.data.events["external_commands"].code);
            tab_counter--;
        }
        rebuilded += "\t".repeat(tab_counter)+"}\n";
    }else{
        if(node.data.events["external_commands"] !== undefined){
            formatCode(node.data.events["external_commands"].code);
        } 
    }
        
    rebuilded += "}";

    function formatCode(code){
        let code_strings = [];
        code = code.trim();
        code_strings = code.split("\n");
        for (let i=0 ; i < code_strings.length; i++){
            rebuilded += "\t".repeat(tab_counter) + code_strings[i]+"\n";
        };
    }

    console.log("rebuildCKeditorCode("+id+")");
    console.log(rebuilded);
    return rebuilded;
}


//PORTBOX METHODS

//add a port box to a node event
function addPortBox(id,port_name,port_type=port_types[0]){
    let check_name_validity = true;

    //Check if port name is available and valid
    if(port_name == ""){
        check_name_validity = false;
    }
    Object.keys(editor.drawflow.drawflow[module].data[id].data.port_boxes).forEach(port_box_id =>{
        if(editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id].port_name == port_name){
            check_name_validity = false;
        }
    });

    if(check_name_validity){
        //Add a new port box to node.data.port_boxes
        let port_box_id = editor.drawflow.drawflow[module].data[id].data.next_port_box;
        let new_port_box = JSON.parse(JSON.stringify(port_box));
        new_port_box.port_type = JSON.parse(JSON.stringify(port_type));
        editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id] = new_port_box;
        editor.drawflow.drawflow[module].data[id].data.next_port_box += 1;
        addPortOutput(id,port_box_id);
        editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id].port_name = port_name;

        //Modify node HTML with a new port box form
        let portBoxRoom = document.getElementById("ports-room-"+id);
        portBoxRoom.insertAdjacentHTML("beforeend",`
        <div class="port-box accordion-item" id="port-box-`+id+"-"+port_box_id+`">
            <div class="accordion-header">
                <button id="port-button-`+id+"-"+port_box_id+`" class="accordion-button port-box-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse`+id+"-"+port_box_id+`" aria-expanded="true" aria-controls="collapse`+id+"-"+port_box_id+`">
                    <input id="port-name-`+id+"-"+port_box_id+`" type="text" value="`+port_name+`" df-port_boxes-`+port_box_id+`-port_name class="port-box-name" readonly></input>
                </button>
            </div>
            <div id="collapse`+id+"-"+port_box_id+`" class="accordion-collapse collapse" data-bs-parent="#ports-room-`+id+`">
                <div class="accordion-body">
                    <div class="separator">
                        <label for="output-type-`+id+"-"+port_box_id+`">OutputType</label>
                        <select onchange="changePortBoxType(`+id+`,`+port_box_id+`)" id="output-type-`+id+"-"+port_box_id+`" type="text"></select>
                    </div>
                    <button onclick="deletePortBox(`+id+`,`+port_box_id+`)" class="btn-delete-port-box">delete</button>
                </div>
            </div>
        </div>
        `);

        document.getElementById("port-button-"+id+"-"+port_box_id).classList.add(port_type.color_class);

        //take port box output type list based on widget type
        let output_type_select = document.getElementById("output-type-"+id+"-"+port_box_id);
        for(let i=0; i< port_types.length;i++){
            if(port_types[i].perform_widgets_typologies.includes(editor.getNodeFromId(id).data.widget_type))
                if(port_types[i].output_type == port_type.output_type){
                    output_type_select.insertAdjacentHTML("beforeend",`<option value="`+port_types[i].output_type+`" selected>`+port_types[i].output_type+`</option>`);
                } else {
                    output_type_select.insertAdjacentHTML("beforeend",`<option value="`+port_types[i].output_type+`">`+port_types[i].output_type+`</option>`);
                }
        }

        updateHTMLFromNodeId(id);

    }else{
        alert("Il seguente nome per il widget scelto è gia stato utilizzato oppure non è valido. Riprovare con un altro nome.")
    }

    console.log("addPortBox("+id+","+port_name+",port_box)");
    console.log(editor);
}

//delete a port box from a node event
function deletePortBox(id,port_box_id){
    let portBoxRoom = document.getElementById("port-box-"+id+"-"+port_box_id);

    //Remove node HTML of a port box
    removePortOutput(id,port_box_id);

    portBoxRoom.remove();

    //remove code that use this port box
    Object.keys(editor.getNodeFromId(id).data.events).forEach(ev_id => {
        let old_code = editor.getNodeFromId(id).data.events[ev_id].code;
        let new_code = "";
        let del_port_name = "";
        let parenthesis = /\(".+".*\);/g;
        Object.keys(functions).forEach(f_id =>{
            let reg = new RegExp(functions[f_id].func_name + parenthesis.source, "g");
            while(old_code.search(reg) != -1){
                new_code += old_code.slice(0,old_code.search(reg));
                old_code = old_code.slice(old_code.search(reg));
                del_port_name = old_code.slice(old_code.indexOf("(")+2,old_code.indexOf(",")-1);
                if(del_port_name != editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id].port_name){
                    new_code += old_code.slice(0,old_code.indexOf(";")+1);
                }
                old_code = old_code.slice(old_code.indexOf(";")+1);
            }
            new_code += old_code;
            old_code = new_code;
            new_code = "";
        });
        new_code = old_code;
        editor.drawflow.drawflow[module].data[id].data.events[ev_id].code = new_code;
        document.getElementById("code-"+id+"-"+ev_id).value = editor.drawflow.drawflow[module].data[id].data.events[ev_id].code 
    });

    //Delete a port box from node.data.port_boxes
    delete editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id];

    updateHTMLFromNodeId(id);

    console.log("deletePortBox("+id+","+port_box_id+")");
    console.log(editor);
}

//change a port box composition based on the choice of a specified port box
function changePortBoxType(id, port_box_id){
    //generating new port box composition
    Object.keys(port_types).forEach(pbt_id =>{
        if(document.getElementById("port-button-"+id+"-"+port_box_id).classList.contains(port_types[pbt_id].color_class)){
            document.getElementById("port-button-"+id+"-"+port_box_id).classList.remove(port_types[pbt_id].color_class);
        }
        if(port_types[pbt_id].output_type==document.getElementById("output-type-"+id+"-"+port_box_id).value){
            editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id].port_type = JSON.parse(JSON.stringify(port_types[pbt_id]));
            document.getElementById("port-button-"+id+"-"+port_box_id).classList.add(port_types[pbt_id].color_class);
        }
    });

    Object.keys(editor.getNodeFromId(id).outputs).forEach(output_class =>{
        if(output_class == "output_"+editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id].associated_output_node){
            let input_id,input_class;
            for(let conn_id = editor.drawflow.drawflow[module].data[id].outputs[output_class].connections.length-1; conn_id >= 0; conn_id--){
                input_id = parseInt(editor.drawflow.drawflow[module].data[id].outputs[output_class].connections[conn_id].node);
                input_class = editor.drawflow.drawflow[module].data[id].outputs[output_class].connections[conn_id].output;
                editor.removeSingleConnection(id,input_id,output_class,input_class);
            }
        }
    });

    updateHTMLFromNodeId(id);

    console.log("changePortBoxComposition("+id+","+port_box_id+")");
    console.log(editor);
}


//OUTPUT PORTS METHODS


//add an output port based on output_type of a certain port box
function addPortOutput(id,port_box_id){
    let output_number = Object.keys(editor.getNodeFromId(id).outputs).length+1;
    
    editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id].associated_output_node = output_number;
    
    editor.addNodeOutput(id);

    console.log("addOutputPort("+id+","+port_box_id+")");
    console.log(editor);
}

//remove an output port linked with a certain port box
function removePortOutput(id,port_box_id){

    Object.keys(editor.getNodeFromId(id).data.port_boxes).forEach(iter_port_box_id => {
        if(editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id].associated_output_node < editor.drawflow.drawflow[module].data[id].data.port_boxes[iter_port_box_id].associated_output_node){
            editor.drawflow.drawflow[module].data[id].data.port_boxes[iter_port_box_id].associated_output_node -= 1;
        }
    });
    
    editor.removeNodeOutput(id, "output_"+editor.getNodeFromId(id).data.port_boxes[port_box_id].associated_output_node);


    console.log("removeOutputPort("+id+","+port_box_id+")");
    console.log(editor);
}


//CONNECTIONS METHODS

//take a modelled connections table of a widget
function getConnectionsTableByNodeId(id){
    let singleConn = {"port_name":"","output_type":"","linked_target_widgets":[]};
    let target_widget = {"widget_name":"","widget_type":""}
    let connections = [];
    Object.keys(editor.getNodeFromId(id).data.port_boxes).forEach(port_box_id =>{
        let new_conn = JSON.parse(JSON.stringify(singleConn)),new_target;
        let output_class = "output_"+editor.getNodeFromId(id).data.port_boxes[port_box_id].associated_output_node;
        let input_id;

        new_conn.port_name = editor.getNodeFromId(id).data.port_boxes[port_box_id].port_name;
        new_conn.output_type = editor.getNodeFromId(id).data.port_boxes[port_box_id].port_type.output_type;

        Object.keys(editor.getNodeFromId(id).outputs[output_class].connections).forEach(conn_id =>{
            input_id=editor.getNodeFromId(id).outputs[output_class].connections[conn_id].node;

            new_target = JSON.parse(JSON.stringify(target_widget));
            new_target.widget_name = editor.getNodeFromId(input_id).name;
            new_target.widget_type = editor.getNodeFromId(input_id).data.widget_type;

            new_conn.linked_target_widgets.push(new_target);
        });

        connections.push(new_conn);
    });
    console.log("getConnectionsTableByNodeId("+id+")");
    console.log(connections);
    return connections;
}