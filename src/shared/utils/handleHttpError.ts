import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";

export function handleHttpError(response: HttpErrorResponse) {
  if(response.status === 0 || response.status < 500) {
    console.log(`Client-side error (${response.status}): `, response.error)
  } else {
    console.log(`Server-side error: (${response.status})`, response.error)
  }
  let errors = []
  if(response.error.type == 'ValidationFailure') {
    response.error.errors.forEach((item: {errorMessage: string, propertyName: string}) => {
      errors.push(item.errorMessage)
    })
  } else {
    errors.push('Something went wrong...')
  }

  return throwError(() => errors)
}
