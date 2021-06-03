import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import useSaveTrack from "../hooks/useSaveTrack";

import { Context as LocationContext } from "../context/locationContext";

const TrackForm = ({}) => {
  const { state, startRecording, stopRecording, changeName } =
    useContext(LocationContext);

  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Spacer>
        <Input
          value={state.name}
          onChangeText={changeName}
          placeholder="Enter Track Name"
        />
      </Spacer>
      <Spacer>
        <Button
          title={state.recording ? "Stop" : "Start Recording"}
          onPress={state.recording ? stopRecording : startRecording}
        />
      </Spacer>
      {!state.recording && state.locations.length > 0 ? (
        <Spacer>
          <Button title={"Save"} onPress={saveTrack} />
        </Spacer>
      ) : null}
    </>
  );
};

export default TrackForm;
