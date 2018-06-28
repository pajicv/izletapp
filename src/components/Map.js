/**
 * Created by pajicv on 6/28/18.
 */

import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDLp-j7GN0v5jziMOHU06hcZq5RTqXp9Bw",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => {

    const { locations, onMarkerClick, infoWindowId, onInfoWindowClose} = props;

    const markers = locations.map((location, i) => {

        return (
            <Marker position={{lat: location.lat, lng: location.lng}} label={location.name} onClick={() => onMarkerClick(i)}>
                {infoWindowId === i &&
                    <InfoWindow onCloseClick={onInfoWindowClose}>
                        <p>{JSON.stringify(location)}</p>
                    </InfoWindow>
                }
            </Marker>
        )

    });

    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: 45.267136, lng: 19.833549}}
        >
            {markers}
        </GoogleMap>
    )
});

export default Map;
