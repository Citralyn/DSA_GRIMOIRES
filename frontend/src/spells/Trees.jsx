import Spells from "../spells/Spells"

export default function Trees() {
    return(
        <>
        <Spells solutions={solutions}/>
        </>
    )
}

const solutions = [
    {
        title: "Maximum Depth of a Binary Tree",
        description: " Given the root of a binary tree, I’m supposed to return the maximum depth. The solution is to recursively call the function on the left child and right child trees and store their returned values. You return if the node hits a nullptr (at that point return 0), and then it fills the value at that level. For each level, once the values bubble up to the node, all we need to do is compare the two values from each child. So each leaf node will return 0, and each node with at least 1 child will have two values to compare (its left and right).",
        code: 
`
class Solution {
public:
   int maxDepth(TreeNode* root) {
       if (root == nullptr) {
           return 0;
       }


       int leftDepth = maxDepth(root->left);
       int rightDepth = maxDepth(root->right);


       return 1 + max(leftDepth, rightDepth);
   }
};
`,  
        time: "O(N) -> we visit each node once ",
        timeComp: "x",
        space: "Depends on the number of function calls (the memory it takes up on the call stack). In this case it would be O(H) where H is the height of the tree."
    },
    {
        title: "Lowest Common Ancestor ",
        description: "This problem was initially not intuitive to me, but the solution is actually quite simple. For this problem, given a binary tree and two nodes p and q, you’re supposed to find the LCA such that p and q both share that parent root. The idea for this one is you’re supposed to search the entire tree until you find either a leaf (you reach nullptr) or one of the given nodes (use DFS in this instance). If the root does ever reach one of those values, it can return the value (effectively bubbling up to where it was originally called). I initially messed up the recursiveness of this solution so I’m going to do a little rant on how recursion works in this problem. The general scenario for this function is the root is not going to immediately be nullptr, p, or q, so it’s going to skip the base case and jump to recursively calling the function on its left and right subtrees. Once the root does reach p, q, or nullptr, it’ll return back to the original function call and store its value in either leftnode or rightnode (depending on which subtree it was called on). After leftnode and rightnode are compared, the preferred value here will then be returned to the function call with the original root (which called the function recursively on root->left and root->right). The value will bubble up until the very first call (when root was its original value). ",
        code: 
`
class Solution {
public:
   TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
       // base cases -> stop when root is nullptr or desired target
       if (root == nullptr || root == p || root == q) {
           return root;
       }


       // search left and right subtrees (good to write recursive calls first before base cases imo)
       TreeNode* leftnode = lowestCommonAncestor(root->left, p , q);
       TreeNode* rightnode = lowestCommonAncestor(root->right, p , q);


       // now either p, q, or a nullptr is returned. What to do with it?
       if (leftnode && rightnode) {
           return root; // both a p and q are child nodes (or have bubbled up) so direct parent is LCA
       }
       return leftnode ? leftnode : rightnode;
       // not both values? Return the one that is (if there is one)
   }
};
`,  
        time: "O(N) -> worst case, we search the entire tree",
        timeComp: "x",
        space: "O(H) -> The memory space for this problem is determined by the max number of function calls on the call stack, which is limited by the height of the tree (H). H could be as big as N, potentially."
    }
]
