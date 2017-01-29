import React, { Component } from 'react'
import { Row, Col } from 'antd'
import NProgress from 'nprogress'
import RoleTree from 'COMPONENT/RoleTree'
import RoleQuery from './RoleQuery'
import InputSearch from 'COMPONENT/InputSearch'


export default class RoleManageView extends Component {

  constructor(props) {
    super(props)
    this.onSearch = this.onSearch.bind(this)
  } 

  onSearch(keyword) {
    console.log(keyword)
  }

  roleSelected(info) {
    console.log(info)
  }

  componentWillMount() {
    this.props.getRoleTree()
  }

  componentWillUnmount() {

  }

  render() {
    const { getRoleTree, roleList } = this.props
    return (
      <div className="pageRoleManage">
        <Row>
          <Col span={5}>
            <div className="app-left-side">
              <InputSearch
                placeholder='请输入角色名称'
                initialValue=''
                onSearch={this.onSearch}
              />
              <RoleTree
                selected={this.roleSelected}
                roleList={roleList}
              />
            </div>
          </Col>
          <Col span={19}>
            <RoleQuery/>
            新增角色管理页面
          </Col>
        </Row>
      </div>
    )
  }

}