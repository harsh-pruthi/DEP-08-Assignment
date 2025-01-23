/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    
    let rowCount = new Array(grid.length).fill(0);
    let colCount = new Array(grid[0].length).fill(0);

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j]){
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    let totalServers = 0;

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j] && (rowCount[i]>1||colCount[j]>1)){
                totalServers++;
            }
        }
    }

    return totalServers;

};