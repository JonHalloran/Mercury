import React from 'react';


class RouteSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dist_type: '',
            name: '',
            distance: '',
            zipcode: '',
        }
        this.handleChangeZipcode = this.handleChangeZipcode.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeDistance = this.handleChangeDistance.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeDisType = this.handleChangeDisType.bind(this)
    }

    handleChangeDisType(e) {
        this.setState({
            dist_type: e.target.value
        })
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeDistance(e) {
        this.setState({
            distance: e.target.value
        })
    }

    handleChangeZipcode(e) {
        this.setState({
            zipcode: e.target.value
        })
    }

    handleSubmit() {
        console.log(this.state)
        this.props.retrieveRoutes(this.state)
    };

    render() {
        return (
            <form className={'route-search-form'} onSubmit={this.handleSubmit}>
                <input className={'route-search-name'} type={'text'} placeholder={'Name'}
                       onChange={this.handleChangeName} value={this.state.name}/>
                <input className={'route-search-distance'} type={'number'}
                       placeholder={'Distance'}
                       onChange={this.handleChangeDistance} value={this.state.distance}/>
                <select value={this.state.dist_type} onChange={this.handleChangeDisType}>
                    <option value={'>'}>Greater Than</option>
                    <option value={'<'}>Less Than</option>
                </select>
                <input className={'route-search-zip'} type={'number'} placeholder={'Zipcode'}
                       onChange={this.handleChangeZipcode} value={this.state.zipcode}/>

                <button>Search</button>
            </form>
        )
    }
}

export default RouteSearch