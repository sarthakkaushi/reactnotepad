import React, { Component } from 'react'
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    
  } from 'react-share';
export default class Share extends Component {
    render() {
        const shareUrl = this.props.url
        return (
            <div>
                <FacebookShareButton url={shareUrl} />
                <WhatsappShareButton url={shareUrl} />
                <PinterestShareButton url={shareUrl} />
                <TelegramShareButton url={shareUrl} />
                <LinkedinShareButton url={shareUrl} />

            </div>
        )
    }
}
