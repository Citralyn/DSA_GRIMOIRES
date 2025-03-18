import Container from 'react-bootstrap/Container';

export default function Arrays() {
    return(
        <>
        {Array.from(solutions, (sol, i) => (
            <Container className='shadow'>
                <h1 className='text-center'>#{i + 1}: {sol.title}</h1>
                <p className='text-center'>{sol.description}</p>
                <pre className='text-left'>{sol.code}</pre>
                <Container className='w-75 text-center'>
                <p><b>Time Complexity:</b> {sol.time}</p>
                <p><b>Space Complexity:</b> {sol.space}</p>
                </Container>
                
            </Container>
        ))}
        </>
    )
}

const solutions = [
    {
        title: "Rotate Array",
        description: "This one is a fun trick! You can think of it like this. When you rotate the array, the right k elements move to the left, and the left n-k elements move to the right. EX: arr=[1,2,3,4,5,6,7,8,9], k = 2. One way to do this is to simply rotate the array! EX: arr=[9,8,7,6,5,4,3,2,1]. Now all the groups are in the right position. Then, to retain the original order of the number, reverse each group by itself. arr=[9,8,7,6,5,4,3,2,1] -> arr=[8,9,7,6,5,4,3,2,1] -> arr=[8,9,1,2,3,4,5,6,7]. You can write your own reverse function, or use the one from the standard library. The STL reverse function runs in O(1) space, because it iterates through half the range, swapping the first and last element each time. Make sure to mod k by n to avoid a buffer overflow because it’s not guaranteed that k is less than n.",
        code: 
`
class Solution {
public:
   void rotate(vector<int>& nums, int k) {
       k = k % nums.size();


       std::reverse(nums.begin(), nums.end() - k);
       std::reverse(nums.end() - k, nums.end());
       std::reverse(nums.begin(), nums.end());
   }
};
`,  
        time: "O(N) -> Modding k by n is a constant time operation, and we call std::reverse (an O(N) operation) 3 times.",
        space: "O(1) -> std::reverse modifies the original array directly (in-place)"
    },
    {
        title: "Jump Game",
        description: "Say you start at point i. You can now jump to point i + A[i] (that is your cap) and any point in between. As you move from i to i + A[i], if you find a point in between where you can jump farther than your current cap, update the cap. Continue this process until you reach your cap, or your cap hits the end of the array.",
        code: 
`
class Solution {
public:
   bool canJump(vector<int>& nums) {
       int best = 0; // the most you've gotten so far


       int n = nums.size();


       for (int i = 0; i < n && i <= best; i++) {
           // nums[i] + i is the most you can jump
           // can jump at any index before that
           best = max(best, nums[i] + i);
       }


       return best >= n - 1;
   }
};
`,  
        time: "O(N) -> We are iterating through the array once.",
        space: "O(1) -> No extra data structures are needed."
    }
]
