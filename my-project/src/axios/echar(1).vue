<template>
    <div>
        <div id="main" style="width: 800px;height:400px;"></div>
    </div>
</template>


<script src="../../node_modules/_echarts@4.5.0@echarts/dist/echarts.min.js"></script>
<script>
const echarts = require('echarts');
export default {
    data(){
        return{
            user:'',
            userlist:[],
        }
    },
    mounted() {
         // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
                title: {
                    text: '走势图',
                    subtext: '纯属虚构'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['新注册用户','新增订单','新增管理员']
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2019-11-30','2019-12-01','2019-12-02','2019-12-03','2019-12-04','2019-12-05','2019-12-06']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                series: [
                    {
                        name:'新注册用户',
                        type:'line',
                        data:[2, 11, 15, 13, 12, 13, 10],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'新增订单',
                        type:'line',
                        data:[8, 11, 16, 10, 12, 10, 7],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'新增管理员',
                        type:'line',
                        data:[300, -2, 2, 5, 3, 2, 0],
                        markPoint: {
                            data: [
                                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'},
                                [{
                                    symbol: 'none',
                                    x: '90%',
                                    yAxis: 'max'
                                }, {
                                    symbol: 'circle',
                                    label: {
                                        normal: {
                                            position: 'start',
                                            formatter: '最大值'
                                        }
                                    },
                                    type: 'max',
                                    name: '最高点'
                                }]
                            ]
                        }
                    }
                ]
            }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        // let user='https://elm.cangdu.org/statis/user/{{ list[i] }}/count'
        let list=['2019-11-30','2019-12-01','2019-12-02','2019-12-03','2019-12-04','2019-12-05','2019-12-06']

        for(var i=0;i<list.length;i++){
            // console.log(list[i])
            this.user=list[i]
        }

        this.$http.get('https://elm.cangdu.org/statis/user/{{ list[i] }}/count').then( res =>{
            console.log(res.data.count)
            this.userlist=res.data.count
        } )







    }
}
</script>

<style scoped>
    
</style>