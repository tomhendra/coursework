import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

export interface IRobot {
    name: string;
    id: number;
    email: string;
}

interface IAppProps {

}

interface IAppState {
    robots: Array<IRobot>;
    searchfield: string;
}

class App extends Component<IAppProps, IAppState> {
    render(): JSX.Element {
       return <MainPage {...this.props} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
