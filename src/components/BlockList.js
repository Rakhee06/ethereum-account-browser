import React, { Component } from 'react';
import {connect} from "react-redux";

import { Table } from "semantic-ui-react";

class BlockList extends Component {

    render() {

        // Checking if the length of the data received is not equal to zero, then display the content
        // otherwise show an error page.
        if (this.props.listOfBlock.length !== 0) {
            return (
                <div>
                    <Table striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Block Miner</Table.HeaderCell>
                                <Table.HeaderCell>Block Reward</Table.HeaderCell>
                                <Table.HeaderCell>UncleInclusionReward</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{this.props.listOfBlock['blockMiner']}</Table.Cell>
                                <Table.Cell>{this.props.listOfBlock['blockReward']}</Table.Cell>
                                <Table.Cell>{this.props.listOfBlock['uncleInclusionReward']}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            );
        }

        else {
            return (
                <div>
                    <p>Could not find any data for this Block Number!</p>
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
        listOfToken: appState.ui.listOfToken
    }
}

export default connect(mapStateToProps)(BlockList);