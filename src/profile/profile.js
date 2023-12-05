import { useEffect } from 'react'
import useProfile from '../../src/hook/useProfile'
import { Link } from 'react-router-dom'
// import RiIcon from '@/components/Rilcon/Rilcon'
import ProfileComponent from './components/ProfileComponents'
// import SubscriptionComponent from "./components/SubscriptionComponent"
// import { useReloadApiKeyMutation } from '@/app/Modules/Auth/auth.api'

const Profile = () => {
  const { profile, refetchProfile } = useProfile()
  // const [reloadApi] = useReloadApiKeyMutation()

  useEffect(() => {
    const fetchData = async () => {
      await refetchProfile()
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log('profile', profile)
  }, [profile])

  return (
    <div className='max-w-[93rem] mx-auto px-2 sm:px-4 lg:px-8 md:py-4'>
      <div className='max-w-3xl w-full rounded-xl px-2 md:px-8 md:py-4 mx-auto mt-0 '>
        <div className='mt-10 md:mt-8'>
          <div className='flex space-x-4 items-center'>
            <span className='relative inline-block'>
              <img
                src='https://avatars.githubusercontent.com/u/33565557?v=4'
                alt=''
                className='w-16 h-16 rounded-full'
              />
              {/* <div className='bg-white text-sm text-dark w-5 h-5 rounded-full flex justify-center items-center absolute top-0 right-0 ring-4 ring-dark'>
                <RiIcon name='pencil-fill' />
              </div> */}
            </span>
            <div>
              <h1 className='text-xl font-semibold mb-1'>{profile?.name}</h1>
           
            </div>
          </div>
        </div>
        <div className='mt-8 bg-[#20212c] rounded-xl px-6 py-2'>
          <ProfileComponent
            title='Tên hiển thị'
            content={profile?.last_name}
            buttonContent='Sửa'
          />

          <ProfileComponent title='Username' content={profile?.username} />
        </div>
        <div className='mt-4 bg-[#20212c] rounded-xl'>
        </div>
        <div className='mt-6 flex justify-center'>
          <Link
            to='/logout'
            className='inline-block bg-[#272833] rounded-xl px-8 py-3 opacity-90 hover:opacity-100'
          >
            Đăng xuất
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
