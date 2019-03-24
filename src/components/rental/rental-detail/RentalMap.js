import React from 'react';
import { MapWithGeoCode } from 'components/map/GoogleMap'

export class RentalMap extends React.Component {
    render() {
        const location = this.props.location;

        return (
            <MapWithGeoCode
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyS55y4ewexW-5AUndUy_hMPLlFujRIOQ&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `360px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={location}
            />
        )
    }
}