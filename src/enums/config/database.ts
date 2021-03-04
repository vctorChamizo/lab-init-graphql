import { CONNREFUSED } from "dns";

export enum DatabaseStatus {
  DISCONNECTED = 0,
  CONNECTED = 1,
  CONNECTING = 2,
  DISCONNECTING = 3,
  INVALID_CREDENTIALS = 4,
}
