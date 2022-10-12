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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(!head.next)return null;
   
    let [slowPointer,fastPointer] = [head,head];
    
    for(let i =0 ;i< n;i++)fastPointer= fastPointer.next;
    
    //remove the head node
    if(!fastPointer)return head.next;
    
    while(fastPointer.next !== null){
        slowPointer=slowPointer.next;
        fastPointer=fastPointer.next;
    }
    
    //remove
     slowPointer.next = slowPointer.next.next; 
    
    return head;
};
