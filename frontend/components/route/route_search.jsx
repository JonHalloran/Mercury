import React from 'react';

class RouteSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dist_type: 'dist_type',
            name: '',
            distance: '',
            city: ''
        };
        this.handleChangeCity = this
            .handleChangeCity
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleChangeDistance = this
            .handleChangeDistance
            .bind(this);
        this.handleChangeName = this
            .handleChangeName
            .bind(this);
        this.handleChangeDisType = this
            .handleChangeDisType
            .bind(this);
    }

    handleChangeDisType(e) {
        this.setState({dist_type: e.target.value});
    }

    handleChangeName(e) {
        this.setState({name: e.target.value});
    }

    handleChangeDistance(e) {
        this.setState({distance: e.target.value});
    }

    handleChangeCity(e) {
        this.setState({city: e.target.value});
    }

    handleSubmit() {
        this
            .props
            .retrieveRoutes(this.state);
    }

    render() {

        return (

            <div className={'route-search'}>
                <div className={'route-search-head'}>
                    <h1 className={'route-search-title'}>Search for running routes</h1>
                    <button
                        className={'route-search-create-route-button'}
                        onClick={() => this.props.history.push('/create_route/')}>Create a Route
                    </button>
                </div>
                <form className={'route-search-form'} onSubmit={this.handleSubmit}>
                    <div className={'route-search-name-div'}>
                        <span className={'route-search-name-label'}>Search Routes:</span>
                        <input
                            className={'route-search-name'}
                            type={'text'}
                            placeholder={'Name'}
                            onChange={this.handleChangeName}
                            value={this.state.name}/>
                    </div>
                    <div className={'route-search-dist-div'}>
                        <select
                            value={this.state.dist_type}
                            onChange={this.handleChangeDisType}
                            className={'route-search-dist-type'}>
                            <option value={'dist_type'} disabled={true}>Distance Type</option>
                            <option value={'>'}>Greater Than</option>
                            <option value={'<'}>Less Than</option>
                        </select>
                        <input
                            className={'route-search-distance'}
                            type={'number'}
                            placeholder={'Distance'}
                            onChange={this.handleChangeDistance}
                            value={this.state.distance}/>
                    </div>
                    <div className={'route-search-near-div'}>
                        <span className={'route-search-near-label'}>City:</span>
                        <input
                            className={'route-search-city'}
                            type={'text'}
                            placeholder={'City'}
                            onChange={this.handleChangeCity}
                            value={this.state.city}/>
                    </div>
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default RouteSearch;
