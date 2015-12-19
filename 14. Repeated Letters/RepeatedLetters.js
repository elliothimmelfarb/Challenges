function wordSelector(str) {
    
    // security for non-string input
    if (Object.prototype.toString.call(str) !== '[object String]') {
        return "Error: wordSelector reguires a string input";
    }
    
    // split and remove non-words
    var wordArray = str.match(/[a-z]+/ig);
    
    // repeat counter to pass all words through
    function repeatCounter(word) {
        
        /*
        // store repeated letters in a string to easily search with .indexOf
        var repeatedLetters = "";
        
        // store number of repeats
        var repeatsNum = 0;
        
        // check each char in word
        for (var i = 0; i < word.length; i++) {
            
            // against each other char in word
            for (var j = 0; j < word.length; j++) {
                
                // if the indexes are the same, skip to next index
                if (i === j) {
                    j ++;
                }
                
                // if chars match and are not found in the repeatedLetters string
                if (word.charAt(i) === word.charAt(j) && repeatedLetters.indexOf(word.charAt(i)) === -1) {
                    
                    // add char to to repeatedLetters string
                    repeatedLetters += word.charAt(i);
                    
                    //increment repeats counter
                    repeatsNum++;
                }
            }
        }
        
        */
        
        
        
        // return the number of repeats found
        return repeatsNum;
    }
    
    // Array to hold words with highest repeats
    var highestRepeats = [];
    
    // keep track of current threshold for number of repeats necessary to be held in highestRepeats
    var threshold = 1;
    
    // iterate through wordArray
    for (var i = 0; i < wordArray.length; i++) {
        
        // store number of repeats through repeatCounter function
        var repeats = repeatCounter(wordArray[i]);
        
        // if number of repeats beats the threshold
        if (repeats > threshold) {
            highestRepeats = []; // clear return array
            highestRepeats.push(wordArray[i]); // push current word
            threshold = repeats; // update threshold
        }
        
        // if repeats matches threshold
        else if (repeats === threshold) {
            highestRepeats.push(wordArray[i]); // push current word
        }
    }
    
    return highestRepeats;
}

console.log(wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale"));