import Float "mo:base/Float";

module {
    type DifficultyPoints = {
    easy: Nat;    
    medium: Nat;   
    hard: Nat;    
    };

    public let difficultyPoints: DifficultyPoints = {
        easy = 3;      // Easy challenge için 3 puan
        medium = 7;    // Medium challenge için 7 puan
        hard = 11;     // Hard challenge için 11 puan
    };

    
public func calculateRating(difficulty: Text, attempts: Nat): Float {
    let points: Nat = switch (difficulty) {
        case "easy" { difficultyPoints.easy };
        case "medium" { difficultyPoints.medium };
        case "hard" { difficultyPoints.hard };
        case _ { 0 }; // Geçersiz zorluk seviyesi için 0 puan
    };
    
    
    let rawRating = Float.fromInt(points) / Float.fromInt(attempts);
    return Float.floor(rawRating);

};
};
