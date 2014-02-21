$(function(){
  $("#request").on("submit", function(e){
    $.ajax({
      url: 'php_api.php',
      type: 'post',
      data: $('#request').serialize(),
      dataType: 'json',
      success: function(response) {
            var data = response.split(",")
            data_1 = parseFloat(data[0]);
            data_2 = parseFloat(data[1]);
            data1 = [
              {category: "Data 1", value: data_1},
              {category: "Data 2", value: data_2}
            ];
            data2 = [
                {category: "Bar Chart", data1: data_1, data2: data_2}
            ];
            $(function(){
              $("#data1").dxPieChart({dataSource: data1,palette: ['#75A319', '#BFBF9F'], title: 'Data #1', legend: {horizontalAlignment: 'center',verticalAlignment: 'bottom'}, series: {argumentField: 'category', valueField: 'value', label: {visible: true, customizeText: function(value){return value.percentText}, connector:{visible:true}}}});
            });
            $(function(){
              $("#data2").dxChart({dataSource: data2,palette: ['#75A319', '#BFBF9F'],commonSeriesSettings: {argumentField: "category",type: "bar",hoverMode: "allArgumentPoints",selectionMode: "allArgumentPoints",label: {visible: true,format: "currency",precision: 2}},series: [{ valueField: "Before", name: "After" },{ valueField: "data2", name: "data2" }],valueAxis: {label:{format: 'currency',precision:2}},title: "eCPM",legend: {verticalAlignment: "bottom",horizontalAlignment: "center"},pointClick: function (point) {this.select();}});
            });
            document.getElementById("first data").innerHTML = data_1;
            document.getElementById("second data").innerHTML = data_2;
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
            }
    });
    e.preventDefault();
});
});
