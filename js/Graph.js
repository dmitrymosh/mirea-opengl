/*
 0 -- 1 -- 2 -- 3 -- 4 -- 5
 |              |         |
 6 -- 7    8    9 -- 10   11
      |    |    |         |
 12   13-- 14   15-- 16   17
 |    |         |    |    |
 18-- 19-- 20-- 21   22-- 23

*/

var arr = [
   //0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  //0
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  //1
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  //2
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  //3
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  //4
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  //5
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  //6
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],  //8
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],  //9
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  //10
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],  //11
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],  //12
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],  //13
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  //14
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],  //15
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],  //16
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],  //17
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],  //18
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],  //19
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],  //20
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],  //21
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],  //22
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],  //23
    
];

arr2 = [
    [ { id: 1, path: 1 }, { id: 6, path: 1 } ], //0
    [ { id: 0, path: 1 }, { id: 2, path: 1 } ], //1
    [ { id: 1, path: 1 }, { id: 3, path: 1 } ], //2
    [ { id: 2, path: 1 }, { id: 4, path: 1 }, { id: 9, path: 1 } ], //3
    [ { id: 3, path: 1 }, { id: 5, path: 1 } ], //4
    [ { id: 4, path: 1 }, { id:11, path: 1 } ], //5
    [ { id: 0, path: 1 }, { id: 7, path: 1 } ], //6
    [ { id: 6, path: 1 }, { id:13, path: 1 } ], //7
    [ { id:14, path: 1 } ], //8
    [ { id: 3, path: 1 }, { id:10, path: 1 }, { id:15, path: 1 } ], //9
    [ { id: 9, path: 1 }, ], //10
    [ { id: 5, path: 1 }, { id:17, path: 1 } ], //11
    [ { id:18, path: 1 } ],  //12
    [ { id: 7, path: 17 }, { id:14, path: 1 }, { id:19, path: 1 } ],  //13
    [ { id:13, path: 1 }, { id: 8, path: 1 }], //14
    [ { id: 9, path: 1 }, { id:16, path: 1 }, { id:21, path: 1 } ], //15
    [ { id:15, path: 1 }, { id:22, path: 1 } ], //16
    [ { id:11, path: 1 }, { id:23, path: 1 } ], //17
    [ { id:12, path: 1 }, { id:19, path: 1 } ], //18 
    [ { id:13, path: 1 }, { id:18, path: 1 }, { id:20, path: 1 } ],  //19
    [ { id:19, path: 1 }, { id:21, path: 1 } ], //20
    [ { id:15, path: 1 }, { id:20, path: 1 } ], //21
    [ { id:16, path: 1 }, { id:23, path: 1 } ], //22
    [ { id:17, path: 1 }, { id:22, path: 1 } ]  //23
];

