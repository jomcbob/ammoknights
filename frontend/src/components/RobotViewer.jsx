
import { useState } from 'react'

function RobotViewer() {
  const [active, setActive] = useState(false)

  return (
      <div style={{
        position: 'relative',
        width: '100%',
        height: '85vh'
      }}>
        <iframe
          className="vecariaCadTool"
          src="https://app.twinworks.com/viewer?productId=1950&procedureId=3520&publish=public"
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid #303030',
            borderRadius: '12px',
            backgroundColor: '#080808',
            pointerEvents: active ? 'auto' : 'none',
            display: 'block',
            boxSizing: 'border-box'
          }}
          loading="lazy"
          title="Vecaria tool"
        />

        {!active && (
          <div
            onClick={() => setActive(true)}
            style={{
              position: 'absolute',
              inset: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '12px'
            }}
          >
            <span style={{
              backdropFilter: 'blur(10px)',
              padding: '15px 25px',
              borderRadius: '12px',
              background: 'rgba(0,0,0,0.4)'
            }}>
              Click to interact with 3D viewer
            </span>
          </div>
        )}

        {active && (
          <button
            onClick={() => setActive(false)}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              zIndex: 2,
              padding: '10px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Exit 3D viewer
          </button>
        )}
      </div>
  )
}

export default RobotViewer
