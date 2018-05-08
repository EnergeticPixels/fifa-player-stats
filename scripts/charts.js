var getBarChartData = function(player_data) {

    var keys_list = ['def', 'dri', 'overall', 'pac', 'pas', 'phy', 'sho'];

    data = [];

    for(var i = 0; i < keys_list.length; ++i) {
        var t_key = keys_list[i];
        data.push(
            {
                'label': t_key,
                'value': player_data[t_key]
            }
        );
    }

    console.log('getBarChartData() data: ', data);
}

var chartData = [
    {
      key: "Cumulative Return",
      values: [
        {
          "label" : "A" ,
          "value" : -29.765957771107
        } ,
        {
          "label" : "B" ,
          "value" : 0
        } ,
        {
          "label" : "C" ,
          "value" : 32.807804682612
        } ,
        {
          "label" : "D" ,
          "value" : 196.45946739256
        } ,
        {
          "label" : "E" ,
          "value" : 0.19434030906893
        }
      ]
    }
];

var drawChart = function(player) {
    getBarChartData(player);
    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) { return d.label })
            .y(function(d) { return d.value })
            .staggerLabels(true)
            .showValues(true);

        d3.select('#chart svg')
            .datum(chartData)
            .transition().duration(500)
            .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
    });
}