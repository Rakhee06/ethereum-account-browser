import React, { Component } from 'react';
import { connect } from "react-redux";

import {Table} from 'semantic-ui-react';

class Detail extends Component {

    displayDetailTable() {

        return this.props.listOfTxn.map(function(list, i) {
                return (
                    <Table.Row key={i}>
                        <Table.Cell>{list.blockNumber}</Table.Cell>
                        <Table.Cell>{list.to}</Table.Cell>
                        <Table.Cell>{ list.value }</Table.Cell>
                        <Table.Cell>{list.hash}</Table.Cell>
                    </Table.Row>
                );
            })
    };

    render() {
        return (
            <div>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Block Number</Table.HeaderCell>
                        <Table.HeaderCell>To Address</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Hash</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    { this.displayDetailTable() }
                </Table.Body>
            </Table>
            </div>
        );
    }
}

function mapStateToProps(appState) {
    return {
        ui: appState.ui,
        listOfTxn: appState.ui.listOfTxn,
        listOfBlock: appState.ui.listOfBlock,
        listOfToken: appState.ui.listOfToken
    }
}


export default connect(mapStateToProps)(Detail);