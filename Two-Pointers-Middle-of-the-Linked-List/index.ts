/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    if(!head)return null; 
    
    let [leftPointer,rightPointer] = [head,head]
    
     while(rightPointer && rightPointer.next){
         leftPointer = leftPointer.next;
         rightPointer = rightPointer.next.next;
     }
    
    return leftPointer;
};
