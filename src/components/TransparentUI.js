import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Statistic, Grid } from 'semantic-ui-react';
import CPUInfo from './cpuInfo/cpuInfo';

class TransparentUI extends React.Component{

    getCPUData(){
        return this.props.procState.serverInfo.CPU.map((cpu,index)=>{
            return({
                cpuNum:index,
                cpuPercent:cpu.cpu
            });
        })
    }

    getRecordInfo(){
        console.log(this.props.procState.processInfo.recordInfo)
    }

    render(){
        return(
            <Container style={{ marginTop: '2em' }}>
                <Header as="h1">Process: <span style={{color:"#4d6aa8"}}>{this.props.procState.processInfo.name}</span></Header>
                <div>
                    <CPUInfo labels={this.getCPUData().map(cpu=>`cpu ${cpu.cpuNum}`)} data={this.getCPUData().map(cpu=>cpu.cpuPercent)} />
                </div>
                <div style={{marginTop:"5em",marginLeft:"2em"}}>
                    <Statistic>
                        <Statistic.Value>{this.props.procState.processInfo.recordInfo.recordsProcessed}</Statistic.Value>
                        <Statistic.Label>Records Processed</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{this.props.procState.processInfo.recordInfo.recordsRemaining}</Statistic.Value>
                        <Statistic.Label>Records Remaining</Statistic.Label>
                    </Statistic>
                </div>
            </Container>
        );
    }

}

const mapStateToProps = (state) => {
    return({procState:state.procState})
}

export default connect(mapStateToProps)(TransparentUI);