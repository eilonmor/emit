interface keydown{
    obj : { key: string };
}

class Subscription{
    logkeydown(event: { key: string; }){
        console.log(`keyborad pressed: ${event.key}`)
    }
    alertkeydown(event){
        alert(`keyborad pressed: ${event.key}`)
    }
}

class Emit extends Subscription{
    constructor(){
        super();  
    }
    emit(keydown,obg){
        let listOfFunction = [this.logkeydown, this.alertkeydown];
        for (const iterator of listOfFunction) {
            iterator(keydown.obg)            
        }
    }
    
}


class EventEmitter extends Emit{
    unsubscribe(){
        return
    }
}
