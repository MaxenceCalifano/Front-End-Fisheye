class TotalLikes {
    constructor(total) {
        this._total = total;
    }
     increment() {
        this._total ++ ;
        this.result
    }
     decrement() {
        this._total -- ;
        this.result
    }
    result() {
        return this._total
    }
}

export { TotalLikes }