import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Dropdown, Button } from 'semantic-ui-react';

import { bindActionCreators } from 'redux';

import TxnListContainer from './TxnListContainer';
import BlockList from './../components/BlockList';

import {
    requestTxnList,
    requestBlockList
} from '../modules/ui/actions';

class SearchBarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            selectedOption: 'Txn Address',
            isVisible: false,
            errorMessage: '',
            isLoading: false
        };
        this.handleInputText = this.handleInputText.bind(this);
        this.handleButtonClicked = this.handleButtonClicked.bind(this);
    }

    //Function to handle input text received
    handleInputText ( event ) {
        event.preventDefault();
        this.setState({ inputText: event.target.value })
    }

    //Function to handle submit button
    handleButtonClicked = () => {
        this.setState({ isVisible: true});

        if ((this.state.selectedOption === 'Txn Address') && (this.state.inputText.startsWith('0x'))) {
            this.props.requestTxnList(this.state.inputText);
            this.props.history.replace('/txnList');
            this.setState({ inputText: ''});
        }

        else if ((this.state.selectedOption === 'Block Number')) {
            this.props.requestBlockList(this.state.inputText);
            this.props.history.replace('/blockDetail');
            this.setState({ inputText: ''});
        }

        else {
            this.setState({inputText: '', isVisible: false});
            this.setState({ errorMessage: 'Invalid input! Reload the Page and try again!'})
        }
    };

    render() {
        const options = [
            { key: 'Txn Address', text: 'Txn Address', value: 'Txn Address' },
            { key: 'Block Number', text: 'Block Number', value: 'Block Number'},
        ];
        let listView = null;
        if(this.state.isVisible && this.state.selectedOption === 'Txn Address') {
            listView = <TxnListContainer listOfTxn={this.props.listOfTxn}/>
        }
        else if (this.state.isVisible && this.state.selectedOption === 'Block Number')  {
            listView = <BlockList listOfBlock={this.props.listOfBlock}/>
        }

        return (
            <div>
                <p>{ this.state.errorMessage }</p>
                <div className='searchBar'>
                    <div>
                        <Input
                            label={<Dropdown defaultValue='Txn Address' options={options} onChange={(e, data) => this.setState({ selectedOption: data.value})}/>}
                            value={this.state.inputText}
                            onChange={this.handleInputText}
                        />
                    </div>
                    <div id='buttonDiv'>
                        <Button type='button' onClick={this.handleButtonClicked}>Submit</Button>
                    </div>
                </div>
                <div className='table'>
                    { listView }
                </div>
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

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            requestTxnList,
            requestBlockList
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);