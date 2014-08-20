define(['models/card'], function(card) {

    var cards = [
        
new card("Question:", "1 X 1", "Answer:", "1"),
new card("Question:", "1 X 2", "Answer:", "2"),
new card("Question:", "1 X 3", "Answer:", "3"),
new card("Question:", "1 X 4", "Answer:", "4"),
new card("Question:", "1 X 5", "Answer:", "5"),
new card("Question:", "1 X 6", "Answer:", "6"),
new card("Question:", "1 X 7", "Answer:", "7"),
new card("Question:", "1 X 8", "Answer:", "8"),
new card("Question:", "1 X 9", "Answer:", "9"),
new card("Question:", "1 X 10", "Answer:", "10"),
new card("Question:", "1 X 11", "Answer:", "11"),
new card("Question:", "1 X 12", "Answer:", "12"),
new card("Question:", "2 X 1", "Answer:", "2"),
new card("Question:", "2 X 2", "Answer:", "4"),
new card("Question:", "2 X 3", "Answer:", "6"),
new card("Question:", "2 X 4", "Answer:", "8"),
new card("Question:", "2 X 5", "Answer:", "10"),
new card("Question:", "2 X 6", "Answer:", "12"),
new card("Question:", "2 X 7", "Answer:", "14"),
new card("Question:", "2 X 8", "Answer:", "16"),
new card("Question:", "2 X 9", "Answer:", "18"),
new card("Question:", "2 X 10", "Answer:", "20"),
new card("Question:", "2 X 11", "Answer:", "22"),
new card("Question:", "2 X 12", "Answer:", "24"),
new card("Question:", "3 X 1", "Answer:", "3"),
new card("Question:", "3 X 2", "Answer:", "6"),
new card("Question:", "3 X 3", "Answer:", "9"),
new card("Question:", "3 X 4", "Answer:", "12"),
new card("Question:", "3 X 5", "Answer:", "15"),
new card("Question:", "3 X 6", "Answer:", "18"),
new card("Question:", "3 X 7", "Answer:", "21"),
new card("Question:", "3 X 8", "Answer:", "24"),
new card("Question:", "3 X 9", "Answer:", "27"),
new card("Question:", "3 X 10", "Answer:", "30"),
new card("Question:", "3 X 11", "Answer:", "33"),
new card("Question:", "3 X 12", "Answer:", "36"),
new card("Question:", "4 X 1", "Answer:", "4"),
new card("Question:", "4 X 2", "Answer:", "8"),
new card("Question:", "4 X 3", "Answer:", "12"),
new card("Question:", "4 X 4", "Answer:", "16"),
new card("Question:", "4 X 5", "Answer:", "20"),
new card("Question:", "4 X 6", "Answer:", "24"),
new card("Question:", "4 X 7", "Answer:", "28"),
new card("Question:", "4 X 8", "Answer:", "32"),
new card("Question:", "4 X 9", "Answer:", "36"),
new card("Question:", "4 X 10", "Answer:", "40"),
new card("Question:", "4 X 11", "Answer:", "44"),
new card("Question:", "4 X 12", "Answer:", "48"),
new card("Question:", "5 X 1", "Answer:", "5"),
new card("Question:", "5 X 2", "Answer:", "10"),
new card("Question:", "5 X 3", "Answer:", "15"),
new card("Question:", "5 X 4", "Answer:", "20"),
new card("Question:", "5 X 5", "Answer:", "25"),
new card("Question:", "5 X 6", "Answer:", "30"),
new card("Question:", "5 X 7", "Answer:", "35"),
new card("Question:", "5 X 8", "Answer:", "40"),
new card("Question:", "5 X 9", "Answer:", "45"),
new card("Question:", "5 X 10", "Answer:", "50"),
new card("Question:", "5 X 11", "Answer:", "55"),
new card("Question:", "5 X 12", "Answer:", "60"),
new card("Question:", "6 X 1", "Answer:", "6"),
new card("Question:", "6 X 2", "Answer:", "12"),
new card("Question:", "6 X 3", "Answer:", "18"),
new card("Question:", "6 X 4", "Answer:", "24"),
new card("Question:", "6 X 5", "Answer:", "30"),
new card("Question:", "6 X 6", "Answer:", "36"),
new card("Question:", "6 X 7", "Answer:", "42"),
new card("Question:", "6 X 8", "Answer:", "48"),
new card("Question:", "6 X 9", "Answer:", "54"),
new card("Question:", "6 X 10", "Answer:", "60"),
new card("Question:", "6 X 11", "Answer:", "66"),
new card("Question:", "6 X 12", "Answer:", "72"),
new card("Question:", "7 X 1", "Answer:", "7"),
new card("Question:", "7 X 2", "Answer:", "14"),
new card("Question:", "7 X 3", "Answer:", "21"),
new card("Question:", "7 X 4", "Answer:", "28"),
new card("Question:", "7 X 5", "Answer:", "35"),
new card("Question:", "7 X 6", "Answer:", "42"),
new card("Question:", "7 X 7", "Answer:", "49"),
new card("Question:", "7 X 8", "Answer:", "56"),
new card("Question:", "7 X 9", "Answer:", "63"),
new card("Question:", "7 X 10", "Answer:", "70"),
new card("Question:", "7 X 11", "Answer:", "77"),
new card("Question:", "7 X 12", "Answer:", "84"),
new card("Question:", "8 X 1", "Answer:", "8"),
new card("Question:", "8 X 2", "Answer:", "16"),
new card("Question:", "8 X 3", "Answer:", "24"),
new card("Question:", "8 X 4", "Answer:", "32"),
new card("Question:", "8 X 5", "Answer:", "40"),
new card("Question:", "8 X 6", "Answer:", "48"),
new card("Question:", "8 X 7", "Answer:", "56"),
new card("Question:", "8 X 8", "Answer:", "64"),
new card("Question:", "8 X 9", "Answer:", "72"),
new card("Question:", "8 X 10", "Answer:", "80"),
new card("Question:", "8 X 11", "Answer:", "88"),
new card("Question:", "8 X 12", "Answer:", "96"),
new card("Question:", "9 X 1", "Answer:", "9"),
new card("Question:", "9 X 2", "Answer:", "18"),
new card("Question:", "9 X 3", "Answer:", "27"),
new card("Question:", "9 X 4", "Answer:", "36"),
new card("Question:", "9 X 5", "Answer:", "45"),
new card("Question:", "9 X 6", "Answer:", "54"),
new card("Question:", "9 X 7", "Answer:", "63"),
new card("Question:", "9 X 8", "Answer:", "72"),
new card("Question:", "9 X 9", "Answer:", "81"),
new card("Question:", "9 X 10", "Answer:", "90"),
new card("Question:", "9 X 11", "Answer:", "99"),
new card("Question:", "9 X 12", "Answer:", "108"),
new card("Question:", "10 X 1", "Answer:", "10"),
new card("Question:", "10 X 2", "Answer:", "20"),
new card("Question:", "10 X 3", "Answer:", "30"),
new card("Question:", "10 X 4", "Answer:", "40"),
new card("Question:", "10 X 5", "Answer:", "50"),
new card("Question:", "10 X 6", "Answer:", "60"),
new card("Question:", "10 X 7", "Answer:", "70"),
new card("Question:", "10 X 8", "Answer:", "80"),
new card("Question:", "10 X 9", "Answer:", "90"),
new card("Question:", "10 X 10", "Answer:", "100"),
new card("Question:", "10 X 11", "Answer:", "110"),
new card("Question:", "10 X 12", "Answer:", "120"),
new card("Question:", "11 X 1", "Answer:", "11"),
new card("Question:", "11 X 2", "Answer:", "22"),
new card("Question:", "11 X 3", "Answer:", "33"),
new card("Question:", "11 X 4", "Answer:", "44"),
new card("Question:", "11 X 5", "Answer:", "55"),
new card("Question:", "11 X 6", "Answer:", "66"),
new card("Question:", "11 X 7", "Answer:", "77"),
new card("Question:", "11 X 8", "Answer:", "88"),
new card("Question:", "11 X 9", "Answer:", "99"),
new card("Question:", "11 X 10", "Answer:", "110"),
new card("Question:", "11 X 11", "Answer:", "121"),
new card("Question:", "11 X 12", "Answer:", "132"),
new card("Question:", "12 X 1", "Answer:", "12"),
new card("Question:", "12 X 2", "Answer:", "24"),
new card("Question:", "12 X 3", "Answer:", "36"),
new card("Question:", "12 X 4", "Answer:", "48"),
new card("Question:", "12 X 5", "Answer:", "60"),
new card("Question:", "12 X 6", "Answer:", "72"),
new card("Question:", "12 X 7", "Answer:", "84"),
new card("Question:", "12 X 8", "Answer:", "96"),
new card("Question:", "12 X 9", "Answer:", "108"),
new card("Question:", "12 X 10", "Answer:", "120"),
new card("Question:", "12 X 11", "Answer:", "132"),
new card("Question:", "12 X 12", "Answer:", "144")


    ];

    return {
        cards: cards
    };
});