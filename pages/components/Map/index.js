import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import mapStyle from "./style.json"

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
      onClick={props.handleMarkerClick.bind(this)}
      averageCenter
      enableRetinaIcons
      gridSize={60}>
      {props.users.map(user => (
        <Marker
          key={user._id}
          position={{ lat: user.position.latitude, lng: user.position.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
)

class MapComponent extends React.PureComponent {

  handleMarkerClick(event) {
    console.log(event)
  }

  render() {
    return <Map {...this.props} handleMarkerClick={this.handleMarkerClick} />
  }
}

export default MapComponent
