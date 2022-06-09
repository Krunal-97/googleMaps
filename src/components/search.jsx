import React, { useState } from "react";
import { MagnifyingGlass, X } from "phosphor-react";
import { connect } from "react-redux";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import setLatLong from "../actions/setLatLong";
import "../assests/styles/search.css";

function Search(props) {
  const [address, setAddress] = useState("");

  const handleSelect = (address) => {
    setAddress(address);

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        props.setLatLong({
          lat: latLng.lat,
          long: latLng.lng,
        });
      })
      .catch((error) => console.error("Error", error));
  };

  const handleChange = (address) => {
    setAddress(address);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={(address) => handleChange(address)}
      onSelect={(address) => handleSelect(address)}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <div>
            <div class="input-icons">
              <MagnifyingGlass
                style={{
                  color: "black",
                  verticalAlign: "middle",
                  margin: "0px 8px",
                }}
                size={30}
              />
              <input
                value={address}
                name="address"
                type="text"
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "input-field location-search-input",
                })}
              />
              <X
                size={30}
                style={{ color: "black", verticalAlign: "middle" }}
              />
            </div>
          </div>
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              const style = suggestion.active
                ? {
                    backgroundColor: "#fafafa",
                    color: "black",
                    cursor: "pointer",
                    margin: "0px 10px",
                  }
                : {
                    backgroundColor: "#ffffff",
                    color: "black",
                    cursor: "pointer",
                    margin: "0px 10px",
                  };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setLatLong: (payload) => dispatch(setLatLong(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
