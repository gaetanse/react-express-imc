import SideBarNav from "./../components/SideBarNav"
import { useState } from "react"
import { Layout  } from 'antd'
const { Sider, Content } = Layout

export default function Main(props) {

  const [collapsed,setCollapsed] = useState(false)

  return (
    <div>
        <div className='App'>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={()=>setCollapsed(!collapsed)}>
              <SideBarNav theme={"dark"}/>
            </Sider>
            <Layout className="site-layout" style={{ backgroundColor: '#FFFFFF' }}>
              <Content style={{ margin: 'auto auto', textAlign: 'center' }}>    
                { props.htmldiv }
              </Content>
            </Layout>
          </Layout>
      </div>
    </div>
  )
}