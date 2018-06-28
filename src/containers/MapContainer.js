/**
 * Created by pajicv on 6/28/18.
 */

import React, {PureComponent} from 'react';

import Map from '../components/Map';

export default class MapContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            infoWindowId: -1,
            locations: [{
                name: 'Bucin salaš',
                address: 'Temerin, Proleterska',
                lat: 45.428039,
                lng: 19.883682,
                googleMapsLink: 'https://goo.gl/maps/3NuDiD6tFZE2',
                description: 'Lepo igralište. Mini Zoo: konji, srne, magarci, koze, lama, krave, patke .... Kažu da je dobra hrana, ali nismo probali. Dugo se čeka na uslugu.',
                rating: 9.5
            },{
                name: 'OAZA MB Gložan',
                address: 'Gložan, Ljudevita Dudka',
                lat: 45.282428,
                lng: 19.566553,
                googleMapsLink: 'https://goo.gl/maps/Ej4afjBaAPF2',
                description: 'Dobro za pecanje. Bazen, čista voda. Minijaturni Zoo: poni, koze, patke .... Igraonica. Odbojka na pesku. Lepa hladovina.',
                rating: 8
            }]
        };

        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this.handleInfoWindowClose = this.handleInfoWindowClose.bind(this);

    }

    componentDidMount() {
        //
    }

    handleMarkerClick = (id) => {
       this.setState({ infoWindowId: id });
    }

    handleInfoWindowClose = () => {
        this.setState({ infoWindowId: -1 });
    }

    render() {
        return (
            <Map infoWindowId={this.state.infoWindowId}
                 onMarkerClick={this.handleMarkerClick}
                 onInfoWindowClose={this.handleInfoWindowClose}
                 locations = {this.state.locations}
            />
        )
    }
}