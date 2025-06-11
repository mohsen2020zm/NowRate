import './RateListSkeleton.css'
import RateSkeleton from './RateSkeleton/RateSkeleton' 

export default function RateListSkeleton() {
  return (
    <>
    <div className="skeleton-main-div">
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
        <RateSkeleton />
    </div>
    <div className="skeleton-add-more-btn-div">
        <button></button>
    </div>
    </>
  )
}
