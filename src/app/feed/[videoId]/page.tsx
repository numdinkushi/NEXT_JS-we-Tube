import React from 'react'

interface SingleVideoPageParams {
    params: Promise<{videoId: string}>
}

const SingleVideoPage = async ({params} : SingleVideoPageParams) => {
    const {videoId} = await params;
  return (
    <div>SingleVideoPage {videoId} </div>
  )
}

export default SingleVideoPage