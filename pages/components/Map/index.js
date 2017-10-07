import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import mapStyle from "./style.json"
import fetch from 'isomorphic-unfetch'

import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer"

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: 0, lng: 0 }}
    defaultOptions={{ styles: mapStyle }}>
    <MarkerClusterer
      onClick={props.handleMarkerClick}
      maxZoom={5}
      averageCenter
      enableRetinaIcons
      defaultImagePath="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png"
      imagePath="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png"
      gridSize={60}>
      {props.users.map(user => (
        <Marker
          onClick={props.handleMarkerClick}
          key={user._id}
          icon={{
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png"
          }}
          position={{ lat: user.position.latitude, lng: user.position.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
)

class MapComponent extends React.PureComponent {

  handleMarkerClick(marker) {
    const { onSelectCity } = this.props
    let lat, lng
    if (marker.center_) {
      lat = marker.center_.lat()
      lng = marker.center_.lng()
    } else if (marker.latLng){
      lat = marker.latLng.lat()
      lng = marker.latLng.lng()
    }

    return fetch('http://localhost:4000/reverse-geocode', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        lat,
        lng
      }),
      mode: 'cors',
    })
    .then(response => response.json())
    .then(json => {
      onSelectCity(json.city)
    })
  }

  render() {
    return <Map {...this.props} handleMarkerClick={this.handleMarkerClick.bind(this)} />
  }
}

export default MapComponent
