//IMPORTANT for acceding some data of the node for update, like the HTML or others, we need to use <--editor.drawflow.drawflow[module].data[id]-->.

var df = document.getElementById("drawflow");
const editor = new Drawflow(df);
const module = "Home";
editor.reroute = true;
editor.reroute_fix_curvature = true;
editor.force_first_input = false;
editor.start();
//COPY MODELS

var widget_data = {
    "RadarSeries" : {"widget_ports":"IN/OUT", "widget_type":"RadarSeries", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}},"1":{"event_name":"click","code":"", "trigger_number": 0, "triggers":{}},"2":{"event_name":"legendItemClick","code":"", "trigger_number": 0, "triggers":{}}}},
    "TimeTrend" : {"widget_ports":"IN/OUT", "widget_type":"TimeTrend", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}}}},
    "CurvedLineSeries" : {"widget_ports":"IN/OUT", "widget_type":"CurvedLineSeries", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}}}},
    "PieChart" : {"widget_ports":"IN/OUT", "widget_type":"PieChart", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}}}},
    "BarSeries" : {"widget_ports":"IN/OUT", "widget_type":"BarSeries", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}}}},
    "Map" : {"widget_ports":"IN/OUT", "widget_type":"Map", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}}}},
    "Speedometer" : {"widget_ports":"IN", "widget_type":"Speedometer", "events":{}},
    "GaugeChart" : {"widget_ports":"IN", "widget_type":"GaugeChart", "events":{}},
    "Knob" : {"widget_ports":"IN/OUT", "widget_type":"Knob", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}}}},
    "NumericKeyboard" : {"widget_ports":"IN/OUT", "widget_type":"NumericKeyboard", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}}}},
    "SingleContent" : {"widget_ports":"IN", "widget_type":"SingleContent", "events":{}},
    "ExternalContent" : {"widget_ports":"IN/OUT", "widget_type":"ExternalContent", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}}}},
    "Table" : {"widget_ports":"IN", "widget_type":"Table", "events":{}},
    "DeviceTable" : {"widget_ports":"IN", "widget_type":"DeviceTable", "events":{}},
    "EventTable" : {"widget_ports":"OUT", "widget_type":"EventTable", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}}}},
    "Button" : {"widget_ports":"OUT", "widget_type":"Button", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}}}},
    "OnOffButton" : {"widget_ports":"IN/OUT", "widget_type":"OnOffButton", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}}}},
    "ImpulseButton" : {"widget_ports":"OUT", "widget_type":"ImpulseButton", "events":{"0":{"event_name":"no_event","code":"", "trigger_number": 0, "triggers":{}}}}
}

var port_types = [
    {"type":"None","color_class": "port_white","possible_output_links":[""]},
    {"type":"ListSURI","color_class": "port_red","possible_output_links":["ListSURI"]},
    {"type":"time_interval","color_class": "port_green","possible_output_links":["time_interval"]},
    {"type":"SURI","color_class": "port_blue","possible_output_links":["SURI"]},
    {"type":"timestamp","color_class": "port_yellow","possible_output_links":["timestamp"]},
    {"type":"action","color_class": "port_orange","possible_output_links":["action"]},
    {"type":"GPS_coordinates","color_class": "port_purple","possible_output_links":["GPS_coordinates"]}
];



