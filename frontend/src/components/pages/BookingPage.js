import React from 'react'

import Heading from '../sections/BookingsSection/Heading';
import ReservationForm from '../sections/BookingsSection/BookingForm';
import {useReducer} from 'react';
import {fetchAPI} from '../../bookingsAPI'

function BookingPage() {

function updateTimes(date) {
        return (
            fetchAPI(date)
        );
}
const output = fetchAPI(new Date());

const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
        <Heading/>
        <ReservationForm availableTimes={availableTimes} updateTimes={dispatch}/>
    </>
  )
}

export default BookingPage