import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import TabsHeader from '../common/tab/tabsHeader';
import TabHeader from '../common/tab/tabHeader'
import Tabs from '../common/tab/tabs';
import TabsContent from '../common/tab/tabsContent';
import TabContent from '../common/tab/tabContent';
import BillingCycleList from "./billingCycleList";
import BillingCycleForm from './billingCycleForm';
import { init, create, update, remove } from "./billingCycleActions";

class BillingCycle extends Component {
    componentWillMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'><BillingCycleList /></TabContent>
                            <TabContent id='tabCreate'><h1>Salvar</h1><BillingCycleForm onSubmit={this.props.create} submitClass='primary' submitLabel='Salvar'/></TabContent>
                            <TabContent id='tabUpdate'><h1>Atualizar</h1><BillingCycleForm onSubmit={this.props.update} submitClass='info' submitLabel='Atualizar'/></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1><BillingCycleForm onSubmit={this.props.remove} submitClass='danger' submitLabel='Apagar' readOnly={true}/></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);