var trigger_types = [
    {"id": 0,"type": "empty", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":[""], "output_types": ["ListSURI"], "others": {}},
    {"id": 0,"type": "showRadarSeriesFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["RadarSeries"], "output_types": ["ListSURI"], "others": {"event_generator":{"type":"input","value":"$(this)"} , "passed_data":{"type":"textarea","value":""}}},
    {"id": 0,"type": "showTableFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["Table"], "output_types": ["ListSURI"], "others": {"event_generator":{"type":"input","value":"$(this)"}, "passed_data":{"type":"textarea","value":""}}},
    {"id": 0,"type": "showLastDataFromExternalContentGis", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["SingleContent","Speedometer","GaugeChart"], "output_types": ["SURI"], "others": {"event_generator":{"type":"input","value":"$(this)"}, "color1":{"type":"input","value":""}, "color2":{"type":"input","value":""}, "widget_title":{"type":"input","value":""}, "field":{"type":"input","value":""}, "service_uri":{"type":"input","value":""}}},
    {"id": 0,"type": "showSingleContentFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["SingleContent"], "output_types": ["SURI"], "others": {"event_generator":{"type":"input","value":"$(this)"}, "color1":{"type":"input","value":""}, "color2":{"type":"input","value":""}, "widget_title":{"type":"input","value":""}, "passed_data":{"type":"textarea","value":""}}},
    {"id": 0,"type": "showTimeTrendFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["TimeTrend"], "output_types": ["SURI"], "others": {"event_generator":{"type":"input","value":"$(this)"}, "range":{"type":"input","value":""}, "color1":{"type":"input","value":""}, "color2":{"type":"input","value":""}, "widget_title":{"type":"input","value":""}, "field":{"type":"input","value":""}, "service_uri":{"type":"input","value":""}}},
    {"id": 0,"type": "showCurvedLinesFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["CurvedLineSeries"], "output_types": ["ListSURI"], "others": {"event_generator":{"type":"input","value":"$(this)"}, "range":{"type":"input","value":""}, "field":{"type":"input","value":""}, "passed_data":{"type":"textarea","value":""}, "t1":{"type":"input","value":""}, "t2":{"type":"input","value":""}, "event":{"type":"input","value":""}}},
    {"id": 0,"type": "showDeviceTableFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["DeviceTable"], "output_types": ["ListSURI"], "others": {"event_generator":{"type":"input","value":"$(this)"}, "passed_data":{"type":"textarea","value":"ordering:\nquery:\nactions:\ncolumnsToShow:"}}},
    {"id": 0,"type": "addSelectorPin", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["Map"], "output_types": ["ListSURI"], "others": {"passed_data":{"type":"textarea","value":"event_generator:$(this)\ndesc:\nquery:\ncolor1:\ncolor2:\ntargets:\ndisplay:\nqueryType:\niconTextMode:\npinattr:\npincolor:\nsymbolcolor:\nbubbleSelectedMetric:"}}},
    {"id": 0,"type": "showOnOffButtonFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["OnOffButton"], "output_types": ["action"], "others": {"event_generator":{"type":"input","value":"$(this)"}, "widget_title":{"type":"input","value":""}, "passed_data":{"type":"textarea","value":"\"dataOperation\":"}}},
    {"id": 0,"type": "showKnobFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["Knob"], "output_types": ["action"], "others": {"event_generator":{"type":"input","value":"$(this)"}, "color1":{"type":"input","value":""}, "color2":{"type":"input","value":""}, "widget_title":{"type":"input","value":""}, "passed_data":{"type":"textarea","value":"\"dataOperation\":"}}},
    {"id": 0,"type": "showNumericKeyboardFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["NumericKeyboard"], "output_types": ["action"], "others": {"event_generator":{"type":"input","value":"$(this)"}, "color1":{"type":"input","value":""}, "color2":{"type":"input","value":""}, "widget_title":{"type":"input","value":""}, "passed_data":{"type":"textarea","value":"\"dataOperation\":"}}},
    {"id": 0,"type": "showPieChartFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["PieChart"], "output_types": ["ListSURI"], "others": {"event_generator":{"type":"input","value":"$(this)"}, "passed_data":{"type":"textarea","value":""}}},
    {"id": 0,"type": "showBarSeriesFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["BarSeries"], "output_types": ["ListSURI"], "others": {"event_generator":{"type":"input","value":"$(this)"}, "passed_data":{"type":"textarea","value":""}}},
    {"id": 0,"type": "showExternalContentFromExternalContent", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widget":"", "target_widgets_typologies":["ExternalContent"], "output_types": ["action"], "others": {"event_generator":{"type":"input","value":"$(this)"}, "range":{"type":"input","value":""}, "color1":{"type":"input","value":""}, "color2":{"type":"input","value":""}, "events":{"type":"input","value":""}, "passed_data":{"type":"textarea","value":""}}}
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
    console.log(editor.getNodeFromId(id));
})

editor.on('connectionCreated', function (connection) {
    let input_id = connection.input_id;
    let input_class = connection.input_class
    let output_id = connection.output_id;
    let output_class = connection.output_class;

    //verifing if a connection exist already
    if(editor.getNodeFromId(output_id).outputs[output_class].port_type.possible_output_links.includes(editor.getNodeFromId(input_id).inputs[input_class].port_type.type)){
        
        let output_port_type = editor.getNodeFromId(output_id).outputs[output_class].port_type.type;
        let node_select_value = document.getElementById("events-select-"+output_id).value;
        let con_exist = false;
        let exist_trig_to_add = false;
        let new_trigger, trigger_tocheck;
        Object.keys(editor.getNodeFromId(output_id).data.events[node_select_value].triggers).forEach(trigger_name =>{
            trigger_tocheck = editor.getNodeFromId(output_id).data.events[node_select_value].triggers[trigger_name];
            if(trigger_tocheck.target_widget == editor.getNodeFromId(input_id).name && trigger_tocheck.output_types.includes(output_port_type)){
                con_exist = true;
            }
        });
        Object.keys(trigger_types).forEach(i =>{
            if(trigger_types[i].perform_widgets_typologies.includes(editor.getNodeFromId(output_id).data.widget_type) && trigger_types[i].target_widgets_typologies.includes(editor.getNodeFromId(input_id).data.widget_type) && trigger_types[i].output_types.includes(output_port_type)){
                new_trigger = JSON.parse(JSON.stringify(trigger_types[i]));
                exist_trig_to_add=true;
            }
        });
        //create a new trigger in the actual selected event
        if(!con_exist){
            if(exist_trig_to_add){
                addTrigger(output_id, node_select_value,new_trigger,editor.getNodeFromId(input_id).name);
            }else{
                editor.removeSingleConnection(output_id, input_id, output_class, input_class);
            }
        }
        //create a new trigger in the actual selected event
    }else{
        editor.removeSingleConnection(output_id, input_id, output_class, input_class);
    }
    console.log('Connection created');
    console.log(connection);
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

    function assignPort(type,port_id,port_type){
        if(type==="IN"){
            editor.drawflow.drawflow[module].data[id].inputs["input_"+port_id].port_type = JSON.parse(JSON.stringify(port_type));
            document.getElementById("node-"+id).childNodes[0].childNodes[(port_id-1)].classList.add(port_type.color_class);
        } else if (type==="OUT"){
            editor.drawflow.drawflow[module].data[id].outputs["output_"+port_id].port_type = JSON.parse(JSON.stringify(port_type));
            document.getElementById("node-"+id).childNodes[2].childNodes[(port_id-1)].classList.add(port_type.color_class);
        }
    }

    var html=`<div class="title-box"><i class="fas fa-code"></i> `+type+`</div>`;
    var data = JSON.parse(JSON.stringify(widget_data[type]));

    //Update node HTML
    if (widget_data[type].widget_ports === "IN"){
        html += `
        <div class="box-half">
            <div class="widget-body">
                <div class="widget-body-element-full">
                    <label for="widgetname-`+id+`">WidgetName</label>
                    <input id="widgetname-`+id+`" type="text" value=`+name+` readonly></input>
                </div>
            </div>
        </div>
        `;
    } else {
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
    }
  
    switch (type) {
        case 'RadarSeries':
            editor.addNode(name, 2, 2, pos_x, pos_y, 'radarseries', data, html);
            assignPort("IN",1,port_types[1]);
            assignPort("IN",2,port_types[4]);
            assignPort("OUT",1,port_types[3]);
            assignPort("OUT",2,port_types[4]);
            break;

        case 'TimeTrend':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            assignPort("IN",1,port_types[3]);
            assignPort("OUT",1,port_types[2]);
            assignPort("OUT",2,port_types[3]);
            assignPort("OUT",3,port_types[4]);
            break;

        case 'CurvedLineSeries':
            editor.addNode(name, 3, 4, pos_x, pos_y, 'curvedlineseries', data, html);
            assignPort("IN",1,port_types[1]);
            assignPort("IN",2,port_types[2]);
            assignPort("IN",3,port_types[4]);
            assignPort("OUT",1,port_types[1]);
            assignPort("OUT",2,port_types[2]);
            assignPort("OUT",3,port_types[3]);
            assignPort("OUT",4,port_types[4]);
            break;

        case 'PieChart':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
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
            assignPort("IN",1,port_types[3]);
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
            editor.addNode(name, 0, 1, pos_x, pos_y, 'button', data, html);
            assignPort("OUT",1,port_types[5]);
            break;

        case 'OnOffButton':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        case 'ImpulseButton':
            editor.addNode(name, 1, 3, pos_x, pos_y, 'timetrend', data, html);
            break;

        default:
    }

    //add all events of a widget
    if(widget_data[type].widget_ports != "IN")
        addEventsBasedOnWidgetType(id);

    console.log("addNodeToEditor("+id+","+type+","+name+","+"splitted_ck_editor"+","+pos_x+","+pos_y+")");
    console.log(editor);
}

//add events to the nodes with a certain widget type
function addEventsBasedOnWidgetType(id){
    let node_select_event = document.getElementById("events-select-"+id);
    let node_event_room = document.getElementById("events-room-"+id);
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
    node_select_event.value = 0;
    switchEventDisplayed(id);
    updateHTMLFromNodeId(id);

    console.log("addEventsBasedOnWidgetType("+id+")");
    console.log(editor);
}

//switch widget event to display in a widget node
function switchEventDisplayed(id){
    let node_select_value = document.getElementById("events-select-"+id).value;
    let node_event_editor;
    Object.keys(editor.getNodeFromId(id).data.events).forEach(ev =>{
        node_event_editor = document.getElementById("ck-editor-"+id+"-"+ev);
        if(ev!=node_select_value){
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
    let first_event = true, field_name="", other_arr=[], tab_counter=1;
    let rebuilded = "function execute(){\n";
    rebuilded += "\t".repeat(tab_counter)+"Var e = JSON.parse(param)\n";
    if(Object.keys(node.data.events).length>1){
        Object.keys(node.data.events).forEach(ev_id => {
            
            if(first_event){
                rebuilded += "\t".repeat(tab_counter)+"if(e.event == \""+node.data.events[ev_id].event_name+"\"){\n";
                first_event = false;
            } else {
                rebuilded += "}else if(e.event == \""+node.data.events[ev_id].event_name+"\"){\n";
            }

            tab_counter++;
            formatCode(ev_id);
            rebuildEventTriggers(ev_id);
            tab_counter--;

        });
        rebuilded += "}else{\n";

        tab_counter++;
        formatCode(0);
        rebuildEventTriggers(0);
        tab_counter--;

        rebuilded += "\t".repeat(tab_counter)+"}\n"
    }else{
        formatCode(0);
        rebuildEventTriggers(0);
    }
    rebuilded += "}";

    function rebuildEventTriggers(ev_id){
        Object.keys(node.data.events[ev_id].triggers).forEach(trigger_name => {
            rebuilded += "\t".repeat(tab_counter)+"$('body').trigger({\n";
            tab_counter++;
            rebuilded += "\t".repeat(tab_counter)+"type: \""+ node.data.events[ev_id].triggers[trigger_name].type +"_"+node.data.events[ev_id].triggers[trigger_name].target_widget+"\",\n";
            rebuilded += "\t".repeat(tab_counter)+"targetWidget: \""+node.data.events[ev_id].triggers[trigger_name].target_widget+"\",";
            Object.keys(node.data.events[ev_id].triggers[trigger_name].others).forEach(other_field => {
                other_arr = [] , field_name = "";
                other_arr = other_field.split("_");
                for(let i=0; i< other_arr.length; i++){
                    if(i!=0){
                        field_name += other_arr[i].charAt(0).toUpperCase() + other_arr[i].slice(1);
                    }else{
                        field_name += other_arr[i];
                    }
                }
                rebuilded += "\t".repeat(tab_counter)+field_name+": "+node.data.events[ev_id].triggers[trigger_name].others[other_field].value+",\n";
            });
            //remove last ,
            rebuilded = rebuilded.slice(0,rebuilded.lastIndexOf(",")-1);
            rebuilded += "\n";
            
            tab_counter--;
            rebuilded += "\t".repeat(tab_counter)+"});\n"
        });
    }

    function formatCode(ev_id){
        let code_strings = [];
        code_strings = node.data.events[ev_id].code.split("\n");
        for (let i=0 ; i < code_strings.length; i++){
            rebuilded += "\t".repeat(tab_counter)+code_strings[i]+"\n";
        };
    }

    console.log("rebuildCKeditorCode("+id+")");
    console.log(rebuilded);
    alert(rebuilded);
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
function addTrigger(id,ev_id,trigger=trigger_types[0],selected_target_widget_name=""){

    //Add a new trigger to node.data.triggers
    let trigger_id = editor.drawflow.drawflow[module].data[id].data.events[ev_id].trigger_number;
    let trigger_name = "trigger_"+trigger_id;
    let new_trigger = JSON.parse(JSON.stringify(trigger));
    editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_name] = new_trigger;
    editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_name].id = trigger_id;
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
                    <select onchange="changeTriggerComposition(`+id+`,`+ev_id+`,`+trigger_id+`)" id="type-`+id+"-"+ev_id+"-"+trigger_id+`" df-events-`+ev_id+`-triggers-`+trigger_name+`-type type="text"></select>
                </div>
                <div class="separator">
                    <label for="targetwidget-`+id+"-"+ev_id+"-"+trigger_id+`">target_widget</label>
                    <select onchange="calculateNodeConnections(`+id+`)" id="targetwidget-`+id+"-"+ev_id+"-"+trigger_id+`" df-events-`+ev_id+`-triggers-`+trigger_name+`-target_widget type="text"></select>
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

    updateHTMLFromNodeId(id);

    changeTriggerComposition(id,ev_id,trigger_id,selected_target_widget_name);

    console.log("addTrigger("+id+","+ev_id+",trigger,"+selected_target_widget_name+")");
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

    calculateNodeConnections(id);

    updateHTMLFromNodeId(id);

    console.log("deleteTrigger("+id+","+ev_id+","+trigger_id+")");
    console.log(editor);
}

//change a trigger composition based on the choice of a specified trigger
function changeTriggerComposition(id, ev_id, trigger_id, selected_target_widget_name=""){

    let trigger_name = "trigger_"+trigger_id;

    //generating new trigger composition
    Object.keys(trigger_types).forEach(tt_id =>{
        if(trigger_types[tt_id].type==document.getElementById("type-"+id+"-"+ev_id+"-"+trigger_id).value){
            editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_name] = JSON.parse(JSON.stringify(trigger_types[tt_id]));
            editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_name].id = trigger_id;
        }
    });

    //modify target_widget field
    let target_widget_trigger = document.getElementById("targetwidget-"+id+"-"+ev_id+"-"+trigger_id);
    target_widget_trigger.innerHTML = `<option value="empty"></option>`;
    Object.keys(editor.drawflow.drawflow[module].data).forEach(key =>
    {
        if(editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_name].target_widgets_typologies.includes(editor.drawflow.drawflow[module].data[key].data["widget_type"]))
            if(editor.getNodeFromId(key).name == selected_target_widget_name){
                target_widget_trigger.insertAdjacentHTML("beforeend",`<option value="`+editor.getNodeFromId(key).name+`" selected>`+editor.getNodeFromId(key).name+`</option>`);
            } else {
                target_widget_trigger.insertAdjacentHTML("beforeend",`<option value="`+editor.getNodeFromId(key).name+`">`+editor.getNodeFromId(key).name+`</option>`);
            }
    });

    editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_name].target_widget = target_widget_trigger.value;


    let other_html = document.getElementById("other-html-"+id+"-"+ev_id+"-"+trigger_id);
    other_html.innerHTML = "";
    let field;
    Object.keys(editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_name].others).forEach(key =>{
        field = editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_name].others[key].type;
        other_html.insertAdjacentHTML("beforeend",`
        <div class="separator">
            <label for="`+key+"-"+id+"-"+ev_id+"-"+trigger_id+`">`+key+`</label>
            <`+field+` id="`+key+"-"+id+"-"+ev_id+"-"+trigger_id+`" df-events-`+ev_id+`-triggers-`+trigger_name+`-others-`+key+`-value></`+field+`>
        </div>
        `);
        document.getElementById(key+"-"+id+"-"+ev_id+"-"+trigger_id).value = editor.drawflow.drawflow[module].data[id].data.events[ev_id].triggers[trigger_name].others[key].value;
    });

    calculateNodeConnections(id);

    updateHTMLFromNodeId(id);

    console.log("changeTriggerComposition("+id+","+ev_id+","+trigger_id+","+selected_target_widget_name+")");
    console.log(editor);
}

