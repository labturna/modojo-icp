import Float "mo:base/Float";

module {
    type DifficultyPoints = {
    easy: Nat;    
    medium: Nat;   
    hard: Nat;    
    };

    public let difficultyPoints: DifficultyPoints = {
        easy = 3;      // 3 points
        medium = 7;    // 7 points
        hard = 11;     // 11 points
    };

    
public func calculateRating(difficulty: Text, attempts: Nat): Float {
    let points: Nat = switch (difficulty) {
        case "easy" { difficultyPoints.easy };
        case "medium" { difficultyPoints.medium };
        case "hard" { difficultyPoints.hard };
        case _ { 0 }; 
    };
    
    
    let rawRating = Float.fromInt(points) / Float.fromInt(attempts);
    let finalRating = if (rawRating < 1.0) 1.0 else rawRating;

    return Float.floor(finalRating);

};
};
