import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'

import {RegisterComponent} from 'src/app/auth/components/register/register.component'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {reducers} from 'src/app/auth/store/reducers'
import {AuthService} from 'src/app/auth/services/auth.service'
import {RegisterEffect} from 'src/app/auth/store/effects/register.effect'
import {BackendErrorMessagesModule} from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module'
import {PersistanceService} from 'src/app/shared/services/persistance.service'

const routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessagesModule
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistanceService]
})
export class AuthModule {}
