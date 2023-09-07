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
    "RadarSeries" : {"widget_ports":"IN/OUT", "widget_type":"RadarSeries", "events":{"0":{"event_name":"externalCommands", "code":"", "next_port_box": 0, "port_boxes":{}},"1":{"event_name":"click", "code":"", "next_port_box": 0, "port_boxes":{}},"2":{"event_name":"legendItemClick", "code":"", "next_port_box": 0, "port_boxes":{}}}},
    "TimeTrend" : {"widget_ports":"IN/OUT", "widget_type":"TimeTrend", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "CurvedLineSeries" : {"widget_ports":"IN/OUT", "widget_type":"CurvedLineSeries", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "PieChart" : {"widget_ports":"IN/OUT", "widget_type":"PieChart", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "BarSeries" : {"widget_ports":"IN/OUT", "widget_type":"BarSeries", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "Map" : {"widget_ports":"IN/OUT", "widget_type":"Map", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "Speedometer" : {"widget_ports":"IN", "widget_type":"Speedometer", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "GaugeChart" : {"widget_ports":"IN", "widget_type":"GaugeChart", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "Knob" : {"widget_ports":"IN/OUT", "widget_type":"Knob", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "NumericKeyboard" : {"widget_ports":"IN/OUT", "widget_type":"NumericKeyboard", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "SingleContent" : {"widget_ports":"IN", "widget_type":"SingleContent", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "ExternalContent" : {"widget_ports":"IN/OUT", "widget_type":"ExternalContent", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "Table" : {"widget_ports":"IN", "widget_type":"Table", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "DeviceTable" : {"widget_ports":"IN", "widget_type":"DeviceTable", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "EventTable" : {"widget_ports":"OUT", "widget_type":"EventTable", "events":{"1":{"event_name":"click","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "Button" : {"widget_ports":"OUT", "widget_type":"Button", "events":{"1":{"event_name":"click","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "OnOffButton" : {"widget_ports":"IN/OUT", "widget_type":"OnOffButton", "events":{"0":{"event_name":"externalCommands","code":"", "next_port_box": 0, "port_boxes":{}}}},
    "ImpulseButton" : {"widget_ports":"OUT", "widget_type":"ImpulseButton", "events":{"1":{"event_name":"click","code":"", "next_port_box": 0, "port_boxes":{}}}}
};

var port_designs_input = {
    "External" : {"type":"External","color_class": "port_white"}
};

var port_designs_output = {
    "ListSURI" : {"type":"ListSURI","color_class": "port_red","associated_event_id": "0","associated_port_box_id":"0"},
    "DateTime_Interval" : {"type":"DateTime_Interval","color_class": "port_green","associated_event_id": "0","associated_port_box_id":"0"},
    "SURI" : {"type":"SURI","color_class": "port_blue","associated_event_id": "0","associated_port_box_id":"0"},
    "DateTime" : {"type":"DateTime","color_class": "port_yellow","associated_event_id": "0","associated_port_box_id":"0"},
    "Action" : {"type":"Action","color_class": "port_orange","associated_event_id": "0","associated_port_box_id":"0"},
    "GPS_coordinates" : {"type":"GPS_coordinates","color_class": "port_purple","associated_event_id": "0","associated_port_box_id":"0"},
    "ResetCommand" : {"type":"ResetCommand","color_class": "port_brown","associated_event_id": "0","associated_port_box_id":"0"},
    "JSON" : {"type":"JSON","color_class": "port_black","associated_event_id": "0","associated_port_box_id":"0"}
};

var connections = [];

var dashboard_connection = {"output_id": "0" , "event_id": "0", "port_box_id": "0", "input_id":"0"};

var port_box_types = [
    {"output_type": "JSON", "port_name": "", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "others": {}},
    {"output_type": "ListSURI", "port_name": "", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "others": {}},
    {"output_type": "DateTime_Interval", "port_name": "", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "others": {}},
    {"output_type": "SURI", "port_name": "", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "others": {}},
    {"output_type": "DateTime", "port_name": "", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "others": {}},
    {"output_type": "Action", "port_name": "", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "others": {}},
    {"output_type": "GPS_coordinates", "port_name": "", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "others": {}},
    {"output_type": "ResetCommand", "port_name": "", "perform_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","OUT"]), "target_widgets_typologies":takeWidgetTypeListFromPortTypes(["IN/OUT","IN"]), "others": {}}
];

// TRIAL EXAMPLE
let dashboard = [
    {"widget_type":"RadarSeries","widget_name":"w_radar_series_1","ck_editor":``},
    {"widget_type":"RadarSeries","widget_name":"w_radar_series_2","ck_editor":``},
    {"widget_type":"RadarSeries","widget_name":"w_radar_series_3","ck_editor":``},
    {"widget_type":"CurvedLineSeries","widget_name":"w_curved_line_series_4","ck_editor":``},
    {"widget_type":"SingleContent","widget_name":"w_single_content_5","ck_editor":``},
    {"widget_type":"Button","widget_name":"w_button_6","ck_editor":``}

];
importDashboard(dashboard);

/**
let ck = `function execute(){
	Var e = JSON.parse(param)
	if(e.event == "click"){
		dsfsdfds
		$('body').trigger({
			type: "showRadarSeriesFromExternalContent_undefined",
			targetWidget: "w_radar_series_3",
			eventGenerator: $(this),
			passedData: 
		});
	}else if(e.event == "legendItemClick"){
		dfsdsdsdfsdf
	}else{
		qualcosa di non detto
		$('body').trigger({
			type: "showTimeTrendFromExternalContent_undefined",
			targetWidget: "w_time_trend_2",
			eventGenerator: $(this),
			range: ,
			color1: ,
			color2: ,
			widgetTitle: ,
			field: ,
			serviceUri: 
		});
	}
}`

splitCKeditorCode(ck);
*/
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

    if(editor.getNodeFromId(output_id).data.events[output_port_design.associated_event_id].port_boxes[output_port_design.associated_port_box_id].target_widgets_typologies.includes(editor.getNodeFromId(input_id).data.widget_type)){
        addSinglePortConnection(output_id,output_port_design.associated_event_id,output_port_design.associated_port_box_id,input_id);
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

    removeSinglePortConnection(output_id,output_port_design.associated_event_id,output_port_design.associated_port_box_id,input_id);

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

//add node into our editor based on widget type //TODO to finish
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
                        <button onclick="addPortBox(`+id+","+ev_id+`)" class="btn-add-port-box">add output port</button>
                    </div>
                    <div id="ports-room-`+id+`-`+ev_id+`" class="ports-room"></div>
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

    calculateEventOutputPorts(id, ev_id);

    calculateEventOutputPortsConnections(id , ev_id);

    console.log("switchEventDisplayed("+id+")");
    console.log(editor);
}

//split code of a ck editor for finding events,triggers ecc. 
//TODO incompleted, we have to assume that "e.event" and "else" are only in certain parts of the code (otherwise it doesn't work)
function splitCKeditorCode(ck_editor){
    let arr = [];
    let splitted = {"event_name":"","code":"","port_boxes":[]};
    let event_counter = 0;
    let new_splitted = "";

    //removing function execute(){}
    ck_editor = ck_editor.trim();
    ck_editor = ck_editor.slice(ck_editor.indexOf("{")+1,ck_editor.lastIndexOf("}"));
    ck_editor = ck_editor.slice(ck_editor.indexOf(";")+1);
    ck_editor = ck_editor.trim();

    //take events codes and triggers
    while(ck_editor.indexOf("e.event")!=-1){
        new_splitted = JSON.parse(JSON.stringify(splitted));
        ck_editor = ck_editor.slice(ck_editor.indexOf("e.event"));
        ck_editor = ck_editor.slice(ck_editor.indexOf("\"")+1);

        new_splitted["event_name"] = ck_editor.slice(0,ck_editor.indexOf("\""));

        ck_editor = ck_editor.slice(ck_editor.indexOf("{")+1);

        takeEventCodeAndTriggers();

        arr.push(new_splitted);
        event_counter++;
        ck_editor = ck_editor.slice(ck_editor.indexOf("else"));
    }

    //take externalCommands codes and triggers
    new_splitted = JSON.parse(JSON.stringify(splitted));
    new_splitted["event_name"] = "externalCommands";

    if(event_counter != 0){
        ck_editor = ck_editor.slice(ck_editor.indexOf("{")+1);
    }

    takeEventCodeAndTriggers();
    arr.push(new_splitted);
    event_counter++;
    

    //Internal function for take code and triggers code //TODO
    function takeEventCodeAndTriggers(){
        if(ck_editor.indexOf("$('body').trigger") > ck_editor.indexOf("else") && ck_editor.indexOf("else")!=-1){
            new_splitted["code"] = ck_editor.slice(0,ck_editor.indexOf("else"));
            new_splitted["code"] = new_splitted["code"].slice(0,new_splitted["code"].lastIndexOf("}"));
        } else {
            new_splitted["code"] = ck_editor.slice(0,ck_editor.indexOf("$('body').trigger"));

            ck_editor = ck_editor.slice(ck_editor.indexOf("$('body').trigger"));

            let trigger_code = ck_editor.slice(ck_editor.indexOf("$('body').trigger"),ck_editor.indexOf("else"));
            let trigger, trigger_number = 0;
            while(trigger_code.indexOf("$('body').trigger")!=-1){
                new_splitted.triggers[trigger_number] = {};

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
                    new_splitted.triggers[trigger_number][field] = value;
                }

                //take next trigger
                trigger_code = trigger_code.slice(1);
                trigger_code = trigger_code.slice(trigger_code.indexOf("$('body').trigger"));
                trigger_number++;
            }
        }
    }


    console.log("splitCKeditorCode(ck_editor)");
    console.log(arr);

    return arr;
}

//add existing trigger to a node event finded into a splitted code//TODO
function addExistingTriggersToNode(id,triggers){
    let trigger;
    for(let i=0;i< Object.keys(triggers).length;i++){
        for(let j=0;j < port_box_types.length;j++)
            if(port_box_types[j].type==triggers[i].type)
                trigger=port_box_types[j];
        trigger["target_widget"] = triggers[i].targetWidget;
        addPortBox(id,ev_id,trigger);
    }

    console.log("addExistingTriggersToNode("+id+",triggers)");
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
            tab_counter--;
        }
        rebuilded += "\t".repeat(tab_counter)+"}\n";
    }else{
        if(node.data.events[0] !== undefined){
            formatCode(0);
        } 
    }
        
    rebuilded += "}";

    function formatCode(ev_id){
        let code_strings = [];
        code_strings = node.data.events[ev_id].code.split("\n");
        for (let i=0 ; i < code_strings.length; i++){
            if(code_strings[i] == ""){
                //TODO for functions
            }else{
                rebuilded += "\t".repeat(tab_counter) + code_strings[i]+"\n";
            }
        };
    }

    console.log("rebuildCKeditorCode("+id+")");
    console.log(rebuilded);
    return rebuilded;
}


//PORTBOX METHODS


//add a port box to a node event
function addPortBox(id,ev_id,port_box=port_box_types[0]){

    //Add a new port box to node.data.port_boxes
    let port_box_id = editor.drawflow.drawflow[module].data[id].data.events[ev_id].next_port_box;
    let new_port_box = JSON.parse(JSON.stringify(port_box));
    editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes[port_box_id] = new_port_box;
    editor.drawflow.drawflow[module].data[id].data.events[ev_id].next_port_box += 1;


    //Modify node HTML with a new port box form
    let portBoxRoom = document.getElementById("ports-room-"+id+"-"+ev_id);
    portBoxRoom.insertAdjacentHTML("beforeend",`
    <div class="port-box accordion-item" id="port-box-`+id+"-"+ev_id+"-"+port_box_id+`">
        <div class="accordion-header">
            <button class="accordion-button port-box-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse`+id+"-"+ev_id+"-"+port_box_id+`" aria-expanded="true" aria-controls="collapse`+id+"-"+ev_id+"-"+port_box_id+`">
                <input id="port-`+id+"-"+ev_id+"-"+port_box_id+`" type="text" value="Out_`+(Object.keys(editor.getNodeFromId(id).outputs).length+1)+`" df-events-`+ev_id+`-port_boxes-`+port_box_id+`-port_name class="port-box-name" readonly></input>
            </button>
        </div>
        <div id="collapse`+id+"-"+ev_id+"-"+port_box_id+`" class="accordion-collapse collapse show" data-bs-parent="#ports-room-`+id+`">
            <div class="accordion-body">
                <div class="separator">
                    <label for="output-type-`+id+"-"+ev_id+"-"+port_box_id+`">OutputType</label>
                    <select onchange="changePortBoxComposition(`+id+`,`+ev_id+`,`+port_box_id+`)" id="output-type-`+id+"-"+ev_id+"-"+port_box_id+`" df-events-`+ev_id+`-port_boxes-`+port_box_id+`-output_type type="text"></select>
                </div>
                <button onclick="deletePortBox(`+id+`,`+ev_id+`,`+port_box_id+`)" class="btn-delete-port-box">delete</button>
            </div>
        </div>
    </div>
    `);

    //take port box output type list based on widget type
    let output_type_select = document.getElementById("output-type-"+id+"-"+ev_id+"-"+port_box_id);
    for(let i=0; i< port_box_types.length;i++){
        if(port_box_types[i].perform_widgets_typologies.includes(editor.getNodeFromId(id).data.widget_type))
            if(port_box_types[i].output_type == port_box.output_type){
                output_type_select.insertAdjacentHTML("beforeend",`<option value="`+port_box_types[i].output_type+`" selected>`+port_box_types[i].output_type+`</option>`);
            } else {
                output_type_select.insertAdjacentHTML("beforeend",`<option value="`+port_box_types[i].output_type+`">`+port_box_types[i].output_type+`</option>`);
            }
    }

    addOutputPort(id,ev_id,port_box_id);

    updateHTMLFromNodeId(id);

    changePortBoxComposition(id,ev_id,port_box_id);

    console.log("addPortBox("+id+","+ev_id+",port_box)");
    console.log(editor);
}

//delete a port box from a node event
function deletePortBox(id,ev_id,port_box_id){
    let portBoxRoom = document.getElementById("port-box-"+id+"-"+ev_id+"-"+port_box_id);
    let node = editor.getNodeFromId(id);

    //Delete a port box from node.data.port_boxes
    delete node.data.events[ev_id].port_boxes[port_box_id];
    editor.updateNodeDataFromId(id,node.data);

    //Remove node HTML of a port box
    portBoxRoom.remove();

    removeOutputPort(id,ev_id,port_box_id);

    Object.keys(editor.getNodeFromId(id).data.events[ev_id].port_boxes).forEach(iter_port_box_id => {
        document.getElementById("port-"+id+"-"+ev_id+"-"+iter_port_box_id).value = editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes[iter_port_box_id].port_name;
    });

    updateHTMLFromNodeId(id);

    console.log("deletePortBox("+id+","+ev_id+","+port_box_id+")");
    console.log(editor);
}

//change a port box composition based on the choice of a specified port box
function changePortBoxComposition(id, ev_id, port_box_id){
    //generating new port box composition
    Object.keys(port_box_types).forEach(pbt_id =>{
        if(port_box_types[pbt_id].output_type==document.getElementById("output-type-"+id+"-"+ev_id+"-"+port_box_id).value){
            editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes[port_box_id].output_type = document.getElementById("output-type-"+id+"-"+ev_id+"-"+port_box_id).value;
        }
    });

    changeOutputPort(id,ev_id,port_box_id);

    updateHTMLFromNodeId(id);

    console.log("changePortBoxComposition("+id+","+ev_id+","+port_box_id+")");
    console.log(editor);
}


//OUTPUT PORTS METHODS


//calculate event output ports every time a node change its event
function calculateEventOutputPorts(id, ev_id){
    let output_counter, save_conns = [], changed_ev_id, changed_port_box_id;

    for(output_counter=Object.keys(editor.getNodeFromId(id).outputs).length; output_counter > 0; output_counter--){
        //saving connections from delete
        changed_ev_id = editor.getNodeFromId(id).outputs["output_"+output_counter].port_design.associated_event_id;
        changed_port_box_id = editor.getNodeFromId(id).outputs["output_"+output_counter].port_design.associated_port_box_id;
        for(let i=0;i < connections.length; i++){
            if(connections[i].output_id == id && connections[i].event_id == changed_ev_id && connections[i].port_box_id == changed_port_box_id){
                save_conns.push(JSON.parse(JSON.stringify(connections[i])));
            }
        }

        //removing output port
        editor.removeNodeOutput(id, "output_"+output_counter);
    }

    //re-insert deleted connections for the next switch event
    connections = connections.concat(save_conns);

    //adding new output ports
    Object.keys(editor.getNodeFromId(id).data.events[ev_id].port_boxes).forEach(port_box_id =>{
        addOutputPort(id,ev_id,port_box_id);
    });

    console.log("changeEventOutputPorts("+id+","+ev_id+")");
    console.log(editor);
}

//assign a port type to a node port
function assignPort(node_id, type, port_id, port_design_type, associated_event_id="0", associated_port_box_id="0"){
    if(type==="IN"){
        editor.drawflow.drawflow[module].data[node_id].inputs["input_"+port_id].port_design = JSON.parse(JSON.stringify(port_designs_input[port_design_type]));
        document.getElementById("node-"+node_id).childNodes[0].childNodes[(port_id-1)].classList.add(port_designs_input[port_design_type].color_class);
    } else if (type==="OUT"){
        editor.drawflow.drawflow[module].data[node_id].outputs["output_"+port_id].port_design = JSON.parse(JSON.stringify(port_designs_output[port_design_type]));
        editor.drawflow.drawflow[module].data[node_id].outputs["output_"+port_id].port_design.associated_event_id = associated_event_id+"";
        editor.drawflow.drawflow[module].data[node_id].outputs["output_"+port_id].port_design.associated_port_box_id = associated_port_box_id+"";
        document.getElementById("node-"+node_id).childNodes[2].childNodes[(port_id-1)].classList.add(port_designs_output[port_design_type].color_class);
    }
}

//add an output port based on output_type of a certain port box
function addOutputPort(id,ev_id,port_box_id){
    let output_number = Object.keys(editor.getNodeFromId(id).outputs).length+1;
    let output_type = editor.getNodeFromId(id).data.events[ev_id].port_boxes[port_box_id].output_type;
    
    editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes[port_box_id].port_name = "Out_"+output_number;
    
    editor.addNodeOutput(id);
    assignPort(id, "OUT", output_number, output_type, ev_id, port_box_id);

    console.log("addOutputPort("+id+","+ev_id+","+port_box_id+")");
    console.log(editor);
}

//change an output port based on output_type of a certain port box
function changeOutputPort(id,ev_id,port_box_id){
    let output_type = editor.getNodeFromId(id).data.events[ev_id].port_boxes[port_box_id].output_type;
    Object.keys(editor.getNodeFromId(id).outputs).forEach(output_class =>{
        if(editor.getNodeFromId(id).outputs[output_class].port_design.associated_event_id == ev_id && editor.getNodeFromId(id).outputs[output_class].port_design.associated_port_box_id == port_box_id){
            for(let i=connections.length-1; i>=0; i--){
                if(connections[i].output_id==id && connections[i].event_id==ev_id && connections[i].port_box_id==port_box_id){
                    editor.removeSingleConnection(id,connections[i].input_id,output_class,"input_1");
                }
            }
            port_id = output_class.slice(7);
            document.getElementById("node-"+id).childNodes[2].childNodes[(port_id-1)].classList.remove(editor.getNodeFromId(id).outputs[output_class].port_design.color_class);
            assignPort(id, "OUT", port_id, output_type, ev_id, port_box_id);
        }
    });

    console.log("changeOutputPort("+id+","+ev_id+","+port_box_id+")");
    console.log(editor);
}

//remove an output port linked with a certain port box
function removeOutputPort(id,ev_id,port_box_id){

    removeOutputPortConnections(id,ev_id,port_box_id);

    for(i=Object.keys(editor.getNodeFromId(id).outputs).length; i>0 ;i--){
        if(editor.getNodeFromId(id).outputs["output_"+i].port_design.associated_event_id == ev_id && editor.getNodeFromId(id).outputs["output_"+i].port_design.associated_port_box_id == port_box_id){
            editor.removeNodeOutput(id, "output_"+i);
            calculateEventOutputPorts(id,ev_id);
            calculateEventOutputPortsConnections(id , ev_id);
            break;
        }
    }


    console.log("removeOutputPort("+id+","+ev_id+","+port_box_id+")");
    console.log(editor);
}


//CONNECTIONS METHODS


//calculate node connections based on port_boxes of the node event
function calculateEventOutputPortsConnections(id,ev_id){
    Object.keys(editor.getNodeFromId(id).outputs).forEach(output_class =>{
        if(editor.getNodeFromId(id).outputs[output_class].port_design.associated_event_id==ev_id){
            for(let i=0;i<connections.length;i++){
                if(connections[i].output_id==id && connections[i].event_id==ev_id && connections[i].port_box_id==editor.getNodeFromId(id).outputs[output_class].port_design.associated_port_box_id){
                    editor.addConnection(connections[i].output_id, connections[i].input_id, output_class, "input_1")
                }
            }
        }
    });

    console.log("calculateEventOutputPortsConnections("+id+","+ev_id+")");
    console.log(editor);
}

//add a single port box connection to connections
function addSinglePortConnection(output_id,ev_id,port_box_id,input_id){
    let new_connection=JSON.parse(JSON.stringify(dashboard_connection));
    let check_presence = false;
    new_connection.output_id = output_id;
    new_connection.event_id = ev_id;
    new_connection.port_box_id = port_box_id;
    new_connection.input_id = input_id;

    for(let i=0;i<connections.length;i++){
        if(connections[i].output_id==output_id && connections[i].event_id==ev_id && connections[i].port_box_id==port_box_id && connections[i].input_id==input_id){
            check_presence = true;
        }
    }

    if(!check_presence){
        connections.push(new_connection);
    }

    console.log("addSinglePortsConnection("+output_id+","+ev_id+","+port_box_id+","+input_id+")");
    console.log(connections);
}

//remove a single port box connection from connections
function removeSinglePortConnection(output_id,ev_id,port_box_id,input_id){
    for(let i=0;i<connections.length;i++){
        if(connections[i].output_id==output_id && connections[i].event_id==ev_id && connections[i].trigger_id==port_box_id && connections[i].input_id==input_id){
            connections.splice(i,1);
        }
    }

    console.log("removeSinglePortsConnection("+output_id+","+ev_id+","+port_box_id+","+input_id+")");
    console.log(connections);
}

//remove all connections of a port box from connections
function removeOutputPortConnections(output_id,ev_id,port_box_id){
    Object.keys(editor.drawflow.drawflow[module].data).forEach(input_id => {
        removeSinglePortConnection(output_id,ev_id,port_box_id,input_id);
    });

    console.log("removeOutputPortsConnections("+output_id+","+ev_id+","+port_box_id+")");
    console.log(connections);
}


//USERS METHODS
//methods formalizzation : first insert the code, next check validity and at last for every connection insert triggers
//possible problems : create code with the same variables name. This can create conflicts if we want to use more than one in an event
//possible solutions : distinguish every variables create of each events using `+port_name+`_var_name

function sendSURI(port_name, json_var_name, node_id, ev_id){
    let code="",check_validity=false,finded_port_box_id;

    code += `
        var `+port_name+`_data = [];
        `+port_name+`_data[0] = {};
        var `+port_name+`_coordsAndType = [];
        `+port_name+`_coordsAndType[0] = {};
        var `+port_name+`_serviceUri = "";
        if (`+json_var_name+`.value.metricName.includes(":")) {
            `+port_name+`_serviceUri = "http://www.disit.org/km4city/resource/iot/" + `+json_var_name+`.value.metricName.split(":")[1] + "/" + `+json_var_name+`.value.metricName.split(":")[0] + "/" + `+json_var_name+`.value.metricName.split(":")[2];
            `+port_name+`_data[0].metricId = "https://www.disit.org/superservicemap//api/v1/?serviceUri=" + `+port_name+`_serviceUri + "&format=json";
            `+port_name+`_data[0].metricHighLevelType = "IoT Device Variable";
            `+port_name+`_coordsAndType[0].query = "https://www.disit.org/superservicemap//api/v1/?serviceUri=" + `+port_name+`_serviceUri + "&format=json";
            `+port_name+`_coordsAndType[0].queryType = "Default";
        } else {
            `+port_name+`_serviceUri = `+json_var_name+`.value.metricId;
            `+port_name+`_data[0].metricId = `+port_name+`_serviceUri;
            `+port_name+`_data[0].metricHighLevelType = "MyKPI";
            `+port_name+`_coordsAndType[0].query = "datamanager/api/v1/poidata/" + `+port_name+`_serviceUri;
			`+port_name+`_coordsAndType[0].queryType = "MyPOI";
        }
        `+port_name+`_data[0].metricName = `+json_var_name+`.value.metricName;
        `+port_name+`_data[0].metricType = `+json_var_name+`.value.metricType;
        `+port_name+`_data[0].smField = `+json_var_name+`.value.metricType;
        `+port_name+`_data[0].serviceUri = `+port_name+`_serviceUri;

        `+port_name+`_coordsAndType[0].desc = `+port_name+`_data[0].metricName;
        `+port_name+`_coordsAndType[0].color1 = "#ebb113";
        `+port_name+`_coordsAndType[0].color2 = "#eb8a13";
    `
    
    //Find and check validity of the specific port of an event of a widget
    Object.keys(editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes).forEach(port_box_id => {
        if(editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes[port_box_id].port_name == port_name){
            if(editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes[port_box_id].output_type == "SURI"){
                finded_port_box_id = port_box_id;
                check_validity = true;
            }
        }       
    });

    if(check_validity){
        let widget_type,widget_name;
        for(let i=0; i<connections.length;i++){
            if(connections[i].output_id == node_id && connections[i].event_id == ev_id && connections[i].port_box_id == finded_port_box_id){
                
                widget_type = editor.getNodeFromId(connections[i].input_id).data.widget_type;
                widget_name = editor.getNodeFromId(connections[i].input_id).name;
                
                switch (widget_type) {
                    case 'RadarSeries':
                        code +=`

                        `;
                        break;
            
                    case 'TimeTrend':
                        code +=`
                            
                        `;
                        break;
            
                    case 'CurvedLineSeries':
                        code +=`
                            $('body').trigger({
                                type: "showCurvedLinesFromExternalContent_" + "`+widget_name+`",	
                                targetWidget: "`+widget_name+`",
                                field: `+port_name+`_data[0].smField,
                                passedData: `+port_name+`_data
                            });	        
                        `;
                        break;
            
                    case 'PieChart':
                        code +=`
                            
                        `;
                        break;
            
                    case 'BarSeries':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Map':
                        code +=`
                            for (let n=0; n<`+port_name+`_coordsAndType.length; n++) {
                                $('body').trigger({
                                    type: "addSelectorPin",
                                    target: "`+widget_name+`",
                                    passedData: `+port_name+`_coordsAndType[n]
                                });
                            }
                        `;
                        break;
            
                    case 'Speedometer':
                        code +=`
                            
                        `;
                        break;
            
                    case 'GaugeChart':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Knob':
                        code +=`
                            
                        `;
                        break;
            
                    case 'NumericKeyboard':
                        code +=`
                            
                        `;
                        break;
            
                    case 'SingleContent':
                        code +=`
                            
                        `;
                        break;
            
                    case 'ExternalContent':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Table':
                        code +=`
                            
                        `;
                        break;
            
                    case 'DeviceTable':
                        code +=`
                            
                        `;
                        break;
            
                    case 'EventTable':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Button':
                        code +=`
                            
                        `;
                        break;
            
                    case 'OnOffButton':
                        code +=`
                            
                        `;
                        break;
            
                    case 'ImpulseButton':
                        code +=`
                            
                        `;
                        break;
            
                    default:
                }

            }
        }
        return code;
    }
    return "";
}

function sendListSURIandMetrics(port_name, json_var_name, node_id, ev_id){
    let code="",check_validity=false,finded_port_box_id;

    code += `
        var `+port_name+`_coordsAndType = [];
        var `+port_name+`_data = [];
        var `+port_name+`_h = 0;
        var `+port_name+`_i = 0;
        var `+port_name+`_serviceUri = "";
        for (var l in `+json_var_name+`.layers) {
            if (!`+json_var_name+`.layers[l].visible || (`+json_var_name+`.layers[l].visible == true)) {
                `+port_name+`_coordsAndType[i] = {};
                `+port_name+`_coordsAndType[i].desc = `+json_var_name+`.layers[l].name;
                `+port_name+`_coordsAndType[i].color1 = "#ebb113";
                `+port_name+`_coordsAndType[i].color2 = "#eb8a13";
                if (!`+json_var_name+`.metrics || `+json_var_name+`.metrics.length<1) {
                    if (`+json_var_name+`.layers[l].realtimeAttributes) {
                        `+json_var_name+`.metrics = Object.keys(`+json_var_name+`.layers[l].realtimeAttributes);
                    }
                    if (`+json_var_name+`.layers[l].kpidata) {
						`+json_var_name+`.metrics = `+json_var_name+`.layers[l].name;
				    }
                }
                for (var m in `+json_var_name+`.metrics) {
                    `+port_name+`_data[h] = {};
                    if (`+json_var_name+`.layers[l].name.includes(":")) {
                        `+port_name+`_serviceUri = "http://www.disit.org/km4city/resource/iot/" + `+json_var_name+`.layers[l].name.split(":")[1] + "/" + `+json_var_name+`.layers[l].name.split(":")[0] + "/" + `+json_var_name+`.layers[l].name.split(":")[2];
                        `+port_name+`_data[h].metricId = "https://www.disit.org/superservicemap/api/v1/?serviceUri=" + `+port_name+`_serviceUri + "&format=json";
                        `+port_name+`_data[h].metricHighLevelType = "IoT Device Variable";
                        `+port_name+`_coordsAndType[i].query = "https://www.disit.org/superservicemap//api/v1/?serviceUri=" + `+port_name+`_serviceUri + "&format=json";
                        `+port_name+`_coordsAndType[i].queryType = "Default";
                    } else if ((`+json_var_name+`.layers[l].brokerName && `+json_var_name+`.layers[l].brokerName != "") && (`+json_var_name+`.layers[l].organization && `+json_var_name+`.layers[l].organization != "")) {
                        `+port_name+`_serviceUri = "http://www.disit.org/km4city/resource/iot/"+ `+json_var_name+`.layers[l].brokerName + "/" + `+json_var_name+`.layers[l].organization + "/" + `+json_var_name+`.layers[l].name;
                        `+port_name+`_data[h].metricId = "https://www.disit.org/superservicemap/api/v1/?serviceUri=" + `+port_name+`_serviceUri + "&format=json";
                        `+port_name+`_data[h].metricHighLevelType = "IoT Device Variable";
                        `+port_name+`_coordsAndType[i].query = "https://www.disit.org/superservicemap//api/v1/?serviceUri=" + `+port_name+`_serviceUri + "&format=json";
                        `+port_name+`_coordsAndType[i].queryType = "Default";
                    } else if (`+json_var_name+`.layers[l].serviceUri && `+json_var_name+`.layers[l].serviceUri != "") {
                        `+port_name+`_serviceUri = `+json_var_name+`.layers[l].serviceUri;
                        `+port_name+`_data[h].metricId = "https://www.disit.org/superservicemap/api/v1/?serviceUri=" + `+port_name+`_serviceUri + "&format=json";
                        `+port_name+`_data[h].metricHighLevelType = "IoT Device Variable";
                        `+port_name+`_coordsAndType[i].query = "https://www.disit.org/superservicemap//api/v1/?serviceUri=" + `+port_name+`_serviceUri + "&format=json";
                        `+port_name+`_coordsAndType[i].queryType = "Default";
                    } else {
                        if (`+json_var_name+`.layers[l].name.includes("_")) {
                            `+port_name+`_serviceUri = "datamanager/api/v1/poidata/" + `+json_var_name+`.layers[l].name.split("_")[1];
                        } else {
                            `+port_name+`_serviceUri = "datamanager/api/v1/poidata/" + `+json_var_name+`.layers[l].name;
                        }
                        `+port_name+`_data[h].metricId = `+port_name+`_serviceUri;
                        `+port_name+`_data[h].metricHighLevelType = "MyKPI";
                        `+port_name+`_coordsAndType[i].query = `+port_name+`_serviceUri;
                        `+port_name+`_coordsAndType[i].queryType = "MyPOI";
                    }
                    `+port_name+`_data[h].metricName = `+json_var_name+`.layers[l].name;
                    `+port_name+`_data[h].metricType = `+json_var_name+`.metrics[m];
                    `+port_name+`_data[h].smField = `+json_var_name+`.metrics[m];
                    `+port_name+`_data[h].serviceUri = `+port_name+`_serviceUri;
                    
                    `+port_name+`_h++;
                }
                `+port_name+`_i++;
            }
        }
    `

    
    //Find and check validity of the specific port of an event of a widget
    Object.keys(editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes).forEach(port_box_id => {
        if(editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes[port_box_id].port_name == port_name){
            if(editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes[port_box_id].output_type == "ListSURI"){
                finded_port_box_id = port_box_id;
                check_validity = true;
            }
        }       
    });

    if(check_validity){
        let widget_type,widget_name;
        for(let i=0; i<connections.length;i++){
            if(connections[i].output_id == node_id && connections[i].event_id == ev_id && connections[i].port_box_id == finded_port_box_id){
                
                widget_type = editor.getNodeFromId(connections[i].input_id).data.widget_type;
                widget_name = editor.getNodeFromId(connections[i].input_id).name;
                
                switch (widget_type) {
                    case 'RadarSeries':
                        code +=`

                        `;
                        break;
            
                    case 'TimeTrend':
                        code +=`
                            
                        `;
                        break;
            
                    case 'CurvedLineSeries':
                        code +=`
                            $('body').trigger({
                                type: "showCurvedLinesFromExternalContent_" + "`+widget_name+`",	
                                targetWidget: "`+widget_name+`",
                                passedData: `+port_name+`_data
                            });
                        `;
                        break;
            
                    case 'PieChart':
                        code +=`
                            
                        `;
                        break;
            
                    case 'BarSeries':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Map':
                        code +=`
                            for (let n=0; n<`+port_name+`_coordsAndType.length; n++) {
                                $('body').trigger({
                                    type: "addSelectorPin",
                                    target: "`+widget_name+`",
                                    passedData: `+port_name+`_coordsAndType[n]
                                });
                            }
                        `;
                        break;
            
                    case 'Speedometer':
                        code +=`
                            
                        `;
                        break;
            
                    case 'GaugeChart':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Knob':
                        code +=`
                            
                        `;
                        break;
            
                    case 'NumericKeyboard':
                        code +=`
                            
                        `;
                        break;
            
                    case 'SingleContent':
                        code +=`
                            
                        `;
                        break;
            
                    case 'ExternalContent':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Table':
                        code +=`
                            
                        `;
                        break;
            
                    case 'DeviceTable':
                        code +=`
                            
                        `;
                        break;
            
                    case 'EventTable':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Button':
                        code +=`
                            
                        `;
                        break;
            
                    case 'OnOffButton':
                        code +=`
                            
                        `;
                        break;
            
                    case 'ImpulseButton':
                        code +=`
                            
                        `;
                        break;
            
                    default:
                }

            }
        }
        return code;
    }
    return "";
}

function sendTimeRange(port_name, t1, t2, node_id, ev_id){
    let code="",check_validity=false,finded_port_box_id;

    code += `
        var `+port_name+`_minT = `+t1+`;
        var `+port_name+`_maxT = `+t2+`;
        var `+port_name+`_dt1 = new Date(`+port_name+`_minT);
        var `+port_name+`_dt1_iso = `+port_name+`_dt1.toISOString().split(".")[0];
        var `+port_name+`_dt2 = new Date(`+port_name+`_maxT);
        var `+port_name+`_dt2_iso = `+port_name+`_dt2.toISOString().split(".")[0];
    `
    
    //Find and check validity of the specific port of an event of a widget
    Object.keys(editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes).forEach(port_box_id => {
        if(editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes[port_box_id].port_name == port_name){
            if(editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes[port_box_id].output_type == "DateTime_Interval"){
                finded_port_box_id = port_box_id;
                check_validity = true;
            }
        }       
    });

    if(check_validity){
        let widget_type,widget_name;
        for(let i=0; i<connections.length;i++){
            if(connections[i].output_id == node_id && connections[i].event_id == ev_id && connections[i].port_box_id == finded_port_box_id){
                
                widget_type = editor.getNodeFromId(connections[i].input_id).data.widget_type;
                widget_name = editor.getNodeFromId(connections[i].input_id).name;
                
                switch (widget_type) {
                    case 'RadarSeries':
                        code +=`

                        `;
                        break;
            
                    case 'TimeTrend':
                        code +=`
                            
                        `;
                        break;
            
                    case 'CurvedLineSeries':
                        code +=`
                            $('body').trigger({
                                type: "showCurvedLinesFromExternalContent_" + "`+widget_name+`",	
                                targetWidget: "`+widget_name+`",
                                t1: `+port_name+`_dt1_iso,
                                t2: `+port_name+`_dt2_iso
                            });	
                        `;
                        break;
            
                    case 'PieChart':
                        code +=`
                            
                        `;
                        break;
            
                    case 'BarSeries':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Map':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Speedometer':
                        code +=`
                            
                        `;
                        break;
            
                    case 'GaugeChart':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Knob':
                        code +=`
                            
                        `;
                        break;
            
                    case 'NumericKeyboard':
                        code +=`
                            
                        `;
                        break;
            
                    case 'SingleContent':
                        code +=`
                            
                        `;
                        break;
            
                    case 'ExternalContent':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Table':
                        code +=`
                            
                        `;
                        break;
            
                    case 'DeviceTable':
                        code +=`
                            
                        `;
                        break;
            
                    case 'EventTable':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Button':
                        code +=`
                            
                        `;
                        break;
            
                    case 'OnOffButton':
                        code +=`
                            
                        `;
                        break;
            
                    case 'ImpulseButton':
                        code +=`
                            
                        `;
                        break;
            
                    default:
                }

            }
        }
        return code;
    }
    return "";
}

function sendJSON(port_name, json_var_name, node_id, ev_id){
    let code="",check_validity=false,finded_port_box_id;
    
    //Find and check validity of the specific port of an event of a widget
    Object.keys(editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes).forEach(port_box_id => {
        if(editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes[port_box_id].port_name == port_name){
            if(editor.drawflow.drawflow[module].data[id].data.events[ev_id].port_boxes[port_box_id].output_type == "JSON"){
                finded_port_box_id = port_box_id;
                check_validity = true;
            }
        }       
    });

    if(check_validity){
        let widget_type,widget_name;
        for(let i=0; i<connections.length;i++){
            if(connections[i].output_id == node_id && connections[i].event_id == ev_id && connections[i].port_box_id == finded_port_box_id){
                
                widget_type = editor.getNodeFromId(connections[i].input_id).data.widget_type;
                widget_name = editor.getNodeFromId(connections[i].input_id).name;
                
                switch (widget_type) {
                    case 'RadarSeries':
                        code +=`

                        `;
                        break;
            
                    case 'TimeTrend':
                        code +=`
                            
                        `;
                        break;
            
                    case 'CurvedLineSeries':
                        code +=`
                            $('body').trigger({
                                type: "showCurvedLinesFromExternalContent_" + "`+widget_name+`",	
                                targetWidget: "`+widget_name+`",
                                passedData: `+json_var_name+`
                            });	
                        `;
                        break;
            
                    case 'PieChart':
                        code +=`
                            
                        `;
                        break;
            
                    case 'BarSeries':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Map':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Speedometer':
                        code +=`
                            
                        `;
                        break;
            
                    case 'GaugeChart':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Knob':
                        code +=`
                            
                        `;
                        break;
            
                    case 'NumericKeyboard':
                        code +=`
                            
                        `;
                        break;
            
                    case 'SingleContent':
                        code +=`
                            
                        `;
                        break;
            
                    case 'ExternalContent':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Table':
                        code +=`
                            
                        `;
                        break;
            
                    case 'DeviceTable':
                        code +=`
                            
                        `;
                        break;
            
                    case 'EventTable':
                        code +=`
                            
                        `;
                        break;
            
                    case 'Button':
                        code +=`
                            
                        `;
                        break;
            
                    case 'OnOffButton':
                        code +=`
                            
                        `;
                        break;
            
                    case 'ImpulseButton':
                        code +=`
                            
                        `;
                        break;
            
                    default:
                }

            }
        }
        return code;
    }
    return "";
}