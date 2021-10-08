import React from 'react'

const SocialIcons = () => {
    return (
        <div className="absolute-right fixed space-y-1 -right-6">
            <div className="bg-gray p-2 rounded-l-lg ">
                <img src="/static/icons/instagram.png" width="25px" />
            </div>
            <div className="bg-gray p-2 rounded-l-lg">
                <img src="/static/icons/facebook.png" width="25px" />
            </div>
            <div className="bg-gray p-2 rounded-l-lg">
                <img src="/static/icons/linkedin.png" width="25px" />
            </div>
            <div className="bg-gray p-2 rounded-l-lg">
                <img src="/static/icons/pinterest.png" width="25px" />
            </div>
        </div>
    )
}

export default SocialIcons
