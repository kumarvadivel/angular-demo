import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoreInfoComponent} from './components/more-info/more-info.component';
import {BorrowerEmployeeinfoComponent} from './components/employment-details/borrower-employeeinfo.component';
import {PersonalDetailsComponent} from './components/personal-details/personal-details.component';

const routes: Routes = [
    {
        path: 'more-info', component: MoreInfoComponent
    },
    {
        path: 'personal-details', component: PersonalDetailsComponent
    },
    {
        path: 'employment-details', component: BorrowerEmployeeinfoComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductDeclarationRoutingModule {
}
