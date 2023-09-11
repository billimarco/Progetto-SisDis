//USERS METHODS //TODO ALLs

function sendSURI(port_name, jsonData){
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
}

function sendListSURIandMetrics(port_name, jsonData){
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
}

function sendTimeRange(port_name, jsonData){

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
}

function sendJSON(port_name, jsonData){
    
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
}