export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const UserProgressType = IDL.Record({
    'completedChallengeCount' : IDL.Nat,
    'completedChallenges' : IDL.Vec(IDL.Text),
    'score' : IDL.Float64,
    'registrationDate' : Time,
  });
  return IDL.Service({
    'completeChallenge' : IDL.Func(
        [IDL.Principal, IDL.Text, IDL.Text, IDL.Bool],
        [IDL.Bool],
        [],
      ),
    'debugAllProgress' : IDL.Func([], [], []),
    'getAllUsersDetails' : IDL.Func([], [IDL.Vec(UserProgressType)], ['query']),
    'getMonthlyUsers' : IDL.Func([], [IDL.Vec(IDL.Nat)], ['query']),
    'getTotalUsers' : IDL.Func([], [IDL.Nat], ['query']),
    'getUserDetails' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(UserProgressType)],
        ['query'],
      ),
    'getWeeklyUsers' : IDL.Func([], [IDL.Vec(IDL.Nat)], ['query']),
    'logInUser' : IDL.Func([IDL.Principal], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
