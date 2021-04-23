// node 节点类
function node(val){
    let self = this

    self.left = null;
    self.right = null;
    self.val = val;

	// 插入（更新）节点
    self.insert = function(kind, node){
        if(kind == 'left'){
            self.left = node
        } else { 
            self.right = node
        }
    }
}
// 懒人创建一棵树
function createTree(){
    let head = new node('A');
    let nodeB = new node('B');
    let nodeC = new node('C');
    let nodeD = new node('D');
    let nodeE = new node('E');
    let nodeF = new node('F');
    let nodeG = new node('G');
    let nodeH = new node('H');
    let nodeI = new node('I');
    head.left = nodeB;
    head.right = nodeC;
    nodeB.left = nodeD;
    nodeC.left = nodeE;
    nodeC.right = nodeF;
    nodeD.left = nodeG;
    nodeD.right = nodeH;
    nodeE.left = nodeI

    return head;
}
// 创建的一棵树
let tree = createTree();

// 二叉树类
function BinaryTree(head){
    let self = this;
    self.head = head;

	//前序遍历
    self.PreTreeSort = function(head = self.head){
        if(!head){ return ;}
        console.log(head.val);
        self.PreTreeSort(head.left)
        self.PreTreeSort(head.right)
    }

	//中序遍历
    self.InTreeSort = function(head = self.head){
        if(!head){ return ;}
        self.InTreeSort(head.left)
        console.log(head.val);
        self.InTreeSort(head.right)
    }

	//后序遍历
    self.PostTreeSort = function(head = self.head){
        if(!head){ return ;}
        self.PostTreeSort(head.left)
        self.PostTreeSort(head.right)
        console.log(head.val);
    }

	//深度优先遍历
    self.DFS = function(head = self.head){
        let stack = [];
        stack.push(head);

        while(stack.length != 0){
            let node = stack.pop();
            console.log(node.val);
            if(node.right){
                stack.push(node.right)
            }
            if(node.left){
                stack.push(node.left)
            }
        }
    }

	//广度优先遍历
    self.BFS = function(head = self.head){
        let queue = [];
        queue.push(head);
        while(queue.length != 0){
            let node = queue.shift();
            console.log(node.val);
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }
}
// 用创建的树去调用二叉树的遍历方法
let bTree = new BinaryTree(tree);
console.log(createTree())