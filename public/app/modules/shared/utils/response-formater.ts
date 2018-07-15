import { Observable } from 'rxjs/Observable';
import { catchError, map, pluck } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';

export const errorHandler = (observer: Observable<any>) => observer
  .pipe(catchError((error: any) => _throw(error.error)));

export const pluckAndCatch = (observer: Observable<any>) => observer
  .pipe(
    map(res => {
      return { data: { ...res } };
    }),
    pluck('data'),
    catchError(error => _throw(error.error))
  );
