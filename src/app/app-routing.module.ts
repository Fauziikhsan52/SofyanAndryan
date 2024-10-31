import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';
import { WisataReligiComponent } from './wisata-religi/wisata-religi.component';
import { LayananComponent } from './layanan/layanan.component';
import { HubungiKamiComponent } from './hubungi-kami/hubungi-kami.component';
import { WisataMenarikComponent } from './wisata-menarik/wisata-menarik.component';

const routes: Routes = [
  { path: '', redirectTo: '/beranda', pathMatch: 'full' },
  { path: 'beranda', component: BerandaComponent },
  { path: 'wisata-religi', component: WisataReligiComponent },
  { path: 'layanan', component: LayananComponent },
  { path: 'hubungi-kami', component: HubungiKamiComponent },
  { path: 'wisata-menarik', component: WisataMenarikComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'version',
        loadChildren: () =>
            import('modules/app-common/app-common-routing.module').then(
                m => m.AppCommonRoutingModule
            ),
    },
    {
        path: '',
        loadChildren: () =>
            import('modules/blog/blog-routing.module').then(m => m.BlogRoutingModule),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
