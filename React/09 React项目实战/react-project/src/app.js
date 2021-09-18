import { Row, Col } from 'antd'
import Nav from './components/nav'
import Header from './components/header'
import Footer from './components/footer'
import './style/common.scss'

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
                        <h1>我是内容</h1>
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        </div>
    )
}
