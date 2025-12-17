import type { SonarChannel } from "./types";

export class SonarClient {
  async ping(): Promise<boolean> {
    // TODO: implement real Sonar API check
    return false;
  }

  async setMute(_channel: SonarChannel, _muted: boolean): Promise<void> {
    // TODO: implement
  }

  async toggleMute(_channel: SonarChannel): Promise<boolean> {
    // TODO: implement, return new mute state
    return false;
  }
}
