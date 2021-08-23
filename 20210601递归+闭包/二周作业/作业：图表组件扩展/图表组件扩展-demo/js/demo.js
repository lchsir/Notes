window.onload = function(){
      // 指定图表的配置项和数据
      var option = {
            color:['#749f83'],  //系列柱的颜色
            //backgroundColor:'#6e7074',
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine:{
                    lineStyle:{
                        color:'#fff'  //X轴线条颜色
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'#fff'  //Y轴线条颜色
                    }
                }
            },
            grid:{  //位置
                left:'2%',
                right:'2%',
                top:'10%',
                bottom:'5%',
                containLabel:true
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'bar'
            }]
        };
        // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts1'));
        // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);


      //折线图
      // 指定图表的配置项和数据
      var option2 = {
        //color:['#749f83'],  //系列柱的颜色
        //backgroundColor:'#6e7074',
        xAxis: {
            type: 'category',
            data: ['1', '2', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine:{
                lineStyle:{
                    color:'#fff'  //X轴线条颜色
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'#fff'  //Y轴线条颜色
                }
            }
        },
        grid:{  //位置
            left:'2%',
            right:'2%',
            top:'10%',
            bottom:'5%',
            containLabel:true
        },
        series: [{
            data: [20, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };
    // 基于准备好的dom，初始化echarts实例
  var myChart2 = echarts.init(document.getElementById('echarts2'));
    // 使用刚指定的配置项和数据显示图表。
  myChart2.setOption(option2);

}