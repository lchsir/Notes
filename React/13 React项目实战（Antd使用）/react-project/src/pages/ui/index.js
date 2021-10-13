import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

export default memo(function index(props) {
    console.log(props)
    const { route } = props
    return (
        <div className='ui-wrap'>
            {renderRoutes(route.routes)}
        </div>
    )
})
