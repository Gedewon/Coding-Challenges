function kClosest(points: number[][], k: number): number[][] {


    let distance= [];
    let answer = [];
    points.forEach((point)=>{
        distance.push(distanceFromOrigin(point));
    });
    // n
    
    distance.sort((a,b)=>a-b); //nlogn
    let lastMinmumValue = distance[k - 1];

     points.forEach((point)=>{
        if(distanceFromOrigin(point) <= lastMinmumValue)
            answer.push(point);
     });
    
    //n
    
    
    return answer;

};
//hash have search and insertion of o(1)
//in best case but run same in worst case as of before
function kClosestwithHash(points, k){
    // breaking point
        if(k == points.length) return points;
    // {
    //   distance => [index..]
    // }
        let pointsMap = new Map();
    
        let middleValue;
        // distance from [] => #distance
        let distanceFromTheOrigin = points.map((element,index)=>{
            middleValue = Math.sqrt(Math.pow(element[0],2)+Math.pow(element[1],2));
            if(pointsMap.has(middleValue)){
            pointsMap.set(middleValue,[...pointsMap.get(middleValue),index])
            }else{
            pointsMap.set(middleValue,[index])
            }
            return  middleValue;
        });
        // sort the points in increase orders
        distanceFromTheOrigin.sort((a,b)=>a-b);
    
        let closestArrayFromTheOrigin =[];
        for(let i =0;i<k;i++){
          console.log(pointsMap.get(distanceFromTheOrigin[i]));
            console.log(pointsMap.get(distanceFromTheOrigin[i]).unshift());
            closestArrayFromTheOrigin.push(points[pointsMap.get(distanceFromTheOrigin[i]).shift()])
        }
    
    
        return closestArrayFromTheOrigin;
    };

const  distanceFromOrigin = (point:number[]):number=>Math.sqrt(Math.pow(point[0],2) + Math.pow(point[1],2));