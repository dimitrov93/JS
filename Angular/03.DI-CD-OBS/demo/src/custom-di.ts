interface ClassProvider {
    provide: any;
    useClass?: any;
  }
  
  interface ValueProvider {
    provide: any;
    useValue: any;
  }
  
  type Provider = ClassProvider | ValueProvider;
  
  const injector = {
    collection: new Map(),
    instances: new Map(),
    provide(provider: Provider) {
      this.collection.set(provider.provide, provider);
    },
    get(key: any, defaultValue?: any): any {
      const provider = this.collection.get(key);
      if (!provider) {
        if (defaultValue) {
          return defaultValue;
        }
        throw new Error('Value not found in injector');
      }
      if ((provider as ValueProvider).useValue) {
        return (provider as ValueProvider).useValue
      }
  
      if ((provider as ClassProvider).useClass) {
        let instance = this.instances.get(provider.provide)
        if (instance) {
          return instance
        }
        instance = new (provider as ClassProvider).useClass(this);
      }
      // return provider;
    },
  };
  type Injector = typeof injector;
  
  const amount = Symbol('Amount');
  const state = Symbol('State')
  
  class Wallet {
    private amount: number;
    // constructor(private amount: number, private test: string) {}
    constructor(injector: Injector) {
      this.amount = injector.get(amount, 0);
      const _state = injector.get(state)
      _state['someProp'] = 100;
    }
  }
  class Person {
    wallet: Wallet;
    // constructor(private wallet: Wallet) {}
    constructor(injector: Injector) {
      this.wallet = injector.get(Wallet);
    }
  }
  
  class Employee {
    wallet: Wallet;
    constructor(injector: Injector) {
      this.wallet = injector.get(Wallet);
      const _state = injector.get(state)
      _state['someProp'] ++;
  
    }
  }
  
  injector.provide({provide: Wallet, useClass: Wallet});
  injector.provide({provide: amount, useClass: 2000});
  injector.provide({provide: state, useClass: {}});
  
  // const w = new Wallet(200, 'das');
  // const p = new Person(w)
  
  
  const w = new Wallet(injector);
  const p = new Person(injector)
  const e = new Employee(injector)
  