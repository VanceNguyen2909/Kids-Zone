import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchKey } from '../../src/App/Modules/Search/search.slice'


const useProfile = () => {
  //@ts-ignore
  const profile = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const refetchProfile = async () => {
    // await getProfile()
    try {
      const payload = await profile(1).unwrap()
      // console.log('fulfilled', payload)
      // console.log('fulfilled data', data)
      return payload
    } catch (error) {
      console.error('rejected', error)
    }
  }
  useEffect(() => {
    // if (data == null || data === undefined) return
    // dispatch(setSearchKey(data.data))
  }, [ dispatch])

  const getAndRefetchProfile = async () => {
    //@ts-ignore
    // await getProfile()
    return profile
  }

  return { profile, refetchProfile, getAndRefetchProfile }
}

export default useProfile