//calculate node connections based on triggers of the node
function calculateNodeConnections(id){
    Object.keys(editor.getNodeFromId(id).outputs).forEach(output_class =>{
        let connection;
        console.log(editor.getNodeFromId(id).outputs[output_class].connections);
        for(let i=0;i<editor.getNodeFromId(id).outputs[output_class].connections.length;i++){
            connection=editor.getNodeFromId(id).outputs[output_class].connections[i];
            editor.removeSingleConnection(id,connection.node,output_class,connection.output);
        }
    });
    let events_list=editor.getNodeFromId(id).data.events;
    let trigger_list;
    Object.keys(events_list).forEach(ev_id => {
        trigger_list = editor.getNodeFromId(id).data.events[ev_id].triggers;
        Object.keys(trigger_list).forEach(trigger => {
            calculateTriggerConnections(id,ev_id,trigger_list[trigger].id);
        });
    });
    console.log("calculateNodeConnections("+id+")");
    console.log(editor);
}

//calculate node connections based on a single trigger of the node
function calculateTriggerConnections(id,ev_id,trigger_id){
    let target_widget_trigger = document.getElementById("targetwidget-"+id+"-"+ev_id+"-"+trigger_id);
    if(target_widget_trigger.value!="empty"){
        let output_node = editor.getNodeFromId(id);
        let input_node;
        Object.keys(editor.drawflow.drawflow[module].data).forEach(input_id =>{
            if(editor.drawflow.drawflow[module].data[input_id].name==target_widget_trigger.value)
                input_node = editor.getNodeFromId(input_id);
        });
        let output_types = output_node.data.events[ev_id].triggers["trigger_"+trigger_id].output_types;
        Object.keys(output_node.outputs).forEach(output =>
        {
            if(output_types.includes(output_node.outputs[output].port_type.type));
                Object.keys(input_node.inputs).forEach(input =>{
                    if(output_node.outputs[output].port_type.possible_output_links.includes(input_node.inputs[input].port_type.type))
                        editor.addConnection(output_node.id, input_node.id, output, input);
                });

        });
    }

    console.log("calculateTriggerConnections("+id+","+ev_id+","+trigger_id+")");
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