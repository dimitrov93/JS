import { CommonModule } from "@angular/common";
import { Component, Inject, ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";


@Component({ 
    selector: 'app-test', 
    template: `<div>Hello</div>` 
})
export class TestCmp {
    constructor(@Inject('Test') value: string) {
        console.log(value);
    }
}

@NgModule({
    declarations: [
        TestCmp
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TestCmp,
        // CommonModule -> We can also add whole modules here and everything that is inside tehe exports will be appended here
    ]
  })

export class MyModule { 

    static forRoot(routes: Routes): ModuleWithProviders<RouterModule> {
        return {
            ngModule: RouterModule,
            providers: [
                {
                    provide: 'Main_rOUTES',
                    useValue: routes
                }
            ]
        }
    };

    static forChildren(routes: Routes): ModuleWithProviders<RouterModule> {
        return {
            ngModule: RouterModule,
            providers: [
                {
                    provide: 'Child_routes',
                    useValue: routes
                }
            ]
        }
    }



    static withProviders(): ModuleWithProviders<MyModule> {
        return {
            ngModule: MyModule,
            providers: [
                {
                    provide: 'Test',
                    useValue: {},
                }
            ],
        }
    }
}


@NgModule({
    declarations: [
        // ...
    ],
    imports: [
        // ...

    ],
    providers: [],
    bootstrap: [AppComponent],
  })

  class OtherModule {

  }