import React from 'react'
import { createDevTools } from 'redux-devtools'
import DiffMonitor from 'redux-devtools-diff-monitor'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor toggleVisibilityKey="H"
               changePositionKey="J">

    <LogMonitor theme='tomorrow' />
  </DockMonitor>
)
