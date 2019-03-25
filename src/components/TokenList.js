import React, { Component } from 'react';
import { connect } from "react-redux";

import {Table} from 'semantic-ui-react';

class TokenList extends Component {

    displayTokenTable () {
        return this.props.listOfToken.map(function(list, i) {
            if(list.from !== 'GENESIS'){
                return (
                    <Table.Row key={i}>
                        <Table.Cell>{ list.contractAddress }</Table.Cell>
                        <Table.Cell>{ list.tokenSymbol }</Table.Cell>
                        <Table.Cell>{ list.tokenName }</Table.Cell>
                        <Table.Cell>{ list.tokenDecimal }</Table.Cell>
                    </Table.Row>
                );
            }
        });
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Contract Address</Table.HeaderCell>
                            <Table.HeaderCell>Token Symbol</Table.HeaderCell>
                            <Table.HeaderCell>Token Name</Table.HeaderCell>
                            <Table.HeaderCell>Token Decimal</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { this.displayTokenTable() }
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


export default connect(mapStateToProps)(TokenList);