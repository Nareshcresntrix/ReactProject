
import React, { useState } from 'react';
import { format } from 'date-fns';
import Button from '@mui/material/Button';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
    usePickerContext,
    useParsedFormat,
    useSplitFieldProps
} from '@mui/x-date-pickers';

function ButtonField(props) {
    const { forwardedProps } = useSplitFieldProps(props, 'date');
    const pickerContext = usePickerContext();
    const parsedFormat = useParsedFormat();

    const valueStr = pickerContext.value
        ? format(pickerContext.value, pickerContext.fieldFormat || 'MM/dd/yyyy')
        : parsedFormat;

    return (
        <Button
            {...forwardedProps}
            variant="outlined"
            size="small"
            startIcon={<CalendarTodayRoundedIcon fontSize="small" />}
            sx={{ minWidth: 'fit-content' }}
            ref={pickerContext.triggerRef}
            onClick={() => pickerContext.setOpen((prev) => !prev)}
        >
            {pickerContext.label || valueStr}
        </Button>
    );
}


export default function CustomDatePicker() {
    const [value, setValue] = useState(new Date('2023-04-17'));

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                value={value}
                label={value ? format(value, 'MMM dd, yyyy') : null}
                onChange={(newValue) => setValue(newValue)}
                slots={{ field: ButtonField }}
                slotProps={{
                    nextIconButton: { size: 'small' },
                    previousIconButton: { size: 'small' },
                }}
                views={['day', 'month', 'year']}
            />
        </LocalizationProvider>
    );
}