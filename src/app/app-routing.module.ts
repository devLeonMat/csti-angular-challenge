import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./views/layout/layout.module').then(m => m.LayoutModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./views/modules/auth/auth.module').then(m => m.AuthModule)
    },
    {path: 'not-found', pathMatch: 'full', loadChildren: () => import('./views/modules/not-found/not-found.module').then(m=>m.NotFoundModule)},
    {path: '**', redirectTo: 'not-found'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
