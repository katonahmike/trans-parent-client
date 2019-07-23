import React from 'react';
import Chart from 'chart.js';
import classes from './cpuInfo.module.css';

class CPUInfo extends React.Component{
    cpuRef = React.createRef();
    chart=null;
    cpuChartRef=null;
    componentDidMount() {
        this.cpuChartRef = this.cpuRef.current.getContext("2d");
        
        this.chart=new Chart(this.cpuChartRef, {
            type: "line",
            data: {
                labels: this.props.labels,
                datasets: [{
                        label: "CPU % Usage",
                        data: this.props.data,
                }]
            },
            options: {
                scales: {
                    yAxes : [{
                        ticks : {
                            max : 100,    
                            min : 0
                        }
                    }]
                }
            }
        });
    }
    render(){
        if(this.chart){
            this.chart.data.labels=this.props.labels;
            this.chart.data.datasets[0].data=this.props.data;
            this.chart.update();
        }
        
        return(
            <div className={classes.graphContainer}>
                <canvas
                    id="cpuInfo"
                    ref={this.cpuRef}
                />
            </div>
        );
    }
}
export default CPUInfo;