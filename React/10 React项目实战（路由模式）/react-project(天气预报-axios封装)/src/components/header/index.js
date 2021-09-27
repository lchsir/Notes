import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.scss'
import Utils from '../../utils/utils'
import request from '../../axios/request'

export class Index extends Component {
    state = {
        username: '',
        time: '',
        weather: ''
    }

    async componentDidMount() {
        this.setState({ username: '金渡' }) // 模拟动态用户名
        // 动态时间
        setInterval(() => {
            let time = Utils.forMateTime(new Date())
            this.setState({time})
        }, 1000)

        // 请求天气接口
        const data = await request({
            // 参数
            params: {
                app: 'weather.today',
                weaId: 248, // 城市天气id，1是北京
                appkey: 10003,
                sign: 'b59bc3ef6191eb9f747dd4e83c99f2a4',
                format: 'json'
            }
        })
        console.log(data)
        this.setState({weather: data.data.result.weather})
    }

    render() {
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span="24">
                        <span>欢迎，{this.state.username}</span>
                        <a href="/#">退出</a>
                    </Col>
                </Row>
                <Row className='breadcrumb'>
                    <Col span='4' className='breadcrumb-title'>
                        首页
                    </Col>
                    <Col span='20' className='weather'>
                        <span className='date'>{this.state.time}</span>
                        <span className='weather-detail'>{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Index
