import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type Time = bigint;
export interface UserProgressType {
  'completedChallengeCount' : bigint,
  'completedChallenges' : Array<string>,
  'score' : number,
  'registrationDate' : Time,
}
export interface _SERVICE {
  'completeChallenge' : ActorMethod<
    [Principal, string, string, boolean],
    boolean
  >,
  'debugAllProgress' : ActorMethod<[], undefined>,
  'getAllUsersDetails' : ActorMethod<[], Array<UserProgressType>>,
  'getMonthlyUsers' : ActorMethod<[], Array<bigint>>,
  'getTotalUsers' : ActorMethod<[], bigint>,
  'getUserDetails' : ActorMethod<[Principal], [] | [UserProgressType]>,
  'getWeeklyUsers' : ActorMethod<[], Array<bigint>>,
  'logInUser' : ActorMethod<[Principal], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
