import React from 'react'

const TodoListFooter = () => {
  // Strings
  const strings = {
    copyright: '© 2021 Copyright:',
    website: 'clearpoint.digital'
  }

  return (
    <footer className='page-footer font-small teal pt-4'>
      <div className='footer-copyright text-center py-3'>
        {strings.copyright}
        <a href={`https://${strings.website}`} target='_blank' rel='noreferrer'>
          {strings.website}
        </a>
      </div>
    </footer>
  )
}

export default TodoListFooter
