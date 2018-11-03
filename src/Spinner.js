import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

const Spinner = () => (
    <Dimmer active>
    <Loader size="huge" content={"Not sure if loading... or trolling..."} />
    </Dimmer>
)

export default Spinner;