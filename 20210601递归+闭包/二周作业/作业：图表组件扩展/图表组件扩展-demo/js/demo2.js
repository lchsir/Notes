function Config(id,type,data){
    this.id = id;
    this.type = type;
    this.data  = data;
}
Config.prototype.init = function(){
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
            data: this.data,
            type: this.type
        }]
    };
    // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(this.id);
    // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
window.onload = function(){
    //三个参数  DOM  类型  数据
    var chart1 = new Config(
        document.getElementById('echarts2'),
        'line',
        [820, 932, 901, 934, 1290, 1330, 1320]);
    chart1.init(); 

}