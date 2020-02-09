<template>
    <div>
      <div id="main" style="width:1200px;height:400px;"></div>
    </div>
</template>
  
<script>
var echarts = require('echarts');
export default {
    data(){
        return{
          arr:[]
        }
    },
    methods:{
        //返回一个七天日期的数组
        setDate(){
          var newarr,g,c;
             var mydate=new Date();
              var n=mydate.getFullYear();//年
              var y=mydate.getMonth()+1;//月
              var r=mydate.getDate();//日
            for(let i=0;i<7;i++){
                if((r-i)<10){
                   g=(r-i);
                   c='0'+g;
                }else{
                    c=(r-i);
                }
                newarr=n+'-'+y+'-'+c;
                 if(r<7){
                    if((r-i)<=0){   
                       if((y-1)==1||(y-1)==3||(y-1)==5||(y-1)==7||(y-1)==8||(y-1)==10||(y-1)==12){
                           let b=((r-i)-1);  
                            newarr=n+'-'+(y-1)+'-'+(31- Math.abs(b));
                       }
                       else if((y-1)==4||(y-1)==6||(y-1)==9||(y-1)==11){
                             newarr=n+'-'+(y-1)+'-'+(30- Math.abs(b))
                       }
                       else if((y-1)==2){
                              //能被4整除不能被100整除的就是闰年
                              if(n%4==0&&n%100!=0){
                                 newarr=n+'-'+(y-1)+'-'+(29- Math.abs(b))
                              }else{
                                   newarr=n+'-'+(y-1)+'-'+(28- Math.abs(b))
                              }
                       }
                    }  
                }
                 this.arr.unshift(newarr);    
            }     
             this.arr.unshift('product');   

        }
    },
    mounted() {
          this.setDate();
          console.log(this.arr);
            var myChart = echarts.init(document.getElementById('main'));
                    var option = {
                        legend: {},
                        tooltip: {},
                        dataset: {
                            source: [
                                 this.arr,
                                ['新增用户', 0, 0, 0, 0, 0,0,0],
                                ['新增管理员', 0, 0, 0, 0, 0, 0,0],
                                ['新增订单', 0, 0, 0,0, 0,0,0],
                            ]
                        },
                        series: [ {
                            type: 'pie',
                            radius: 60,
                            center: ['25%', '30%'],
                            encode: {
                                itemName: 'product',
                                value: this.arr[1]
                            }
                        }, {
                            type: 'pie',
                            radius: 60,
                            center: ['15%', '75%'],
                            encode: {
                                itemName: 'product',
                                value:  this.arr[2]
                            }
                        }, {
                            type: 'pie',
                            radius: 60,
                            center: ['35%', '75%'],
                            encode: {
                                itemName: 'product',
                                value:  this.arr[3]
                            }
                        },
                        {
                            type: 'pie',
                            radius: 60,
                            center: ['60%', '30%'],
                            encode: {
                                itemName: 'product',
                                value:  this.arr[4]
                            }
                        },
                        {
                            type: 'pie',
                            radius: 60,
                            center: ['60%', '75%'],
                            encode: {
                                itemName: 'product',
                                value:  this.arr[5]
                            }
                        },
                        ,
                        {
                            type: 'pie',
                            radius: 60,
                            center: ['85%', '30%'],
                            encode: {
                                itemName: 'product',
                                value:  this.arr[6]
                            }
                        },
                        ,
                        {
                            type: 'pie',
                            radius: 60,
                            center: ['85%', '75%'],
                            encode: {
                                itemName: 'product',
                                value: this.arr[7]
                            }
                        }]
                };
                var a=this.arr;
                var mm=0;
                for(let i=1;i<a.length;i++){
                            this.axios.get(`https://elm.cangdu.org/statis/user/${a[i]}/count`).then((res)=>{
                                    option.dataset.source[1][i]=res.data.count;
                                        mm++;
                                        if(mm>=21){
                                        myChart.setOption(option);
                                    }
                            })
                            this.axios.get(`https://elm.cangdu.org/statis/admin/${a[i]}/count`).then((res)=>{
                                        option.dataset.source[2][i]=res.data.count;   
                                        mm++; 
                                        if(mm>=21){
                                        myChart.setOption(option);
                                    }
                            })
                            this.axios.get(`https://elm.cangdu.org/statis/order/${a[i]}/count`).then((res)=>{
                                    option.dataset.source[3][i]=res.data.count;        
                                        mm++;    
                                    if(mm>=21){
                                        myChart.setOption(option);
                                    }
                                
                        })    
                    }  
             
    },
}
</script>
<style>
    
</style>