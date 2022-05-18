function kClosest(points: number[][], k: number): number[][] {


    let distance= [];
    let answer = [];
    points.forEach((element,index,array)=>{
        distance.push(distanceFromOrigin(element));
    });
    
    distance.sort(function(a,b){return a-b;});
    let distk = distance[k - 1];

     points.forEach((element,index,array)=>{
        if(distanceFromOrigin(element) <= distk)
            answer.push(element);
    });
    
    
    return answer;

};

const  distanceFromOrigin = (point:number[]):number=>Math.sqrt(Math.pow(point[0],2) + Math.pow(point[1],2));
