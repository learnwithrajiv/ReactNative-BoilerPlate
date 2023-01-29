import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    // console.log("test device", this.props);
  }
  render() {
    return (
      <SafeAreaView>
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={2}
          style={{ textAlign: "center", fontSize: 50 }}
        >
          {" "}
          RAJIV BHAI, NAMASKAR!!!
        </Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.appConfig,
});
export default connect(mapStateToProps)(Home);
