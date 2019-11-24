import React, { Component } from "react";
import Maps from "../Components/Map/index";
import Nav from "../Components/Nav/Nav";
import CheckInModal from "../Components/CheckIn/CheckInModal";
import Alert from "../Components/Alert";
import "./checkIn.css";

class CheckIn extends Component {
  state = {
    mediaUrl: "",
    isLoaded: false,
    latitude: "",
    longitude: "",
    center: {
      lat: "",
      lng: ""
    },
    zoom: 20,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  showPosition = position => {
    this.setState({
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      },
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    this.setState({
      mediaUrl: `maps.google.com/?q=${this.state.latitude},${this.state.longitude}`
    });
    console.log(this.state.latitude);
    console.log(this.state.longitude);

    if (this.state.latitude && this.state.longitude) {
      this.setState({
        isLoaded: true
      });
    }
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  checkIn = e => {
    e.preventDefault();
    if (this.state.isLoaded) {
      const position = {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        mediaUrl: this.state.mediaUrl
      };
      console.log("user position: ", position);
    } else {
      Alert(
        "Oops something went wrong! Check location services and try again."
      );
    }

    //post route that sends the user location to the backend to be stored and sent to CJS db
  };

  componentDidMount() {
    this.getLocation();

    // console.log(process.env.REACT_APP_API_KEY);
    // auth.onAuthStateChanged(
    //   function(user) {
    //     // console.log(user);
    //     console.log(user.uid);
    //     console.log(user.displayName);
    //     console.log(user.email);

    //     if (user) {
    //       // User is signed in.
    //       //insert user into db the constarint will keep duplication from happening
    //       this.setState({
    //         userId: user.uid
    //       });
    //       console.log(user.uid);
    //       API.doesExist(user.uid).then(res => {
    //         this.setState({ mongoId: res.data.mongoId });
    //         console.log(res);
    //         if (res.data.exist === true) {
    //           API.getContacts(this.state.mongoId).then(res => {
    //             this.setState({
    //               sendTo: res.data.sendTo
    //             });
    //           });
    //         } else {
    //           API.userLogIn({ userId: user.uid });
    //         }
    //       });

    //       //aftuser is in db call getReceivers
    //     } else {
    //       alert("error");
    //     }
    //   }.bind(this)
    // );
  }

  handleSendSubmit = e => {
    e.preventDefault();
    console.log("Submitted location");
  };

  render() {
    return this.state.isLoaded ? (
      <div>
        <CheckInModal
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          mediaUrl={this.state.mediaUrl}
          onClick={this.handleSendSubmit}
        />

        <Nav />
        <div id="checkInBtn" className="row">
          <div className="col-md-12">
            <button
              id="submitCheckIn"
              type="button"
              onClick={this.checkIn}
              className="btn btn-success btn-lg"
              data-toggle="modal"
              data-target="#modelId"
            >
              Check In
            </button>
          </div>
        </div>
        <div style={{ justifyContent: "center" }} className="row">
          <div id="map" className="col-md-4">
            <Maps
              lat={this.state.lat}
              lng={this.state.lng}
              google={this.state.google}
              center={this.state.center}
              onClick={this.onMapClick}
              zoom={this.state.zoom}
              // onClick={this.onMarkerClick}
              position={{
                lat: this.state.center.lat,
                lng: this.state.center.lng
              }}
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            />
          </div>
        </div>
      </div>
    ) : (
      <div>
        <Nav />
        <div style={{ justifyContent: "center" }} className="row">
          <div id="map" className="col-md-4">
            <Maps
              lat={this.state.lat}
              lng={this.state.lng}
              google={this.state.google}
              center={this.state.center}
              onClick={this.onMapClick}
              zoom={this.state.zoom}
              // onClick={this.onMarkerClick}
              position={{
                lat: this.state.center.lat,
                lng: this.state.center.lng
              }}
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default CheckIn;
