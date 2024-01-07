import React, { useState } from 'react'
import ScheduleFormContext from './SchedulemessageForm'

const ScheduleFormProvider = ({children}) => {
    const [ScheduleFormVis,setScheduleFormVis] =useState(false);
  return (
    <ScheduleFormContext.Provider value={{ScheduleFormVis,setScheduleFormVis}}>
        {children}
    </ScheduleFormContext.Provider>
  )
}

export default ScheduleFormProvider