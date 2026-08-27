const bgzmCore = extend(CoreBlock, "biograft-zeta-mobile-core", {
canPlaceOn(tile, team, rotation){
        return true;
    },
    canReplace(other){
        if(other instanceof CoreBlock) return true;
        return this.super$canReplace(other);
    },
    canBreak(tile, team){
    	return true;
    },
})

const bgbmCore = extend(CoreBlock, "biograft-beta-mobile-core", {
canPlaceOn(tile, team, rotation){
        return true;
    },
    canReplace(other){
        if(other instanceof CoreBlock) return true;
        return this.super$canReplace(other);
    },
    canBreak(tile, team){
    	return true;
    },
})
