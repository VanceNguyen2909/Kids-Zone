import React from 'react'
import PropTypes from 'prop-types'

const ProfileComponent = ({ title, content, buttonContent, onClick }) => {
  return (
    <div className='py-4 flex justify-between items-center text-white'>
      <div>
        <div className='text-sm text-[#ff7128]'>{title}</div>
        <div className='mt-1 text-lg'>{content}</div>
      </div>
      {buttonContent && (
        <button
          onClick={() => {
            if (onClick) onClick()
          }}
          className='rounded-lg text-sm bg-[#414153] px-5 py-2 bg-opacity-80 hover:bg-opacity-100'
        >
          {buttonContent}
        </button>
      )}
    </div>
  )
}

ProfileComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonContent: PropTypes.string,
  onClick: PropTypes.func
}

export default ProfileComponent
