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
    "RadarSeries" : {"widget_ports":"IN/OUT", "widget_type":"RadarSeries", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":"","click":"","legendItemClick":""}},
    "TimeTrend" : {"widget_ports":"IN/OUT", "widget_type":"TimeTrend", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "CurvedLineSeries" : {"widget_ports":"IN/OUT", "widget_type":"CurvedLineSeries", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "PieChart" : {"widget_ports":"IN/OUT", "widget_type":"PieChart", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "BarSeries" : {"widget_ports":"IN/OUT", "widget_type":"BarSeries", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "Map" : {"widget_ports":"IN/OUT", "widget_type":"Map", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "Speedometer" : {"widget_ports":"IN", "widget_type":"Speedometer", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "GaugeChart" : {"widget_ports":"IN", "widget_type":"GaugeChart", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "Knob" : {"widget_ports":"IN/OUT", "widget_type":"Knob", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "NumericKeyboard" : {"widget_ports":"IN/OUT", "widget_type":"NumericKeyboard", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "SingleContent" : {"widget_ports":"IN", "widget_type":"SingleContent", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "ExternalContent" : {"widget_ports":"IN/OUT", "widget_type":"ExternalContent", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "Table" : {"widget_ports":"IN", "widget_type":"Table", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "DeviceTable" : {"widget_ports":"IN", "widget_type":"DeviceTable", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "EventTable" : {"widget_ports":"OUT", "widget_type":"EventTable", "next_port_box": 0, "port_boxes":{}, "events":{"click":""}},
    "Button" : {"widget_ports":"OUT", "widget_type":"Button", "next_port_box": 0, "port_boxes":{}, "events":{"click":""}},
    "OnOffButton" : {"widget_ports":"IN/OUT", "widget_type":"OnOffButton", "next_port_box": 0, "port_boxes":{}, "events":{"externalCommands":""}},
    "ImpulseButton" : {"widget_ports":"OUT", "widget_type":"ImpulseButton", "next_port_box": 0, "port_boxes":{}, "events":{"click":""}}
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
    //,"color_class": "port-white"
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
                    <button onclick="addPortBox(`+id+`)" class="btn-add-port-box">add output port</button>
                </div>
                <div class="widget-body-forty">
                    <div id="ports-room-`+id+`" class="ports-room"></div>
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
    addEventsToNodes(id);

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
                <div id="code-room-`+id+`-`+ev_name+`" class="widget-body-element-code-room bottom-separator">
                    <label for="code-`+id+`-`+ev_name+`">Code</label>
                    <textarea id="code-`+id+`-`+ev_name+`" df-events-`+ev_name+` class="widget-body-element-code-box"></textarea>
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
        for(let j=0;j < port_types.length;j++)
            if(port_types[j].type==triggers[i].type)
                trigger=port_types[j];
        trigger["target_widget"] = triggers[i].targetWidget;
        addPortBox(id,trigger);
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
function addPortBox(id,port_type=port_types[0]){

    //Add a new port box to node.data.port_boxes
    let port_box_id = editor.drawflow.drawflow[module].data[id].data.next_port_box;
    let new_port_box = JSON.parse(JSON.stringify(port_box));
    new_port_box.port_type = JSON.parse(JSON.stringify(port_type));
    editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id] = new_port_box;
    editor.drawflow.drawflow[module].data[id].data.next_port_box += 1;
    addPortOutput(id,port_box_id);
    editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id].port_name = "Out_"+(editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id].associated_output_node)

    //Modify node HTML with a new port box form
    let portBoxRoom = document.getElementById("ports-room-"+id);
    portBoxRoom.insertAdjacentHTML("beforeend",`
    <div class="port-box accordion-item" id="port-box-`+id+"-"+port_box_id+`">
        <div class="accordion-header">
            <button id="port-button-`+id+"-"+port_box_id+`" class="accordion-button port-box-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse`+id+"-"+port_box_id+`" aria-expanded="true" aria-controls="collapse`+id+"-"+port_box_id+`">
                <input id="port-name-`+id+"-"+port_box_id+`" type="text" value="Out_`+(editor.drawflow.drawflow[module].data[id].data.port_boxes[port_box_id].associated_output_node)+`" df-port_boxes-`+port_box_id+`-port_name class="port-box-name" readonly></input>
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

    console.log("addPortBox("+id+",port_box)");
    console.log(editor);
}

//delete a port box from a node event
function deletePortBox(id,port_box_id){
    let portBoxRoom = document.getElementById("port-box-"+id+"-"+port_box_id);

    //Remove node HTML of a port box
    removePortOutput(id,port_box_id);

    portBoxRoom.remove();

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
            editor.drawflow.drawflow[module].data[id].data.port_boxes[iter_port_box_id].port_name = "Out_"+editor.drawflow.drawflow[module].data[id].data.port_boxes[iter_port_box_id].associated_output_node;
            document.getElementById("port-name-"+id+"-"+iter_port_box_id).value = "Out_"+editor.drawflow.drawflow[module].data[id].data.port_boxes[iter_port_box_id].associated_output_node;
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
    let connections = [];
    Object.keys(editor.getNodeFromId(id).data.port_boxes).forEach(port_box_id =>{
        let new_conn = JSON.parse(JSON.stringify(singleConn));
        let output_class = "output_"+editor.getNodeFromId(id).data.port_boxes[port_box_id].associated_output_node;
        let input_id;
        new_conn.port_name = editor.getNodeFromId(id).data.port_boxes[port_box_id].port_name;
        new_conn.output_type = editor.getNodeFromId(id).data.port_boxes[port_box_id].port_type.output_type;
        Object.keys(editor.getNodeFromId(id).outputs[output_class].connections).forEach(conn_id =>{
            input_id=editor.getNodeFromId(id).outputs[output_class].connections[conn_id].node;
            new_conn.linked_target_widgets.push(editor.getNodeFromId(input_id).name);
        });
        connections.push(new_conn);
    });
    console.log("getConnectionsTableByNodeId("+id+")");
    console.log(connections);
    return connections;
}



//USERS METHODS //TODO ALLs
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