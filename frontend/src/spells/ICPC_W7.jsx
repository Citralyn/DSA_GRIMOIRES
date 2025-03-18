import Spells from "../spells/Spells"

export default function W7() {
    return(
        <>
        <Spells solutions={solutions}/>
        </>
    )
}

const solutions = [
    {
        title: "Palindrome Dance",
        description: "It’s a pretty simple problem and I didn’t look at a tutorial, so I’ll explain the general solution. Basically iterate through the array, comparing one side to its equivalent counterpart (aka nums[i] to nums[n - i - 1]). If the value is 2 on either side, that suit has not been bought, so you can buy the suit that matches the other side (or whichever suit is cheaper if the other side also has not bought a suit). Afterwards, you can check if at any point a suit that has been bought does not match its counterpart (returning -1 if so).",
        code: 
`
#include <iostream>
#include <vector>
 
using namespace std;
 
int main()
{
   //freopen("input.txt", "r", stdin);
  
   int n, a, b;
  
   cin >> n >> a >> b;
  
   vector<int> nums;
  
   for (int i = 0; i < n; i++) {
       int x; cin >> x;
       nums.push_back(x);
   }
  
   int ans = 0;
  
   for (int i = 0; i < n; i++) {
      
       if (nums[i] == 2) {
           if (nums[n - i - 1] == 0) {
               nums[i] = 0;
               ans += a;
           } else if (nums[n - i - 1] == 1) {
               nums[i] = 1;
               ans += b;
           } else {
               nums[i] = 3; nums[n - i - 1] = 3;
               if (n%2 == 1 && i == n / 2) {
                   ans += min(a, b);
               } else {
                   ans += 2 * min(a, b);
               }
           }
       }
   }
  
   for (int i = 0; i < n / 2; i++) {
       if (nums[i] != nums[n - i - 1]) {
           ans = -1;
       }
   }
  
   std::cout << ans;
 
   return 0;
}

`,  
        time: "O(N). You iterate through the array twice, adjusting elements in constant time if needed.",
        space: "O(N) for storing the input in a vector"
    },
    {
        title: "Make Equal With Mod",
        description: "I love this one because I think it’s the first 1200 that I was able to solve on the first try just by thinking through all the edge cases and applying what I know of number theory and modulus rules. Basically, you’re trying to make all the numbers the same by modding them all by some x some amount of times. Since any number modded by itself is zero, and any number modded by a greater number is the original number, you’re essentially guaranteed that any array can eventually be an array of all zeroes if you mod each element in the array by its current highest each time. However there’s a catch - x (the number you’re modding with) has to be greater than 1. The original solution won’t work if the array has a 1 in it. In this case, we’ll see if we can end up with an array of only 1’s, which we can do as long as there are no two elements that are sequential (1 away from each other), as modding one number “a” by (a - 1) would result in both a 1 and a 0 in the array which can’t be further modded down.",
        code: 
`
#include <iostream>
#include <vector>
#include <unordered_set>
 
using namespace std;
 
void solve() {
   int n;
   cin >> n;
  
   vector<int> v;
  
   for (int i = 0; i < n; i++) {
       int x; cin >> x;
       v.push_back(x);
   }
  
   bool no_ones = true;
  
   // check if no ones
   for (int i = 0; i < n; i++) {
       if (v[i] == 1) {
           no_ones = false;
           break;
       }
   }
  
   bool all_ones = true;
  
   // check if all ones
   for (int i = 0; i < n; i++) {
       if (v[i] != 1) {
           all_ones = false;
           break;
       }
   }
  
   bool all_clear = true;
  
   // check if there's an a such that a = b + 1
   unordered_set<int> s;
  
   for (int i = 0; i < n; i++) {
       if (s.count(v[i] + 1) == 1 || s.count(v[i] - 1) == 1) {
           all_clear = false;
           break;
       }
       s.insert(v[i]);
   }
  
   if (no_ones || all_ones || all_clear) {
       std::cout << "YES" << endl;
   } else {
       std::cout << "NO" << endl;
   }
}
 
int main()
{
   //freopen("input.txt", "r", stdin);
   int t; cin >> t;
   while(t--) {
       solve();
   }
  
  
  
   return 0;
}

`,  
        time: "O(N), you iterate through the array a few times.",
        space: "O(N) for storing the input in a vector"
    }
]
