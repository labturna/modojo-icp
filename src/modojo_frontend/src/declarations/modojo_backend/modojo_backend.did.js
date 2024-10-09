export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'completeChallenge' : IDL.Func([IDL.Principal, IDL.Text], [IDL.Bool], []),
    'debugAllProgress' : IDL.Func([], [], []),
    'getCompletedChallenges' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(IDL.Text)],
        ['query'],
      ),
    'getMonthlyUsers' : IDL.Func([], [IDL.Vec(IDL.Nat)], ['query']),
    'getTotalUsers' : IDL.Func([], [IDL.Nat], ['query']),
    'getWeeklyUsers' : IDL.Func([], [IDL.Vec(IDL.Nat)], ['query']),
    'isChallengeCompleted' : IDL.Func(
        [IDL.Principal, IDL.Text],
        [IDL.Bool],
        ['query'],
      ),
    'logInUser' : IDL.Func([IDL.Principal], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
