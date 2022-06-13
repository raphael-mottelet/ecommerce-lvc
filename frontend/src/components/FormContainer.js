import React from 'react'

function FormContainer({children}) {
  return (
      <div>
          <div className='justify-content-md-center'>
              <div xs={12} md={6}>
              {children}
              </div>
          </div>
      </div>
  )
}

export default FormContainer