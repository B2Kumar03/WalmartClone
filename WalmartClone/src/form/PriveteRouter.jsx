import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext/AuthProvider'

export const PriveteRouter = ({chidren}) => {
    const {auth}=useContext(AuthContext)

    if(auth){
        return <>
        {chidren}
    </>
    }
  
}