function graph(AdjMatrix) 
{    
    var self = this;
    this.VertexArr = []; // массив событий ( вершин графа )
	this.AdjMatrix = AdjMatrix;
    CleanUp();
    
    
    function CleanUp(){
        for(var j = 0; j < self.AdjMatrix.length; j++) {
            self.VertexArr[j] = {
                path : -1,
                id : j,
				parent : -1
            }
        }
    }
    
    this.CalcPathAdjMatrix = function(a,b) 
    {
        var CurrentPath = 0;  // текущее значение пути
        var PastStateArr = []; // сюда попадают события, уже пройденного пути
		var FutureStateArr = []; // сюда попадают события, ещё не произошедшие
		if(a < 0 || b < 0 || a >= self.VertexArr.length || b >= self.VertexArr.length){
			return null;
		}
		FutureStateArr.push(self.VertexArr[a]); // задаём начальную точку
		self.VertexArr[a].path = 0;
		//console.log(FutureStateArr);
		var end = 0;
        while(!end) {
            // добавляем в массив FutureStateArr все пересечения с текущей вершиной
            // повторяем для всех событий в массиве FutureStateArr со значениеь VertexArr[].path==CurrentPath
            while((FutureStateArr.length > 0) && (FutureStateArr[0].path == CurrentPath)){
                var CurrentId = FutureStateArr[0].id;
                for(var i = 0; i < self.AdjMatrix.length; i++){
                    if(self.AdjMatrix[CurrentId][i] !== 0) {
                        if(self.VertexArr[i].path == -1) {
                          self.VertexArr[i].path = CurrentPath + self.AdjMatrix[CurrentId][i];
						  self.VertexArr[i].parent = CurrentId;
                          FutureStateArr.push(self.VertexArr[i]); // добавляем событие 
                        }
                    }
                }
                //console.log(FutureStateArr.length);
                // перемещаем текущее событие в массив прошедших событий
                PastStateArr.push(FutureStateArr.shift()); 
                if(CurrentId == b) {
                  end = 1;
                  break;
                }
            }        
            // сортируем массив будующих событий
            FutureStateArr.sort(compareArr); 
            //console.log(FutureStateArr.length);
            if(FutureStateArr.length > 0){
              CurrentPath = FutureStateArr[0].path;
            } else {
              break;
            }
            
        }		
		var Result = [];
        if(end){			
            // если путь найден собираем массив результата (находим единственный путь)
			var t = PastStateArr.length - 1;
			Result.push(PastStateArr[t]);
			while(PastStateArr[t].parent != -1){
				for(var ii = 0; ii < PastStateArr.length; ii++){
					if(PastStateArr[t].parent == PastStateArr[ii].id){
						t = ii;
					}			    
				}
				Result.push(PastStateArr[t]);
			}			
        }
        
        CleanUp();
		Result.reverse();
        return Result;
    };
	
	this.CalcPathSimpleMatrix = function(a,b) 
    {
        var CurrentPath = 0;  // текущее значение пути
        var PastStateArr = []; // сюда попадают события, уже пройденного пути
		var FutureStateArr = []; // суда попадают события, ещё не произошедшие
		FutureStateArr.push(self.VertexArr[a]); // задаём начальную точку
		self.VertexArr[a].path = 0;
		//console.log(FutureStateArr);
		var end = 0;
        while(!end) {
            // добавляем в массив FutureStateArr все пересечения с текущей вершиной
            // повторяем для всех событий в массиве FutureStateArr со значениеь VertexArr[].path==CurrentPath
            while((FutureStateArr.length > 0) && (FutureStateArr[0].path == CurrentPath)){
                var CurrentId = FutureStateArr[0].id;
                for(var i = 0; i < self.AdjMatrix[CurrentId].length; i++){
					var j = self.AdjMatrix[CurrentId][i].id;
					if(self.VertexArr[j].path == -1) {
					  self.VertexArr[j].path = CurrentPath + self.AdjMatrix[CurrentId][i].path;
					  self.VertexArr[j].parent = CurrentId;
					  FutureStateArr.push(self.VertexArr[j]); // добавляем событие 
					}
                }
                //console.log(FutureStateArr.length);
                // перемещаем текущее событие в массив прошедших событий
                PastStateArr.push(FutureStateArr.shift()); 
                if(CurrentId == b) {
                  end = 1;
                  break;
                }
            }        
            // сортируем массив будующих событий
            FutureStateArr.sort(compareArr); 
            //console.log(FutureStateArr.length);
            if(FutureStateArr.length > 0){
              CurrentPath = FutureStateArr[0].path;
            } else {
              break;
            }
            
        }		
        var Result = [];
        if(end){			
            // если путь найден
			var t = PastStateArr.length - 1;
			Result.push(PastStateArr[t]);
			while(PastStateArr[t].parent != -1){
				for(var ii = 0; ii < PastStateArr.length; ii++){
					if(PastStateArr[t].parent == PastStateArr[ii].id){
						t = ii;
						break;
					}			    
				}
				Result.push(PastStateArr[t]);				
			}			
        }
        //console.log(PastStateArr);
        // удалить ненужные вершины
        
        CleanUp();
		Result.reverse();
        return Result;
        
    };
    function compareArr(a, b) 
    { // обратная сортировка
        if (a.path > b.path) return 1; 
        else if (a.path < b.path) return -1;
        else return 0;
    }
	
}
// test AdjMatrix
//var g = new graph(arr);
//console.log(g.VertexArr[5]);
//var t = g.CalcPathAdjMatrix(0,23);
//console.log(t);

// test SimpleMatrix
var gg = new graph(arr2);
t = gg.CalcPathSimpleMatrix(8,0);
console.log(t);