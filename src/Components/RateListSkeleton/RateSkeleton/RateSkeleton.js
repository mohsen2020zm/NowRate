import './RateSkeleton.css'

export default function RateSkeleton() {
  return (
    <div className='skeleton-rate-main-div'>
        <div className='skeleton-rate-details'>
            <div className='skeleton-rate-img'></div>
            <div className='skeleton-rate-name'></div>
        </div>
        <div className='skeleton-rate-number'></div>
    </div>
  )
}
