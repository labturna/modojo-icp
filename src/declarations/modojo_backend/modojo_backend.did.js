export const idlFactory = ({ IDL }) => {
  const ChallengeInfo = IDL.Record({
    'id' : IDL.Text,
    'difficulty' : IDL.Text,
    'name' : IDL.Text,
  });
  const Time = IDL.Int;
  const UserProgressType = IDL.Record({
    'completedChallengeCount' : IDL.Nat,
    'username' : IDL.Text,
    'completedChallenges' : IDL.Vec(IDL.Text),
    'score' : IDL.Float64,
    'registrationDate' : Time,
  });
  return IDL.Service({
    'completeChallenge' : IDL.Func(
        [IDL.Principal, ChallengeInfo, IDL.Bool],
        [IDL.Bool],
        [],
      ),
    'debugAllProgress' : IDL.Func([], [], []),
    'getAllUsersDetails' : IDL.Func([], [IDL.Vec(UserProgressType)], ['query']),
    'getCurrentDateInfo' : IDL.Func([], [IDL.Text], ['query']),
    'getMonthlyUsers' : IDL.Func([], [IDL.Vec(IDL.Nat)], ['query']),
    'getTotalUsers' : IDL.Func([], [IDL.Nat], ['query']),
    'getUserDetails' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(UserProgressType)],
        ['query'],
      ),
    'getWeeklyUsers' : IDL.Func([], [IDL.Vec(IDL.Nat)], ['query']),
    'logInUser' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'updateUsername' : IDL.Func([IDL.Principal, IDL.Text], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
