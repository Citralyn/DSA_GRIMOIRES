import Spells from "../spells/Spells"

export default function Matrixes() {
    return(
        <>
        <Spells solutions={solutions}/>
        </>
    )
}

const solutions = [
    {
        title: "Game of Life",
        description: "This one is pretty cute. The key idea to this problem is that you want to avoid directly editing the original matrix until the end (or at least, if you do edit it, you do so in a way that keeps track of its original values). There are a few ways to implement a solution. One way to do it, is that you can create a new temporary matrix and update the alive/dead state there, while always counting the neighbors from the original matrix. Then at the end, have the original matrix copy from the temporary matrix. The solution I like (because you can do it in O(1) space), is to give each spot on the board a special marking if it’s alive and then dead, or dead and then alive, and then convert them to their actual values at the end. ",
        code: 
`
class Solution {
public:
   void markNeighbors(vector<vector<int>>& board, int r, int c) {
       int liveNeighbors = 0;


       if (r > 0 && (board[r - 1][c] == 1 || board[r - 1][c] == 3)) {
           liveNeighbors += 1;
       }
       if (r < board.size() - 1 && (board[r + 1][c] == 1 || board[r + 1][c] == 3)) {
           liveNeighbors += 1;
       }
       if (c < board[r].size() - 1 && (board[r][c + 1] == 1 || board[r][c + 1] == 3)) {
           liveNeighbors += 1;
       }
       if (c > 0 && (board[r][c - 1] == 1 || board[r][c - 1] == 3)) {
           liveNeighbors += 1;
       }


       if (r > 0 && c > 0 && (board[r - 1][c - 1] == 1 || board[r - 1][c - 1] == 3)) {
           liveNeighbors += 1;
       }


       if (r < board.size() - 1 && c > 0 && (board[r + 1][c - 1] == 1 || board[r + 1][c - 1] == 3)) {
           liveNeighbors += 1;
       }


       if (r > 0 && c < board[r].size() - 1 && (board[r - 1][c + 1] == 1 || board[r - 1][c + 1] == 3)) {
           liveNeighbors += 1;
       }


       if (r < board.size() - 1 && c < board[r].size() - 1 && (board[r + 1][c + 1] == 1 || board[r + 1][c + 1] == 3)) {
           liveNeighbors += 1;
       }


       if (liveNeighbors < 2 || liveNeighbors > 3) {
           if (board[r][c] == 1) {
               board[r][c] = 3;
           }
       }


       if (liveNeighbors == 3) {
           if (board[r][c] == 0) {
               board[r][c] = 2;
           }
       }
   }
    
   void gameOfLife(vector<vector<int>>& board) {
       // if dead and dead -> mark 0
       // if alive and alive -> mark 1
       // if dead -> but then alive -> mark 2
       // if alive -> but then dead -> mark 3


       // iterate through (checking which neighbors are
       // 0 or 2, or 1 or 3)


       // two iterations of the matrix


       for (int i = 0; i < board.size(); i++) {
           for (int j = 0; j < board[i].size(); j++) {
               markNeighbors(board, i, j);
           }
       }


       for (int i = 0; i < board.size(); i++) {
           for (int j = 0; j < board[i].size(); j++) {
               if (board[i][j] == 2) {
                   board[i][j] = 1;
               }
               if (board[i][j] == 3) {
                   board[i][j] = 0;
               }
           }
       }
   }
};
`,  
        time: "O(N*M) -> N is the number of rows, M is the number of columns, doing this iteration twice ",
        space: "O(1) -> Board is modified in place "
    }
]
