import type { InputHTMLAttributes } from 'react';
import { Checkbox } from '@mui/material';

// Module Types
export interface TaskListCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export const TaskListCheckbox = (props: TaskListCheckboxProps) => {
  const { type, checked, ...otherProps } = props;

  if (type !== 'checkbox') {
    return <input type={type} checked={checked} {...otherProps} />;
  }

  return (
    <Checkbox
      checked={!!checked}
      size='small'
      disableRipple
      inputProps={{ readOnly: true }}
      sx={{ p: 0, mr: 1, verticalAlign: 'text-bottom' }}
    />
  );
};
