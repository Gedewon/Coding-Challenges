# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.
def merge(nums1, m, nums2, n)

    zeroPosition, nums1Pointer, nums2Pointer = (n+m-1),m-1,n-1
    while nums2Pointer >= 0 

      if nums1[nums1Pointer] > nums2[nums2Pointer] && nums1Pointer >= 0
        nums1[zeroPosition],nums1[nums1Pointer] = nums1[nums1Pointer],nums1[zeroPosition]
          zeroPosition-=1
          nums1Pointer-=1
      else 
           nums1[zeroPosition] = nums2[nums2Pointer]
           zeroPosition -= 1  
           nums2Pointer -= 1 
      end

   end
end

 