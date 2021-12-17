import React from 'react'
import useProtectedPage from '../hooks/useProtectedPage'

const Post = (props) => {
    useProtectedPage()
    console.log(props.id)
    return (
        <div>
            <h1>PostPage</h1>
        </div>
    )
}

export default Post