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

function deleteDuplicates(head: ListNode | null): ListNode | null {
   if(!head)return null;
    
    const dumy_node = new ListNode(-1,head);
    let current_node = dumy_node;
    
    while(head.next !== null){
        // there is duplicant
        if(head.next && head.val === head.next.val){
            
            while(head.next && head.next.val == head.val){
                head = head.next;
            }
            
            current_node.next = head.next;
        }else{
            current_node = current_node.next ;
            // head = head.next;
        }
       
        head =  head.next;
    }
    
    
    return dumy_node.next;
};




/*


 dumyNode -> 1

 if 

 1-1-1-2-3
 
 left, right 



**/


