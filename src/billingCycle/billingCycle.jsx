import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tab from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import {selectTab} from '../common/tab/tabActions.js'
import {showTabs} from '../common/tab/tabActions.js'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import BillingCycleList from './billingCycleList'

class BillingCycle extends Component {

    componentWillMount(){
        //Inicia ciclos de pagamentos com a listagem
        this.props.selectTab('tabList')
        //abas que vão aparecer
        this.props.showTabs('tabList', 'tabCreate')
    }

    render(){
        return(
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
                <Content>
                   <Tab>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList"/>
                            <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete"/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id="tabCreate"><h1>Incluir</h1></TabContent>
                            <TabContent id="tabUpdate"><h1>Alterar</h1></TabContent>
                            <TabContent id="tabDelete"><h1>Excluir</h1></TabContent>
                        </TabsContent>
                   </Tab>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)
