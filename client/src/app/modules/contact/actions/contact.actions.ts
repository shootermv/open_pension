import { Action } from '@ngrx/store';

import { Contact } from '../models/contact.model';

export enum ContactActionTypes {
  SEND_NEW_CONTACT = '[Contact] Send New Contact',
  SEND_NEW_CONTACT_SUCCESS = '[Contact] Send New Contact Success',
  SEND_NEW_CONTACT_FAILED = '[Contact] Send New Contact Failed',
  RESET_FORM_SUBMITION = '[Contact] Reset Form Submition State',
}

export class SendNewContactAction implements Action {
  readonly type = ContactActionTypes.SEND_NEW_CONTACT;

  constructor(public payload: Contact) { }
}

export class SendNewContactSuccessAction implements Action {
  readonly type = ContactActionTypes.SEND_NEW_CONTACT_SUCCESS;

  constructor(public payload: Contact) { }
}

export class SendNewContactFailedAction implements Action {
  readonly type = ContactActionTypes.SEND_NEW_CONTACT_FAILED;

  constructor(public payload: Contact) { }
}

export class ResetFormSubmitionStatus implements Action {
  readonly type = ContactActionTypes.RESET_FORM_SUBMITION;

  constructor() { }
}

export type ContactActions
  = SendNewContactAction
  | SendNewContactSuccessAction
  | SendNewContactFailedAction
  | ResetFormSubmitionStatus;
