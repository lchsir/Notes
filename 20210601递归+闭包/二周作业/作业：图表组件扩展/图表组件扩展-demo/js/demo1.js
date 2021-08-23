var common = {
    type:'bar',
    xAxis:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    option:function(obj){
        return {
            xAxis: {
                type: 'category',
                data: obj.xAxis  || this.xAxis,
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
                data: obj.data,
                type: obj.type ||this.type
            }]
        }
    },
    init:function(dom,obj){
         // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(dom);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.option(obj));
    }
};
window.onload = function(){
    //三个参数  DOM  类型  数据
    var obj = {
        type:'line',
        data:[820, 932, 901, 934, 1290, 1330, 1320],
        xAxis:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    };
      common.init(document.getElementById('echarts1'),obj);
      common.init(
          document.getElementById('echarts2'),
          {
            type:'bar',
            data:[20, 32, 01, 34, 290, 330, 320],
            xAxis:['1', '2', '3', 'Thu', 'Fri', 'Sat', 'Sun']
        });
}