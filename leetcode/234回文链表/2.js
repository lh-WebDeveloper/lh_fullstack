function isPalindrome(val){
    this.val =val;
    this.next =null;
}

const n1 = new isPalindrome([0,0]);
const n2 = new isPalindrome(2);
const n3 = new isPalindrome(3);
const n4 = new isPalindrome(4);
const n5 = new isPalindrome(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;


/**
  *
  */
 var isPalindrome = function(head) {
    let left = head;
    function traverse(right) {
        if (right == null) return true;
        let res = traverse(right.next);
        res = res && (right.val === left.val);
        left = left.next;
        return res;
    }
    return traverse(head);
};
console.log(isPalindrome(n1))

