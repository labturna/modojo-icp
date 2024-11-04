import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface ChallengeInfo {
  'id' : string,
  'difficulty' : string,
  'name' : string,
}
export type Time = bigint;
export interface UserProgressType {
  'completedChallengeCount' : bigint,
  'username' : string,
  'projectUrls' : Array<string>,
  'completedChallenges' : Array<string>,
  'badges' : Array<string>,
  'score' : number,
  'registrationDate' : Time,
}
export interface _SERVICE {
  'completeChallenge' : ActorMethod<
    [Principal, ChallengeInfo, boolean],
    boolean
  >,
  'debugAllProgress' : ActorMethod<[], undefined>,
  'getAllUsersDetails' : ActorMethod<[], Array<UserProgressType>>,
  'getCurrentDateInfo' : ActorMethod<[], string>,
  'getMonthlyUsers' : ActorMethod<[], Array<bigint>>,
  'getTotalUsers' : ActorMethod<[], bigint>,
  'getUserDetails' : ActorMethod<[Principal], [] | [UserProgressType]>,
  'getWeeklyUsers' : ActorMethod<[], Array<bigint>>,
  'logInUser' : ActorMethod<[Principal], boolean>,
  'submitProject' : ActorMethod<[Principal, string, string], boolean>,
  'updateUsername' : ActorMethod<[Principal, string], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
