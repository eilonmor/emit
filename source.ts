
class EventEmitter{
    private events: { [event: string]: Function[] } = {};

    
    public subscribe(keydown:string, func:Function): { unsubscribe: () => void } {
    if (!this.events[keydown]) {
      this.events[keydown] = [];
    }
    this.events[keydown].push(func);
    return {
      unsubscribe: () => {
        this.events[keydown] = this.events[keydown].filter((e) => e !== func);
      },
    };
  }

    public emit(keydown: string, ...args: any[]) {
    if (this.events[keydown]) {
      this.events[keydown].forEach((func) => func(...args));
    }
  }    
        
}

    
   