function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let [nums1Pointer,nums2Pointer,zerosPointer] = [(m-1),n-1,(m+n-1)]

    while(nums2Pointer >=0){ 
        if(nums1[nums1Pointer] > nums2[nums2Pointer]){
            [nums1[zerosPointer],nums1[nums1Pointer]] = [nums1[nums1Pointer],nums1[zerosPointer]]
            nums1Pointer--;
        }else{ 
            nums1[zerosPointer] = nums2[nums2Pointer];
            nums2Pointer--;
        }
        zerosPointer--;
    }

}

