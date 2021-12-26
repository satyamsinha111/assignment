import { CanVisitProtectedPageGuard } from './guards/can-visit-protected-page.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanVisitLoginPageGuard } from './guards/can-visit-login-page.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'posts',
    canActivate: [CanVisitProtectedPageGuard],
    loadChildren: () =>
      import('./pages/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'photo-album',
    canActivate: [CanVisitProtectedPageGuard],
    loadChildren: () =>
      import('./pages/photo-album/photo-album.module').then(
        (m) => m.PhotoAlbumModule
      ),
  },
  {
    path: 'photo-detail-page',
    canActivate: [CanVisitProtectedPageGuard],
    loadChildren: () =>
      import('./pages/photo-detail-page/photo-detail-page.module').then(
        (m) => m.PhotoDetailPageModule
      ),
  },
  {
    path: 'login',
    canActivate: [CanVisitLoginPageGuard],

    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
