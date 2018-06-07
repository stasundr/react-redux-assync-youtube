import React, { Component } from 'react';

class Video extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.link && nextProps.link !== this.props.link)
	  	if(typeof window.Player.loadVideoById == 'function') 
	  		(window.Player).loadVideoById(nextProps.link);
	}

	componentWillMount() {
		if (!window.loadYT) {
	    window.loadYT = new Promise((resolve) => {
	      const tag = document.createElement('script')
	      tag.src = 'https://www.youtube.com/iframe_api'
	      const firstScriptTag = document.getElementsByTagName('script')[0]
	      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
	      window.onYouTubeIframeAPIReady = () => resolve(window.YT)
	    });
	  }

	  (window.loadYT).then((YT) => {
	    window.Player = new YT.Player(this.youtubePlayerAnchor, {
	      height: 450,
	      width: 900,
	      videoId: this.props.link,
	      events: {
	        onStateChange: this.onPlayerStateChange.bind(this)
	      }
	    })
	  });
	}

	onPlayerStateChange(e) {
    if (typeof this.props.onStateChange === 'function') {
      this.props.onStateChange(e)
    }
  }

	render() {
		return(
			<section className='youtubeComponent-wrapper'>
        <div ref={(r) => { this.youtubePlayerAnchor = r }} />
      </section>
		);
	}
}

export default Video;