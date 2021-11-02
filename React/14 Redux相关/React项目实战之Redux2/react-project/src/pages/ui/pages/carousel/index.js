import React, { Component } from 'react'
import { Card, Carousel } from 'antd'
import './index.scss'

export class Index extends Component {
    render() {
        return (
            <div className="carousel">
                <Card title="文字轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div>
                            <h3>周一出去玩</h3>
                        </div>
                        <div>
                            <h3>周二看电影</h3>
                        </div>
                        <div>
                            <h3>周三打游戏</h3>
                        </div>
                        <div>
                            <h3>周四撸代码</h3>
                        </div>
                        <div>
                            <h3>周五陪对象</h3>
                        </div>
                    </Carousel>
                </Card>

                <Card title="图片轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div>
                            <img src='/assets/carousel-img/carousel-1.jpg' alt=''/>
                        </div>
                        <div>
                            <img src='/assets/carousel-img/carousel-2.jpg' alt=''/>
                        </div>
                        <div>
                            <img src='/assets/carousel-img/carousel-3.jpg' alt=''/>
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}

export default Index
