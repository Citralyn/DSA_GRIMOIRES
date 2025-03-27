import Spells from "../spells/Spells"

export default function DP() {
    return(
        <>
        <Spells solutions={solutions}/>
        </>
    )
}

const solutions = [
    {
        title: "Word Break",
        description: "I don’t like the recursive solution, or more so, the recursive solution confuses me when I try to implement it myself, so I’m just going to yap about the iterative solution. Essentially, you are iterating through the string s, and at each segment of the string you’re checking if that segment is equal to any of the words in the wordDict. How to know if it’s a potential word? A substring is a potential word if at a point i in a string, the substring of s from the starting position (i - (the length of the word)) to i is equal to the word, and the string s before that point has been confirmed to be made of valid words. The iterative checking is pretty straightforward; it's the confirmation that the prior string is valid that requires (or at least is optimized by) dynamic programming. Every time you’ve found a new word from (i - word_length) to i, you can mark that spot as valid in some sort of dp array/vector, i.e., dp[i] = true; Then, every time you need to confirm a prior string is valid, you can just if you’ve marked it (dp[i-word_length]). For the very first word, (s[i-word_length]) is going to be the start of the string, so you can mark dp[0] initially. Finally, just return dp[n] (if you found a solution it should be true, else it should be false assuming you initialized dp to be all false at the start).",
        code: 
`
class Solution {
public:
   bool wordBreak(string s, vector<string>& wordDict) {
       int n = s.length();


       vector<int> dp(n + 1, false);
       dp[0] = true;


       for (int i = 1; i <= n; i++) {
           for (auto word : wordDict) {
               int length = i - word.length();
               if (length >= 0 && dp[length]) {
                   if (s.substr(length, word.length()) == word) {
                       dp[i] = true;
                   }
               }
           }
       }


       return dp[n];
   }
};
`,  
        time: "O(N*W), where N is the length of the string s and W is the number of words in the word_dict.",
        timeComp: "x^2",
        space: "O(N) for your DP array"
    }
]
