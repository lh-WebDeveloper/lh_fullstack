function FarmerNN(n, m ) {
    // write code here
    if(n >= m) {
        let a = new Array(n).fill(0)
        for(let i = 0; i < m; i++) {
            a[i] = a[i] + 1;
        }
        return a;
    } else {
        let a = new Array(n).fill(1)
        let nu = m - n; // 相差数
        let mo = nu % (n-1); // 余数
        let b = parseInt(nu/(n-1));
        let num = (mo == 0?b:b+1);
        console.log(num, mo, a);
        for(let i = 0; i < num; i++) {
            console.log(i, 'lll');
            if(i % 2 == 0) {
                for(let j = n-2; j >= 0 && nu > 0; j--) {
                    a[j] = a[j] + 1;
                    nu--;
                }
            } else {
                console.log(nu, 'nununu')
                for(let j = 1; j < n && nu > 0; j++) {
                    a[j] = a[j] + 1;
                    nu--;
                }
            }
        }
        return a;
    }
    
}
console.log(FarmerNN(4, 6));