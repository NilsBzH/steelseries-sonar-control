import streamDeck from "@elgato/streamdeck";

import { MuteChannelAction } from './actions/mute-channel';

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel("trace");

// Register the mute channel action.
streamDeck.actions.registerAction(new MuteChannelAction());

// Finally, connect to the Stream Deck.
streamDeck.connect();
