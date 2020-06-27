import React from 'react'
import {Menu} from 'antd';
// import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import MenuConfig from '@/config/menuConfig'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {switchMenu} from '@/redux/action'
import './index.less'

const {SubMenu} = Menu;

class NavLeft extends React.Component {
    constructor() {
        super()
        this.state = {
            currentKey: ''
        }
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }

    handleClick = (item) => {
        const {dispatch} = this.props
        dispatch(switchMenu(item.item.props.title))
        this.setState({
            currentKey: item.key
        })
    }

    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.key} onClick={this.handleClick}>
                    <NavLink to={'/admin' + item.key}>{item.title}</NavLink>
                </Menu.Item>
            )
        })
    }

    render() {
        return (
            <div>
                <div className='logo'>
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme='dark'>
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}

export default connect()(NavLeft);
