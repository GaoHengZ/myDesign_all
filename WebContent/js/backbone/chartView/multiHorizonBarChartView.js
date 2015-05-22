/**
 * Created by Jun on 2015/3/30.
 */
define(function (require, exports, module) {

    var multiHorizonBarChartView = Backbone.View.extend({

        id: "",

        init: function () {
            //this.id = "barChart" + $("div[id^='chart']").length;
        },

        render: function (chartAreaId, xAxis_data, series_name, series_data) {
            //基于准备好的dom，初始化echarts图表
            var myChart = echarts.init(document.getElementById(chartAreaId), 'macarons');

            var temp_series = new Array();
            for (var i = 0; i < series_data.length; i++) {
                var seriesItem = {
                    name: series_name[i],
                    type: "bar",
                    stack: '总量',
                    data: series_data[i]
                }
                temp_series.push(seriesItem);
            }
            var placeHoledStyle = {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            };
            var dataStyle = {
                normal: {
                    label: {
                        show: true,
                        position: 'insideLeft',
                        formatter: '{c}%'
                    }
                }
            };
            var option = {
                title: {
                    text: '多维条形图',
                    subtext: 'From ExcelHome',
                    sublink: 'http://e.weibo.com/1341556070/AiEscco0H'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
                },
                legend: {
                    y: 55,
                    //itemGap: document.getElementById('main').offsetWidth / 8,
                    data: series_name
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                grid: {
                    y: 80,
                    y2: 30
                },
                xAxis: [
                    {
                        type: 'value',
                        position: 'top',
                        splitLine: {show: false},
                        axisLabel: {show: false}
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        splitLine: {show: false},
                        data: xAxis_data
                    }
                ],
                series: temp_series
            };


            //为echarts对象加载数据
            myChart.setOption(option);
            window.charts.push(myChart);
            //return this;
        },

        events: {
//            "click $('div[id^=\'chart\']:last')[0]": "addNew"
        },

        addNew: function () {//新增图表
            alert('new');
        }

    });

    module.exports = multiHorizonBarChartView;
});