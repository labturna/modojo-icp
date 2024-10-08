import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'completeChallenge' : ActorMethod<[Principal, string], boolean>,
  'debugAllProgress' : ActorMethod<[], undefined>,
  'getCompletedChallenges' : ActorMethod<[Principal], Array<string>>,
  'getTotalUsers' : ActorMethod<[], bigint>,
  'isChallengeCompleted' : ActorMethod<[Principal, string], boolean>,
  'logInUser' : ActorMethod<[Principal], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
