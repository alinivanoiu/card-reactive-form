import { FormControl } from '@angular/forms';
export class DateFormControl extends FormControl {
  setValue(value: string | null, options: any) {
    if (!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.length == 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
    } else if (value.length > 5) {
      super.setValue(value.substring(0, 5), {
        ...options,
        emitModelToViewChange: true,
      });
    } else {
      super.setValue(value, { ...options, emitModelToViewChange: true });
    }
  }
}
