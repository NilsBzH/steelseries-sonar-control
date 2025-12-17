import {
  action,
  DidReceiveSettingsEvent,
  KeyDownEvent,
  SingletonAction,
  WillAppearEvent,
} from "@elgato/streamdeck";
import { SonarClient } from "../sonar/sonarClient";
import type { SonarChannel } from "../sonar/types";

type Settings = {
  channel?: SonarChannel;
};

@action({ UUID: "com.nilsbzh.steelseries-sonar-control.mutechannel" })
export class MuteChannelAction extends SingletonAction<Settings> {
  private sonar = new SonarClient();

  private async updateTitle(sdAction: any, settings?: Settings) {
    const channel = settings?.channel ?? "game";
    await sdAction.setTitle(`Mute\n${channel}`);
  }

  override async onWillAppear(ev: WillAppearEvent<Settings>): Promise<void> {
    await this.updateTitle(ev.action, ev.payload.settings);
  }

  override async onDidReceiveSettings(
    ev: DidReceiveSettingsEvent<Settings>
  ): Promise<void> {
    await this.updateTitle(ev.action, ev.payload.settings);
  }

  override async onKeyDown(ev: KeyDownEvent<Settings>): Promise<void> {
    // ✅ Dans ton SDK: getSettings<T>() retourne T directement
    const settings = await ev.action.getSettings<Settings>();
    await this.updateTitle(ev.action, settings);
  }
}
