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


var isPalindrome = function(head) {
     let a = head;
     let b =[]
     while(a !=null){
         b.push(a.val)
         a = a.next
     }
     let left=0
     let right =b.length-1
     while(left<right){
         if(b[left] != b[right]){
             return false
         }
         left++
         right--
     }
     return true
};
console.log(isPalindrome(n1))