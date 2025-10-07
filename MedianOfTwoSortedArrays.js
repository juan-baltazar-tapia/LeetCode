// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//ALeft   ARight
//[1,2,3 ,4,5,6]
//BLEft    BRight
//[3,4,5, 6,7,8]
//           
// Find the smaller array (A)
// Find the total
// Find half
// Goal is to find left partition and right partition
// initialize pointers
// Finding middle of A, take half - Apointer (i) = index of Bpointer(j)
//Find Aleft = A[i] > 0 ? A[i] : Number.MIN_SAFE_INTEGER
//Find ARight = 
//Find BLEft = B[i]
//Find BRight = 

//If ALeft <= Bright and BLeft <= ARight
//     if even: return max(lefts) + min(rights) / 2
//     else: return min(rights)
// else if: ALeft >= BRight  Aleft has too many numbers, be reduce
//      l = Apoiner + 1
// else:
//      r = Apointer - 1
var findMedianSortedArrays = function (nums1, nums2) {
    A = nums1;
    B = nums2;
    if (B.length < A.length) {
        [A, B] = [B, A];
    }
    total = A.length + B.length
    half = Math.floor(total / 2)
    console.log('half', half)
    console.log('A', A, 'B', B);
    while (true) {
        l = 0;
        r = A.length - 1;
        i = Math.floor((l + r) / 2);
        j = half - i;
        console.log('i', i, 'j', j);
        Aleft = A[i] > 0 ? A[i] : Number.MIN_SAFE_INTEGER;
        Aright = i < A.length ? A[i + 1] : Number.MAX_SAFE_INTEGER;
        Bleft = B[i] > 0 ? B[i] : Number.MIN_SAFE_INTEGER;
        Bright = i < B.length ? B[i + 1] : Number.MAX_SAFE_INTEGER;
        console.log('Aleft', Aleft, 'Aright', Aright, 'Bleft', Bleft, 'Bright', Bright);
        //Find Aleft = A[i] > 0 ? A[i] : Number.MIN_SAFE_INTEGER
        //Find ARight = 
        //Find BLEft = B[i]
        //Find BRight = 
        if (Aleft <= Bright && Aleft <= Aright) {
            if (total % 2 === 0) {
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
            } else {
                return Math.min(Aright, Bright)
            }
        }
        else if (Aleft > Bright) {
            console.log('update l')
            l = i + 1;
        } else {
            console.log('update r')
            r = i - 1;
        }
      
    }
};
console.log(findMedianSortedArrays([1, 3], [2])) //2.00
console.log(findMedianSortedArrays([1, 2], [3, 4])) //2.50
//                                    total = 7, middle index = floor(m/2)
console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6, 7]))