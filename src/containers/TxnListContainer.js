import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';

import {
    requestTxnList,
    requestTokenList,
    requestBlockList
} from "../modules/ui/actions";

class TxnListContainer extends Component {

    render() {

        // Checking if the length of the data received is not equal to zero, then display the content
        // otherwise show an error page.
        if (this.props.listOfTxn.length !== 0) {

            const callRequestTokenList = (id) => {
                this.props.requestTokenList(id);
            };

            const callRequestTxnList = (address) => {
                this.props.requestTxnList(address);
            };

            const callRequestBlockList = (blockNumber) => {
                this.props.requestBlockList(blockNumber);
            };

            const displayTxnTable = this.props.listOfTxn.map(function(list, i) {
                if(list.from !== 'GENESIS'){
                    return (
                        <Table.Row key={i}>
                            <Table.Cell>
                                <Link to={'/blockDetail'} onClick={() => callRequestBlockList(list.blockNumber)}>
                                    {list.blockNumber}
                                </Link>
                            </Table.Cell>
                            <Table.Cell>
                                <Link to='/detail' onClick={() => callRequestTxnList(list.to)}>
                                    {list.to}
                                </Link>
                            </Table.Cell>
                            <Table.Cell>{ list.value }</Table.Cell>
                            <Table.Cell>
                                <Button
                                    type='button'
                                    onClick={() => callRequestTokenList(list.from)}>
                                    <Link to='/tokenList' onClick={() => callRequestTokenList(list.from)}>
                                        Detail
                                    </Link>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    );
                }
            });

            return (
                <div>
                    <Table striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Block Number</Table.HeaderCell>
                                <Table.HeaderCell>To Address</Table.HeaderCell>
                                <Table.HeaderCell>Amount</Table.HeaderCell>
                                <Table.HeaderCell>ERC 20</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            { displayTxnTable }
                        </Table.Body>
                    </Table>
                </div>
            );
        }

        else {
            return (
                <div>
                    <p>Could not find any data for this Transaction Address!</p>
                    <p>Please provide a valid input.</p>
                    <p>Visit our search page, then try again.</p>
                </div>
            );
        }

    }
}

function mapStateToProps(appState) {
    return {
        ui: appState.ui,
        listOfTxn: appState.ui.listOfTxn,
        listOfBlock: appState.ui.listOfBlock,
        listOfToken: appState.ui.listOfToken,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            requestTokenList,
            requestTxnList,
            requestBlockList
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TxnListContainer);