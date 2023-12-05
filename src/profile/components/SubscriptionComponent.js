import React from 'react'
import PropTypes from 'prop-types'

const SubscriptionComponent = ({ title, content, buttonContent }) => {
  return (
    <div className='py-4 flex justify-between items-center'>
      <div>
        <div className='text-sm text-slate-400'>{title}</div>
        <div className='mt-0 text-lg text-white'>{content}</div>
      </div>
      <button className='rounded-lg text-sm bg-gradient-to-r from-primary to-[#FD7F2C] px-5 py-2'>
        {buttonContent}
      </button>
    </div>
  )
}

SubscriptionComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired
}

export default SubscriptionComponent
