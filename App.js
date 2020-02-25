import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import { useAsyncEffect } from "use-async-effect";

export default function App(props, context) {
  // return <ClassApp />;
  // return <HooksApp />;
  return <UseExpoApp />;
}

class ClassApp extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Inter-BlackItalic": require("./assets/Inter-BlackItalic.otf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    console.log("ClassApp::render");
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {this.state.fontLoaded ? (
          <Text style={{ fontFamily: "Inter-BlackItalic", fontSize: 56 }}>
            Hello, world!
          </Text>
        ) : null}
      </View>
    );
  }
}

async function loadFontAync() {}

function HooksApp() {
  console.log("HooksApp_render");
  let [fontLoaded, setFontLoaded] = useState(false);
  useAsyncEffect(async () => {
    await Font.loadAsync({
      "Inter-BlackItalic": require("./assets/Inter-BlackItalic.otf")
    });
    setFontLoaded(true);
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {fontLoaded ? (
        <Text style={{ fontFamily: "Inter-BlackItalic", fontSize: 56 }}>
          Hello, world!
        </Text>
      ) : null}
    </View>
  );
}

function UseExpoApp() {
  console.log("UseExpoApp_render");
  let [fontLoaded] = useFonts({
    "Inter-BlackItalic": require("./assets/Inter-BlackItalic.otf")
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {fontLoaded ? (
        <Text style={{ fontFamily: "Inter-BlackItalic", fontSize: 56 }}>
          Hello, world!
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
