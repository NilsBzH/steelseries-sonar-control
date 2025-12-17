export type SonarChannel = "game" | "chat" | "media" | "aux" | "mic";

export interface SonarStatus {
  isConnected: boolean;
  lastError?: string;
}
