function kClosest(points: number[][], k: number): number[][] {


    let distance= [];
    let answer = [];
    points.forEach((point)=>{
        distance.push(distanceFromOrigin(point));
    });
    
    distance.sort((a,b)=>a-b);
    let lastMinmumValue = distance[k - 1];

     points.forEach((point)=>{
        if(distanceFromOrigin(point) <= lastMinmumValue)
            answer.push(point);
    });
    
    
    return answer;

};

const  distanceFromOrigin = (point:number[]):number=>Math.sqrt(Math.pow(point[0],2) + Math.pow(point[1],2));