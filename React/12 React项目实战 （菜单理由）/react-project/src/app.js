import { Row, Col } from 'antd'
import Nav from './components/nav'
import Header from './components/header'
import Footer from './components/footer'
import './style/common.scss'
// import Home from './pages/home'
import { renderRoutes } from 'react-router-config' // 引入渲染路由的方法
import routes from './router/' // 引入全局配置的路由规则

export default function App() {
    return (
        <div>
            <Row className="container">
                <Col className='nav-left' span="3">
                    <Nav/>
                </Col>
                <Col className='main' span="21">
                    <Header/>
                    <Row className='content'>
                        {/* <Home/> */}
                        {renderRoutes(routes)}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        </div>
    )
}
