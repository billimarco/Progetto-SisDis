//IMPORTANT for acceding some data of the node for update, like the HTML or others, we need to use <--editor.drawflow.drawflow[module].data[id]-->.

var df = document.getElementById("drawflow");
const editor = new Drawflow(df);
const module = "Home";
editor.reroute = true;
editor.reroute_fix_curvature = true;
editor.start();
//COPY MODELS

//IMPORTANT events[0] is only for externalCommands
var widget_data = {
    "RadarSeries" : {"widget_ports":"IN/OUT", "widget_type":"RadarSeries", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}},"1":{"event_name":"click","code":"", "trigger_number": 0, "triggers":{}},"2":{"event_name":"legendItemClick","code":"", "trigger_number": 0, "triggers":{}}}},
    "TimeTrend" : {"widget_ports":"IN/OUT", "widget_type":"TimeTrend", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "CurvedLineSeries" : {"widget_ports":"IN/OUT", "widget_type":"CurvedLineSeries", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "PieChart" : {"widget_ports":"IN/OUT", "widget_type":"PieChart", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "BarSeries" : {"widget_ports":"IN/OUT", "widget_type":"BarSeries", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "Map" : {"widget_ports":"IN/OUT", "widget_type":"Map", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "Speedometer" : {"widget_ports":"IN", "widget_type":"Speedometer", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "GaugeChart" : {"widget_ports":"IN", "widget_type":"GaugeChart", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "Knob" : {"widget_ports":"IN/OUT", "widget_type":"Knob", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "NumericKeyboard" : {"widget_ports":"IN/OUT", "widget_type":"NumericKeyboard", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "SingleContent" : {"widget_ports":"IN", "widget_type":"SingleContent", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "ExternalContent" : {"widget_ports":"IN/OUT", "widget_type":"ExternalContent", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "Table" : {"widget_ports":"IN", "widget_type":"Table", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "DeviceTable" : {"widget_ports":"IN", "widget_type":"DeviceTable", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "EventTable" : {"widget_ports":"OUT", "widget_type":"EventTable", "events":{"1":{"event_name":"click","code":"", "trigger_number": 0, "triggers":{}}}},
    "Button" : {"widget_ports":"OUT", "widget_type":"Button", "events":{"1":{"event_name":"click","code":"", "trigger_number": 0, "triggers":{}}}},
    "OnOffButton" : {"widget_ports":"IN/OUT", "widget_type":"OnOffButton", "events":{"0":{"event_name":"externalCommands","code":"", "trigger_number": 0, "triggers":{}}}},
    "ImpulseButton" : {"widget_ports":"OUT", "widget_type":"ImpulseButton", "events":{"1":{"event_name":"click","code":"", "trigger_number": 0, "triggers":{}}}}
};

var port_designs_input = {
    "External" : {"type":"External","color_class": "port_white"}
};

var port_designs_output = {
    "ListSURI" : {"type":"ListSURI","color_class": "port_red","associated_event_id": "0","associated_trigger_id":"0"},
    "time_interval" : {"type":"time_interval","color_class": "port_green","associated_event_id": "0","associated_trigger_id":"0"},
    "SURI" : {"type":"SURI","color_class": "port_blue","associated_event_id": "0","associated_trigger_id":"0"},
    "timestamp" : {"type":"timestamp","color_class": "port_yellow","associated_event_id": "0","associated_trigger_id":"0"},
    "action" : {"type":"action","color_class": "port_orange","associated_event_id": "0","associated_trigger_id":"0"},
    "GPS_coordinates" : {"type":"GPS_coordinates","color_class": "port_purple","associated_event_id": "0","associated_trigger_id":"0"},
    "JSON" : {"type":"JSON","color_class": "port_black","associated_event_id": "0","associated_trigger_id":"0"}
};

var connections = [];

var dashboard_connection = {"output_id": "0" , "event_id": "0", "trigger_id": "0", "input_id":"0"};

var trigger_types = [
    {"type": "empty", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":[""], "output_type": "ListSURI", "others": {}},
    {"type": "showRadarSeriesFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["RadarSeries"], "output_type": "ListSURI", "others": {"event_generator":{"type":"input","value":"$(this)"} , "passed_data":{"type":"textarea","value":""}}},
    {"type": "showTableFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["Table"], "output_type": "ListSURI", "others": {"event_generator":{"type":"input","value":"$(this)"}, "passed_data":{"type":"textarea","value":""}}},
    {"type": "showLastDataFromExternalContentGis", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["SingleContent","Speedometer","GaugeChart"], "output_type": "SURI", "others": {"event_generator":{"type":"input","value":"$(this)"}, "color1":{"type":"input","value":""}, "color2":{"type":"input","value":""}, "widget_title":{"type":"input","value":""}, "field":{"type":"input","value":""}, "service_uri":{"type":"input","value":""}}},
    {"type": "showSingleContentFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["SingleContent"], "output_type": "SURI", "others": {"event_generator":{"type":"input","value":"$(this)"}, "color1":{"type":"input","value":""}, "color2":{"type":"input","value":""}, "widget_title":{"type":"input","value":""}, "passed_data":{"type":"textarea","value":""}}},
    {"type": "showTimeTrendFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["TimeTrend"], "output_type": "SURI", "others": {"event_generator":{"type":"input","value":"$(this)"}, "range":{"type":"input","value":""}, "color1":{"type":"input","value":""}, "color2":{"type":"input","value":""}, "widget_title":{"type":"input","value":""}, "field":{"type":"input","value":""}, "service_uri":{"type":"input","value":""}}},
    {"type": "showCurvedLinesFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["CurvedLineSeries"], "output_type": "ListSURI", "others": {"event_generator":{"type":"input","value":"$(this)"}, "range":{"type":"input","value":""}, "field":{"type":"input","value":""}, "passed_data":{"type":"textarea","value":""}, "t1":{"type":"input","value":""}, "t2":{"type":"input","value":""}, "event":{"type":"input","value":""}}},
    {"type": "showDeviceTableFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["DeviceTable"], "output_type": "ListSURI", "others": {"event_generator":{"type":"input","value":"$(this)"}, "passed_data":{"type":"textarea","value":"ordering:\nquery:\nactions:\ncolumnsToShow:"}}},
    {"type": "addSelectorPin", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["Map"], "output_type": "ListSURI", "others": {"passed_data":{"type":"textarea","value":"event_generator:$(this)\ndesc:\nquery:\ncolor1:\ncolor2:\ntargets:\ndisplay:\nqueryType:\niconTextMode:\npinattr:\npincolor:\nsymbolcolor:\nbubbleSelectedMetric:"}}},
    {"type": "showOnOffButtonFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["OnOffButton"], "output_type": "action", "others": {"event_generator":{"type":"input","value":"$(this)"}, "widget_title":{"type":"input","value":""}, "passed_data":{"type":"textarea","value":"\"dataOperation\":"}}},
    {"type": "showKnobFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["Knob"], "output_type": "action", "others": {"event_generator":{"type":"input","value":"$(this)"}, "color1":{"type":"input","value":""}, "color2":{"type":"input","value":""}, "widget_title":{"type":"input","value":""}, "passed_data":{"type":"textarea","value":"\"dataOperation\":"}}},
    {"type": "showNumericKeyboardFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["NumericKeyboard"], "output_type": "action", "others": {"event_generator":{"type":"input","value":"$(this)"}, "color1":{"type":"input","value":""}, "color2":{"type":"input","value":""}, "widget_title":{"type":"input","value":""}, "passed_data":{"type":"textarea","value":"\"dataOperation\":"}}},
    {"type": "showPieChartFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["PieChart"], "output_type": "ListSURI", "others": {"event_generator":{"type":"input","value":"$(this)"}, "passed_data":{"type":"textarea","value":""}}},
    {"type": "showBarSeriesFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["BarSeries"], "output_type": "ListSURI", "others": {"event_generator":{"type":"input","value":"$(this)"}, "passed_data":{"type":"textarea","value":""}}},
    {"type": "showExternalContentFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":["ExternalContent"], "output_type": "action", "others": {"event_generator":{"type":"input","value":"$(this)"}, "range":{"type":"input","value":""}, "color1":{"type":"input","value":""}, "color2":{"type":"input","value":""}, "events":{"type":"input","value":""}, "passed_data":{"type":"textarea","value":""}}}
];

// TRIAL EXAMPLE
let dashboard = [
    {"widget_type":"RadarSeries","widget_name":"w_radar_series_1","ck_editor":``},
    {"widget_type":"TimeTrend","widget_name":"w_time_trend_2","ck_editor":``},
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
    let output_port_design = editor.getNodeFromId(output_id).outputs[output_class].port_design;

    if(editor.getNodeFromId(output_id).data.events[output_port_design.associated_event_id].triggers[output_port_design.associated_trigger_id].target_widgets_typologies.includes(editor.getNodeFromId(input_id).data.widget_type)){
        addSingleTriggerConnection(output_id,output_port_design.associated_event_id,output_port_design.associated_trigger_id,input_id);
    }else{
        editor.removeSingleConnection(output_id,input_id,output_class,input_class);
    }
    
    console.log("Connection created");
    console.log(connections);
})

editor.on('connectionRemoved', function (connection) {
    let input_id = connection.input_id;
    let output_id = connection.output_id;
    let output_class = connection.output_class;
    let output_port_design = editor.getNodeFromId(output_id).outputs[output_class].port_design;

    removeSingleTriggerConnection(output_id,output_port_design.associated_event_id,output_port_design.associated_trigger_id,input_id);

    console.log("Connection created");
    console.log(connections);
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

//APPLICATION METHODS

//convert our model API into node //TODO to finish for importing splitted CKeditor
function importDashboard(dashboard){
    editor.clearModuleSelected();
    let splitted_ck_editor;
    for(var i=0;i<dashboard.length;i++){
        //splitted_ck_editor = splitCKeditorCode(dashboard[i].ck_editor);
        addNodeToEditor(i+1, dashboard[i].widget_type, dashboard[i].widget_name, "splitted_ck_editor",50+800*(i%3),50+500*(Math.floor(i/3)));
    }
    /**for(var i=0;i<dashboard.length;i++){
        splitted_ck_editor = splitCKeditorCode(dashboard[i].ck_editor);
        addExistingTriggersToNode(i+1, splitted_ck_editor.triggers);
    }*/

    console.log("importDashboard(dashboard)");
    console.log(dashboard);
    console.log(editor);
}

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

//add node into our editor based on widget type //TODO finish
function addNodeToEditor(id, type, name, splitted_ck_editor , pos_x, pos_y){
    var html=`<div class="title-box"><i class="fas fa-code"></i> `+type+` `+"("+widget_data[type].widget_ports+")"+`</div>`;
    var data = JSON.parse(JSON.stringify(widget_data[type]));

    //Update node HTML
    if(widget_data[type].widget_ports != "IN"){
        html += `
        <div class="box-full">
            <div class="widget-body">
                <div class="widget-body-element-half">
                    <label for="widgetname-`+id+`">WidgetName</label>
                    <input id="widgetname-`+id+`" type="text" value=`+name+` readonly></input>
                </div>
                <div class="widget-body-element-half">
                    <label for="events-select-`+id+`">Event</label>
                    <select id="events-select-`+id+`" onchange="switchEventDisplayed(`+id+`)"></select>
                </div>
            </div>
            <div id="events-room-`+id+`">
            </div>
        </div>
        `;
        
        if(widget_data[type].widget_ports == "IN/OUT"){
            editor.addNode(name, 1, 0, pos_x, pos_y, widget_data[type].widget_ports , data, html);
            assignPort(id,"IN",1,"External");
        }else if(widget_data[type].widget_ports == "OUT"){
            editor.addNode(name, 0, 0, pos_x, pos_y, widget_data[type].widget_ports , data, html);
        }

    }else{
        html += `
        <div class="box-full">
            <div class="widget-body">
                <div class="widget-body-element-half">
                    <label for="widgetname-`+id+`">WidgetName</label>
                    <input id="widgetname-`+id+`" type="text" value=`+name+` readonly></input>
                </div>
                <div class="widget-body-element-half">
                    <label for="events-select-`+id+`">Event</label>
                    <select id="events-select-`+id+`"></select>
                </div>
            </div>
            <div id="events-room-`+id+`">
            </div>
        </div>
        `;

        editor.addNode(name, 1, 0, pos_x, pos_y, widget_data[type].widget_ports , data, html);
        assignPort(id,"IN",1,"External");
    }
    
    //NOTE let the switch in case of future different implementation
    /**
    switch (type) {
        case 'RadarSeries':
            editor.addNode(name, 1, 0, pos_x, pos_y, 'radarseries', data, html);
            assignPort(id,"IN",1,"External");
            break;

        case 'TimeTrend':
            editor.addNode(name, 1, 0, pos_x, pos_y, 'timetrend', data, html);
            assignPort(id,"IN",1,"External");
            break;

        case 'CurvedLineSeries':
            editor.addNode(name, 1, 0, pos_x, pos_y, 'curvedlineseries', data, html);
            assignPort(id,"IN",1,"External");
            break;

        case 'PieChart':
            editor.addNode(name, 1, 0, pos_x, pos_y, 'piechart', data, html);
            assignPort(id,"IN",1,"External");
            break;

        case 'BarSeries':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        case 'Map':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        case 'Speedometer':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        case 'GaugeChart':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        case 'Knob':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        case 'NumericKeyboard':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        case 'SingleContent':
            editor.addNode(name, 1, 0, pos_x, pos_y, 'singlecontent', data, html);
            assignPort(id,"IN",1,"External");
            break;

        case 'ExternalContent':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        case 'Table':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        case 'DeviceTable':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        case 'EventTable':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        case 'Button':
            editor.addNode(name, 0, 0, pos_x, pos_y, 'button', data, html);
            break;

        case 'OnOffButton':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        case 'ImpulseButton':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        default:
    }
    */

    //add all events of a widget
    addEventsBasedOnWidgetType(id,widget_data[type].widget_ports);

    console.log("addNodeToEditor("+id+","+type+","+name+","+"splitted_ck_editor"+","+pos_x+","+pos_y+")");
    console.log(editor);
}

//assign a port type to a node port
function assignPort(node_id, type, port_id, port_design_type, associated_event_id="0", associated_trigger_id="0"){
    if(type==="IN"){
        editor.drawflow.drawflow[module].data[node_id].inputs["input_"+port_id].port_design = JSON.parse(JSON.stringify(port_designs_input[port_design_type]));
        document.getElementById("node-"+node_id).childNodes[0].childNodes[(port_id-1)].classList.add(port_designs_input[port_design_type].color_class);
    } else if (type==="OUT"){
        editor.drawflow.drawflow[module].data[node_id].outputs["output_"+port_id].port_design = JSON.parse(JSON.stringify(port_designs_output[port_design_type]));
        editor.drawflow.drawflow[module].data[node_id].outputs["output_"+port_id].port_design.associated_event_id = associated_event_id+"";
        editor.drawflow.drawflow[module].data[node_id].outputs["output_"+port_id].port_design.associated_trigger_id = associated_trigger_id+"";
        document.getElementById("node-"+node_id).childNodes[2].childNodes[(port_id-1)].classList.add(port_designs_output[port_design_type].color_class);
    }
}

//add events to the nodes with a certain widget type
function addEventsBasedOnWidgetType(id,widget_ports){
    let node_event_room = document.getElementById("events-room-"+id);
    let node_select_event = document.getElementById("events-select-"+id);
    if(widget_ports != "IN"){
        Object.keys(editor.getNodeFromId(id).data.events).forEach(ev_id => {
            node_select_event.insertAdjacentHTML("beforeend",`<option value=`+ev_id+`>`+editor.getNodeFromId(id).data.events[ev_id].event_name+`</option>`);
            node_event_room.insertAdjacentHTML("beforeend",`
                <div id="ck-editor-`+id+`-`+ev_id+`" class="ck-editor accordion accordion-flush">
                    <div id="code-room-`+id+`-`+ev_id+`" class="code-room">
                        <label for="code-`+id+`-`+ev_id+`">Code</label>
                        <textarea id="code-`+id+`-`+ev_id+`" df-events-`+ev_id+`-code class="code-box"></textarea>
                        <button onclick="addTrigger(`+id+","+ev_id+`)" class="btn-add-trigger">add trigger</button>
                    </div>
                    <div id="trigger-room-`+id+`-`+ev_id+`" class="trigger-room"></div>
                </div>`);
        });
        switchEventDisplayed(id);
    } else {
        Object.keys(editor.getNodeFromId(id).data.events).forEach(ev_id => {
            node_select_event.insertAdjacentHTML("beforeend",`<option value=`+ev_id+`>`+editor.getNodeFromId(id).data.events[ev_id].event_name+`</option>`);
            node_event_room.insertAdjacentHTML("beforeend",`
                <div id="ck-editor-`+id+`-`+ev_id+`" class="ck-editor accordion accordion-flush">
                    <div id="code-room-`+id+`-`+ev_id+`" class="code-room-in">
                        <label for="code-`+id+`-`+ev_id+`">Code</label>
                        <textarea id="code-`+id+`-`+ev_id+`" df-events-`+ev_id+`-code class="code-box-in"></textarea>
                    </div>
                </div>`);
        });
    }
    updateHTMLFromNodeId(id);

    console.log("addEventsBasedOnWidgetType("+id+","+widget_ports+")");
    console.log(editor);
}

//switch widget event to display in a widget node
function switchEventDisplayed(id){
    let ev_id = document.getElementById("events-select-"+id).value;
    let node_event_editor;
    Object.keys(editor.getNodeFromId(id).data.events).forEach(ev =>{
        node_event_editor = document.getElementById("ck-editor-"+id+"-"+ev);
        if(ev!=ev_id){
            if(!node_event_editor.classList.contains("hide"))
                node_event_editor.classList.add("hide");
        } else {
            if(node_event_editor.classList.contains("hide"))
                node_event_editor.classList.remove("hide");
        }
    });

    calculateEventTriggersOutputPorts(id, ev_id);

    calculateEventTriggersConnections(id , ev_id);

    console.log("switchEventDisplayed("+id+")");
    console.log(editor);
}

//calculate event trigger output ports every time a node change its event
function calculateEventTriggersOutputPorts(id, ev_id){
    let output_counter, save_conns = [], changed_ev_id, changed_trigger_id;

    for(output_counter=Object.keys(editor.getNodeFromId(id).outputs).length; output_counter > 0; output_counter--){
        //saving connections from delete
        changed_ev_id = editor.getNodeFromId(id).outputs["output_"+output_counter].port_design.associated_event_id;
        changed_trigger_id = editor.getNodeFromId(id).outputs["output_"+output_counter].port_design.associated_trigger_id;
        for(let i=0;i < connections.length; i++){
            if(connections[i].output_id == id && connections[i].event_id == changed_ev_id && connections[i].trigger_id == changed_trigger_id){
                save_conns.push(JSON.parse(JSON.stringify(connections[i])));
            }
        }

        //removing output port
        editor.removeNodeOutput(id, "output_"+output_counter);
    }

    //re-insert deleted connections for the next switch event
    connections = connections.concat(save_conns);

    //adding new output port
    Object.keys(editor.getNodeFromId(id).data.events[ev_id].triggers).forEach(trigger_id =>{
        addTriggerOutputPort(id,ev_id,trigger_id);
    });

    console.log("changeEventTriggerOutputPorts("+id+","+ev_id+")");
    console.log(editor);
}

//add an output port based on trigger_type of a certain trigger
function addTriggerOutputPort(id,ev_id,trigger_id){
    let output_counter = Object.keys(editor.getNodeFromId(id).outputs).length;
    let output_type = editor.getNodeFromId(id).data.events[ev_id].triggers[trigger_id].output_type;
    editor.addNodeOutput(id);
    assignPort(id, "OUT", output_counter+1, output_type, ev_id, trigger_id);

    console.log("addTriggerOutputPort("+id+","+ev_id+","+trigger_id+")");
    console.log(editor);
}

//change an output port based on trigger_type of a certain trigger
function changeTriggerOutputPort(id,ev_id,trigger_id){
    let output_type = editor.getNodeFromId(id).data.events[ev_id].triggers[trigger_id].output_type;
    Object.keys(editor.getNodeFromId(id).outputs).forEach(output_class =>{
        if(editor.getNodeFromId(id).outputs[output_class].port_design.associated_event_id == ev_id && editor.getNodeFromId(id).outputs[output_class].port_design.associated_trigger_id == trigger_id){
            for(let i=0; i<connections.length; i++){
                if(connections[i].output_id==id && connections[i].event_id==ev_id && connections[i].trigger_id==trigger_id){
                    editor.removeSingleConnection(id,connections[i].input_id,output_class,"input_1");
                }
            }
            port_id = output_class.slice(7);
            document.getElementById("node-"+id).childNodes[2].childNodes[(port_id-1)].classList.remove(editor.getNodeFromId(id).outputs[output_class].port_design.color_class);
            assignPort(id, "OUT", port_id, output_type, ev_id, trigger_id);
        }
    });

    console.log("changeTriggerOutputPort("+id+","+ev_id+","+trigger_id+")");
    console.log(editor);
}

//remove an output port linked with a certain trigger
function removeTriggerOutputPort(id,ev_id,trigger_id){
    Object.keys(editor.getNodeFromId(id).outputs).forEach(output_class =>{
        if(editor.getNodeFromId(id).outputs[output_class].port_design.associated_event_id == ev_id && editor.getNodeFromId(id).outputs[output_class].port_design.associated_trigger_id == trigger_id)
            editor.removeNodeOutput(id, output_class);
    });

    console.log("removeTriggerOutputPort("+id+","+ev_id+","+trigger_id+")");
    console.log(editor);
}

//update editor field HTML of a node
function updateHTMLFromNodeId(id){
    let nodeContent = document.getElementById("node-"+id).childNodes[1];
    editor.drawflow.drawflow[module].data[id].html = nodeContent.innerHTML;

    console.log("updateHTMLFromNodeId("+id+")");
    console.log(editor);
}

//split code of a ck editor for finding events,triggers ecc.//TODO
function splitCKeditorCode(ck_editor){
    let splitted = {"code":"","triggers":{}};

    //removing function execute(){}
    ck_editor = ck_editor.trim();
    ck_editor = ck_editor.slice(ck_editor.indexOf("{")+1,ck_editor.lastIndexOf("}"));
    ck_editor = ck_editor.trim();

    //take code part
    splitted["code"] = ck_editor.slice(0,ck_editor.indexOf("$"));

    //take triggers_part
    let trigger_code = ck_editor.slice(ck_editor.indexOf("$('body').trigger"));
    let trigger, trigger_number = 0;
    while(trigger_code.indexOf("$('body').trigger")!=-1){
        splitted.triggers[trigger_number] = {};

        //removing $('body').trigger({});
        trigger = trigger_code.slice(trigger_code.indexOf("{")+1,trigger_code.indexOf("}"))
        trigger = trigger.trim();

        //split fields
        let array = trigger.split(",");
        for(let i=0;i<array.length;i++){
            field = array[i].slice(0,array[i].indexOf(":")).trim();
            value = array[i].slice(array[i].indexOf(":")+1).trim();
            if(value.indexOf("\"")!=-1){
                value = value.slice(value.indexOf("\"")+1, value.lastIndexOf("\""));
                if(field=="type")
                    value = value.slice(0, value.indexOf("_"));
            }
            splitted.triggers[trigger_number][field] = value;
        }

        //take next trigger
        trigger_code = trigger_code.slice(1);
        trigger_code = trigger_code.slice(trigger_code.indexOf("$('body').trigger"));
        trigger_number++;
    }

    console.log("splitCKeditorCode(ck_editor)");
    console.log(splitted);

    return splitted;
}

//rebuild code of a ck editor into a defined structure
function rebuildCKeditorCode(id){
    let node = editor.getNodeFromId(id);
    let first_event = true, tab_counter=1, event_counter=0;
    let rebuilded = "function execute(){\n";
    rebuilded += "\t".repeat(tab_counter) + "Var e = JSON.parse(param)\n";
    Object.keys(node.data.events).forEach(ev_id => {
        if(ev_id != 0){
            if(first_event){
                rebuilded += "\t".repeat(tab_counter) + "if(e.event == \"" + node.data.events[ev_id].event_name + "\"){\n";
                first_event = false;
            } else {
                rebuilded += "\t".repeat(tab_counter) + "}else if(e.event == \"" + node.data.events[ev_id].event_name + "\"){\n";
            }

            tab_counter++;
            formatCode(ev_id);
            rebuildEventTriggers(ev_id);
            tab_counter--;

            event_counter++;
        }
    });

    //manage external commands code
    if(event_counter > 0){
        if(node.data.events[0] !== undefined){
            rebuilded += "\t".repeat(tab_counter) + "}else{\n";
            tab_counter++;
            formatCode(0);
            rebuildEventTriggers(0);
            tab_counter--;
        }
        rebuilded += "\t".repeat(tab_counter)+"}\n";
    }else{
        if(node.data.events[0] !== undefined){
            formatCode(0);
            rebuildEventTriggers(0);
        } 
    }
        
    rebuilded += "}";

    function rebuildEventTriggers(ev_id){
        let field_name = "", other_arr=[], check_connection=false;
        Object.keys(node.data.events[ev_id].triggers).forEach(trigger_id => {
            for(let i=0; i < connections.length; i++){
                if(connections[i].output_id == id && connections[i].event_id == ev_id && connections[i].trigger_id){
                    rebuilded += "\t".repeat(tab_counter) + "$('body').trigger({\n";
                    tab_counter++;
                    rebuilded += "\t".repeat(tab_counter) + "type: \"" + node.data.events[ev_id].triggers[trigger_id].type + "_" + node.data.events[ev_id].triggers[trigger_id].target_widget + "\",\n";
                    rebuilded += "\t".repeat(tab_counter) + "targetWidget: \"" + editor.getNodeFromId(connections[i].input_id).name + "\",\n";
                    Object.keys(node.data.events[ev_id].triggers[trigger_id].others).forEach(other_field => {
                        other_arr = [] , field_name = "";
                        other_arr = other_field.split("_");
                        for(let j=0; j< other_arr.length; j++){
                            if(j!=0){
                                field_name += other_arr[j].charAt(0).toUpperCase() + other_arr[j].slice(1);
                            }else{
                                field_name += other_arr[j];
                            }
                        }
                        rebuilded += "\t".repeat(tab_counter) + field_name + ": " + node.data.events[ev_id].triggers[trigger_id].others[other_field].value + ",\n";
                    });
                    //remove last ,
                    rebuilded = rebuilded.slice(0,rebuilded.lastIndexOf(","));
                    rebuilded += "\n";
                    
                    tab_counter--;
                    rebuilded += "\t".repeat(tab_counter) + "});\n"
                    
                    check_connection = true;
                }
            }

            //In case there is not a connection
            if(!check_connection){
                rebuilded += "\t".repeat(tab_counter) + "$('body').trigger({\n";
                    tab_counter++;
                    rebuilded += "\t".repeat(tab_counter) + "type: \"" + node.data.events[ev_id].triggers[trigger_id].type + "\",\n";
                    rebuilded += "\t".repeat(tab_counter) + "targetWidget: \"\",\n";
                    Object.keys(node.data.events[ev_id].triggers[trigger_id].others).forEach(other_field => {
                        other_arr = [] , field_name = "";
                        other_arr = other_field.split("_");
                        for(let j=0; j< other_arr.length; j++){
                            if(j!=0){
                                field_name += other_arr[j].charAt(0).toUpperCase() + other_arr[j].slice(1);
                            }else{
                                field_name += other_arr[j];
                            }
                        }
                        rebuilded += "\t".repeat(tab_counter) + field_name + ": " + node.data.events[ev_id].triggers[trigger_id].others[other_field].value + ",\n";
                    });
                    //remove last ,
                    rebuilded = rebuilded.slice(0,rebuilded.lastIndexOf(","));
                    rebuilded += "\n";
                    
                    tab_counter--;
                    rebuilded += "\t".repeat(tab_counter) + "});\n"
            }

        });
    }

    function formatCode(ev_id){
        let code_strings = [];
        code_strings = node.data.events[ev_id].code.split("\n");
        for (let i=0 ; i < code_strings.length; i++){
            rebuilded += "\t".repeat(tab_counter) + code_strings[i]+"\n";
        };
    }

    console.log("rebuildCKeditorCode("+id+")");
    console.log(rebuilded);
    return rebuilded;
}

//add existing trigger to a node event finded into a splitted code//TODO
function addExistingTriggersToNode(id,triggers){
    let trigger;
    for(let i=0;i< Object.keys(triggers).length;i++){
        for(let j=0;j < trigger_types.length;j++)
            if(trigger_types[j].type==triggers[i].type)
                trigger=trigger_types[j];
        trigger["target_widget"] = triggers[i].targetWidget;
        addTrigger(id,ev_id,trigger);
    }

    console.log("addExistingTriggersToNode("+id+",triggers)");
    console.log(editor);
}

//add a trigger to a node event
function addTrigger(id,ev_id,trigger=trigger_types[0]){

    //Add a new trigger to node.data.triggers
    let trigger_id = editor.drawflow.drawflow[module].data[id].data.events[ev_id].trigger_number;
    let new_trigger = JSON.parse(JSON.stringify(trigger));
    editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_id] = new_trigger;
    editor.drawflow.drawflow[module].data[id].data.events[ev_id].trigger_number += 1;

    //Modify node HTML with a new trigger form
    let triggerRoom = document.getElementById("trigger-room-"+id+"-"+ev_id);
    triggerRoom.insertAdjacentHTML("beforeend",`
    <div class="trigger-box accordion-item" id="trigger-box-`+id+"-"+ev_id+"-"+trigger_id+`">
        <div class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse`+id+"-"+ev_id+"-"+trigger_id+`" aria-expanded="true" aria-controls="collapse`+id+"-"+ev_id+"-"+trigger_id+`">
                trigger-box-`+id+"-"+ev_id+"-"+trigger_id+`
            </button>
        </div>
        <div id="collapse`+id+"-"+ev_id+"-"+trigger_id+`" class="accordion-collapse collapse show" data-bs-parent="#trigger-room-`+id+`">
            <div class="accordion-body">
                <div class="separator">
                    <label for="type-`+id+"-"+ev_id+"-"+trigger_id+`">type</label>
                    <select onchange="changeTriggerComposition(`+id+`,`+ev_id+`,`+trigger_id+`)" id="type-`+id+"-"+ev_id+"-"+trigger_id+`" df-events-`+ev_id+`-triggers-`+trigger_id+`-type type="text"></select>
                </div>
                <div id="other-html-`+id+"-"+ev_id+"-"+trigger_id+`" class="others-room">
                </div>
                <button onclick="deleteTrigger(`+id+`,`+ev_id+`,`+trigger_id+`)" class="btn-delete-trigger">delete</button>
            </div>
        </div>
    </div>
    `);

    //take trigger type list based on widget type (ex. RadarSeries have a trigger type list he can perform, TimeTrend have another trigger type list he can perform, ecc..)
    let type_trigger= document.getElementById("type-"+id+"-"+ev_id+"-"+trigger_id);
    for(let i=0; i< trigger_types.length;i++){
        if(trigger_types[i].perform_widgets_typologies.includes(editor.getNodeFromId(id).data.widget_type))
            if(trigger_types[i].type == trigger.type){
                type_trigger.insertAdjacentHTML("beforeend",`<option value="`+trigger_types[i].type+`" selected>`+trigger_types[i].type+`</option>`);
            } else {
                type_trigger.insertAdjacentHTML("beforeend",`<option value="`+trigger_types[i].type+`">`+trigger_types[i].type+`</option>`);
            }
    }

    addTriggerOutputPort(id,ev_id,trigger_id);

    updateHTMLFromNodeId(id);

    changeTriggerComposition(id,ev_id,trigger_id);

    console.log("addTrigger("+id+","+ev_id+",trigger)");
    console.log(editor);
}

//delete a trigger from a node event
function deleteTrigger(id,ev_id,trigger_id){
    let triggerRoom = document.getElementById("trigger-box-"+id+"-"+ev_id+"-"+trigger_id);
    let node = editor.getNodeFromId(id);

    //Delete a trigger from node.data.triggers
    delete node.data.events[ev_id].triggers["trigger_"+trigger_id];
    editor.updateNodeDataFromId(id,node.data);

    //Remove node HTML of a trigger
    triggerRoom.remove();

    removeTriggerOutputPort(id,ev_id,trigger_id);

    removeTriggerConnections(id,ev_id,trigger_id);

    updateHTMLFromNodeId(id);

    console.log("deleteTrigger("+id+","+ev_id+","+trigger_id+")");
    console.log(editor);
}

//change a trigger composition based on the choice of a specified trigger
function changeTriggerComposition(id, ev_id, trigger_id){
    //generating new trigger composition
    Object.keys(trigger_types).forEach(tt_id =>{
        if(trigger_types[tt_id].type==document.getElementById("type-"+id+"-"+ev_id+"-"+trigger_id).value){
            editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_id] = JSON.parse(JSON.stringify(trigger_types[tt_id]));
        }
    });

    //modify other html div based on trigger type
    let other_html = document.getElementById("other-html-"+id+"-"+ev_id+"-"+trigger_id);
    other_html.innerHTML = "";
    let field;
    Object.keys(editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_id].others).forEach(key =>{
        field = editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_id].others[key].type;
        other_html.insertAdjacentHTML("beforeend",`
        <div class="separator">
            <label for="`+key+"-"+id+"-"+ev_id+"-"+trigger_id+`">`+key+`</label>
            <`+field+` id="`+key+"-"+id+"-"+ev_id+"-"+trigger_id+`" df-events-`+ev_id+`-triggers-`+trigger_id+`-others-`+key+`-value></`+field+`>
        </div>
        `);
        document.getElementById(key+"-"+id+"-"+ev_id+"-"+trigger_id).value = editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_id].others[key].value;
    });

    changeTriggerOutputPort(id,ev_id,trigger_id);
    
    removeTriggerConnections(id,ev_id,trigger_id);

    updateHTMLFromNodeId(id);

    console.log("changeTriggerComposition("+id+","+ev_id+","+trigger_id+")");
    console.log(editor);
}

//calculate node connections based on triggers of the node event
function calculateEventTriggersConnections(id,ev_id){
    Object.keys(editor.getNodeFromId(id).outputs).forEach(output_class =>{
        if(editor.getNodeFromId(id).outputs[output_class].port_design.associated_event_id==ev_id){
            for(let i=0;i<connections.length;i++){
                if(connections[i].output_id==id && connections[i].event_id==ev_id && connections[i].trigger_id==editor.getNodeFromId(id).outputs[output_class].port_design.associated_trigger_id){
                    editor.addConnection(connections[i].output_id, connections[i].input_id, output_class, "input_1")
                }
            }
        }
    });

    console.log("calculateEventTriggersConnections("+id+","+ev_id+")");
    console.log(editor);
}

//add a single trigger connection to connections
function addSingleTriggerConnection(output_id,ev_id,trigger_id,input_id){
    let new_connection=JSON.parse(JSON.stringify(dashboard_connection));
    let check_presence = false;
    new_connection.output_id = output_id;
    new_connection.event_id = ev_id;
    new_connection.trigger_id = trigger_id;
    new_connection.input_id = input_id;

    for(let i=0;i<connections.length;i++){
        if(connections[i].output_id==output_id && connections[i].event_id==ev_id && connections[i].trigger_id==trigger_id && connections[i].input_id==input_id){
            check_presence = true;
        }
    }

    if(!check_presence){
        connections.push(new_connection);
    }

    console.log("addSingleTriggerConnection("+output_id+","+ev_id+","+trigger_id+","+input_id+")");
    console.log(connections);
}

//remove a single trigger connection from connections
function removeSingleTriggerConnection(output_id,ev_id,trigger_id,input_id){
    for(let i=0;i<connections.length;i++){
        if(connections[i].output_id==output_id && connections[i].event_id==ev_id && connections[i].trigger_id==trigger_id && connections[i].input_id==input_id){
            connections.splice(i,1);
        }
    }

    console.log("removeSingleTriggerConnection("+output_id+","+ev_id+","+trigger_id+","+input_id+")");
    console.log(connections);
}

//remove all connections of a trigger from connections
function removeTriggerConnections(output_id,ev_id,trigger_id){
    Object.keys(editor.drawflow.drawflow[module].data).forEach(input_id => {
        removeSingleTriggerConnection(output_id,ev_id,trigger_id,input_id);
    });

    console.log("removeTriggerConnections("+output_id+","+ev_id+","+trigger_id+")");
    console.log(connections);
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